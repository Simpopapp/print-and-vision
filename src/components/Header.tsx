const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/EasyPrint_public/home/hero/hero_02.png"
              alt="EasyPrint Logo"
              className="h-12"
            />
            <div className="text-xs text-gray-600 ml-2">
              Soluções Gráficas e Comunicação Visual
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-4 text-xs">
              <div>
                <span className="font-semibold">Unidade Campinas:</span>
                <span> (19) 3367-7276 / 19 98236-8224</span>
              </div>
              <div>
                <span className="font-semibold">Unidade Vinhedo:</span>
                <span> 19 98414-5166</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_40.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_39.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/EasyPrint_public/clientes/logos/logo_41.png"
                  alt="Youtube"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 h-12">
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Fachada
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Nossa Lojas
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Quem somos
            </a>
            <a
              href="#services"
              className="text-sm hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Projetos
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Clientes
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-primary transition-colors"
            >
              Contato
            </a>
            <a
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
