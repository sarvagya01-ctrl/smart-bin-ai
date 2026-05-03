import {
  Fingerprint,
  Droplets,
  Radar,
  LayoutDashboard,
  Award,
  BellRing,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "RFID Authentication",
    desc: "Personalized access via RFID cards links every disposal to a verified user account.",
  },
  {
    icon: Droplets,
    title: "Wet/Dry Segregation",
    desc: "Moisture sensors and AI classify waste, then servos route it into the correct chamber.",
  },
  {
    icon: Radar,
    title: "Fill-Level Detection",
    desc: "Ultrasonic sensors continuously measure capacity and predict overflow risk.",
  },
  {
    icon: LayoutDashboard,
    title: "IoT Dashboard",
    desc: "Real-time MQTT telemetry streams to a sleek operator dashboard, anywhere in the world.",
  },
  {
    icon: Award,
    title: "Reward Points",
    desc: "Gamified incentives reward responsible disposal and drive long-term behavior change.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    desc: "Automatic notifications dispatch municipal collection only when bins truly need it.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Capabilities
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Engineered for the <span className="text-gradient">smart city era</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to deploy intelligent waste infrastructure at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass glass-hover rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-gradient-primary grid place-items-center text-background mb-5 shadow-glow-green">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
