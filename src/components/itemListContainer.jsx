import {useEffect,useState} from "react"
import ItemList  from "./ItemList"
import {useParams} from "react-router-dom"
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../../src/complementos/firebase"

const ItemListContainer =({greeting})=>{

    const [productos, setProductos] =useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId} = useParams ()
    
    /*useEffect(() => {
        setLoading(true)
        getProductos()
        .then((data) => {
            if(categoryId){
                setProductos(data.filter((item)=>item.category === categoryId))
            }else{
                setProductos(data)
            }
        })
        .catch((error) => console.error(error))
        .finally(()=> setLoading(false))
    },[categoryId])*/
    
    useEffect(()=>{
        setLoading(true)
        const coleccionProductos = categoryId ? query(collection(db, "accesorios"), where("category","==", categoryId)):collection(db, "productos")

        getDocs(coleccionProductos)
        .then((res)=> { 
            const producto = res.docs.map((producto)=>{
                return{
                    id:producto.id,
                    ...producto.data()
                }
            })
            setProductos(producto);
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return ( 
        <div className="item-list-container">
            {loading ? <p>Cargando...</p>
            : <div>
                <h1 className="titulo">{greeting}<span>{categoryId && categoryId}</span> </h1>
                <ItemList productos ={productos}/>
            </div>
            }
        </div> 
    )
}
    export default ItemListContainer   
