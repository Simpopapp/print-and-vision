import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Possibilities from "@/components/Possibilities";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import SpecialProject from "@/components/SpecialProject";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Separator from "@/components/Separator";
import Banners from "@/components/Banners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialMediaBar from "@/components/SocialMediaBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialMediaBar />
      <main>
        <Hero />
        <Possibilities />
        <About />
        <Portfolio />
        <SpecialProject />
        <Work />
        <Clients />
        <Separator />
        <Banners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
