import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from './components/ItemCount';

function App() {
  return (
    <BrowserRouter>
    <NavBar/> 
    <Routes>
    <Route exact path='/Inicio' element={<p>Inicio</p>}/>
    <Route exact path='/' element={<ItemListContainer greetings="Bienvenidos a Tienda Tu Maquina"/>}/>
    <Route exact path='/category/:categoryName' element={<ItemListContainer/>}/>
    <Route exact path='/productos/:productosId' element={<ItemListContainer/>}/>
    <ItemCount/>
    </Routes>
    </BrowserRouter>

  );
}
export default App 