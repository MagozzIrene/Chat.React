import React, { useState } from 'react';
import Chat from './Components/Chat/Chat';
import MessagesContextProvider from './Context/MessagesContext';
import NewMessageForm from './Components/NewMessageForm/NewMessageForm';

const App = () => {

  return (
    <MessagesContextProvider>
      <Chat/>
    </MessagesContextProvider>
  );
};

export default App;