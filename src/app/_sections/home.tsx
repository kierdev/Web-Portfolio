import Link from "next/link";
export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full h-screen p-8 flex flex-col gap-12 items-center justify-center"
    >
      <div className="text-4xl sm:text-8xl  w-full text-center">
        Software Developer
      </div>
      <div className="text-xl sm:text-3xl w-full text-center">
        Hi! My name is Kier, ready to bring your ideas to reality
      </div>
      <div className=" w-full text-center">
        <Link
          className="text-xs sm:text-xl border-b border-[--border] pb-2"
          href={"/contacts"}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
