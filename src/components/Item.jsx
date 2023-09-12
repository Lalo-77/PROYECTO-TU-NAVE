import {NavLink } from "react-router-dom"
const Item =(productos)=> {

    return(
<>
{
    productos? (
        <div href="#" className='item'> 
        <NavLink key={'productos'.id} to={`/Item/${productos.id}`} >
            <img className="imag" src="{productos.image} alt={name} width{70}"/>
            <h1 className="nombre">{productos.title}</h1>
            <p className="categoria">{productos.category}</p>
            <spam className="precio" >${productos.precio}</spam>
        </NavLink>
            </div>
    ): null
}
    </>
    )
}
export default Item