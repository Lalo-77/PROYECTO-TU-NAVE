import Item from "./Item"

const ItemList =({productos}) =>{

    return( 
        <div className="tarjeta"> 
            {productos.map((producto) => 
            <Item className="item" laskey={producto.id} producto={producto}/>)}
        
        </div>
    )// POENRLE ESTILOS A LAS CARDS
    } 
export default ItemList



                                