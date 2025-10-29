import { Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Mapa */}
      <div className="h-80 bg-gray-600">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.021177114668!2d-47.08518868503424!3d-22.91258698500273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8e8e5ffffff%3A0xed33a2e3b1c1e55!2sEasy%20Print%20Impress%C3%A3o%20Digital!5e0!3m2!1spt-BR!2sbr!4v1620993352488!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">
            © 2020 - Easy Print - Soluções Gráficas e Digital
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
