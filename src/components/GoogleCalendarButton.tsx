import { Calendar, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function GoogleCalendarButton() {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const text = 'Election Day';
    const dates = '20261103T070000Z/20261103T200000Z';
    const details = 'Be sure to check your polling location and bring valid ID. Your voice matters!';
    const location = 'Your local polling station';
    
    const url = `${baseUrl}&text=${encodeURIComponent(text)}&dates=${dates}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(url, '_blank');
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[60] hidden md:block">
      <AnimatePresence mode="wait">
        {added ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-green-500"
          >
            <Check size={20} />
            <span className="font-bold text-sm">Added to Google Calendar!</span>
          </motion.div>
        ) : (
          <motion.button
            key="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className="group relative bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors"></div>
            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <Calendar size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Don't Forget</p>
              <p className="font-bold text-sm">Save Election Day</p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
