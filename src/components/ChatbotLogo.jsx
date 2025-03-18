// src/components/ChatbotIcon.js
import React from 'react';
import botImage from '../assets/chatbot.png';

const ChatbotIcon = () => {
    const handleRedirect = () => {
        window.location.href = 'http://localhost:8501';
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 animate-subtle-bounce">
            {/* Chatbot Icon */}
            <img
                src={botImage}
                alt="Chatbot"
                className="
                    w-16 h-16 sm:w-32 sm:h-32 
                    drop-shadow-lg cursor-pointer 
                    hover:scale-110 
                    transition-transform duration-300
                "
                onClick={handleRedirect}
            />
        </div>
    );
};

export default ChatbotIcon;
