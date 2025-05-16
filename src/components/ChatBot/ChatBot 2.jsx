import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "hey, it's me aisha! what's up? ask me anything or just say hi :)",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      
      // Simulate typing delay
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', content: data.response }]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later." 
      }]);
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? '×' : '💬'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className={styles.chatHeader}>
              <img src="/aisha.png" alt="Aisha" className={styles.avatar} />
              <div className={styles.headerInfo}>
                <h3>Aisha's AI</h3>
                <span className={styles.status}>Online</span>
              </div>
            </div>

            <div className={styles.messagesContainer}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`${styles.message} ${styles[message.type]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message.type === 'bot' && (
                    <img src="/aisha.png" alt="Aisha" className={styles.messageAvatar} />
                  )}
                  <div className={styles.messageContent}>{message.content}</div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className={`${styles.message} ${styles.bot}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <img src="/aisha.png" alt="Aisha" className={styles.messageAvatar} />
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Aisha..."
                className={styles.input}
              />
              <button type="submit" className={styles.sendButton}>
                →
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 