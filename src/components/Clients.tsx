const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-[#5BC0DE] mb-2">
            Alguns dos
          </h2>
          <h3 className="text-3xl md:text-4xl font-light text-[#5BC0DE]">
            nosso clientes
          </h3>
        </div>

        {/* Logos dos clientes */}
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
          <div className="text-3xl font-bold text-blue-700">copra</div>
          <div className="text-2xl font-bold text-gray-800">SANTOS FC</div>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-bold">H</span>
          </div>
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
            <span className="text-white text-xs">ROVAG</span>
          </div>
          <div className="text-2xl font-bold text-amber-700">Regius</div>
          <div className="text-xl font-bold text-red-600">Olivio</div>
        </div>

        {/* Blog/WhatsApp posts */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-green-500 rounded-lg p-6 text-white text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Como enviar mensagens no WhatsApp</h4>
            <p className="text-sm opacity-90">sem adicionar a pessoa na agenda</p>
            <div className="mt-4 text-xs opacity-75">
              <p>contato66805 • 1 de nov. de 2020</p>
              <p>1 min de leitura • 191 visualizações</p>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-6 text-white text-center">
            <div className="mb-4">
              <div className="text-6xl">👨</div>
            </div>
            <h4 className="font-bold text-lg mb-2">Novembro AZUL</h4>
            <div className="mt-4 text-xs opacity-75">
              <p>contato66805 • 1 de nov. de 2020</p>
              <p>2 min de leitura • 13 visualizações</p>
            </div>
          </div>

          <div className="bg-pink-500 rounded-lg p-6 text-white text-center">
            <div className="mb-4">
              <div className="text-6xl">🎀</div>
            </div>
            <h4 className="font-bold text-lg mb-2">OUTUBRO ROSA</h4>
            <p className="text-sm opacity-90 mb-2">TUDO O QUE VOCÊ PRECISA SABER SOBRE A CAMPANHA!</p>
            <div className="mt-4 text-xs opacity-75">
              <p>Easy Print • 10 de out. de 2020</p>
              <p>11 min de leitura • 38 visualizações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
