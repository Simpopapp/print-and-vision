const Portfolio = () => {
  const portfolioImages = [
    "/EasyPrint_public/galeria/quadrados/gallery_01.webp",
    "/EasyPrint_public/galeria/quadrados/gallery_02.jpg",
    "/EasyPrint_public/galeria/quadrados/gallery_03.jpg",
    "/EasyPrint_public/galeria/quadrados/gallery_04.jpg",
    "/EasyPrint_public/galeria/quadrados/gallery_05.jpg",
    "/EasyPrint_public/galeria/quadrados/gallery_06.jpg",
    "/EasyPrint_public/servicos/landscape/serv_01.jpg",
    "/EasyPrint_public/servicos/landscape/serv_02.png",
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-display text-4xl md:text-5xl font-light text-gray-800">
              Portfólio
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Confira alguns de nossos trabalhos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Portfolio image ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
