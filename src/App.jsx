import './styles/App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<ItemListContainer greetings="Bienvenido a Tienda Tu Maquina!"/>}/>
    <Route exact path='/category/:categoryId' element={<ItemListContainer greetings="Bienvenido a los productos de Tu Maquina"/>}/>
    <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    <footer/>
    </BrowserRouter>
  );
}
export default App 