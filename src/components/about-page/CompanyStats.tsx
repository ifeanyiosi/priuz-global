export const CompanyStats = () => {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Priuz CA Global by the Numbers
          </h2>
          <p className="text-lg opacity-80">Our impact across Nigeria</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              50+
            </div>
            <p className="text-lg">Modern Tankers</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              200+
            </div>
            <p className="text-lg">Employees</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              18
            </div>
            <p className="text-lg">Years in Business</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              36
            </div>
            <p className="text-lg">States Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};
