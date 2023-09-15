import"../styles/NavBar.css"
import CartWidget from './CartWidget.jsx'
import { Link } from "react-router-dom"
const NavBar = () => {
    return ( 
        <header className='Contenedor'>
            <nav className='Menu'>
            <Link to="/" className='TuMaquina'>
                <img width={100} className='logo' src='../../public/img/logo.jpg' alt='logo'/>
            </Link>
            <ul className="navBar">
            <Link to="/Inicio">Inicio</Link>
                <Link to="/category/accesorios">Accesorios</Link>
                <Link to="/category/limpieza">Limpieza</Link>
                <Link to="/category/decoracion">Decoracion</Link>
                <Link to="/category/proteccion">Proteccion</Link>
                <li className='carrito'>
                    <CartWidget/>
                </li>
            </ul>
            </nav>
        </header>
    ); 
}
export default NavBar; 