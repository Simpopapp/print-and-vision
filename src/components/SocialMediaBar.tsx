import { Facebook, Instagram, Youtube } from "lucide-react";

const SocialMediaBar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 bg-white p-2 rounded-l-lg shadow-lg">
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600"
      >
        <Facebook size={24} />
      </a>
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600"
      >
        <Youtube size={24} />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600"
      >
        <Instagram size={24} />
      </a>
    </div>
  );
};

export default SocialMediaBar;
