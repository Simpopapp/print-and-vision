import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-bold">
                <span>EASY</span>
                <span className="text-accent">PRINT</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Soluções Gráficas e Digital
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-white/10 hover:bg-accent p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-accent p-3 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-white/10 hover:bg-accent p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© 2024 - Easy Print - Soluções Gráficas e Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
