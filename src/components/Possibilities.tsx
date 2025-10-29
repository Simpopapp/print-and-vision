const Possibilities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/EasyPrint_public/servicos/landscape/serv_01.jpg"
              alt="Infinitas possibilidades"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-primary">
              Infinitas possibilidades em
              <br />
              impressão e comunicação visual.
            </h2>
            <p className="font-display text-xl text-gray-600 mb-8">
              Deixe sua criatividade fazer a diferença
            </p>

            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Valorize marcas, crie ambientes, produza materiais inovadores,
                comunique-se com o seu público de maneira original e envolvente.
                Impressione usando novas tecnologias, processos, formatos e
                matérias-primas.
              </p>

              <p>
                Nós da Easy Print somos o parceiro certo para quem não abre mão
                da qualidade e agilidade, estamos no mercado mostrando o que
                somos capaz de fazer.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-medium hover:brightness-95 transition-colors"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Possibilities;
