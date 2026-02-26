import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const metrics = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Clients Protected", value: 10, suffix: "k+" },
  { label: "Assets Secured", value: 5.2, suffix: "B", prefix: "$" },
  { label: "Claims Processed", value: 99.9, suffix: "%" }
];

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 0.5;
      
      const timer = setInterval(() => {
        start += (end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      {prefix}{Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Background Animated Grid */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center relative z-10">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center"
              >
                <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                <span className="text-sm md:text-base text-gray-400 mt-4 uppercase tracking-wider font-medium">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
