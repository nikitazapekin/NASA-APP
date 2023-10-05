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
//<ParallaxProvider>
//</ParallaxProvider>
root.render(

<BrowserRouter>
<Provider store={store}>
<ParallaxProvider>

<App />
</ParallaxProvider>

</Provider> 
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
