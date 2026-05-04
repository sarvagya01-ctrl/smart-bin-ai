import { AlertTriangle, Trash2, Recycle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative scroll-mt-20">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            The Challenge
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Cities are drowning in <span className="text-gradient">unsorted waste.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Overflowing bins, broken collection schedules, and poor segregation
            cost cities billions and choke recycling pipelines. SmartBin AI
            replaces guesswork with intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "The Problem",
              desc: "Manual sorting fails. 70% of recyclables end up in landfills due to contamination and missed collections.",
              color: "text-destructive",
            },
            {
              icon: Trash2,
              title: "Our Approach",
              desc: "ESP32 + sensors + AI vision detect waste type in real time, opening dual chambers via servo control.",
              color: "text-secondary",
            },
            {
              icon: Recycle,
              title: "The Outcome",
              desc: "Cleaner streets, optimized routes, gamified citizen engagement, and a measurable cut in landfill volume.",
              color: "text-primary",
            },
          ].map((c, i) => (
            <div
              key={c.title}
              className="glass glass-hover rounded-2xl p-8 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl glass grid place-items-center mb-5 ${c.color}`}>
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
