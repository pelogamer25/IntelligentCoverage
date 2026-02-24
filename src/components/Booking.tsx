import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DayPicker } from 'react-day-picker';
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';
import 'react-day-picker/dist/style.css';

export default function Booking() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "03:00 PM", "04:30 PM"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-32 relative z-10" id="booking">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Secure Your Strategy Session
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light"
          >
            Select a convenient time to discuss your financial future with our expert advisors.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-6 md:p-10 max-w-5xl mx-auto relative overflow-hidden"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Session Confirmed</h3>
              <p className="text-gray-400 text-lg max-w-md">
                Your strategy session has been scheduled. We've sent a calendar invitation and details to your email.
              </p>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calendar Side */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-purple-400" />
                    Select Date
                  </h3>
                  <div className="glass-card p-4 rounded-2xl inline-block">
                    <DayPicker 
                      mode="single" 
                      selected={date} 
                      onSelect={setDate}
                      className="text-white"
                      disabled={{ before: new Date() }}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-sky-400" />
                    Select Time
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                          time === slot 
                            ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]' 
                            : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Your Details</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Phone</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Inquiry Type</label>
                    <select className="w-full bg-[#1a1f35] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none">
                      <option>Wealth Preservation</option>
                      <option>Life Insurance</option>
                      <option>Retirement Planning</option>
                      <option>Business Insurance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                      placeholder="Briefly describe your goals..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={!date || !time}
                    className="w-full animated-gradient-border py-4 mt-4 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="relative z-10 font-semibold text-white group-hover:text-white transition-colors">
                      Confirm Appointment
                    </span>
                  </button>
                </form>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
