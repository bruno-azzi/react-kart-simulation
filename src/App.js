import React from 'react';

import './styles/global.scss';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import Header from './components/Header';
import { MainProvider } from './providers/MainProvider';

const App = () => {
  return (
    <main className="container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
      <BrowserRouter>
        <MainProvider>
          <Header />
          <Routes />
        </MainProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
