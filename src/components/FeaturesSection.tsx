import { Code, Settings, Send, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "NO_CODE_INTERFACE",
    description: "// Initialize token parameters via GUI\n// No programming knowledge required\n// Deploy contracts instantly",
    command: "INIT_TOKEN_CREATION()",
    color: "text-primary",
    glowColor: "border-glow-orange"
  },
  {
    icon: Settings,
    title: "MANAGEMENT_CONSOLE",
    description: "// Centralized control dashboard\n// Execute mint/burn operations\n// Manage permissions & access",
    command: "ACCESS_CONTROL_PANEL()",
    color: "text-secondary",
    glowColor: "border-glow-yellow"
  },
  {
    icon: Send,
    title: "MASS_DISTRIBUTION",
    description: "// Bulk airdrop protocols\n// Process thousands of transactions\n// Automated batch operations",
    command: "EXECUTE_AIRDROP()",
    color: "text-success",
    glowColor: "border-glow-green"
  },
  {
    icon: Shield,
    title: "SECURITY_PROTOCOLS",
    description: "// Audited smart contracts\n// Multi-layer permission system\n// Enterprise-grade protection",
    command: "VERIFY_SECURITY()",
    color: "text-primary",
    glowColor: "border-glow-orange"
  },
  {
    icon: Zap,
    title: "RAPID_DEPLOYMENT",
    description: "// Complete deployment < 300 seconds\n// Zero technical configuration\n// Instant blockchain integration",
    command: "FAST_DEPLOY_MODE()",
    color: "text-secondary",
    glowColor: "border-glow-yellow"
  },
  {
    icon: Users,
    title: "MULTI_CHAIN_SUPPORT",
    description: "// Cross-chain compatibility\n// Universal deployment interface\n// Single point of management",
    command: "SELECT_BLOCKCHAIN()",
    color: "text-success",
    glowColor: "border-glow-green"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background border-t border-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-glow-orange">
            SYSTEM_CAPABILITIES.EXE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            // Loading advanced token deployment modules...
            <br />
            // All systems operational and ready for deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-6 border border-foreground bg-card hover:${feature.glowColor} hover:shadow-glow transition-all duration-150`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <div className="w-2 h-2 bg-success animate-pulse"></div>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
              </div>
              
              <h3 className="text-lg font-mono font-bold text-foreground mb-4 tracking-wider">
                {feature.title}
              </h3>
              
              <pre className="text-muted-foreground text-sm font-mono leading-relaxed mb-4 whitespace-pre-wrap">
                {feature.description}
              </pre>

              <div className="border-t border-foreground pt-4">
                <code className="text-xs font-mono text-success">
                  &gt; {feature.command}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-secondary text-sm font-mono font-bold text-secondary">
            <Zap className="w-4 h-4" />
            [ADDITIONAL_MODULES_LOADING...]
          </div>
        </div>
      </div>
    </section>
  );
};