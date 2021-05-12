import React from 'react';
import Routes from './Routes'
import store from './store'
import { getSession } from './Redux/Actions/sessionAction'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <ToastContainer />
    </Provider>


  );
}

export default App;


