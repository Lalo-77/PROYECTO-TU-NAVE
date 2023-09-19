import productos from './productos.json'

export const getProductos = () => {

    return new Promise((resolve) => {

        setTimeout(() => {
                resolve(productos)
        },2000)
    })
}

export const getItem =(id) =>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(productos.find((item)=>item.id === id))
        },2000)
    })
}