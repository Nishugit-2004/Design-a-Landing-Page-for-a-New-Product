import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1770364022652-f3af53a889d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NzE2MDY2NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "This product has completely transformed how our team operates. We've seen a 300% increase in productivity and our team couldn't be happier!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    image: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTY3NTAwOHww&ixlib=rb-4.1.0&q=80&w=1080",
    content: "The best investment we've made this year. The ROI was immediate and the support team is outstanding. Highly recommend to anyone looking to scale.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director of Operations, GrowthLabs",
    image: "https://images.unsplash.com/photo-1758598306913-5cd682b9e53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzcxNjUzNzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    content: "Game-changer! The intuitive interface and powerful features have streamlined our entire workflow. We can't imagine working without it now.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-900 text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl mb-4">
            Loved by <span className="text-blue-600">Thousands</span> of Teams
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join <span className="text-blue-600">10,000+</span> happy customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
