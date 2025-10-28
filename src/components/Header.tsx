import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <>
      {/* Top bar com contatos */}
      <div className="bg-gray-50 border-b py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-end gap-6 text-xs">
            <div className="flex items-center gap-4">
              <Phone className="h-3 w-3" />
              <span className="font-semibold">Unidade Campinas</span>
              <span>19 98236-8224</span>
              <span>(19) 3367-7276</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-3 w-3" />
              <span className="font-semibold">Unidade Vinhedo</span>
              <span>19 98414-5166</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#5BC0DE]"></div>
                <div className="w-2 h-2 rounded-full bg-[#E91E63]"></div>
                <div className="w-2 h-2 rounded-full bg-[#FFC107]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
              </div>
              <div className="text-2xl font-bold">
                <span className="text-[#5BC0DE]">EASY</span>
                <span className="text-[#E91E63]">PRINT</span>
              </div>
              <div className="text-xs text-gray-600 ml-2">
                Soluções Gráficas e Digital
              </div>
            </div>

            {/* Navegação */}
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Início</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Fachada</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Nossa Lojas</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Quem somos</a>
              <a href="#services" className="text-sm hover:text-[#5BC0DE] transition-colors">Serviços</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Projetos</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Clientes</a>
              <a href="#contact" className="text-sm hover:text-[#5BC0DE] transition-colors">Contato</a>
              <a href="#" className="text-sm hover:text-[#5BC0DE] transition-colors">Blog</a>
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
