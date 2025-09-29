import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: "FAQ_001",
    question: "WHICH_BLOCKCHAINS_SUPPORTED()?",
    answer: "// SUPPORTED_NETWORKS: ['ETHEREUM', 'POLYGON', 'BSC', 'AVALANCHE', 'FANTOM', 'ARBITRUM']\n// STATUS: ALL_OPERATIONAL\n// NEW_NETWORKS: ADDED_BY_DEMAND"
  },
  {
    id: "FAQ_002", 
    question: "CONTRACT_OWNERSHIP_STATUS()?",
    answer: "// OWNER: USER_WALLET_ADDRESS\n// CONTROL: FULL_ACCESS_GRANTED\n// EXPORT: CONTRACT_CODE_AVAILABLE\n// DEPENDENCY: COIN_KIT_INFRASTRUCTURE_ONLY"
  },
  {
    id: "FAQ_003",
    question: "PRICING_STRUCTURE.GET()?",
    answer: "// FREE_PLAN: 1_TOKEN_DEPLOYMENT\n// GAS_FEES: BLOCKCHAIN_DIRECT\n// ADDITIONAL_COSTS: NETWORK_DEPENDENT\n// TRANSPARENCY: COMPLETE"
  },
  {
    id: "FAQ_004",
    question: "SUPPORT_AVAILABILITY()?",
    answer: "// COMMUNITY_SUPPORT: FREE_USERS\n// PRIORITY_EMAIL: PRO_USERS\n// DEDICATED_ACCOUNT: BUSINESS_USERS\n// SLA_GUARANTEES: ENTERPRISE_TIER"
  },
  {
    id: "FAQ_005",
    question: "SECURITY_AUDIT_STATUS()?",
    answer: "// AUDITED_BY: ['CERTIK', 'HAECHI']\n// BATTLE_TESTED: $50M+_SECURED\n// REVIEWS: REGULAR_SECURITY_UPDATES\n// STANDARDS: INDUSTRY_BEST_PRACTICES"
  },
  {
    id: "FAQ_006",
    question: "CUSTOMIZATION_OPTIONS()?",
    answer: "// TOKEN_STANDARDS: MULTIPLE_SUPPORTED\n// FEATURES: [MINTABLE, BURNABLE, PAUSABLE]\n// ACCESS_CONTROLS: GRANULAR_PERMISSIONS\n// CUSTOM_MODS: BUSINESS_PLAN_AVAILABLE"
  },
  {
    id: "FAQ_007",
    question: "SUBSCRIPTION_CANCELLATION()?",
    answer: "// CANCEL: ANYTIME_ALLOWED\n// TOKEN_STATUS: REMAINS_FUNCTIONAL\n// BLOCKCHAIN: PERMANENT_DEPLOYMENT\n// ACCESS: LIMITED_TO_BASIC_FEATURES"
  },
  {
    id: "FAQ_008",
    question: "MARKETING_SERVICES_AVAILABLE()?",
    answer: "// FOCUS: TECHNICAL_DEPLOYMENT\n// PARTNERSHIPS: MARKETING_AGENCIES\n// EXCHANGES: LISTING_PARTNERS\n// ACCESS: BUSINESS_PLAN_NETWORK"
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-subtle border-t border-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-mono font-bold text-foreground mb-6 text-glow-orange">
            FREQUENTLY_ASKED_QUESTIONS.DB
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            // Query database for common user inquiries
            <br />
            // Support team available for additional assistance
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card border border-foreground overflow-hidden hover:border-glow-yellow hover:shadow-yellow-glow transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground">[{faq.id}]</span>
                  <h3 className="text-lg font-mono font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-foreground">
                  <pre className="text-muted-foreground leading-relaxed pt-4 font-mono text-sm whitespace-pre-wrap">
                    {faq.answer}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 font-mono">
            // Additional support channels available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@coinkit.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-card border border-foreground font-mono text-foreground hover:border-glow-green hover:shadow-green-glow transition-all"
            >
              [EMAIL_SUPPORT]
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-card border border-foreground font-mono text-foreground hover:border-glow-green hover:shadow-green-glow transition-all"
            >
              [LIVE_CHAT]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};