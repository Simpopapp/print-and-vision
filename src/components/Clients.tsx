import { Card } from "./ui/card";

const Clients = () => {
  const clients = [
    { name: "COPRA", color: "text-blue-600" },
    { name: "SANTOS FC", color: "text-gray-800" },
    { name: "Heartlock", color: "text-red-500" },
    { name: "ROVAG", color: "text-gray-900" },
    { name: "Regius", color: "text-amber-700" },
    { name: "Olívio", color: "text-green-600" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Alguns dos <span className="text-primary">nossos clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Empresas que confiam em nosso trabalho
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card 
              key={index} 
              className="aspect-square flex items-center justify-center p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-105"
            >
              <div className={`text-2xl font-bold ${client.color} text-center`}>
                {client.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
