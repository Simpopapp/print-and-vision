import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image com overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${heroImage})`
        }}
      />
      
      {/* Gradient overlay na parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#E91E63]/50 to-[#E91E63]"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-4 drop-shadow-lg">
            Você pensa e a gente produz.
          </h1>
          <p className="text-3xl md:text-4xl font-light drop-shadow-lg">
            simples assim.
          </p>
          <div className="mt-8">
            <a 
              href="#contact"
              className="inline-block bg-white text-gray-800 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
