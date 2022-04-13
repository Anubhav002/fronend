import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext"

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

  return( 
   < AuthContextProvider>
      <App/>
   </AuthContextProvider>
  )
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);


