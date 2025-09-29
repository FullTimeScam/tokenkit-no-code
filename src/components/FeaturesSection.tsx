import { Code, Settings, Send, Shield, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "No-Code Token Creation",
    description: "Define every aspect of your token—name, symbol, supply—through an intuitive interface, no coding necessary.",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Settings,
    title: "Integrated Management Dashboard",
    description: "Control everything from one place. Mint, burn, freeze accounts, and manage permissions with ease.",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Send,
    title: "Large-Scale Airdrops",
    description: "Securely distribute tokens to thousands of holders with just a few clicks. Bulk operations made simple.",
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    icon: Shield,
    title: "Security & Permissions",
    description: "Protect your assets with audited contracts and granular permission controls. Enterprise-grade security.",
    color: "text-primary-glow",
    bgColor: "bg-primary/5"
  },
  {
    icon: Zap,
    title: "Lightning Fast Deployment",
    description: "From concept to live token in under 5 minutes. No complex setup or technical knowledge required.",
    color: "text-accent",
    bgColor: "bg-accent/5"
  },
  {
    icon: Users,
    title: "Multi-Chain Support",
    description: "Deploy on Ethereum, Polygon, BSC, and more. One interface for all major blockchain networks.",
    color: "text-success",
    bgColor: "bg-success/5"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to Launch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make token creation and management as simple as possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-secondary rounded-full text-sm font-medium text-secondary-foreground">
            <Zap className="w-4 h-4" />
            And much more coming soon...
          </div>
        </div>
      </div>
    </section>
  );
};