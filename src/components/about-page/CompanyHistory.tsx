import Image from "next/image";

export const CompanyHistory = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our History
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2020, Priuz CA Global began with just three tankers and
              a vision to transform the petroleum transportation industry in
              Nigeria. Our founder, Mr. Princewill Uzoma Okereke, identified a
              critical gap in the market: the need for reliable, safe, and
              efficient petroleum haulage services.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Starting with local deliveries in Rivers State, we quickly
              expanded our operations to cover the entire South region within
              the first three years. By 2022, we had established a presence in
              all six geopolitical zones of Nigeria.
            </p>
            <p className="text-lg text-gray-600">
              Today, Priuz CA Global operates a modern fleet of over 50 tankers
              and employs more than 200 staff across the country. We have grown
              to become one of the most trusted names in petroleum
              transportation, working with major oil companies, independent
              marketers, and industrial clients nationwide.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/historical-1.jpg"
                alt="Company history image"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/historical-2.jpeg"
                  alt="Historical fleet image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/historical-3.jpeg"
                  alt="Modern operations image"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
