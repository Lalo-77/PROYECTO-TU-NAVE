import {useEffect,useState} from "react"
import productosJSON from "../data/productos.json"
import ItemList  from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =({greetings})=>{
    
    const [productos, setProductos] =useState([])
    const {categoryName } = useParams()

    const getProductos = (categoryName) => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
        // si no hay categoría, trae a todos los productos
        if(!categoryName){
        resolve(productosJSON);
        }else{
        // si hay, trae solo a esos productos
        resolve(productosJSON.filter(el => el.category === categoryName))
        }
        }, 2000);
        });
        };
        
        useEffect(() => {
        console.log('useEffect llamado con categoryName:', categoryName);
        
        getProductos(categoryName)
        .then((data) => setProductos(data))
        .catch((error) => console.error(error));
        }, [categoryName]);

}
    export default ItemListContainer 
