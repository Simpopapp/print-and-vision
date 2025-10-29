import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Whatsapp } from "@/components/Icons";

const ContactInfo = ({ title, email, phone, address }) => (
  <div>
    <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
    <div className="flex items-start gap-3">
      <Whatsapp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      <div className="text-sm">
        <p className="text-gray-700">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600 mt-2">{address}</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-primary border-b-2 border-primary inline-block pb-2">
            Contato
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário */}
          <div className="bg-white p-8 border">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Solicite um orçamento</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Telefone" />
              <Textarea placeholder="Digite sua mensagem aqui..." rows={5} />
              <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Enviar
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <ContactInfo
              title="Patio Boulevard Mall"
              email="campinas@easygr.com.br"
              phone="(19) 98236-8224"
              address="Av. Carlos Grimaldi, 1160-1170, Jardim Conceição"
            />
            <ContactInfo
              title="Unidade Vinhedo"
              email="vinhedo@easygr.com.br"
              phone="(19) 98414-5166"
              address="Rua São Paulo, 307 - Nova Vinhedo - Vinhedo - SP - 13284206"
            />
            <ContactInfo
              title="Unidade Sumaré"
              email="contato@easygr.com.br"
              phone="(19) 98236-8224"
              address="Avenida Engenheiro Jaime Pinheiro Ulhôa Cintra, 2260, Parque Bandeirantes - Sumaré - São Paulo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
