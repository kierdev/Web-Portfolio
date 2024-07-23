import Image from "next/image";

type ProjectProps = {
  name: string;
  tag: string;
  features: string[];
  technologies: string[];
  imageSrc: string;
};

export const ProjectCard = (props: ProjectProps) => {
  return (
    <div
      className={`flex w-full h-[40rem] aspect-[3/4] py-4 rounded-xl border border-[--border] flex-col items-center gap-4 mx-auto`}
    >
      <div className="flex justify-center h-2/5 bg-black">
        <Image
          src={props.imageSrc}
          quality={100}
          height={900}
          width={1600}
          alt="project image"
          className="px-4 w-[9/10]"
        ></Image>
      </div>
      <div className="flex flex-col w-full p-4 gap-4 h-3/5">
        <h1 className="flex flex-col justify-between w-full text-xl tracking-wide p-2 border-b border-[--border] h-2/5">
          <span className="text-xl">{props.name}</span>
          <span className="text-sm text-[--primary]">{props.tag}</span>
        </h1>
        <div className="w-full flex flex-col text-sm">
          <div>Main Features</div>
          {props.features.map((feature, index) => {
            return <div key={index}>- {feature}</div>;
          })}
        </div>
        <div className="flex gap-4 flex-wrap">
          {props.technologies.map((item) => {
            return (
              <div
                key={item}
                className="border text-sm border-[--border] inline-flex transition-all duration-150 p-2 hover:rounded-xl hover:text-[--secondary-color]"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
