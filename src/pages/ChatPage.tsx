// src/pages/ChatPage.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatPageProps {
  lawyerType: 'civil' | 'criminal';
}

const ChatPage: React.FC<ChatPageProps> = ({ lawyerType }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text:
        lawyerType === 'civil'
          ? "Hello! I'm your Civil Law AI assistant. How can I help you with your civil legal matter today?"
          : "Hello! I'm your Criminal Law AI assistant. How can I help you with your criminal legal matter today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Ref to scroll into view
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto‐scroll on every new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    const content = input.trim();
    if (!content) return;
    // add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('https://web-production-bceb.up.railway.app/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: content }),
      });
      const data = await res.json();
      const aiMsg: ChatMessage = {
        id: Date.now().toString() + '-ai',
        text: data.answer || 'Sorry, I could not find an answer.',
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + '-err',
          text: '❌ Error communicating with backend.',
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 w-full max-w-md h-[80vh] bg-gray-50 shadow-xl rounded-xl flex flex-col z-50">
      {/* header */}
      <header className="flex items-center justify-between bg-white px-4 py-3 border-b">
        <Link to="/" className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={24} />
        </Link>
        <h2 className="text-lg font-semibold text-primary-600">
          {lawyerType === 'civil' ? 'Civil Law Chat' : 'Criminal Law Chat'}
        </h2>
        <div className="w-6" />
      </header>

      {/* messages */}
      <main className="flex-1 overflow-y-auto px-4 py-6 pb-24">
        <div className="flex flex-col space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`max-w-[75%] break-words p-4 rounded-lg shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-primary-600 text-white self-end ml-auto'
                  : 'bg-white text-gray-800 self-start mr-auto border border-gray-200'
              }`}
            >
              {msg.sender === 'ai' ? (
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="leading-relaxed" {...props} />
                    ),
                  }}
                >
                  {msg.text}
                </ReactMarkdown>
              ) : (
                <p>{msg.text}</p>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 self-start mr-auto">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
              />
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
              />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* floating input box */}
      <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3 border-t">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your legal query..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
          />
          <button
            onClick={handleSend}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-transform active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
