const Hero = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image com overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(/EasyPrint_public/home/banner-principal/banner_02.jpg)`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center mx-auto text-white">
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h1 className="font-display text-5xl md:text-6xl font-light mb-4 drop-shadow-lg">
              Você pensa e a gente produz
            </h1>
          </div>

          <p className="font-display text-3xl md:text-4xl font-light drop-shadow-lg mt-4">
            Impressão Digital e Comunicação Visual
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:brightness-95 transition-colors shadow-lg"
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
