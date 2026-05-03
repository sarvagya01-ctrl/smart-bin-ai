import { Cpu, Radio, Radar, Cog, Droplet, Monitor, Battery } from "lucide-react";

const parts = [
  { icon: Cpu, name: "Arduino / ESP32", desc: "Microcontroller brain with Wi-Fi" },
  { icon: Radio, name: "RFID Module", desc: "RC522 user authentication" },
  { icon: Radar, name: "Ultrasonic Sensor", desc: "HC-SR04 fill-level detection" },
  { icon: Cog, name: "Servo Motor", desc: "SG90 lid & sorter actuator" },
  { icon: Droplet, name: "Moisture Sensor", desc: "Wet vs dry classification" },
  { icon: Monitor, name: "LCD Display", desc: "16x2 I2C status output" },
  { icon: Battery, name: "Power Supply", desc: "5V regulated power module" },
];

export const Hardware = () => {
  return (
    <section id="hardware" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            Hardware Stack
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
            Built with <span className="text-gradient">proven components</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A thoughtful blend of low-cost, reliable IoT modules.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {parts.map((p) => (
            <div
              key={p.name}
              className="glass glass-hover rounded-2xl p-6 flex items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl glass grid place-items-center text-secondary">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
