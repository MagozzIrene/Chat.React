import React from 'react';
import './Chat.css';

const Chat = ({mensajes, onEliminar}) => {
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
                            <button onClick={() => onEliminar(mensaje.id)} className='delete-btn'>x</button>
                        </div>
                    </div>
                </div>
            )) 
            }
        </div>
    )
}

export default Chat
