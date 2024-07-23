"use client";
import Image from "next/image";

type ServiceProps = {
  serviceImage: string;
  serviceName: string;
};

export const Card = (props: ServiceProps) => {
  return (
    <div className="border border-[--border] w-[1/2] aspect-square mx-auto py-8 px-4 flex flex-col items-center justify-start gap-4 group">
      <Image
        src={props.serviceImage}
        width={40}
        height={30}
        alt="service preview"
        className="w-1/4 transition-all duration-300 ease-in-out aspect-square h-3/4 invert-[--invert] group-hover:-translate-y-6 "
      ></Image>
      <div className="w-full h-1/4 flex text-center items-center justify-center group-hover:text-[--primary] text-sm">
        {props.serviceName}
      </div>
    </div>
  );
};
