import { Search, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            Empowering Every Voter
          </span>
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
            Your Guide to the <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Election Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Understanding how to vote shouldn't be difficult. CivicPulse simplifies the process with clear steps, accurate timelines, and a smart AI assistant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#how-it-works" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 group">
              Start Your Plan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#assistant" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center">
              Ask AI Assistant
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
              +2k
            </div>
          </div>
          <div className="ml-4 text-left self-center">
            <p className="text-sm font-bold text-gray-900">Join thousands of voters</p>
            <p className="text-xs text-gray-500">making their voices heard today.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
