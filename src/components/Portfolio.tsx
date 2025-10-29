import { Whatsapp } from "@/components/Icons";

const PortfolioTextCard = ({ title, content, whatsApp = false }) => (
  <div className="bg-gray-100 p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
    {whatsApp && (
      <div className="mt-4">
        <Whatsapp className="h-8 w-8 text-green-500" />
      </div>
    )}
  </div>
);

const PortfolioImageCard = ({ src, alt = "", className = "" }) => (
  <div className={`bg-gray-200 ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-6 gap-4 h-[1200px]">
          {/* Column 1 */}
          <div className="row-span-2">
            <PortfolioTextCard
              title="Desde simples ao extravagante"
              content="Otimize suas campanhas promocionais em PDV e eventos com uma linha completa de soluções. Diversas opções de peças e materiais para compor seu orçamento na medida, com respeito aos prazos e qualidade total."
              whatsApp
            />
          </div>
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Hotel" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Stand" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Capsules" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Subway" className="row-span-1" />

          {/* Column 2 */}
          <PortfolioImageCard src="https://via.placeholder.com/300x400?text=Brochure" className="row-span-2" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Banner" className="row-span-1" />
          <div className="row-span-2">
            <PortfolioTextCard
              title="Projeto Especial"
              content="Para fazer bonito em peças personalizadas, instalações internas e externas, iluminadas e em altura, como lonas, empenas, letra caixa e todo tipo de fachada, conte com a Easy Print e sua diversidade de acabamentos e materiais duráveis. Segurança, qualidade e tecnologia da produção à instalação."
              whatsApp
            />
          </div>
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Sorveteria" className="row-span-1" />

          {/* Column 3 */}
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Books" className="row-span-1" />
          <PortfolioTextCard title="Dúvidas fale com a gente" whatsApp />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Envelopes" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Ortobom" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Bosch" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Adesivo" className="row-span-1" />

          {/* Column 4 */}
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Fridge" className="row-span-1" />
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Invitation" className="row-span-1" />
          <div className="row-span-1">
            <PortfolioTextCard
              title="Temos a solução perfeita para sua empresa"
              whatsApp
            />
          </div>
          <PortfolioImageCard src="https://via.placeholder.com/300x200?text=Building" className="row-span-1" />
          <div className="row-span-2">
            <PortfolioTextCard
              title="Conte com a nossa equipe"
              content="Nossa equipe vai ajudar aproveitar melhor sua verba"
              whatsApp
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
