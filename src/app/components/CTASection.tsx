import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Free 14-day trial, no credit card required",
  "Cancel anytime, no questions asked",
  "24/7 customer support included",
  "Access to all premium features"
];

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 !leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of companies already using our platform to achieve extraordinary results
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="px-8 py-4 bg-blue-700/50 border-2 border-white/30 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2">
            Talk to Sales
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-blue-100">
              <Check className="w-5 h-5 text-green-300" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
