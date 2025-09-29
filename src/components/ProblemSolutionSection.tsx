import { XCircle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle border-t border-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-glow-orange">
            PROTOCOL_COMPARISON.LOG
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            // Analyzing legacy deployment methods vs. modern automation
            <br />
            // WARNING: Old methods detected as INEFFICIENT
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before - The Old Way */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-mono font-bold text-destructive mb-4 flex items-center justify-center lg:justify-start gap-3 text-glow-orange">
                <XCircle className="w-8 h-8" />
                [LEGACY_METHODS]
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-destructive hover:shadow-glow transition-all">
                <DollarSign className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-orange">HIGH_COST_OVERHEAD</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; dev_cost: $50,000+
                    <br />
                    &gt; audit_fees: $25,000+
                    <br />
                    &gt; total_expense: CRITICAL
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-destructive hover:shadow-glow transition-all">
                <Clock className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-orange">DEPLOYMENT_TIMEOUT</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; timeline: 3-6 months
                    <br />
                    &gt; testing_phase: 4-8 weeks
                    <br />
                    &gt; status: DELAYED
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-destructive hover:shadow-glow transition-all">
                <Shield className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-orange">SECURITY_RISK_HIGH</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; custom_code: UNTESTED
                    <br />
                    &gt; vulnerabilities: UNKNOWN
                    <br />
                    &gt; exploit_risk: MAXIMUM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* After - With Coin Kit */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-mono font-bold text-success mb-4 flex items-center justify-center lg:justify-start gap-3 text-glow-green">
                <CheckCircle className="w-8 h-8" />
                [COIN_KIT_PROTOCOL]
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-success hover:border-glow-green hover:shadow-green-glow transition-all">
                <DollarSign className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-green">COST_OPTIMIZED</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; deployment_cost: &lt;$100
                    <br />
                    &gt; setup_fee: $0
                    <br />
                    &gt; efficiency: MAXIMUM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-success hover:border-glow-green hover:shadow-green-glow transition-all">
                <Clock className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-green">INSTANT_EXECUTION</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; deploy_time: &lt;5 minutes
                    <br />
                    &gt; testing: AUTOMATED
                    <br />
                    &gt; status: READY_NOW
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-success hover:border-glow-green hover:shadow-green-glow transition-all">
                <Shield className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-mono font-bold text-foreground mb-2 text-glow-green">SECURITY_VERIFIED</h4>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; audits_complete: TRUE
                    <br />
                    &gt; funds_secured: $50M+
                    <br />
                    &gt; exploit_risk: MINIMAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};