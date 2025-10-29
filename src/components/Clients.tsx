import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Clients.css';

const Clients = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const clientLogos = [
    '/EasyPrint_public/clientes/logos/logo_06.jpg',
    '/EasyPrint_public/clientes/logos/logo_07.jpg',
    '/EasyPrint_public/clientes/logos/logo_08.jpg',
    '/EasyPrint_public/clientes/logos/logo_09.jpg',
    '/EasyPrint_public/clientes/logos/logo_10.jpg',
    '/EasyPrint_public/clientes/logos/logo_11.jpg',
    '/EasyPrint_public/clientes/logos/logo_12.jpg',
    '/EasyPrint_public/clientes/logos/logo_13.jpg',
    '/EasyPrint_public/clientes/logos/logo_14.jpg',
    '/EasyPrint_public/clientes/logos/logo_15.jpg',
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-light text-primary mb-2">
            Alguns dos nossos clientes
          </h2>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {clientLogos.map((logo, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-12 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
