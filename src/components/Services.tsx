import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Infinitas possibilidades em impressão e comunicação visual.
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Deixe sua criatividade fazer a diferença
          </p>
          <p className="text-muted-foreground">
            Valorize marcas, crie ambientes, produza materiais inovadores, comunique-se com o seu público 
            de maneira original e envolvente. Impressione usando novas tecnologias, processos, formatos e matérias-primas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">📄</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Impressão Digital</h3>
            <p className="text-muted-foreground">
              Alta qualidade e rapidez em impressões de documentos, folders, cartões e muito mais.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Comunicação Visual</h3>
            <p className="text-muted-foreground">
              Fachadas, letreiros luminosos, adesivos e painéis que destacam sua marca.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">🎨</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Design Gráfico</h3>
            <p className="text-muted-foreground">
              Criação de identidades visuais únicas que comunicam a essência do seu negócio.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">📦</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Materiais Promocionais</h3>
            <p className="text-muted-foreground">
              Brindes, displays e materiais para PDV que impulsionam suas vendas.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">🖼️</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Grande Formato</h3>
            <p className="text-muted-foreground">
              Banners, lonas, painéis e impressões em grandes dimensões com qualidade superior.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-6xl">✂️</div>
            </div>
            <h3 className="text-xl font-bold mb-2">Acabamentos Especiais</h3>
            <p className="text-muted-foreground">
              Verniz, relevo, corte especial e outros acabamentos que agregam valor.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="shadow-lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
