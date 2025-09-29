import { Shield, Star, Users, CheckCircle } from "lucide-react";

const audits = [
  { name: "CERTIK", status: "VERIFIED", code: "0xAUDIT01" },
  { name: "HAECHI", status: "AUDITED", code: "0xAUDIT02" },
  { name: "OPENZEPPELIN", status: "REVIEWED", code: "0xAUDIT03" }
];

const testimonials = [
  {
    quote: "// Deployment successful in 4 minutes\n// No dev team required\n// Community token operational",
    author: "S.CHEN",
    title: "FOUNDER@DEFI_COLLECTIVE",
    id: "USER_001"
  },
  {
    quote: "// Security protocols verified\n// Audit reports comprehensive\n// Launch confidence: 100%",
    author: "M.RODRIGUEZ",
    title: "CTO@GAMEFI_PROTOCOL",
    id: "USER_002"
  },
  {
    quote: "// Cost savings: $100k+\n// Timeline improved: 6 months\n// Platform performance: EXCELLENT",
    author: "E.THOMPSON",
    title: "CEO@METAVERSE_INC",
    id: "USER_003"
  }
];

const networks = [
  { name: "ETHEREUM", status: "ACTIVE", code: "ETH" },
  { name: "POLYGON", status: "ACTIVE", code: "MATIC" },
  { name: "BSC", status: "ACTIVE", code: "BNB" },
  { name: "AVALANCHE", status: "ACTIVE", code: "AVAX" },
  { name: "FANTOM", status: "ACTIVE", code: "FTM" },
  { name: "ARBITRUM", status: "ACTIVE", code: "ARB" }
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle border-t border-foreground">
      <div className="container mx-auto px-6">
        {/* Security Audits */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-glow-orange">
            SECURITY_VERIFICATION.LOG
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-mono">
            // Smart contracts verified by leading security firms
            <br />
            // All systems operational - security level: MAXIMUM
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            {audits.map((audit, index) => (
              <div key={index} className="p-6 bg-card border border-foreground hover:border-glow-green hover:shadow-green-glow transition-all">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span className="font-mono text-xs text-muted-foreground">{audit.code}</span>
                </div>
                <div className="text-left">
                  <div className="font-mono font-bold text-foreground mb-2">{audit.name}</div>
                  <div className="flex items-center gap-2 text-success">
                    <div className="w-2 h-2 bg-success animate-pulse"></div>
                    <span className="text-sm font-mono">{audit.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-primary text-sm font-mono font-bold text-primary shadow-glow">
            <Shield className="w-5 h-5" />
            FUNDS_SECURED: $50M+
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-mono font-bold text-center text-foreground mb-12 text-glow-orange">
            USER_TESTIMONIALS.DB
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-card border border-foreground hover:border-glow-yellow hover:shadow-yellow-glow transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-secondary"></div>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{testimonial.id}</span>
                </div>
                
                <pre className="text-muted-foreground mb-6 font-mono text-sm whitespace-pre-wrap">
                  {testimonial.quote}
                </pre>
                
                <div className="border-t border-foreground pt-4">
                  <div className="font-mono font-bold text-foreground text-sm">{testimonial.author}</div>
                  <div className="text-xs font-mono text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Networks */}
        <div className="text-center">
          <h3 className="text-2xl font-mono font-bold text-foreground mb-8 text-glow-orange">
            SUPPORTED_NETWORKS.CFG
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {networks.map((network, index) => (
              <div key={index} className="p-4 bg-card border border-foreground hover:border-glow-green hover:shadow-green-glow transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-2 h-2 bg-success animate-pulse"></div>
                  <span className="font-mono text-xs text-muted-foreground">{network.code}</span>
                </div>
                <div className="font-mono text-sm font-bold text-foreground">{network.name}</div>
                <div className="font-mono text-xs text-success">{network.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};