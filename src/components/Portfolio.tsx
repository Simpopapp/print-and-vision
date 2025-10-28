const Portfolio = () => {
  const portfolioItems = [
    { emoji: "📋", title: "Apostilas e Encadernação" },
    { emoji: "📱", title: "Material Digital" },
    { emoji: "🏪", title: "Fachadas Comerciais" },
    { emoji: "🎯", title: "PDV e Displays" },
    { emoji: "🏨", title: "Sinalização Hotelaria" },
    { emoji: "💌", title: "Convites Especiais" },
    { emoji: "📄", title: "Impressão Offset" },
    { emoji: "🎨", title: "Adesivos Personalizados" },
    { emoji: "🛍️", title: "Embalagens" },
    { emoji: "🎪", title: "Eventos" },
    { emoji: "📦", title: "Caixas Personalizadas" },
    { emoji: "🖼️", title: "Quadros e Placas" },
    { emoji: "🏢", title: "Letras Caixa 3D" },
    { emoji: "🚗", title: "Adesivação de Frotas" },
    { emoji: "🏗️", title: "Tapumes" },
    { emoji: "🎭", title: "Cenografia" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Desde simples ao extravagante
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl 
                       hover:shadow-xl transition-all duration-300 cursor-pointer 
                       flex flex-col items-center justify-center p-6 group
                       hover:scale-105 border-2 border-transparent hover:border-primary"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <p className="text-center font-medium text-sm group-hover:text-primary transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Conte com a nossa equipe especializada para aproveitar melhor sua verba
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
