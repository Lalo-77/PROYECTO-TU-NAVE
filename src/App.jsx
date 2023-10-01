import './styles/App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer greetings='Bienvenidos a Tienda Tu Maquina!'/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer greetings='Bienvenidos a los productos:...'/>}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        <footer/>
      </BrowserRouter> 
    </CartProvider>
  );
}
export default App 