import { createContext, useState } from "react";

export const MessagesContext = createContext();

const MessagesContextProvider = ({ children }) => {
    const [messages, setMessages] = useState([
        {
            sender: "own",
            time: "23:10",
            id: 1,
            text: "Hola que tal?",
            status: "read",
        },
        {
            sender: "other",
            time: "23:11",
            id: 2,
            text: "Si, hoy aprendi estados",
            status: "read",
        },
        {
            sender: "own",
            time: "23:12",
            id: 3,
            text: "Eso que significa 🤓?",
            status: "no-read",
        },
        {
            sender: "own",
            time: "23:13",
            id: 4,
            text: "Estas ahi?",
            status: "no-send",
        },
    ]);

    const handleDeleteMessage = (id_message) => {
        const filteredMessages = messages.filter(message => message.id !== id_message)
        setMessages(filteredMessages)
    }

    const addNewMessage = (text) => {
        const messageToAdd = {
            sender: 'own',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            id: Date.now(),
            text: text,
            status: 'no-read'
        }
        setMessages(prev => [...prev, messageToAdd])
    }

    return (
    <MessagesContext.Provider
        value={
            {
                messages: messages,
                addNewMessage: addNewMessage,
                handleDeleteMessage: handleDeleteMessage
            }
        }>
        {children}
    </MessagesContext.Provider>
)

}

export default MessagesContextProvider