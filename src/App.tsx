/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import PollingLocator from './components/PollingLocator';
import ChatInterface from './components/ChatInterface';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-[100]">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Timeline />
        <PollingLocator />
        <ChatInterface />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
