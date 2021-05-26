import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './components/Theme/ThemeContext';
import ThemeBackground from './components/Theme/ThemeBackground';

ReactDOM.render(
  <ThemeProvider>
    <ThemeBackground>
      <App />
    </ThemeBackground>
  </ThemeProvider>,
  document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
