import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { RealEstate } from "./components/RealEstate";
import { Portfolio } from "./components/Portfolio";
import { PartnershipProcess } from "./components/PartnershipProcess";
import { Experiences } from "./components/Experiences";
import { Insights } from "./components/Insights";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Navigation />
      <Hero />
      <About />
      <Services />
      <RealEstate />
      <Portfolio />
      <PartnershipProcess />
      <Experiences />
      <Insights />
      <Contact />
    </div>
  );
}
