import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Application from './application';
import reportWebVitals from './reportWebVitals';
import './assets/css/dots.css'

ReactDOM.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
