import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
function AppWithCallbackAfterRender() {
  // useEffect(() => {
  //   console.log('rendered');
  // });

  return <App/>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
reportWebVitals();
