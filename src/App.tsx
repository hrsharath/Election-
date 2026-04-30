/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ChatInterface from './components/ChatInterface';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <ChatInterface />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
