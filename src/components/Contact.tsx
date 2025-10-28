import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Solicite um orçamento sem compromisso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Solicite um orçamento</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Sobrenome</label>
                  <Input placeholder="Seu sobrenome" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Telefone</label>
                <Input type="tel" placeholder="(00) 00000-0000" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <Textarea 
                  placeholder="Digite sua mensagem aqui..." 
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Enviar
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Unidade Campinas</h4>
                  <p className="text-muted-foreground mb-2">
                    Patio Boulevard Mall<br />
                    Av. Carlos Grimaldi, 1160-1170<br />
                    Jardim Conceição, Campinas - SP
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(19) 98236-8224</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>campinas@easygr.com.br</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Unidade Vinhedo</h4>
                  <p className="text-muted-foreground mb-2">
                    Rua São Paulo, 307<br />
                    Nova Vinhedo, Vinhedo - SP
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-accent" />
                      <span>(19) 98414-5166</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>vinhedo@easygr.com.br</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Unidade Sumaré</h4>
                  <p className="text-muted-foreground mb-2">
                    Av. Eng. Jaime Pinheiro Ulhôa Cintra, 2260<br />
                    Parque Bandeirantes, Sumaré - SP
                  </p>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(19) 98236-8224</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>contato@easygr.com.br</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
