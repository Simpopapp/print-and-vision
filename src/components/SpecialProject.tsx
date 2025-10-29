const SpecialProject = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-primary">
              Projeto Especial
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Um case de sucesso: Bosch
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget felis eget nunc lobortis.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/EasyPrint_public/home/hero/hero_01.png"
              alt="Projeto Especial"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialProject;
