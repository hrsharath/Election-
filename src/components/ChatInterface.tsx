import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Loader2, Sparkles, AlertCircle, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import React from 'react';
import { useChat } from '../hooks/useChat';
import { cn } from '../lib/utils';

export default function ChatInterface() {
  const { 
    messages, 
    input, 
    setInput, 
    isLoading, 
    scrollRef, 
    sendMessage, 
    handleFeedback 
  } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  return (
    <section id="assistant" className="py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
            <Sparkles size={14} /> Powered by Gemini AI
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Election Assistant</h2>
          <p className="text-gray-500">Get instant, reliable answers to all your civic questions.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-blue-900/5 flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-300">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">CivicPulse AI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Assistant</p>
                </div>
              </div>
            </div>
            {/* Database indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cloud Database Connected</span>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex",
                    m.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div className={cn(
                    "max-w-[85%] sm:max-w-[70%] flex flex-col gap-2",
                    m.role === 'user' ? 'items-end' : 'items-start'
                  )}>
                    <div className={cn(
                      "flex gap-3",
                      m.role === 'user' ? 'flex-row-reverse' : ''
                    )}>
                      <div className={cn(
                        "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center",
                        m.role === 'user' ? 'bg-gray-100 text-gray-600' : 'bg-blue-50 text-blue-600'
                      )}>
                        {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={cn(
                        "p-4 rounded-2xl text-[15px] leading-relaxed relative shadow-sm",
                        m.role === 'user' ? 'bg-gray-900 text-white rounded-tr-none' : 'bg-gray-50 text-gray-800 rounded-tl-none'
                      )}>
                        {m.role === 'model' && m.content === '' ? (
                          <div className="flex gap-1 py-1">
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          </div>
                        ) : (
                          m.content
                        )}
                      </div>
                    </div>
                    
                    {/* Feedback UI for Assistant messages (except the typing one) */}
                    {m.role === 'model' && m.content !== '' && (
                      <div className="flex items-center gap-2 ml-11">
                        {m.feedbackSubmitted ? (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 uppercase tracking-widest"><Check size={10}/> Feedback Received</span>
                        ) : (
                          <>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-1">Helpful?</span>
                            <button 
                              onClick={() => handleFeedback(i, true)}
                              className="p-1 rounded hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <ThumbsUp size={12} />
                            </button>
                            <button 
                              onClick={() => handleFeedback(i, false)}
                              className="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <ThumbsDown size={12} />
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input */}
          <div className="p-6 pt-0">
            <div className="relative mb-2">
              <div className="mb-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {['How do I register?', 'When is the deadline?', 'What is mail-in voting?'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-100 bg-gray-50 text-xs font-medium text-gray-600 hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="relative group" aria-label="Chat input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the election process..."
                aria-label="Message assistant"
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 pr-14 text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2 justify-center py-2 px-4 bg-amber-50 rounded-xl border border-amber-100">
               <AlertCircle size={14} className="text-amber-600" />
               <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest">Verify specifically with local authorities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
