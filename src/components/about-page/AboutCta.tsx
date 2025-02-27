import Image from "next/image";
import Link from "next/link";

export const AboutCta = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="md:grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to work with us?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Experience the Priuz CA Global difference with our commitment to
                safety, reliability, and customer satisfaction. Contact us today
                for your petroleum haulage needs.
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                  href="/contact"
                >
                  Contact Us
                </Link>
                <Link
                  className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300"
                  href="/quote"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/historical-4.jpg"
                  alt="Petroleum tanker"
                  width={500}
                  height={300}
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
