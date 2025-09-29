import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Which blockchains do you support?",
    answer: "We currently support Ethereum, Polygon, Binance Smart Chain, Avalanche, Fantom, and Arbitrum. We're constantly adding support for new networks based on user demand."
  },
  {
    question: "Who owns the smart contract of the created token?",
    answer: "You maintain full ownership and control of your token's smart contract. Coin Kit simply provides the tools and infrastructure to deploy and manage it. You can export your contract code at any time."
  },
  {
    question: "What are the fees?",
    answer: "Our pricing is transparent: Free plan includes 1 token creation, Pro plan is $49/month for unlimited tokens, and Business plan is $199/month with enterprise features. Network gas fees are additional and paid directly to the blockchain."
  },
  {
    question: "Is technical support available?",
    answer: "Yes! Free users get community support, Pro users get priority email support, and Business users get dedicated account management with SLA guarantees."
  },
  {
    question: "How secure are the smart contracts?",
    answer: "Our smart contracts are audited by leading security firms including CertiK and HAECHI. They've been battle-tested with over $50M in tokens deployed safely. We follow industry best practices and undergo regular security reviews."
  },
  {
    question: "Can I customize my token's functionality?",
    answer: "Absolutely! Our platform supports various token standards and features like mintable/burnable tokens, pausable contracts, access controls, and more. Business plan users can request custom smart contract modifications."
  },
  {
    question: "What happens if I want to cancel my subscription?",
    answer: "You can cancel anytime. Your existing tokens will continue to function normally as they're deployed on the blockchain. You'll retain access to basic management features, but advanced features will be limited based on your new plan."
  },
  {
    question: "Do you provide token marketing or listing services?",
    answer: "While we focus on the technical deployment and management, we have partnerships with marketing agencies and exchanges. Business plan users get access to our partner network for additional services."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@coinkit.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-muted/50 transition-colors"
            >
              📧 Email Support
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:bg-muted/50 transition-colors"
            >
              💬 Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};