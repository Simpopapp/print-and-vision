const About = () => {
  return (
    <section className="py-20 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            SOBRE NÓS
          </h2>
          
          <div className="space-y-4 text-white/90 leading-relaxed">
            <p>
              A EASY PRINT SOLUÇÕES GRÁFICAS surgiu em meados do ano de 2014, na cidade de Campinas-SP, ao partir da ideia de dois jovens 
              fascinados pelo ramo gráfico, cuja experiência profissional abrangiam desde a criação de identidades visuais até a execução de 
              projetos impressos, norteados pela expectativa e necessidade de seus clientes, tendo como princípios fundamentais: Bom Atendimento, 
              Minuciosidade, Qualidade e Produtividade.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="#about"
              className="inline-block bg-transparent border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              Leia Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
