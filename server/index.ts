import express, { type Request, Response, NextFunction } from "express";
import dotenv from "dotenv"; // Import dotenv to manage environment variables
import cors from "cors";     // Import cors to handle cross-origin requests
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Load environment variables from the .env file into process.env
// This should be at the very top
dotenv.config();

const app = express();

// --- NEW: Enable CORS (Cross-Origin Resource Sharing) ---
// This is crucial for security and to allow your frontend to make API calls
// to the backend, especially when hosted on different domains (like on Vercel).
// It's also important for payment gateway callbacks.
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5000",
}));

// Middlewares to parse JSON and URL-encoded data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Your existing custom logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});


// Main async function to setup and start the server
(async () => {
  // Register all API routes from routes.ts
  const server = await registerRoutes(app);

  // Your existing custom error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    console.error("An error occurred:", err.stack); // Log the full error for debugging
    res.status(status).json({ message });
  });

  // Vite middleware for development or serving static files for production
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = parseInt(process.env.PORT || '5000', 10);

  // Start the server
  server.listen(port, "127.0.0.1", () => {
    log(`serving on port ${port}`);
  });
})();