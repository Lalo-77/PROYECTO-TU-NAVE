import {useEffect,useState} from "react"
import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail";
import {getItem} from '../data/data'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=> {

    const [producto, setProducto] = useState ({});
    
    const {id}=useParams()

    useEffect(() => {
        getItem(id)
        .then((producto) => setProducto(producto.json))
        .catch((error) => setProducto(error));
    }, []);

    if (!producto) return null;

    return (
        <div>
            <ItemDetail producto={producto}/>
            <ItemCount/>
        </div>
    );
}
export default ItemDetailContainer 