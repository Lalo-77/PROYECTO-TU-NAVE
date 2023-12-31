import Item from './Item'
import '../styles/ItemList.css'

const ItemList =({productos}) =>{

    return( 
        <div className="tarjeta"> 
            {productos.map ((producto) => 
            <Item className="items" key={producto.id} producto={producto}/>)}
        </div>
    )
    }  
export default ItemList
