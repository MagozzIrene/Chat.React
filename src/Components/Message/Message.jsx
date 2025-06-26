import React, { useContext } from "react";
import { MessagesContext } from "../../Context/MessagesContext";
import '../Chat/Chat.css'

export default function Message({ sender, time, id, text, status }) {
    const { handleDeleteMessage } = useContext(MessagesContext);

    return (
        <div className="messages-container">
            <div key={id} className={`message ${sender}`}>
                <div className='message-content'>
                    <p className='message-text'>{text}</p>
                    <div className='message-meta'>
                        <span className='message-time'>{time}</span>
                        {sender === 'own' && (
                            <span className={`message-status ${status}`}>
                                {status === 'read' ? '✓✓' : 
                                status === 'no-read' ? '✓' : '⌛'}
                            </span>
                        )}
                        <button onClick={() => handleDeleteMessage(id)} className='delete-btn'>x</button>
                    </div>
                </div>
            </div>
        </div>
    );    
}
