import {ItemCount} from "./ItemCount";
import producto from "../data/productos.json";


const ItemDetail = ({producto})=> {
    const onAdd =(cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
}
    
    return(
        <div className='detail'>
            
            <h3> Detalle de:{producto.title} </h3>
                <img className='card-img' src={producto.image} alt='producto.title'/>
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                <p>{producto.stock}</p>
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetail