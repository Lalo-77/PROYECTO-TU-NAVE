import ItemCount from "./ItemCount";

const ItemDetail = ({producto})=> {
    const onAdd =(cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
}
    
    return(
        <div className='detail'>
            <h3 className="nombre"> Detalle: {producto.title}</h3>
                <img className='card-img' src={producto.image} alt='producto.title'/>
                <p className="descripcion">{producto.description}</p>
                <p className="precio">${producto.price}</p>
                <p className="stock">Stock: {producto.stock}</p>
                <ItemCount  initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}
export default ItemDetail