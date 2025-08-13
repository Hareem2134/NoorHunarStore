export default function IslamicQuoteSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-emerald-primary to-emerald-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative Islamic pattern background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Arabic Calligraphy */}
        <div className="font-playfair text-4xl lg:text-6xl text-gold-accent mb-8 leading-relaxed" data-testid="text-arabic-quote">
          وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ
        </div>
        
        {/* Translation */}
        <p className="text-xl lg:text-2xl text-white mb-4 font-light" data-testid="text-quote-translation">
          "And whoever relies upon Allah - then He is sufficient for him."
        </p>
        
        <p className="text-gold-accent font-medium" data-testid="text-quote-reference">
          - Quran 65:3
        </p>
      </div>
    </section>
  );
}
