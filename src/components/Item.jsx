import '../styles/ItemList.css'
import {Link,NavLink } from "react-router-dom"

const Item =({producto})=> {

    return(
    producto? (
            <div className= "items" key={'producto'.id} to={`/Item/${producto.id}`}>
                <img className="imag" src={producto.image} alt={name} width={125}/>
                <h1 className="title">{producto.title}</h1>
                <span className="precio">${producto.price}</span>
                <p className="stock">stock {producto.stock}</p>
                <Link to={`/item/${producto.id}`} className='VerMas'>Ver Mas</Link>
            </div>
    ): null
    )

}
export default Item