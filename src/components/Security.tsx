import { motion } from 'motion/react';
import { Lock, ShieldCheck, FileText, Server } from 'lucide-react';

export default function Security() {
  return (
    <section className="py-24 relative z-10 bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
              <Lock className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Bank-Grade Security</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromising Data Protection</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              We employ military-grade encryption and stringent privacy protocols to ensure your financial data remains strictly confidential and secure at all times.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Server, title: "AES-256 Encryption", desc: "Data encrypted at rest and in transit." },
                { icon: ShieldCheck, title: "SOC 2 Type II", desc: "Certified operational security." },
                { icon: FileText, title: "Strict Privacy", desc: "We never sell your personal data." },
                { icon: Lock, title: "Zero Trust Architecture", desc: "Continuous verification protocols." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Animated Lock Graphic */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_60%)]" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 glass-card p-12 rounded-full border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            >
              <Lock className="w-24 h-24 text-emerald-400" strokeWidth={1} />
              
              {/* Orbiting particles */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-emerald-500/30"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
                <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_10px_#38bdf8]" />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
