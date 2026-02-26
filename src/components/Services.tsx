import { motion } from 'motion/react';
import { HeartPulse, PiggyBank, Shield, Landmark, Activity, Briefcase } from 'lucide-react';

const services = [
  { icon: HeartPulse, title: "Life Insurance", desc: "Comprehensive coverage designed to secure your family's future and legacy." },
  { icon: PiggyBank, title: "Retirement Planning", desc: "Strategic wealth accumulation for a stress-free and prosperous retirement." },
  { icon: Shield, title: "Investment Protection", desc: "Safeguard your market investments against unprecedented volatility." },
  { icon: Landmark, title: "Wealth Preservation", desc: "Advanced estate planning and tax-efficient wealth transfer strategies." },
  { icon: Activity, title: "Risk Management", desc: "Proactive identification and mitigation of personal and financial risks." },
  { icon: Briefcase, title: "Business Insurance", desc: "Robust protection for your enterprise, key personnel, and assets." }
];

export default function Services() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Intelligent Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light"
          >
            A holistic approach to financial security, tailored to your unique aspirations and risk profile.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-gray-300 group-hover:text-purple-400 transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {service.desc}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-px rounded-3xl border border-transparent group-hover:border-purple-500/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
