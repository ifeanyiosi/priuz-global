import { AboutCta } from "@/components/about-page/AboutCta";
import { AboutHero } from "@/components/about-page/AboutHero";
import { CompanyHistory } from "@/components/about-page/CompanyHistory";
import { CompanyStats } from "@/components/about-page/CompanyStats";
import { MissionValues } from "@/components/about-page/MissionValues";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyHistory />
      <MissionValues />
      <CompanyStats />
      <AboutCta />
    </>
  );
}
