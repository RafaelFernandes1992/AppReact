import React from 'react'; //importando o react para nossa aplicação
import ReactDOM from 'react-dom/client'; //para usar o virtual dom ..faz tudo sem precisar se preocupar com a arvore
import './index.css'; //importando o css
import App from './App'; // importando um componente
import reportWebVitals from './reportWebVitals'; // isso é da google, se não quiser deixar pode excluir

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
