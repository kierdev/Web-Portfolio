export default function AboutSection() {
  const programmingLanguages = [
    "TypeScript",
    "Javascript",
    "Java",
    "C#",
    "C++",
  ];

  const frontEnd = [
    "Next JS",
    "React JS",
    "Angular",
    "Tailwind CSS",
    "Shad-cn/UI",
    "Bootstrap",
    "Ionic",
  ];
  const backEnd = [
    "Node JS",
    "Express JS",
    "Microsoft SQL Server",
    "MySQL",
    "MongoDB",
  ];
  return (
    <section id="about" className="w-full px-8 py-20">
      <div className="w-full text-3xl border-b border-[--border] pb-2 text-center">
        about
      </div>
      <div className="flex w-full flex-col gap-4 py-8 md:flex-row ">
        <div className="w-full flex flex-col items-start gap-4 border-l border-[--border] pl-4 md:w-1/2">
          <div className="text-xl md:text-2xl">Introduction</div>
          <div className="p-2  md:p-8 leading-loose">
            Hi Once again my name is Kier, I am a freelance web developer. As an
            information technology student, my knowledge combined with my
            consistent self-learning in Software Development, I assure that I
            bring high-quality services to my clients.
          </div>
        </div>
        <div className="w-full border-l border-[--border] pl-4 md:w-1/2">
          <div className="text-xl md:text-2xl">My Tech Stacks</div>
          <div className="flex flex-col p-4 mt-4">
            <div className="text-xl">Programming Languages</div>
            <div className="flex gap-4 flex-wrap">
              {programmingLanguages.map((name, index) => {
                return (
                  <div key={index} className="border-b border-[--border] p-1">
                    - {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col p-4 mt-4">
            <div className="text-xl">Frameworks and Libraries</div>
            <div className="flex gap-4 flex-wrap">
              {frontEnd.map((name, index) => {
                return (
                  <div key={index} className="border-b border-[--border] p-1">
                    - {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col p-4 mt-4">
            <div className="text-xl">Back-end</div>
            <div className="flex gap-4 flex-wrap">
              {backEnd.map((name, index) => {
                return (
                  <div key={index} className="border-b border-[--border] p-1">
                    - {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
