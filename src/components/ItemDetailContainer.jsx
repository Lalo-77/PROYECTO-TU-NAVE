import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail";
import {getItem} from '../data/data'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=> {
    const [loading, setLoading]= useState(false)
    const [producto, setProducto] = useState ({});
    
    const {id}=useParams()

    useEffect(() => {
        setLoading(true)
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, []); 

    if (!producto) return null;
    
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail producto={producto}/>
    }</div>
    );
}
export default ItemDetailContainer 