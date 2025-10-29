const Banners = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Banners */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div
            className="bg-cover bg-center rounded-lg p-6 text-white text-center flex flex-col justify-end"
            style={{
              backgroundImage: `url(/EasyPrint_public/home/hero/hero_03.png)`,
            }}
          >
            <h4 className="font-bold text-lg mb-2">
              Como enviar mensagens no WhatsApp
            </h4>
            <p className="text-sm opacity-90">
              sem adicionar a pessoa na agenda
            </p>
          </div>
          <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
            <div className="mb-4">
              <div className="text-6xl">👨</div>
            </div>
            <h4 className="font-bold text-lg mb-2">Novembro AZUL</h4>
          </div>
          <div
            className="bg-cover bg-center rounded-lg p-6 text-white text-center flex flex-col justify-end"
            style={{
              backgroundImage: `url(/EasyPrint_public/home/hero/hero_01.png)`,
            }}
          >
            <h4 className="font-bold text-lg mb-2">OUTUBRO ROSA</h4>
            <p className="text-sm opacity-90 mb-2">
              TUDO O QUE VOCÊ PRECISA SABER SOBRE A CAMPANHA!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
