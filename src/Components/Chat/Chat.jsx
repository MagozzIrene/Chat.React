import { useContext } from 'react';
import { MessagesContext } from '../../Context/MessagesContext';
import NewMessageForm from '../NewMessageForm/NewMessageForm';
import Message from '../Message/Message';
import './Chat.css';

const Chat = () => {
    const { messages } = useContext(MessagesContext);

    if (messages.length === 0) {
        return (
            <div>
                <span>No hay mensajes</span>
            </div>
        );
    }

    return (
        <div className='chat-container'>
            {messages.map((message) => (
                <Message 
                    key={message.id}
                    sender={message.sender}
                    id={message.id}
                    time={message.time}
                    text={message.text}
                    status={message.status}
                />
            ))}
            <NewMessageForm/>
        </div>
    );
};

export default Chat;
