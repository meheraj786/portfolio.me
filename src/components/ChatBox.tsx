'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Bot, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Failed');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      const assistantId = (Date.now() + 1).toString();

      setMessages(prev => [...prev, { id: assistantId, role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        assistantMessage += decoder.decode(value, { stream: true });
        setMessages(prev =>
          prev.map(m => m.id === assistantId ? { ...m, content: assistantMessage } : m)
        );
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Something went wrong. Please try again.',
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .chatbox-root * { box-sizing: border-box; }

        .chatbox-trigger {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 56px;
          height: 56px;
          background: #ffffff;
          border: 1.5px solid #e5e5e5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 9999;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          transition: box-shadow 0.18s, transform 0.18s;
          color: #111;
        }
        .chatbox-trigger:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
          transform: scale(1.06);
        }

        .chatbox-window {
          position: fixed;
          bottom: 96px;
          right: 28px;
          width: 380px;
          height: 540px;
          background: #0a0a0a;
          border: 1px solid #222;
          border-radius: 20px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.45);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 9998;
          animation: chatbox-in 0.22s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes chatbox-in {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .chatbox-header {
          padding: 18px 20px 16px;
          border-bottom: 1px solid #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0a0a0a;
          flex-shrink: 0;
        }
        .chatbox-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .chatbox-avatar {
          width: 36px;
          height: 36px;
          background: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          flex-shrink: 0;
        }
        .chatbox-header-title {
          font-size: 14px;
          font-weight: 600;
          color: #f5f5f5;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .chatbox-header-sub {
          font-size: 11px;
          color: #555;
          margin-top: 1px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .chatbox-status-dot {
          width: 6px;
          height: 6px;
          background: #4ade80;
          border-radius: 50%;
          display: inline-block;
        }
        .chatbox-close {
          background: none;
          border: none;
          color: #555;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          border-radius: 6px;
          transition: color 0.15s, background 0.15s;
        }
        .chatbox-close:hover { color: #f5f5f5; background: #1e1e1e; }

        .chatbox-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          scrollbar-width: thin;
          scrollbar-color: #222 transparent;
        }
        .chatbox-messages::-webkit-scrollbar { width: 4px; }
        .chatbox-messages::-webkit-scrollbar-track { background: transparent; }
        .chatbox-messages::-webkit-scrollbar-thumb { background: #222; border-radius: 4px; }

        .chatbox-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 24px;
          text-align: center;
        }
        .chatbox-empty-icon {
          width: 48px;
          height: 48px;
          background: #161616;
          border: 1px solid #262626;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #888;
        }
        .chatbox-empty-title {
          font-size: 14px;
          font-weight: 500;
          color: #ccc;
          letter-spacing: -0.01em;
        }
        .chatbox-empty-sub {
          font-size: 12px;
          color: #444;
          line-height: 1.6;
          max-width: 260px;
        }
        .chatbox-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
          margin-top: 4px;
        }
        .chatbox-pill {
          font-size: 11px;
          color: #555;
          background: #161616;
          border: 1px solid #262626;
          border-radius: 100px;
          padding: 4px 10px;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .chatbox-pill:hover { border-color: #555; color: #ccc; }

        .chatbox-row {
          display: flex;
          gap: 8px;
        }
        .chatbox-row.user { justify-content: flex-end; }
        .chatbox-row.assistant { justify-content: flex-start; align-items: flex-end; }

        .chatbox-bot-icon {
          width: 26px;
          height: 26px;
          background: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          flex-shrink: 0;
          margin-bottom: 2px;
        }

        .chatbox-bubble {
          max-width: 82%;
          border-radius: 16px;
          padding: 10px 14px;
          font-size: 13px;
          line-height: 1.6;
        }
        .chatbox-bubble.user {
          background: #fff;
          color: #0a0a0a;
          border-bottom-right-radius: 4px;
          font-weight: 450;
        }
        .chatbox-bubble.assistant {
          background: #161616;
          border: 1px solid #222;
          color: #d4d4d4;
          border-bottom-left-radius: 4px;
        }

        .chatbox-bubble .prose-wrap { line-height: 1.6; }
        .chatbox-bubble .prose-wrap p { margin: 0 0 6px; }
        .chatbox-bubble .prose-wrap p:last-child { margin-bottom: 0; }
        .chatbox-bubble .prose-wrap code {
          background: #222;
          padding: 1px 5px;
          border-radius: 4px;
          font-size: 11px;
          color: #e2e2e2;
        }
        .chatbox-bubble .prose-wrap pre {
          background: #111;
          border: 1px solid #222;
          border-radius: 8px;
          padding: 10px 12px;
          overflow-x: auto;
          margin: 6px 0;
        }
        .chatbox-bubble .prose-wrap pre code { background: none; padding: 0; }
        .chatbox-bubble .prose-wrap ul, .chatbox-bubble .prose-wrap ol {
          padding-left: 16px;
          margin: 4px 0;
        }
        .chatbox-bubble .prose-wrap strong { color: #f5f5f5; font-weight: 600; }
        .chatbox-bubble.user .prose-wrap strong { color: #0a0a0a; }

        .chatbox-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 14px;
        }
        .chatbox-typing span {
          width: 6px; height: 6px;
          background: #444;
          border-radius: 50%;
          animation: typing-bounce 1.2s infinite;
        }
        .chatbox-typing span:nth-child(2) { animation-delay: 0.2s; }
        .chatbox-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); background: #444; }
          30% { transform: translateY(-5px); background: #888; }
        }

        .chatbox-footer {
          padding: 12px 14px 16px;
          border-top: 1px solid #1a1a1a;
          background: #0a0a0a;
          flex-shrink: 0;
        }
        .chatbox-input-row {
          display: flex;
          gap: 8px;
          align-items: center;
          background: #111;
          border: 1px solid #262626;
          border-radius: 14px;
          padding: 4px 4px 4px 14px;
          transition: border-color 0.18s;
        }
        .chatbox-input-row:focus-within { border-color: #444; }
        .chatbox-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: #f0f0f0;
          font-size: 13px;
          padding: 8px 0;
          line-height: 1.4;
        }
        .chatbox-input::placeholder { color: #3a3a3a; }
        .chatbox-send {
          width: 34px;
          height: 34px;
          background: #fff;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.12s;
        }
        .chatbox-send:hover:not(:disabled) { background: #e5e5e5; transform: scale(1.05); }
        .chatbox-send:disabled { background: #1e1e1e; color: #333; cursor: default; }
        .chatbox-footer-note {
          font-size: 10px;
          color: #2e2e2e;
          text-align: center;
          margin-top: 8px;
          letter-spacing: 0.02em;
        }
      `}</style>

      <div className="chatbox-root">
        <button className="chatbox-trigger" onClick={() => setIsOpen(o => !o)} aria-label="Open chat">
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>

        {isOpen && (
          <div className="chatbox-window">
            <div className="chatbox-header">
              <div className="chatbox-header-left">
                <div className="chatbox-avatar">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="chatbox-header-title">Ask Meheraj</div>
                  <div className="chatbox-header-sub">
                    <span className="chatbox-status-dot" />
                    AI · Always online
                  </div>
                </div>
              </div>
              <button className="chatbox-close" onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            <div className="chatbox-messages">
              {messages.length === 0 ? (
                <div className="chatbox-empty">
                  <div className="chatbox-empty-icon">
                    <Sparkles size={22} />
                  </div>
                  <div className="chatbox-empty-title">What do you want to know?</div>
                  <div className="chatbox-empty-sub">
                    Ask about Meheraj's projects, stack, experience, or anything else.
                  </div>
                  <div className="chatbox-pills">
                    {['Projects', 'Tech stack', 'Experience', 'Contact'].map(q => (
                      <button
                        key={q}
                        className="chatbox-pill"
                        onClick={() => setInput(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map(m => (
                  <div key={m.id} className={`chatbox-row ${m.role}`}>
                    {m.role === 'assistant' && (
                      <div className="chatbox-bot-icon">
                        <Bot size={14} />
                      </div>
                    )}
                    <div className={`chatbox-bubble ${m.role}`}>
                      <div className="prose-wrap">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="chatbox-row assistant">
                  <div className="chatbox-bot-icon">
                    <Bot size={14} />
                  </div>
                  <div className="chatbox-bubble assistant">
                    <div className="chatbox-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="chatbox-footer">
              <form onSubmit={handleSubmit}>
                <div className="chatbox-input-row">
                  <input
                    ref={inputRef}
                    className="chatbox-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="chatbox-send"
                    disabled={isLoading || !input.trim()}
                    aria-label="Send"
                  >
                    <Send size={15} />
                  </button>
                </div>
              </form>
              <div className="chatbox-footer-note">Powered by AI · Meheraj's Portfolio</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}