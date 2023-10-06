import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail";
import {getItem} from '../data/data'
import { useParams } from "react-router-dom";
import {collection, doc, getDoc} from 'firebase/firestore';
import {db} from '../complementos/firebase'

const ItemDetailContainer = ()=> {
    const [loading, setLoading]= useState(false)
    const [producto, setProducto] = useState ({});
    
    const {id}=useParams()

    /* useEffect(() => {
        setLoading(true)
        getItem(id)
        .then((res) => setProducto(res))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    }, []);
    if (!producto) return null;
    */

    useEffect(()=>{
    setLoading(true)
    const collectionProduct = collection(db, 'productos')
    const referenciaAlDoc = doc(collectionProduct,id)
    getDoc(referenciaAlDoc)
    .then((res) => setProducto({id:res.id, ...res.data()}))
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
},[])
    
    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemDetail producto={producto}/>
    }</div>
    );
}
export default ItemDetailContainer 