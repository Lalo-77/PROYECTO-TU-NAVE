
import '../styles/ItemCount.css';
const ItemCount =( )  =>{ 
        return (
            <div className='counter'>
                        <button onClick={() => {addItem(numero, numero)}} className = 'Finalizar-Compra' text = {'Finalizar Compra'}>Finalizar Compra</button>
                        <button  onClick={() => {removeItem(producto)}} className = 'Borrar-Producto' text = {'Borrar Producto'}> Borrar Producto </button>
            </div>
        )
    }
    export default ItemCount;