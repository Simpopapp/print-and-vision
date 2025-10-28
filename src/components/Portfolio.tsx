const Portfolio = () => {
  // Simulando o grid de imagens com placeholders coloridos
  const portfolioItems = [
    { title: "Apostilas", bg: "bg-amber-100", icon: "📚" },
    { title: "Cartões", bg: "bg-blue-100", icon: "💳" },
    { title: "Impressos", bg: "bg-gray-100", icon: "📄" },
    { title: "Displays", bg: "bg-red-100", icon: "🎯" },
    { title: "Letreiro Hotel", bg: "bg-yellow-900", icon: "🏨" },
    { title: "Convites", bg: "bg-blue-200", icon: "💌" },
    { title: "Blocos", bg: "bg-gray-200", icon: "📋" },
    { title: "Papelaria", bg: "bg-white", icon: "✉️" },
    { title: "Uniforme", bg: "bg-blue-900", icon: "👔" },
    { title: "Caixas", bg: "bg-gray-300", icon: "📦" },
    { title: "Cartões Rosa", bg: "bg-pink-200", icon: "💝" },
    { title: "Tags", bg: "bg-amber-50", icon: "🏷️" },
    { title: "Helicópteros", bg: "bg-yellow-500", icon: "🎨" },
    { title: "Projeto Especial", bg: "bg-gray-400", icon: "⭐" },
    { title: "Acrílico", bg: "bg-blue-50", icon: "🔷" },
    { title: "Letras 3D", bg: "bg-red-500", icon: "🔴" },
    { title: "Fachada", bg: "bg-green-500", icon: "🏪" },
    { title: "Outdoor", bg: "bg-blue-300", icon: "🏢" },
    { title: "Loja Interior", bg: "bg-pink-300", icon: "🎀" },
    { title: "Produtos", bg: "bg-gray-200", icon: "📦" },
    { title: "Adesivo Frota", bg: "bg-blue-600", icon: "🚐" },
    { title: "Escritório", bg: "bg-gray-800", icon: "🏢" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Seção de texto à esquerda */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-light text-gray-800">
              Desde<br />simples<br />ao extravagante
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Otimize suas campanhas promocionais em PDV e eventos com uma linha completa de soluções. 
              Diversas opções de peças e materiais para compor seu orçamento na medida, com respeito aos 
              prazos e qualidade total.
            </p>
            <button className="text-[#25D366] hover:text-[#20BA5A] flex items-center gap-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </div>

          {/* Grid de imagens */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} aspect-square rounded flex items-center justify-center text-4xl hover:scale-105 transition-transform cursor-pointer shadow-sm`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção "Conte com nossa equipe" */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 text-white">
              <h3 className="text-3xl font-light mb-4">
                Conte com a<br />nossa<br />equipe
              </h3>
              <p className="text-white/90 mb-6">
                Nossa equipe vai ajudar<br />aproveitar melhor sua verba
              </p>
              <button className="text-[#25D366] hover:text-[#20BA5A]">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
            <div className="h-64 md:h-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
