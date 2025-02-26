import Link from "next/link";

export const ServicesSection = () => {
  const services = [
    {
      icon: "🚛",
      title: "Petroleum Haulage",
      description:
        "Safe and efficient transportation of petroleum products across the country",
    },
    {
      icon: "⛽",
      title: "Product Sales",
      description:
        "Wholesale and bulk supply of various petroleum products from major depots",
    },
    {
      icon: "🔍",
      title: "Real-time Tracking",
      description:
        "Advanced tracking systems to monitor your shipment throughout the journey",
    },
    {
      icon: "🛡️",
      title: "Safety Standards",
      description:
        "Industry-leading safety protocols and certified transport fleet",
    },
  ];

  return (
    <div className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              View All Services
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
