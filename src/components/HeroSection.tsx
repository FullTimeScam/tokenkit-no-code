import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

// Particle component for background effect
const Particles = () => {
  return (
    <div className="particles">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <Particles />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-mono font-bold text-foreground leading-tight flicker">
                TURN IDEAS INTO{" "}
                <span className="text-primary text-glow-orange">
                  DIGITAL ASSETS
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-secondary font-mono font-bold tracking-wider text-glow-yellow">
                &gt; NO_CODE_REQUIRED.EXE
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl font-mono leading-relaxed">
                // Initialize token deployment protocol
                <br />
                // Executing advanced smart contract framework
                <br />
                // Deploy and manage tokens in &lt;5 minutes
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="terminal" size="xl" className="group">
                [INITIATE_DEPLOYMENT]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                [VIEW_DEMO.MP4]
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-muted-foreground font-mono text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent animate-pulse"></div>
                <span>CREDIT_CARD: FALSE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent animate-pulse"></div>
                <span>DEPLOY_TIME: &lt;300s</span>
              </div>
            </div>
          </div>

          {/* Right side - Terminal display */}
          <div className="relative">
            <div className="relative z-10 bg-card border border-foreground p-6">
              <div className="flex items-center gap-2 mb-4 border-b border-foreground pb-2">
                <div className="w-3 h-3 bg-destructive"></div>
                <div className="w-3 h-3 bg-secondary"></div>
                <div className="w-3 h-3 bg-success"></div>
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  COIN_KIT_TERMINAL v2.1.0
                </span>
              </div>
              
              <div className="font-mono text-sm space-y-2 text-success">
                <div>&gt; system.status: <span className="text-accent">ONLINE</span></div>
                <div>&gt; contracts.audited: <span className="text-accent">TRUE</span></div>
                <div>&gt; security.level: <span className="text-secondary">MAXIMUM</span></div>
                <div>&gt; tokens.deployed: <span className="text-accent">847,293</span></div>
                <div>&gt; funds.secured: <span className="text-secondary">$50M+</span></div>
                <div className="text-foreground">&gt; <span className="animate-pulse">_</span></div>
              </div>
            </div>
            
            {/* Glowing corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary shadow-glow"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary shadow-glow"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary shadow-glow"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary shadow-glow"></div>
          </div>
        </div>
      </div>

      {/* Terminal prompt at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-muted-foreground text-sm">
        <span className="animate-pulse">&gt; SCROLL_DOWN_TO_CONTINUE</span>
      </div>
    </section>
  );
};