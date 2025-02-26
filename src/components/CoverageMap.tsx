import Image from "next/image";

export const CoverageMap = () => {
  return (
    <div className="py-16 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Nationwide Coverage
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We operate from all major petroleum depots in the country and deliver
          to any destination nationwide
        </p>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="/map-1.jpg"
              alt="Coverage map of operations"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
