const Work = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/EasyPrint_public/servicos/landscape/serv_01.jpg"
              alt="Trabalho"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-primary">
              Trabalho
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Produtos aplicados em contextos reais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget felis eget nunc lobortis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
