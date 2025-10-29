import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="EasyPrint Logo" className="h-10" />
          </div>

          {/* Navegação e Contatos */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-sm hover:text-primary transition-colors">Empresa</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Portfólio</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Serviços</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Agência</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Cases</a>
              <a href="#" className="text-sm hover:text-primary transition-colors">Blog</a>
            </nav>

            <div className="hidden lg:flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-semibold">Unidade Campinas</div>
                  <div>(19) 3367-7276</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-semibold">Unidade Vinhedo</div>
                  <div>(19) 3876-1998</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
