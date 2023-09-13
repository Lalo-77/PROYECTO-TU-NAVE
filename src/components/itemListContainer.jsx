import {useEffect,useState} from "react"
import productosJSON from "../data/productos.json"
import ItemList  from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =({greetings})=>{
    
    const [productos, setProductos] =useState([])
    const {categoryName } = useParams()

    const Productos=(categoryName) =>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(categoryName=== undefined) {
                const productosFiltrados = productosJSON.filter(
                    (item) =>item.category === categoryName);
                resolve(productosFiltrados)
            } else {
                resolve(productosJSON);
            }
            productos.length>0 ? 
            resolve(productos.JSON)
            : reject('No hay productos')
        },2000)
        }
    )
}
useEffect(()=>{
    Productos(categoryName).then((data) => setProductos(data));
}, [categoryName]);

return (
    <div className="item-list-container">
        <h1 className="titulo">{greetings}</h1>;
        <ItemList productos={productos}/>
    </div>

)
}
    export default ItemListContainer 
