import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Shield, Zap } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMC41TDMyIDMyLjVNMzIgMC41TDAgMzIuNSIgc3Ryb2tlPSJyZ2IoMjU1IDI1NSAyNTUgLyAwLjA1KSIvPgo8L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                Token Economy?
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-3xl mx-auto">
              Join thousands of projects that have successfully launched their tokens with Coin Kit. 
              Your Web3 journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="xl" className="group text-lg px-12 py-4">
                Get Started Now
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-primary-foreground/70 text-sm">
                No credit card required to start
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Launch in Minutes
                </h3>
                <p className="text-primary-foreground/70">
                  From idea to deployed token in under 5 minutes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Bank-Grade Security
                </h3>
                <p className="text-primary-foreground/70">
                  Audited contracts trusted by millions
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                  Zero Code Required
                </h3>
                <p className="text-primary-foreground/70">
                  Intuitive interface, no technical skills needed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-glow/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};