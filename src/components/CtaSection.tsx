import { Phone } from "lucide-react";
import Link from "next/link";

export const CtaSection = () => {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Petroleum Products Delivered Quickly?
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Our fleet of modern tankers ensures safe and timely delivery of
          petroleum products across the country.
        </p>
        <Link
          href="tel:+2348030590599"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-gray-100 transition"
        >
          <Phone size={16} />
          Call Us Now
        </Link>
      </div>
    </div>
  );
};
