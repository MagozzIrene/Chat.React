import React from 'react';
import './Chat.css';

const Chat = ({mensajes}) => {
    return (
        <div className='chat-container'>
            {mensajes.map((mensaje) => (
                <div
                    key={mensaje.id}
                    className={`message ${mensaje.emisor.toLowerCase()}`}
                >
                    <div className='message-content'>
                        <p className='message-text'>{mensaje.texto}</p>
                        <div className='message-meta'>
                            <span className='message-time'>{mensaje.hora}</span>
                            {mensaje.emisor === 'YO' && (
                                <span className={`message-status ${mensaje.status}`}>
                                    {mensaje.status === 'visto' ? '✓✓' : 
                                    mensaje.status === 'no-visto' ? '✓' : ''}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            )) 
            }
        </div>
    )
}

export default Chat
