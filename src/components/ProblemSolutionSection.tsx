import { XCircle, CheckCircle, Clock, DollarSign, Shield } from "lucide-react";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Coin Kit?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop wrestling with complex smart contracts and expensive development teams. 
            Launch your token the smart way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before - The Old Way */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-destructive mb-4 flex items-center justify-center lg:justify-start gap-3">
                <XCircle className="w-8 h-8" />
                Before (The Old Way)
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-destructive/5 rounded-xl border border-destructive/20">
                <DollarSign className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">High Development Costs</h4>
                  <p className="text-muted-foreground">Spend $50,000+ on smart contract development and audits before even launching your token.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-destructive/5 rounded-xl border border-destructive/20">
                <Clock className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Long Development Timelines</h4>
                  <p className="text-muted-foreground">Wait 3-6 months for custom smart contract development, testing, and deployment.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-destructive/5 rounded-xl border border-destructive/20">
                <Shield className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Security Risks</h4>
                  <p className="text-muted-foreground">Custom contracts mean untested code with potential vulnerabilities and exploits.</p>
                </div>
              </div>
            </div>
          </div>

          {/* After - With Coin Kit */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-success mb-4 flex items-center justify-center lg:justify-start gap-3">
                <CheckCircle className="w-8 h-8" />
                After (With Coin Kit)
              </h3>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-success/5 rounded-xl border border-success/20">
                <DollarSign className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Affordable Launch Costs</h4>
                  <p className="text-muted-foreground">Start for free and scale with transparent pricing. Launch your token for less than $100.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-success/5 rounded-xl border border-success/20">
                <Clock className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Instant Deployment</h4>
                  <p className="text-muted-foreground">Deploy your token in minutes with our intuitive no-code interface. Go from idea to launch today.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-success/5 rounded-xl border border-success/20">
                <Shield className="w-6 h-6 text-success mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Battle-Tested Security</h4>
                  <p className="text-muted-foreground">Use audited, proven smart contracts that have handled millions in transactions safely.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};