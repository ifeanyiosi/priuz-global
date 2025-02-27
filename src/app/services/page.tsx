// pages/services.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { CtaSection } from "@/components/CtaSection";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Nationwide Petroleum Haulage",
      description:
        "Reliable transportation of petroleum products from any depot to any destination across the country with our modern fleet of tankers.",
      icon: "truck",
    },
    {
      id: 2,
      title: "Bulk Fuel Supply",
      description:
        "Efficient delivery of bulk petroleum products to commercial clients, industries, and retail stations with competitive pricing.",
      icon: "fuel",
    },
    {
      id: 3,
      title: "Express Delivery",
      description:
        "Expedited delivery services for urgent petroleum supply needs with guaranteed delivery timelines.",
      icon: "clock",
    },
    {
      id: 4,
      title: "Depot-to-Station Solutions",
      description:
        "Comprehensive logistics solutions managing the entire supply chain from depot sourcing to final station delivery.",
      icon: "route",
    },
    {
      id: 5,
      title: "Real-time Shipment Tracking",
      description:
        "Advanced GPS tracking systems providing clients with real-time updates on delivery status and location.",
      icon: "location",
    },
    {
      id: 6,
      title: "Customized Logistics Planning",
      description:
        "Tailored logistics solutions designed to meet specific client requirements and delivery schedules.",
      icon: "clipboard",
    },
  ];

  const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
    switch (icon) {
      case "truck":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
        );
      case "fuel":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        );
      case "clock":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "route":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
        );
      case "location":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        );
      case "clipboard":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        );
    }
  };

  return (
    <>
      <Head>
        <title>Our Services | Petroleum Haulage Solutions</title>
        <meta
          name="description"
          content="Comprehensive petroleum transportation and logistics services across the country with our modern fleet of tankers."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('/services-1.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Petroleum Transportation Services
            </h1>
            <p className="text-xl mb-8">
              Reliable, safe, and efficient transportation of petroleum products
              across the nation with our state-of-the-art fleet.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition duration-300 ease-in-out">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a complete range of petroleum transportation and
              logistics solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex justify-center">
                  <IconComponent icon={service.icon} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/services-2.jpg"
                  alt="Petroleum tanker truck"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Modern and Well-Maintained Fleet
                    </h3>
                    <p className="text-gray-600">
                      Our tankers are regularly serviced and equipped with the
                      latest safety features.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Experienced Drivers
                    </h3>
                    <p className="text-gray-600">
                      Our team consists of highly trained professionals with
                      extensive experience in petroleum transportation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Nationwide Coverage
                    </h3>
                    <p className="text-gray-600">
                      We operate from all major depots and deliver to any
                      location across the country.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Safety First Approach
                    </h3>
                    <p className="text-gray-600">
                      Safety is our top priority, with strict protocols and
                      regular training for all staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&lsquo;t just take our word for it - here&lsquo;s what our
              clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &lsquo;Their petroleum haulage service is reliable and
                efficient. We&lsquo;ve never experienced any delays, and their
                tracking system gives us peace of mind.&lsquo;
              </p>
              <div>
                <p className="text-gray-500 text-sm">Izumba gas Ltd</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;The customized logistics planning they provide has
                significantly improved our supply chain efficiency. Their team
                is professional and responsive.&quot;
              </p>
              <div>
                <p className="text-gray-500 text-sm">
                  J. H. Udeagbala Holdings Ltd
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                &quot;Their nationwide coverage is impressive. We operate in
                remote locations, but they always ensure our petroleum supplies
                arrive on time and in perfect condition.&quot;
              </p>
              <div>
                <p className="text-gray-500 text-sm">Rackon gas Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our petroleum haulage
              services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What types of petroleum products do you transport?
              </h3>
              <p className="text-gray-600">
                We transport a wide range of petroleum products including
                petrol, diesel, kerosene, aviation fuel, and lubricants from
                depots to various destinations nationwide.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do you ensure the safety of transported products?
              </h3>
              <p className="text-gray-600">
                We maintain rigorous safety protocols, use modern tankers with
                advanced safety features, conduct regular maintenance, and
                provide comprehensive training to our drivers and staff.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What is your typical delivery timeframe?
              </h3>
              <p className="text-gray-600">
                Delivery timeframes depend on distance and specific
                requirements, but we pride ourselves on timely deliveries. Our
                standard delivery timeframe ranges from same-day to 48 hours for
                most locations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I track my shipment in real-time?
              </h3>
              <p className="text-gray-600">
                Yes, all our tankers are equipped with GPS tracking systems. We
                provide clients with access to our tracking platform to monitor
                their shipments in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
