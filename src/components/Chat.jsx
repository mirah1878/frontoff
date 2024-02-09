import React, { useState, useEffect } from 'react';
import './styles.css';

function Chat() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    function addMessage(message, sender) {
        setMessages(prevMessages => [...prevMessages, { message, sender }]);
        saveMessages();
    }

    function sendMessage() {
        const message = chatInputRef.current.value.trim();
        if (message !== '') {
            addMessage(message, 'sent');
            chatInputRef.current.value = '';
        }
    }

    function saveMessages() {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }

    function loadMessages() {
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }

    const chatInputRef = React.createRef();

    return (
        <div className="chat-container">
            <div className="chat-box" id="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.message}
                    </div>
                ))}
            </div>
            <input type="text" className="chat-input" ref={chatInputRef} placeholder="Tapez votre message..." />
            <button className="send-btn" onClick={sendMessage}>Envoyer</button>
        </div>
    );
}

export default Chat;