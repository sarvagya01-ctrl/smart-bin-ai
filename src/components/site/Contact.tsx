import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent ✨",
        description: "We'll get back to you within 24 hours.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Let's build a <span className="text-gradient">cleaner future</span> together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Pilot interest, partnerships, or just curious? Drop us a line.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> hello@smartbin.ai
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Bengaluru, India
              </div>
            </div>

            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary hover:shadow-glow-green transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass neon-border rounded-3xl p-8 space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required placeholder="Your full name" className="mt-2 bg-muted/30" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@company.com" className="mt-2 bg-muted/30" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" required rows={5} placeholder="Tell us about your project..." className="mt-2 bg-muted/30" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
