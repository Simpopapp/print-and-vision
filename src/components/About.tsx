import { Button } from "./ui/button";
import teamImage from "@/assets/team.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              SOBRE NÓS
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                A <strong className="text-primary">EASY PRINT SOLUÇÕES GRÁFICAS</strong> surgiu em meados do ano de 2014, 
                na cidade de Campinas-SP, ao partir da ideia de dois jovens fascinados pelo ramo gráfico, 
                cuja experiência profissional abrangiam desde a criação de identidades visuais até a execução 
                de projetos impressos.
              </p>
              
              <p className="text-lg leading-relaxed">
                Norteados pela expectativa e necessidade de seus clientes, tendo como princípios fundamentais: 
                <strong className="text-primary"> Bom Atendimento, Minuciosidade, Qualidade e Produtividade</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                Nosso crescimento é fruto da inovação e da ousadia dos nossos diretores, um sentimento que 
                contagia toda a empresa para que possamos sempre surpreender os nossos clientes, oferecendo 
                o que há de mais moderno no segmento.
              </p>

              <p className="text-lg leading-relaxed">
                O maior desafio é, junto com você, chegar às soluções mais adequadas e inteligentes, 
                com o melhor custo-benefício.
              </p>

              <Button size="lg" className="mt-4">
                Leia Mais
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={teamImage} 
                  alt="Equipe Easy Print" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
