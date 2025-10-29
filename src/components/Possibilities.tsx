const Possibilities = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800">
            Infinitas possibilidades em
          </h2>
          <h3 className="text-4xl font-light text-primary">
            impressão e comunicação visual.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h4 className="text-2xl font-semibold text-gray-700">
              Deixe sua <span className="text-primary">criatividade fazer</span> a diferença
            </h4>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Valorize marcas, crie ambientes, produza materiais inovadores, comunique-se com o seu público de maneira original e envolvente. Impressione usando novas tecnologias, processos, formatos e matérias-primas.
            </p>
            <p>
              Nós da Easy Print somos o parceiro certo para quem não abre mão da qualidade e agilidade, estamos no mercado mostrando o que somos capaz de fazer.
            </p>
            <p>
              Nosso crescimento é fruto da inovação e da ousadia dos nossos diretores, um sentimento que contagia toda a empresa para que possamos sempre surpreender os nossos clientes, oferecendo o que há de mais moderno no segmento. O maior desafio é, junto com você, chegar às soluções mais adequadas e inteligentes, com o melhor custo-benefício.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-10 py-3 font-semibold rounded-md hover:bg-opacity-90 transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
