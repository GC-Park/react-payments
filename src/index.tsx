import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './style/global';
import ReactGA from "react-ga4";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
