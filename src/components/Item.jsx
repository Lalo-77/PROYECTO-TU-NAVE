import '../styles/index.css';
import '../styles/ItemList.css'
import {Link,NavLink } from "react-router-dom"

const Item =({producto})=> {

    return(
    producto? (
            <NavLink className= "items" key={'producto'.id} to={`/Item/${producto.id}`}>
                <img className="imag" src={producto.image} alt={name} width={125}/>
                <h1 className="title">{producto.title}</h1>
                <span className="precio">${producto.price}</span>
                <p className="stock">{producto.stock}</p>
                <button className='Ver-mas' as={Link} to={`/item/${producto.id}`}>Ver mas</button>
            </NavLink>
    ): null
    )

}
export default Item