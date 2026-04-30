import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-gray-900">CivicPulse</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              A non-partisan tool designed to make democracy accessible to everyone through smart AI and clear information. Your vote is your voice.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Github size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition-all">
                <Linkedin size={18} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Voter Registration</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Polling Locations</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Election Timelines</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Sample Ballots</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2026 CivicPulse Project. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            Created with <Heart size={12} className="text-red-400 fill-red-400" /> for the 2026 Challenge.
          </div>
        </div>
      </div>
    </footer>
  );
}
