import { motion } from 'motion/react';
import { ELECTION_STEPS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { cn } from '../lib/utils';

export default function Timeline() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Election Roadmap</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-sans">A step-by-step breakdown of your journey from registration to result certification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {ELECTION_STEPS.map((step, index) => {
            const Icon = (LucideIcons as any)[step.icon];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all group overflow-hidden"
              >
                {index < ELECTION_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-[40px] left-[calc(100%-12px)] w-full h-[1px] border-t-2 border-dashed border-gray-200 z-0"></div>
                )}
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300",
                    "group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6"
                  )}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">{step.date}</span>
                  <h3 className="font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                   <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                    0{index + 1}
                   </div>
                   {step.id === 'vote' ? (
                     <a 
                       href="https://www.google.com/search?q=polling+locations+near+me" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                     >
                       Find Sites <LucideIcons.ExternalLink size={10} />
                     </a>
                   ) : (
                     <button className="text-xs font-bold text-blue-600 hover:underline">Learn More →</button>
                   )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
