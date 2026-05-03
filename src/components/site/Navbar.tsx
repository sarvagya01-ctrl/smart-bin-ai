import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it Works" },
  { href: "#hardware", label: "Hardware" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow-green">
            <span className="font-display font-bold text-background">S</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-primary blur-md opacity-50 group-hover:opacity-80 transition" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            SmartBin<span className="text-gradient">.AI</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg glass"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden container mt-4 glass rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
