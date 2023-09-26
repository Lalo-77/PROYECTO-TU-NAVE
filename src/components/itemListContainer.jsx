import {useEffect,useState} from "react"
import ItemList  from "./ItemList"
import { useParams } from "react-router-dom"
import {getProductos} from "../data/data"

const ItemListContainer =({greeting})=>{
    const [productos, setProductos] =useState([])
    const [loading, setLoading]= useState(false)
    const {categoryId}= useParams ()
    
    useEffect(() => {
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
        .finally(()=>setLoading(false))

    },[categoryId])
    
    return (
        <div className="item-list-container">
            {loading? <p>cargando...</p>
            :<div>
            <h1 className="titulo">{greeting}<span>{categoryId && categoryId}:   </span> Estos son nuestros Accesorios</h1>
            <ItemList productos ={productos}/>
            </div>
            }
        </div> 
    )
}
    export default ItemListContainer   
