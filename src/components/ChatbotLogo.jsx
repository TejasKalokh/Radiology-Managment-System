// src/components/ChatbotIcon.js
import React from 'react';
import botImage from '../assets/chatbot.png'; // Place your image in the 'assets' folder

const ChatbotIcon = () => {
    return (
        <div className="fixed bottom-4 left-4 cursor-pointer animate-float z-50">
            <img
                src={botImage}
                alt="Chatbot"
                className="w-16 h-16 sm:w-32 sm:h-32 drop-shadow-lg hover:scale-110 transition-transform duration-300"
            />

        </div>
    );
};

export default ChatbotIcon;
