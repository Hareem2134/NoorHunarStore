import Header from "@/components/header";
import Footer from "@/components/footer";
import CartPreview from "@/components/cart-preview";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What materials are used in your Islamic art pieces?",
    answer: "We use premium materials including high-quality canvas, handmade papers, gold leaf, natural pigments, and sustainable woods. Each piece is crafted with materials that ensure longevity and preserve the beauty of the artwork for years to come."
  },
  {
    question: "Are your calligraphy pieces authentic Arabic calligraphy?",
    answer: "Yes, all our Arabic calligraphy is created by skilled calligraphers who are well-versed in traditional Arabic scripts including Kufic, Thuluth, Naskh, and Diwani. We ensure accuracy in both the artistic style and religious content."
  },
  {
    question: "Do you offer custom Islamic art commissions?",
    answer: "Absolutely! We offer custom calligraphy, personalized dua cards, and bespoke frame designs. Contact us with your requirements, and our artists will work with you to create something unique. Custom orders typically take 2-4 weeks depending on complexity."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days within the US and 10-14 business days internationally. Express shipping options are available for 2-3 business days. All items are carefully packaged to ensure safe delivery."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unused items in original condition. Custom or personalized items cannot be returned unless there's a manufacturing defect. Return shipping costs are covered by the customer unless the item was damaged or defective."
  },
  {
    question: "Are the Quranic verses and duas accurate?",
    answer: "Yes, all Quranic verses and Islamic content are verified by Islamic scholars for accuracy. We take great care to ensure proper Arabic text, correct translations, and appropriate context for each piece."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! International shipping rates are calculated at checkout based on destination and package weight. Some countries may have additional customs fees that are the responsibility of the customer."
  },
  {
    question: "How should I care for my Islamic art pieces?",
    answer: "Keep artwork away from direct sunlight and humid environments. Dust gently with a soft, dry cloth. For framed pieces, avoid hanging in areas with temperature fluctuations. We include care instructions with every purchase."
  },
  {
    question: "Are your frames ready to hang?",
    answer: "Yes, all framed pieces come with hanging hardware included and are ready to display immediately upon arrival. We also provide hanging instructions and tips for best placement."
  },
  {
    question: "Do you offer bulk discounts for Islamic institutions?",
    answer: "Yes, we offer special pricing for mosques, Islamic schools, and community centers. Contact us directly with your requirements for a custom quote. We're honored to support Islamic institutions worldwide."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for larger orders. All transactions are secured with SSL encryption for your safety."
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you'll receive a tracking number via email once your order ships. You can track your package through our website or directly with the shipping carrier. We also send updates on order status throughout the process."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-primary to-emerald-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Find answers to common questions about our Islamic art, shipping, and services
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-gray-600 text-lg">
                Can't find what you're looking for? <a href="/contact" className="text-emerald-primary hover:underline font-medium">Contact us</a> and we'll be happy to help.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-md border-0"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger 
                    className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg font-medium text-emerald-primary"
                    data-testid={`faq-question-${index}`}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 pb-4 text-gray-600 leading-relaxed"
                    data-testid={`faq-answer-${index}`}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Still have questions section */}
            <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="font-playfair text-2xl font-bold text-emerald-primary mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our customer service team is here to help you with any questions about Islamic art, 
                custom orders, or anything else you need to know.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-emerald-primary text-white px-6 py-3 rounded-lg hover:bg-emerald-dark transition-colors duration-200 font-medium"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:info@noor-e-hunar.com" 
                  className="border border-emerald-primary text-emerald-primary px-6 py-3 rounded-lg hover:bg-emerald-primary hover:text-white transition-colors duration-200 font-medium"
                  data-testid="button-email-us"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <CartPreview />
    </div>
  );
}