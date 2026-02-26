import { motion } from 'motion/react';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-14 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-sky-400 opacity-50" />
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Redefining Financial Security</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              We leverage advanced analytics and strategic foresight to build robust insurance portfolios. Our mission is to provide clarity in a complex financial landscape, ensuring your legacy is protected against any uncertainty.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Target, title: "Precision Strategy", desc: "Tailored coverage based on deep financial modeling." },
                { icon: ShieldCheck, title: "Uncompromising Trust", desc: "Fiduciary-level commitment to your best interests." },
                { icon: TrendingUp, title: "Dynamic Adaptation", desc: "Policies that evolve with your life and the market." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-500/10 transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] rounded-3xl glass-card overflow-hidden flex items-center justify-center"
          >
            {/* Abstract Financial Graphics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1)_0%,transparent_70%)]" />
            
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Chart Lines */}
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <motion.path
                  d="M 10 90 Q 30 80 50 50 T 90 10"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 10 90 Q 40 60 60 40 T 90 30"
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.5)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#38bdf8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Elements */}
              <motion.div 
                className="absolute top-1/4 right-1/4 glass-card p-4 rounded-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-gray-400 mb-1">Portfolio Growth</div>
                <div className="text-xl font-bold text-white">+24.8%</div>
              </motion.div>

              <motion.div 
                className="absolute bottom-1/3 left-1/4 glass-card p-4 rounded-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs text-gray-400 mb-1">Risk Mitigation</div>
                <div className="text-xl font-bold text-emerald-400">Optimal</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
