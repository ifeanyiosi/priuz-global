import Image from "next/image";

export const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Adebayo Johnson",
      title: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "Founded PetroHaul in 2005 with over 25 years of experience in the oil and gas industry.",
    },
    {
      name: "Ngozi Okonkwo",
      title: "Operations Director",
      image: "/api/placeholder/300/300",
      bio: "Oversees the daily operations with a focus on efficiency and service excellence.",
    },
    {
      name: "Emeka Nwachukwu",
      title: "Fleet Manager",
      image: "/api/placeholder/300/300",
      bio: "Manages our growing fleet with expertise in logistics and vehicle maintenance.",
    },
    {
      name: "Aisha Mohammed",
      title: "Safety Compliance Officer",
      image: "/api/placeholder/300/300",
      bio: "Ensures all operations meet and exceed safety regulations and industry standards.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who drive our company&apos;s
            success through their expertise, vision, and commitment to
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.title}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
