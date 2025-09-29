import { Shield, Star, Users, CheckCircle } from "lucide-react";

const audits = [
  { name: "CertiK", status: "Verified", logo: "🛡️" },
  { name: "HAECHI", status: "Audited", logo: "🔍" },
  { name: "OpenZeppelin", status: "Reviewed", logo: "🔐" }
];

const testimonials = [
  {
    quote: "Thanks to Coin Kit, we successfully launched our community token in under a week without a development team.",
    author: "Sarah Chen",
    title: "Founder, DeFi Collective",
    rating: 5
  },
  {
    quote: "The security features and audit reports gave us complete confidence in our token launch.",
    author: "Michael Rodriguez",
    title: "CTO, GameFi Protocol",
    rating: 5
  },
  {
    quote: "Incredible platform! We saved over $100k in development costs and launched months ahead of schedule.",
    author: "Emma Thompson",
    title: "CEO, MetaVerse Inc",
    rating: 5
  }
];

const partners = [
  "🚀 Polygon", "⚡ Ethereum", "🌟 Binance Smart Chain", 
  "💎 Avalanche", "🔥 Fantom", "🌊 Arbitrum"
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Security Audits */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Global-Standard Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our smart contracts are audited by leading security firms and trusted by thousands of projects
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {audits.map((audit, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border shadow-md">
                <div className="text-3xl">{audit.logo}</div>
                <div className="text-left">
                  <div className="font-bold text-foreground">{audit.name}</div>
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">{audit.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary rounded-full text-primary-foreground font-semibold shadow-lg">
            <Shield className="w-5 h-5" />
            $50M+ in Tokens Secured
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Trusted by Innovators Worldwide
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-card rounded-xl border border-border shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Supported Networks
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="px-6 py-3 bg-card rounded-lg border border-border text-foreground font-medium shadow-sm hover:shadow-md transition-shadow">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};