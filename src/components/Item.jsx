import '../styles/ItemList.css'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"

const Item =({producto})=> {
    const onAdd =(cantidad) =>{
        alert("Has seleccionado "+ cantidad + "items");

    }
    const {id, title, price, imag,stock}= props
    return(
        producto? (
            <div className= "items" key={'producto'.id} to={`/Item/${producto.id}`}>
                <img className="imag" src={producto.image} alt={name} width={125}/>
                <Link to={'/item/${id}'}><img  alt='Imagen Producto'></img></Link>
                <h1 className="title">{producto.title}</h1>
                <span className="precio">${producto.price}</span>
                <Link to={'/item/${id}'}/>
                <p className="stock">stock {producto.stock}</p>
                <Link to={`/item/${producto.id}`} className='VerMas'>Ver Mas</Link>
                <div>
                    <ItemCount stock={stock} onAdd={onAdd}></ItemCount>
                </div>
            </div>
    ): null
    )

}
export default Item