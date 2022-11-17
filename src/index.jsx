import ReactDOM from 'react-dom/client';
import './assets/css/reset.scss'
import './assets/css/home.scss'
import './assets/css/font.scss'
import './assets/css/sideBar.scss'
import Home from './home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
