import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Hardware } from "@/components/site/Hardware";
import { Dashboard } from "@/components/site/Dashboard";
import { Benefits } from "@/components/site/Benefits";
import { Team } from "@/components/site/Team";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Hardware />
      <Dashboard />
      <Benefits />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
