import React, { useEffect, useState, useRef } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socketRef = useRef(new WebSocket('ws://localhost:3000/web_socket/connect'));

  useEffect(() => {
    const socket = socketRef.current;

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.addEventListener('user_join', (event) => {
      const data = JSON.parse(event.data);
      console.log(`${data.username} joined from ${data.location}`);
    }, false);

    socket.addEventListener('error', (event) => {
      console.error('WebSocket Error:', event);
    });

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    const newMessageObj = {
      username: 'You', // Set the username as needed
      content: newMessage,
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObj]);

    const socket = socketRef.current;
    
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ content: newMessage }));
      setNewMessage('');
    } else {
      console.error('WebSocket is not open');
    }
  };

  return (
    <div>
      <h1>Local Chat App</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.username}: {msg.content}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default App;
