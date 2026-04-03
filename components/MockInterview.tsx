'use client';

import React, { useState, useEffect } from 'react';
import { checkRateLimit, incrementQueryCount } from '@/lib/rateLimit';

interface MockInterviewProps {
  category: string;
  interviewName: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const MockInterview: React.FC<MockInterviewProps> = ({ category, interviewName }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [queriesRemaining, setQueriesRemaining] = useState(10);
  const [limitReached, setLimitReached] = useState(false);
  const [mode] = useState<'chat' | 'mock'>('chat');

  useEffect(() => {
    const initialize = async () => {
      const { allowed, remaining } = checkRateLimit();
      setQueriesRemaining(remaining);
      if (!allowed) {
        setLimitReached(true);
        return;
      }

      const initialMessage: Message = {
        role: 'assistant',
        content: `Namaste! 🙏 Main InterviewGuru hoon. ${interviewName} ke liye aapki preparation mein help karunga!

Aap ye kar sakte ho:
1. Koi bhi interview question poochho
2. Mock interview shuru karo
3. Apna answer do - main feedback dunga

Aaj ${remaining}/10 practice sessions bache hain. Shuru karte hain! 💪`
      };
      setMessages([initialMessage]);
    };

    initialize();
  }, [interviewName]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading || limitReached) return;
    
    const { allowed, remaining } = checkRateLimit();
    if (!allowed) {
      setLimitReached(true);
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);
    
    setMessages(prev => [...prev, { 
      role: 'user', 
      content: userMessage 
    }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          category: category,
          language: 'hindi'
        })
      });

      const data = await response.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.reply 
        }]);
        incrementQueryCount();
        const { remaining: newRemaining } = checkRateLimit();
        setQueriesRemaining(newRemaining);
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: 'Kuch gadbad hui! Dobara try karo.' 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Network error! Internet check karo.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (limitReached) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <span className="mr-2">🤖</span> AI Interview Coach
        </h3>
        <div className="text-center">
          <p className="text-lg mb-4">Aaj ki practice limit ho gayi! 🙏</p>
          <p className="text-sm text-gray-600 mb-4">Kal wapas aao aur practice karo</p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-sm">
              InterviewGuru AI se interview preparation easy ho gayi! Free hai: https://interview-guru-ai.vercel.app
            </p>
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              onClick={() => {
                const text = encodeURIComponent('InterviewGuru AI se interview preparation easy ho gayi! Free hai: https://interview-guru-ai.vercel.app');
                window.open(`https://wa.me/?text=${text}`, '_blank');
              }}
            >
              Share on WhatsApp 📱
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow">
      <h3 className="text-xl font-bold mb-2 flex items-center">
        <span className="mr-2">🤖</span> AI Interview Coach
      </h3>
      <p className="text-sm text-gray-600 mb-4">Apna jawab do, main feedback dunga</p>

      <div className="h-80 overflow-y-auto border border-gray-200 rounded p-4 mb-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-4 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-xs lg:max-w-md ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-blue-200 text-gray-800'
            }`}>
              <p className="whitespace-pre-wrap">{msg.content}</p>
              {msg.role === 'assistant' && (
                <p className="text-xs text-gray-500 mt-2">💡 Practice makes perfect!</p>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-white border border-blue-200 text-gray-800">
              <p>InterviewGuru soch raha hai... 🤔</p>
            </div>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500 mb-2">
        {queriesRemaining}/10 sessions today
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Question poochho ya apna answer likho..."
          className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !input.trim()}
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MockInterview;