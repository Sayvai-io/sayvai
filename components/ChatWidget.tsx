import { useState, useEffect, useRef } from 'react';
import { FiSend, FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const updatedMessages = [...messages, `User: ${newMessage}`];
      setMessages(updatedMessages);

      const botResponse = `Bot: Welcome to Sayvai!`;
      setMessages([...updatedMessages, botResponse]);

      setNewMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-8">
      {!isOpen && (
        <button
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-[#45988e] shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          onClick={handleToggle}
        >
          <Image
            src="/images/chatbot/chatbot-logo.png"
            alt="Chatbot Logo"
            width={52}
            height={52}
          />
        </button>
      )}
      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 mx-auto sm:w-auto w-[300px] h-[380px] sm:h-[450px] flex flex-col">
          {/* Chat Header Section */}
          <div className="flex items-center justify-between bg-[#45988e] text-white py-3 px-4 rounded-t-lg">
            <div className="flex items-center">
              <Image
                src="/images/chatbot/chatbot-logo.png"
                alt="Chatbot Logo"
                width={52}
                height={52}
              />
              <span className="ml-2 text-lg sm:text-base font-semibold text-white">
                Chatbot
              </span>
            </div>
            <button
              className="flex h-12 w-12 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full border-2 border-transparent transition duration-300 ease-in-out hover:bg-[#c4cbcb] hover:bg-opacity-10"
              onClick={handleToggle}
            >
              <FiChevronDown className="text-2xl sm:text-xl text-white" />
            </button>
          </div>

          {/* Chat Body Section */}
          <div ref={chatBodyRef} className="flex-1 p-4 sm:p-2 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <Image
                  src="/images/chatbot/Chatbot-image.png"
                  alt="Chatbot Logo"
                  width={300}
                  height={300}
                  className="opacity-50 sm:w-3/4 sm:h-3/4"
                />
              </div>
            ) : (
              messages.map((message, index) => {
                const isUser = message.startsWith('User:');
                return (
                  <div
                    key={index}
                    className={`flex ${isUser ? 'justify-start' : 'justify-end'} mb-3`}
                  >
                    {isUser && (
                      <Image
                        src="/images/chatbot/user-image.jpg"
                        alt="User Profile"
                        width={32}
                        height={32}
                        className="rounded-full mr-2 w-8 h-8 flex-shrink-0"
                      />
                    )}
                    <div
                      className={`p-2 rounded-lg max-w-xs break-words ${
                        isUser ? 'bg-gray-200' : 'bg-blue-500 text-white'
                      }`}
                    >
                      {message.replace('User: ', '').replace('Bot: ', '')}
                    </div>
                    {!isUser && (
                      <Image
                        src="/images/chatbot/bot-image.png"
                        alt="Bot Profile"
                        width={32}
                        height={32}
                        className="rounded-full mr-2 w-8 h-8 flex-shrink-0"
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Chat Input Section */}
          <div className="border-t px-2 sm:px-4 py-2 sm:py-3 flex items-center bg-gray-100">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 sm:py-1 border rounded-lg mr-2"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 sm:p-1 rounded-full"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
