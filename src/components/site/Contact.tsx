import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
];

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FieldErrors;
        if (!fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setLoading(true);
    const { name, email, message } = parsed.data;
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });
    setLoading(false);

    if (error) {
      console.error("Contact form error:", error);
      toast.error("Couldn't send your message", {
        description: "Please try again in a moment.",
      });
      return;
    }

    toast.success("Message sent! ✨", {
      description: "We'll get back to you within 24 hours.",
    });
    setValues({ name: "", email: "", message: "" });
  };

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
              Get In Touch
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">
              Let's build a <span className="text-gradient">cleaner future</span> together
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Pilot interest, partnerships, or just curious? Drop us a line.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href="mailto:hello@smartbin.ai"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" /> hello@smartbin.ai
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> Bengaluru, India
              </div>
            </div>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass grid place-items-center hover:text-primary hover:shadow-glow-green hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="glass neon-border rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={values.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  className="mt-2 bg-muted/30"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-destructive mt-1.5">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className="mt-2 bg-muted/30"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive mt-1.5">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell us about your project..."
                  className="mt-2 bg-muted/30"
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-xs text-destructive mt-1.5">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
