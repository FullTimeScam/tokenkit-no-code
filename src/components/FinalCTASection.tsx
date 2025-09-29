import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Zap } from "lucide-react";

// Particle component for background effect
const Particles = () => {
  return (
    <div className="particles">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden border-t border-foreground">
      <Particles />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-mono font-bold text-foreground leading-tight flicker">
              READY TO INITIALIZE{" "}
              <span className="text-primary text-glow-orange">
                TOKEN_ECONOMY.EXE
              </span>
              ?
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-mono">
              // Join 847,293+ deployed tokens
              <br />
              // Secure protocol with $50M+ protected
              <br />
              // Initialize your Web3 project now
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="terminal" size="xl" className="group text-lg px-12 py-4">
                [EXECUTE_DEPLOYMENT]
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-muted-foreground text-sm font-mono">
                // CREDIT_CARD_REQUIRED: FALSE
              </p>
            </div>

            {/* System status indicators */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-foreground">
              <div className="text-center">
                <div className="w-16 h-16 bg-card border border-foreground flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2 text-glow-orange">
                  DEPLOY_TIME
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  &lt; 300 SECONDS
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-card border border-foreground flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2 text-glow-yellow">
                  SECURITY_LEVEL
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  MAXIMUM
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-card border border-foreground flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2 text-glow-green">
                  CODE_REQUIRED
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  ZERO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terminal corners */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary shadow-glow"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary shadow-glow"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary shadow-glow"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary shadow-glow"></div>
    </section>
  );
};