import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail";
import {getItem} from '../data/data'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=> {

    const [producto, setProducto] = useState ({});
    
    const {id}=useParams()

    useEffect(() => {
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error));
    }, []);

    if (!producto) return null;
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    );
}
export default ItemDetailContainer 