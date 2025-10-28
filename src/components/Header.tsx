import { Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary">EASY</span>
                <span className="text-accent">PRINT</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>(19) 98236-8224</span>
              </div>
            </div>
            <Button size="sm">Fale Conosco</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
