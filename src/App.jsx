import React, { useState } from 'react';
import Chat from './Components/Chat';

const App = () => {
  const [mensajes, setMensajes] = useState ([
    {
      emisor: 'YO',
      hora: '23:10',
      id: 1,
      texto: 'Hola que tal?',
      status: 'visto'
    },
    {
      emisor: 'USUARIO',
      hora: '23:11',
      id: 2,
      texto: 'Si, hoy aprendi estados',
      status: 'visto'
    },
    {
      emisor: 'YO',
      hora: '23:12',
      id: 3,
      texto: 'Eso que significa 🤓?',
      status: 'no-visto'
    },
    {
      emisor: 'YO',
      hora: '23:13',
      id: 4,
      texto: 'Estas ahi?',
      status: 'no-recibido'
    },
  ]);

  const [nuevoMensaje, setNuevoMensaje] = useState ('')

  const eliminarMensaje = (id) => {
    const filtrados = mensajes.filter(m => m.id !== id)
    setMensajes(filtrados)
  }
  
  const agregarMensaje =  (e) => {
    e.preventDefault()

    if(nuevoMensaje.trim() === '') return

    const mensajeNuevo = {
      emisor: 'YO',
      hora: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
      id: Date.now(),
      texto: nuevoMensaje,
      status: 'no-visto'
    }

    setMensajes([...mensajes, mensajeNuevo])
    setNuevoMensaje('')
  }

  return (
    <div className="app">
      <div className="messages-container">
        <Chat mensajes={mensajes} onEliminar={eliminarMensaje} />
      </div>
      
      <form onSubmit={agregarMensaje} className="chat-form">
        <input
          type="text"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="chat-input"
        />
        <button type="submit" className="chat-submit">
          ✓
        </button>
      </form>
    </div>
  );
};

export default App;