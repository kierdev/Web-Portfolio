import { Card } from "@/components/card";

export const ServicesSection = () => {
  const servicesList = [
    {
      serviceImage: "/icons/code-solid.svg",
      serviceName: "Web Development",
    },
    {
      serviceImage: "/icons/android-brands-solid.svg",
      serviceName: "Mobile App Development",
    },
    {
      serviceImage: "/icons/database-solid.svg",
      serviceName: "Database Management",
    },
    {
      serviceImage: "/icons/arrow-trend-up-solid.svg",
      serviceName: "Digital Marketing",
    },
  ];

  return (
    <section className="w-full px-8 py-20">
      <div className="w-full text-3xl border-b border-[--border] pb-2 text-center">
        services
      </div>
      <div className="w-full grid-cols-2 gap-4 grid py-8 mx-auto md:grid-cols-4">
        {servicesList.map((service, index) => {
          return (
            <Card
              key={index}
              serviceImage={service.serviceImage}
              serviceName={service.serviceName}
            />
          );
        })}
      </div>
    </section>
  );
};
