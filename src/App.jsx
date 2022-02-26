import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import './App.css';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0775ec',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#0775ec',
  botFontColor: '#fff',
  userBubbleColor: '#3fd408',
  userFontColor: '#fff',
};

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    end: true,
  },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='app-container'>
        <div className='app-header'>AI Chatbot</div>
        <div className='chatbot-container'>
          <ChatBot steps={steps} floating={true} headerTitle='Assistant Bot' />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
