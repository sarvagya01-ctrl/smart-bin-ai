import { useEffect, useState } from "react";
import { Activity, Droplets, Fingerprint, BellRing, Trash2 } from "lucide-react";

const users = ["Aarav M.", "Priya S.", "Rohan I.", "Sara K.", "Guest"];

export const InteractiveDashboard = () => {
  const [fill, setFill] = useState(38);
  const [wasteType, setWasteType] = useState<"Wet" | "Dry">("Dry");
  const [user, setUser] = useState(users[0]);
  const [authed, setAuthed] = useState(true);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFill((f) => {
        const next = Math.min(100, Math.max(5, f + (Math.random() * 10 - 3)));
        setAlert(next > 80);
        return Math.round(next);
      });
      setWasteType((w) => (Math.random() > 0.5 ? w : w === "Wet" ? "Dry" : "Wet"));
      setUser(users[Math.floor(Math.random() * users.length)]);
      setAuthed(Math.random() > 0.15);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  const fillColor =
    fill > 80 ? "hsl(0 84% 60%)" : fill > 50 ? "hsl(45 95% 55%)" : "hsl(var(--neon-green))";

  return (
    <div className="glass neon-border rounded-3xl p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-glow-green animate-glow-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Bin #042 · Live
          </span>
        </div>
        <span className="text-xs text-muted-foreground">Updated just now</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {/* Fill level gauge */}
        <div className="glass rounded-2xl p-5 sm:row-span-2">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-primary" /> Fill Level
            </span>
            <span className="text-2xl font-display font-bold" style={{ color: fillColor }}>
              {fill}%
            </span>
          </div>
          <div className="relative h-40 rounded-xl bg-muted/40 overflow-hidden border border-border/50">
            <div
              className="absolute inset-x-0 bottom-0 transition-all duration-1000 ease-out"
              style={{
                height: `${fill}%`,
                background: `linear-gradient(180deg, ${fillColor}, transparent 120%)`,
                boxShadow: `0 0 30px ${fillColor}66`,
              }}
            />
            <div className="absolute inset-0 grid grid-rows-4 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-t border-border/30" />
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Ultrasonic sensor · HC-SR04
          </p>
        </div>

        {/* Waste type */}
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <Droplets className="h-4 w-4 text-secondary" /> Waste Type
          </div>
          <div className="flex items-center gap-3">
            <div
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                wasteType === "Wet"
                  ? "bg-secondary/20 text-secondary shadow-glow-cyan"
                  : "bg-muted/40 text-muted-foreground"
              }`}
            >
              💧 Wet
            </div>
            <div
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                wasteType === "Dry"
                  ? "bg-primary/20 text-primary shadow-glow-green"
                  : "bg-muted/40 text-muted-foreground"
              }`}
            >
              📦 Dry
            </div>
          </div>
        </div>

        {/* RFID user */}
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <Fingerprint className="h-4 w-4 text-primary" /> RFID User
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">{user}</div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {authed ? "Authenticated" : "Denied"}
              </div>
            </div>
            <div
              className={`w-3 h-3 rounded-full ${
                authed ? "bg-primary shadow-glow-green" : "bg-destructive"
              } animate-glow-pulse`}
            />
          </div>
        </div>
      </div>

      {/* Alert bar */}
      <div
        className={`mt-4 flex items-center gap-3 rounded-2xl p-4 border transition-all ${
          alert
            ? "bg-destructive/10 border-destructive/40 text-destructive"
            : "glass border-border/50"
        }`}
      >
        {alert ? (
          <BellRing className="h-4 w-4 animate-pulse" />
        ) : (
          <Activity className="h-4 w-4 text-primary" />
        )}
        <span className="text-sm font-medium">
          {alert
            ? "Bin nearing capacity — collection alert dispatched."
            : "All systems nominal · MQTT stream healthy"}
        </span>
      </div>
    </div>
  );
};
