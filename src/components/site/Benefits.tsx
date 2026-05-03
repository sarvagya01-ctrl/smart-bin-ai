import { Leaf, Building2, Wrench, Recycle, HeartHandshake } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "Cleaner Environment", desc: "Less litter, fewer overflows, healthier neighborhoods." },
  { icon: Building2, title: "Smart City Ready", desc: "Plug into existing municipal IoT platforms with MQTT." },
  { icon: Wrench, title: "Less Manual Effort", desc: "Automated sorting frees up workers for higher-value tasks." },
  { icon: Recycle, title: "Better Recycling", desc: "Pre-sorted streams dramatically improve recovery rates." },
  { icon: HeartHandshake, title: "User Engagement", desc: "Reward points turn citizens into active sustainability partners." },
];

export const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Why It Matters
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Impact across the <span className="text-gradient">entire chain</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center text-background mb-4 shadow-glow-green">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold mb-2">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { v: "120+", l: "Bins deployed" },
            { v: "45 t", l: "Waste sorted / mo" },
            { v: "8", l: "Pilot cities" },
            { v: "4.9★", l: "Citizen rating" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-6 text-center neon-border">
              <div className="font-display text-4xl font-bold text-gradient">{s.v}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
