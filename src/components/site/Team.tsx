import { Github, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "./Reveal";

const team = [
  {
    name: "Aarav Mehta",
    role: "Hardware & Embedded",
    initials: "AM",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Priya Sharma",
    role: "AI / ML Engineer",
    initials: "PS",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Rohan Iyer",
    role: "IoT & Cloud",
    initials: "RI",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Sara Khan",
    role: "Frontend & UX",
    initials: "SK",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 relative scroll-mt-20">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              The Team
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Builders behind <span className="text-gradient">SmartBin AI</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="group relative glass rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-green hover:border-primary/40 cursor-pointer">
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-primary blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-24 h-24 rounded-full bg-gradient-primary grid place-items-center font-display font-bold text-2xl text-background group-hover:scale-110 transition-transform duration-500">
                      {m.initials}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{m.role}</p>
                  <div className="flex items-center justify-center gap-3 text-muted-foreground">
                    <a
                      href={m.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} GitHub`}
                      className="hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={m.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} LinkedIn`}
                      className="hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={m.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} Twitter`}
                      className="hover:text-primary transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
