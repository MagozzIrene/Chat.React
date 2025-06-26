import { useState, useContext } from 'react'
import { MessagesContext } from '../../Context/MessagesContext'
import '../Chat/Chat.css'

const NewMessageForm = () => {
    const [newMessage, setNewMessage] = useState('')
    const { addNewMessage } = useContext(MessagesContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (newMessage.trim() === '') return
        addNewMessage(newMessage)
        setNewMessage('')
    }

    return (
        <form onSubmit={handleSubmit} className="chat-form">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="chat-input"
            />
            <button type="submit" className="chat-submit">✓</button>
        </form>
    )
}

export default NewMessageForm
