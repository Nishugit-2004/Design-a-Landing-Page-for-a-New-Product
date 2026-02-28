import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-900">New Product Launch 2026</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl !leading-tight">
              Transform Your <span className="text-blue-600">Workflow</span> Today
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Revolutionize how you work with our cutting-edge platform. 
              Boost productivity by 300% and achieve results faster than ever before.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">10k+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761167899925-33ee9a55f9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwcHJvZHVjdCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE2OTQxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Product showcase"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
