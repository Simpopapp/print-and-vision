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
              <h4 className="text-lg font-bold text-[#5BC0DE] mb-2">Patio Boulevard Mall</h4>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-sm">
                  <p className="text-gray-700 font-medium">campinas@easygr.com.br</p>
                  <p className="text-gray-600">(19) 98236-8224</p>
                  <p className="text-gray-600 mt-2">Av. Carlos Grimaldi, 1160-1170, Jardim Conceição</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#5BC0DE] mb-2">Unidade Vinhedo</h4>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-sm">
                  <p className="text-gray-700 font-medium">vinhedo@easygr.com.br</p>
                  <p className="text-gray-600">(19) 98414-5166</p>
                  <p className="text-gray-600 mt-2">Rua São Paulo, 307 - Nova Vinhedo - Vinhedo - SP - 13284206</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#5BC0DE] mb-2">Unidade Sumaré</h4>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div className="text-sm">
                  <p className="text-gray-700 font-medium">contato@easygr.com.br</p>
                  <p className="text-gray-600">(19) 98236-8224</p>
                  <p className="text-gray-600 mt-2">Avenida Engenheiro Jaime Pinheiro Ulhôa Cintra, 2260, Parque Bandeirantes - Sumaré - São Paulo</p>
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
