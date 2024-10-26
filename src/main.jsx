import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CartContextProvider from './contexts/CartContext.jsx';
import MenuContextProvider from './contexts/MenuContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </MenuContextProvider>
);
