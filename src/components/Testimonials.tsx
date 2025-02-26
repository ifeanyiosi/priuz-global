export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Their timely deliveries and professional handling of our petroleum products have made them our go-to transportation partner.",
      name: "John Smith",
      company: "EnergyPlus Inc.",
    },
    {
      quote:
        "We've been working with them for over 5 years. Their safety standards and reliability are exceptional in the industry.",
      name: "Sarah Johnson",
      company: "PetroSupply Co.",
    },
    {
      quote:
        "From small deliveries to major haulage operations, they've consistently provided excellent service across all our locations.",
      name: "Michael Davis",
      company: "National Fuels Ltd.",
    },
  ];

  return (
    <div className="py-16 bg-blue-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg">
              <p className="italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-blue-300">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
