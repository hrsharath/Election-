import { useState, useRef, useEffect } from 'react';
import { getElectionAdviceStream } from '../services/geminiService';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface Message {
  role: 'user' | 'model';
  content: string;
  feedbackSubmitted?: boolean;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! I'm your CivicPulse AI Assistant. Ask me anything about voter registration, election deadlines, or how the voting process works." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFeedback = async (messageIndex: number, helpful: boolean) => {
    const message = messages[messageIndex];
    if (message.feedbackSubmitted) return;

    try {
      await addDoc(collection(db, 'feedback'), {
        messageId: `msg_${Date.now()}_${messageIndex}`,
        helpful,
        query: messages[messageIndex - 1]?.content || 'Initial Greeting',
        timestamp: serverTimestamp(),
      });

      setMessages(prev => prev.map((m, i) => 
        i === messageIndex ? { ...m, feedbackSubmitted: true } : m
      ));
    } catch (error) {
      console.error("Feedback Error:", error);
    }
  };

  const sendMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { role: 'model', content: '' }]);
      
      let fullResponse = '';
      const stream = getElectionAdviceStream(userMessage, messages);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const last = prev[prev.length - 1];
          return [
            ...prev.slice(0, -1),
            { ...last, content: fullResponse }
          ];
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "I encountered a connection error. Please verify your internet and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    isLoading,
    scrollRef,
    sendMessage,
    handleFeedback
  };
}
