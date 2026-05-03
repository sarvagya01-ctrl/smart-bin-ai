import heroImg from "@/assets/smart-bin-hero.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              AI · IoT · Sustainability
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Smarter Waste,
            <br />
            <span className="text-gradient">Cleaner Future.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            SmartBin AI delivers automated waste segregation with real-time
            monitoring, RFID access control, and seamless IoT integration —
            powering the cities of tomorrow.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#features">
                Explore Features <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
            {[
              { v: "92%", l: "Sort accuracy" },
              { v: "24/7", l: "Live monitoring" },
              { v: "60%", l: "Less overflow" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">
                  {s.v}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
          <div className="relative glass neon-border rounded-3xl p-3 animate-float">
            <img
              src={heroImg}
              alt="Futuristic SmartBin AI smart dustbin with holographic interface"
              width={1536}
              height={1536}
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 hidden md:block animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-glow-green animate-glow-pulse" />
              <div>
                <div className="text-xs text-muted-foreground">Bin #042 · Live</div>
                <div className="text-sm font-semibold">Fill level: 38%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
