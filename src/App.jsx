import './styles/App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import { useEffect } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import {db} from '../src/complementos/firebase'

function App() {
/*useEffect(()=>{
  const coleccionProductos = collection(db, 'productos')
  productos.map((item)=>addDoc(coleccionProductos, item))
},[])*/

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer greetings="Bienvenidos a Tienda Tu Maquina!"/>}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer greetings="a los productos:..."/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<cart/>}/>
          </Routes>
        <footer/>
      </BrowserRouter> 
      </CartProvider>
  );
}
export default App 