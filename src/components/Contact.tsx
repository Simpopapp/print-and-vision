import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-[#5BC0DE] mb-2">
            Contato
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-light mb-6 text-gray-800">Solicite um orçamento</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Nome</label>
                  <Input placeholder="" className="bg-gray-50" />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">Sobrenome</label>
                  <Input placeholder="" className="bg-gray-50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Email</label>
                <Input type="email" placeholder="" className="bg-gray-50" />
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Telefone</label>
                <Input type="tel" placeholder="" className="bg-gray-50" />
              </div>
              
              <div>
                <label className="text-sm text-gray-600 mb-1 block">Digite sua mensagem aqui...</label>
                <Textarea rows={5} className="bg-gray-50" />
              </div>
              
              <Button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2d5080]">
                Enviar
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Patio Boulevard Mall
              </h4>
              <div className="flex items-start gap-4">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_38.png"
                  alt="WhatsApp"
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <div>
                  <p className="font-medium">campinas@easygr.com.br</p>
                  <p>(19) 98236-8224</p>
                  <p className="mt-2 text-gray-600">
                    Av. Carlos Grimaldi, 1160-1170, Jardim Conceição
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Unidade Vinhedo
              </h4>
              <div className="flex items-start gap-4">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_38.png"
                  alt="WhatsApp"
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <div>
                  <p className="font-medium">vinhedo@easygr.com.br</p>
                  <p>(19) 98414-5166</p>
                  <p className="mt-2 text-gray-600">
                    Rua São Paulo, 307 - Nova Vinhedo - Vinhedo - SP - 13284206
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Unidade Sumaré
              </h4>
              <div className="flex items-start gap-4">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_38.png"
                  alt="WhatsApp"
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <div>
                  <p className="font-medium">contato@easygr.com.br</p>
                  <p>(19) 98236-8224</p>
                  <p className="mt-2 text-gray-600">
                    Avenida Engenheiro Jaime Pinheiro Ulhôa Cintra, 2260, Parque
                    Bandeirantes - Sumaré - São Paulo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.123456789!2d-47.0647!3d-22.9099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzM1LjYiUyA0N8KwMDMnNTMuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
