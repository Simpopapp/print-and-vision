import heroImage from "@/assets/hero-bg.jpg";
import { Facebook, Youtube, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-light leading-tight">
            Você pensa e a gente produz.
          </h1>
          <p className="text-xl mt-2">
            simples assim.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block border border-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-gray-800 transition-colors"
          >
            Fale conosco
          </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <a href="#" className="p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" className="p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full">
          <Youtube className="h-5 w-5" />
        </a>
        <a href="#" className="p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full">
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
