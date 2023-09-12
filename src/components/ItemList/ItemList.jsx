import {Item} from "../Item"

const ItemList =({productos}) =>{

    return( 
        <div className="tarjeta">
        {productos.map(p => <Item key={p.id} 
                img={p.img} 
                title={p.title} 
                category={p.category} 
                price={p.price}
                />)
        }
        </div>
    )
    } 
export default ItemList



                                