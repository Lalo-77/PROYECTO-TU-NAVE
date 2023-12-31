import"../styles/NavBar.css"
import CartWidget from './CartWidget.jsx'
import {Link, NavLink} from "react-router-dom"
const NavBar = () => {
    return ( 
        <header className='Contenedor'>
            <nav className='Menu'>
                <Link as={NavLink} to="/" className='TuMaquina'>
                    <img width={100} className='logo' src='../../public/img/logo.jpg' alt='logo'/>
                </Link>
                <ul className='navBar'>
                    <Link NavLink to='/'className="inicio">Inicio</Link>
                    <Link className='accesorios' to='/category/accesorios'>Accesorios</Link>
                    <Link className='limpieza'  NavLink to='/category/limpieza'>Limpieza</Link>
                    <Link className='decoracion'  NavLink to='/category/decoracion'>Decoracion</Link>
                    <Link className='proteccion'  NavLink to='/category/proteccion'>Proteccion</Link>
                        <li className='carrito'>
                            <NavLink to='/cart'><CartWidget/></NavLink>
                        </li>
                </ul>
            </nav>
        </header>
    ); 
}
export default NavBar; 