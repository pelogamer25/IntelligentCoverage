import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "Tech Executive",
    content: "Their strategic approach to wealth preservation gave me peace of mind. The process was seamless, transparent, and highly personalized to my complex portfolio.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Business Owner",
    content: "I've worked with several firms, but the level of precision and technological integration here is unmatched. They truly understand modern financial risks.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Surgeon",
    content: "Protecting my family's future was my top priority. The team crafted a life insurance strategy that perfectly aligned with our long-term goals.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Client Success Stories
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[300px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ 
                opacity: index === currentIndex ? 1 : 0,
                x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                scale: index === currentIndex ? 1 : 0.9,
                zIndex: index === currentIndex ? 10 : 0
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="glass-card p-10 md:p-14 rounded-3xl h-full flex flex-col justify-center items-center text-center relative">
                <Quote className="absolute top-8 left-8 w-12 h-12 text-white/5" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-semibold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-purple-500' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
