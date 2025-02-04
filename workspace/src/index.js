import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={Window.location.pathname || ''}>
     <ContextComponent />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// BrowserRouter = HTML5 url API popState pushState readyState
// MemoryRouter = Url is not changed // server enviornments // react-native //testing
// HashRouter = old browsers // window.location.hash // www.x.com/#/my-account
