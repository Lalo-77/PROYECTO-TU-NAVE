import Item from "../Item"

const ItemList =({productos}) =>{

    return( 
        <div className="tarjeta">
            {productos.map((productos) => (
            <Item key={productos.id} productos={productos}/>
            ))}
            
        </div>
    )
    } 
export default ItemList



                                