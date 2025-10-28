import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(251, 191, 36, 0.9), rgba(251, 146, 60, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Você pensa e a gente produz.
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-light">
            simples assim.
          </p>
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
