import { Vote, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Vote className="text-white" size={20} />
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-gray-900">CivicPulse</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#assistant" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">AI Assistant</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Find Polling Site
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 absolute top-16 left-0 right-0 p-4 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            <a href="#how-it-works" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>How it Works</a>
            <a href="#assistant" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>AI Assistant</a>
            <a href="#faq" className="text-lg font-medium text-gray-900" onClick={() => setIsOpen(false)}>FAQ</a>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium">Find Polling Site</button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
