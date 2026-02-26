import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax background elements */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Shield className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Next-Generation Coverage</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Protect Your Future with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-gray-400">
            Intelligent Financial Coverage.
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Smart insurance solutions powered by strategy, precision, and trust. 
          Experience the future of wealth protection.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <button className="animated-gradient-border group relative px-8 py-4 w-full sm:w-auto">
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors" />
          </button>
          
          <button className="px-8 py-4 rounded-full glass-card hover:bg-white/5 transition-colors w-full sm:w-auto font-medium text-gray-300 hover:text-white">
            Explore Our Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
