import {NavLink } from "react-router-dom"
const Item =(productos)=> {

    return(
<>
{
    productos? (
        <a href="#" className='item'> 
        <NavLink key={'productos'.id} to={`/Item/${productos.id}`}>
            <img className="imag" src={productos.image} alt={name} width={125}/>
            <h1 className="nombre">{productos.title}</h1>
            <span className="precio" >${productos.price}</span>
            <p className="stock">{productos.stock}</p>
        </NavLink>
            </a>
    ): null
}
    </>
    )
}
export default Item