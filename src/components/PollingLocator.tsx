import { MapPin, Search, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function PollingLocator() {
  const [zip, setZip] = useState('');

  return (
    <section id="locator" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              <MapPin size={12} /> Google Maps Integration
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Find Your Closest <span className="text-blue-600">Polling Station</span></h2>
            <p className="text-lg text-gray-500 mb-8 border-l-4 border-blue-500 pl-6">
              Knowing where to vote is half the battle. Use our locator to find verified voting sites, ballot drop boxes, and early voting centers near you.
            </p>
            
            <div className="flex gap-2 max-w-md">
              <input 
                type="text" 
                placeholder="Enter Zip Code" 
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none focus:border-blue-500 transition-all"
              />
              <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                <Search size={20} />
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
               <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Sites Updated Hourly</span>
               <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Official Registry Data</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square lg:aspect-video bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl relative group"
          >
             {/* Simulating a Google Map with a high-quality visualization or real embed if possible */}
             <iframe 
               src={`https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=polling+locations+${zip || 'USA'}`}
               className="w-full h-full grayscale-[0.2] contrast-[1.1]"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Polling Site Locator Map"
             ></iframe>
             
             <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-blue-900/0 transition-all"></div>
             
             <div className="absolute bottom-6 right-6">
                <a 
                  href={`https://www.google.com/maps/search/polling+locations+${zip}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform text-sm"
                >
                  Open in Google Maps <ExternalLink size={16} />
                </a>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
