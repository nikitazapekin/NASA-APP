import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import { ParallaxProvider } from "react-scroll-parallax";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <ParallaxProvider>

        <App />
      </ParallaxProvider>

    </Provider>
  </BrowserRouter>

);

reportWebVitals();
