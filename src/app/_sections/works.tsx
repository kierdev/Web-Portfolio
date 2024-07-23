import Image from "next/image";
import { ProjectCard } from "@/components/project";

export default function WorksSection() {
  const projects = [
    {
      name: "PisoJuan",
      tag: "Mobile Application",
      technologies: ["Ionic", "Angular", "Firebase"],
      isReversed: false,
      imageSrc: "/images/pisojuan.png",
      features: [
        "User Authentication",
        "Currency API Integration",
        "Fund Transfers",
      ],
    },
    {
      name: "Next Dashboard",
      tag: "Web Application",
      technologies: [
        "Next",
        "React",
        "Tailwind",
        "Shad-cn/UI",
        "Zod",
        "MongoDB",
      ],
      imageSrc: "/images/dashboard.png",
      features: ["Analytics", "Inventory Management", "Order Tracking"],
    },
    {
      name: "Asahi Thrift Shop E-commerce",
      tag: "Web Application",
      technologies: [
        "React JS",
        "Tailwind",
        "MongoDB",
        "Node JS",
        "Express JS",
      ],
      imageSrc: "/images/e-commerce.png",
      features: ["Portfolio Website", "Realtime Ordering", "Responsive Design"],
    },
  ];

  return (
    <section id="works" className="w-full px-8 py-20">
      <div className="w-full text-3xl border-b border-[--border] pb-2 text-center">
        works
      </div>
      <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              tag={project.tag}
              technologies={project.technologies}
              imageSrc={project.imageSrc}
              features={project.features}
            />
          );
        })}
      </div>
    </section>
  );
}
