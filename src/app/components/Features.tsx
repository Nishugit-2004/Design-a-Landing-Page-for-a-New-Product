import { Zap, Shield, Layers, TrendingUp, Users, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized infrastructure. Load times reduced by 90%."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to keep your data safe and compliant."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 1000+ tools and services. Works with your existing workflow effortlessly."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Real-time insights and detailed reports to help you make data-driven decisions."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together in real-time with powerful collaboration features built for teams."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our expert team is always available to help you succeed, whenever you need us."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm mb-4">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Everything You Need to <span className="text-blue-600">Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Powerful features designed to help you work smarter, not harder
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
