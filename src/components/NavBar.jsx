
// eslint-disable-next-line no-unused-vars
import React from 'react';

const NavBar = () => {
    return ( 
        <div className='contenedor'>
            <div className=''>
                <a className='nav_link' href='#'>Tu Nave</a>
            </div>
            <ul>
                <li>
                    <a className='nav_nosotros'href='#'>Nosotros</a>
                </li>
                <li>
                    <a className='nav_productos'href='#'>Productos</a>
                </li>
                <li>
                    <a className='nav_contactos'href='#'>Contactos</a>
                </li>
                <li>
                    <a className='nav_Cartwidget'href='#'>CartWidget</a>
                </li>
            </ul>
        </div>
    ); 
}
export default NavBar; 