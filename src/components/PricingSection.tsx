import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for testing and small projects",
    icon: Zap,
    features: [
      "1 token creation",
      "Basic management dashboard",
      "Community support",
      "Standard templates",
      "Up to 100 holders"
    ],
    limitations: [
      "Limited airdrops (100 recipients)",
      "Basic analytics"
    ],
    cta: "Get Started",
    popular: false,
    color: "border-border"
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For growing projects and communities",
    icon: Crown,
    features: [
      "Unlimited token creation",
      "Advanced management dashboard",
      "Priority support",
      "Custom templates",
      "Unlimited holders",
      "Advanced airdrops (10,000 recipients)",
      "Detailed analytics",
      "Multi-chain deployment",
      "API access"
    ],
    limitations: [],
    cta: "Start Pro Trial",
    popular: true,
    color: "border-primary"
  },
  {
    name: "Business",
    price: "$199",
    period: "per month",
    description: "For enterprises and large-scale projects",
    icon: Rocket,
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Unlimited airdrops",
      "Advanced security features",
      "SLA guarantee",
      "Custom smart contracts",
      "Compliance tools"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    color: "border-accent"
  }
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your project's needs. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 ${plan.color} bg-card hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-105 shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations.map((limitation, limitationIndex) => (
                  <div key={limitationIndex} className="flex items-center gap-3 opacity-60">
                    <div className="w-5 h-5 border border-muted-foreground rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full" 
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            All plans include our core security features and 99.9% uptime guarantee
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-success">
            <Check className="w-4 h-4" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};