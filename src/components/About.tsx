const About = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white overflow-hidden">
      {/* Decorative lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-16">
        <Light a="left-1/4" />
        <Light a="-left-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">SOBRE NÓS</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            A EASY PRINT SOLUÇÕES GRÁFICAS surgiu em meados do ano de 2014, na cidade de Campinas-SP, a partir da ideia de dois jovens fascinados pelo ramo gráfico, cuja experiência profissional abrangia desde a criação de identidades visuais até a execução de projetos impressos, norteados pela expectativa e necessidade de seus clientes, tendo como princípios fundamentais: Bom Atendimento, Minuciosidade, Qualidade e Produtividade.
          </p>
          <a href="#" className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-700 transition-colors">
            Leia Mais
          </a>
        </div>
      </div>
    </section>
  );
};

const Light = ({ a }) => {
  return (
    <div className={`relative ${a}`}>
      <div className="w-1 h-12 bg-gray-300 mx-auto"></div>
      <div className="w-12 h-12 rounded-full bg-white opacity-20 absolute top-12 left-1/2 -translate-x-1/2"></div>
      <div className="w-20 h-20 rounded-full bg-white opacity-10 absolute top-12 left-1/2 -translate-x-1/2 blur-lg"></div>
    </div>
  )
}

export default About;
