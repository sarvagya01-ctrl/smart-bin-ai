export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 mt-12">
      <div className="container grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow-green">
              <span className="font-display font-bold text-background">S</span>
            </div>
            <span className="font-display font-bold text-lg">
              SmartBin<span className="text-gradient">.AI</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            AI-powered smart waste management for the cities of tomorrow.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#how" className="hover:text-primary">How it Works</a></li>
            <li><a href="#hardware" className="hover:text-primary">Hardware</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#team" className="hover:text-primary">Team</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} SmartBin AI. Crafted for a cleaner planet.</p>
        <p>Built with ⚡ for hackathons.</p>
      </div>
    </footer>
  );
};
