import "./Clients.css";

const logos = [
  "https://via.placeholder.com/150x80?text=Copra",
  "https://via.placeholder.com/150x80?text=Ozom",
  "https://via.placeholder.com/150x80?text=WestRock",
  "https://via.placeholder.com/150x80?text=Morana",
  "https://via.placeholder.com/150x80?text=Regus",
  "https://via.placeholder.com/150x80?text=Johnson",
];

const Clients = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-700">Alguns dos</h2>
          <h3 className="text-3xl text-primary font-semibold">nossos clientes</h3>
        </div>
        <div className="relative h-20 overflow-hidden">
          <div className="slider">
            <div className="slide-track">
              {logos.concat(logos).map((logo, index) => (
                <div className="slide" key={index}>
                  <img src={logo} alt={`Client logo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
