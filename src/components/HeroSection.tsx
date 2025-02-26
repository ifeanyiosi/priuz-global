import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/hero-1.jpg"
          alt="Petroleum tanker fleet"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Reliable Petroleum Transportation Nationwide
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-8">
          Expert haulage services from all major depots to any destination in
          the country
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
            href="/quote"
          >
            <span>Request a Quote</span>
          </Link>
          <Link
            className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 border-2 border-white rounded-lg text-lg transition duration-300"
            href="/services"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
