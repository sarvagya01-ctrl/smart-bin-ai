import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Aarav Mehta", role: "Hardware & Embedded", initials: "AM" },
  { name: "Priya Sharma", role: "AI / ML Engineer", initials: "PS" },
  { name: "Rohan Iyer", role: "IoT & Cloud", initials: "RI" },
  { name: "Sara Khan", role: "Frontend & UX", initials: "SK" },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
            The Team
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Builders behind <span className="text-gradient">SmartBin AI</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="glass glass-hover rounded-2xl p-6 text-center">
              <div className="relative mx-auto w-24 h-24 mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-50" />
                <div className="relative w-24 h-24 rounded-full bg-gradient-primary grid place-items-center font-display font-bold text-2xl text-background">
                  {m.initials}
                </div>
              </div>
              <h3 className="font-display font-semibold text-lg">{m.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><Github className="h-4 w-4" /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
