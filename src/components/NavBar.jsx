import"../styles/NavBar.css"
import CartWidget from './CartWidget.jsx'
import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <header className='Contenedor'>
            <Link to="/" className='TuMaquina'>
                <img width={100} className='logo' src='/src/assets/img/logo.jpg' alt='logo'/>
            </Link>
            <nav className='Menu'>
                <Link to="/Inicio">Inicio</Link>
                <Link to="/category/Accesorios">Accesorios</Link>
                <Link to="/category/Limpieza">Limpieza</Link>
                <Link to="/category/Decoracion">Decoracion</Link>
                <Link to="/category/Proteccion">Proteccion</Link>
                <li className='carrito'>
                    <CartWidget/>
                </li>
            </nav>
        </header>
    ); 
}
export default NavBar; 