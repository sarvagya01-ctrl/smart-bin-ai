import { ScanLine, DoorOpen, Eye, Split, Cloud, BellRing } from "lucide-react";

const steps = [
  { icon: ScanLine, title: "Scan RFID", desc: "User taps their card on the bin." },
  { icon: DoorOpen, title: "Bin Opens", desc: "Servo unlocks the lid for that user." },
  { icon: Eye, title: "Waste Detected", desc: "Sensors classify wet vs dry waste." },
  { icon: Split, title: "Auto Sorted", desc: "Routed into the correct chamber." },
  { icon: Cloud, title: "Sent to Cloud", desc: "MQTT pushes telemetry instantly." },
  { icon: BellRing, title: "Alerts Generated", desc: "Collection scheduled when full." },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            How It Works
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            From <span className="text-gradient">tap to telemetry</span> in seconds
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl" />
                  <div className="relative w-24 h-24 rounded-full glass neon-border grid place-items-center">
                    <s.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary text-background text-xs font-bold grid place-items-center shadow-glow-green">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display font-semibold mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
