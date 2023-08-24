import './App.css'
import NavBar from './components/NavBar'
import CardWidget from './components/CartWidget'
import Carrito from './assets/img/carrito.png'
import Title from './components/itemListContainer'

function App() {
  return (

    <>

      <NavBar />
      <CardWidget/>
      <Title/>
      <img src={Carrito} alt=''/>

    </>
  );
}
export default App
