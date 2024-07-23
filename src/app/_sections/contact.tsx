import Image from "next/image";
import Link from "next/link";
export default function ContactSection() {
  const contactList = [
    {
      name: "Kier Hagos",
      link: "https://web.facebook.com/joekier.hagos",
      icon: "/icons/facebook-brands-solid.svg",
    },
    {
      name: "Kier Hagos",
      link: "https://www.instagram.com/code_kier",
      icon: "/icons/instagram-brands-solid.svg",
    },
    {
      name: "kierhagos0@gmail.com",
      link: "https://mail.google.com",
      icon: "/icons/google-brands-solid.svg",
    },
    {
      name: "Kier H.",
      link: "https://www.upwork.com/freelancers/~018fe55363de40cbb6",
      icon: "/icons/upwork-brands-solid.svg",
    },
    {
      name: "kierdev",
      link: "https://github.com/kierdev",
      icon: "/icons/github-brands-solid.svg",
    },
  ];
  return (
    <section id="contact" className="w-full px-8 py-20">
      <div className="w-full text-3xl border-b border-[--border] pb-2 text-center">
        contact
      </div>
      <div className="flex flex-col gap-4 md:flex-row p-8 w-full">
        <div className="w-full md:w-1/4">
          Need help for your business? projects? do not hesitate and contact me
          anytime.
        </div>
        <div className="grid-cols-1 w-full grid gap-4 md:w-2/4 md:grid-cols-3 border-l border-[--border] px-4">
          {contactList.map((contact, index) => {
            return (
              <Link
                target="_blank"
                href={contact.link}
                key={index}
                className="hover:underline hover:text-[--primary] flex items-center gap-4"
              >
                <Image
                  src={contact.icon}
                  height={24}
                  width={24}
                  alt="icon"
                  className="invert-[--invert]"
                ></Image>
                {contact.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full flex text-center justify-center text-[--primary]">
        Copyright © 2024 by Kier Hagos | All Rights Reserved.
      </div>
    </section>
  );
}
