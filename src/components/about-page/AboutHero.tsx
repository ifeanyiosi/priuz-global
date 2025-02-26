import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export const AboutHero = () => {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/about.jpg"
          alt="Petroleum tankers in operation"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="lg:max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl opacity-90 mb-8">
            Trusted petroleum haulage services across the nation since 2005
          </p>
          <div className="flex flex-col lg:flex-row  gap-4">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition duration-300"
              asChild
            >
              <Link href="/fleet">Our Fleet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
