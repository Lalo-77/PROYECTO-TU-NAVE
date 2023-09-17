import '../styles/index.css'
import {NavLink } from "react-router-dom"

const Item =({productos})=> {

    return(
<>
{
    productos? (
            <NavLink key={'productos'.id} to={`/Item/${productos.id}`}>
                <img className="imag" src={productos.image} alt={name} width={125}/>
                <h1 className="title">{productos.title} Titulo</h1>
                <span className="precio">${productos.price}</span>
                <p className="stock">{productos.stock} stock</p>
            </NavLink>
    ): null
}
    </>
    )
}
export default Item