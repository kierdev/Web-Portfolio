"use client";
import Link from "next/link";
import HomeSection from "./_sections/home";
import AboutSection from "./_sections/about";
import WorksSection from "./_sections/works";
import { useEffect, useRef } from "react";
import ContactSection from "./_sections/contact";
import { ServicesSection } from "./_sections/services";
export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </>
  );
}
