const lista =[
    {id:'01', title:titulo, stock:30, price:5000, descripction:'lorem', img:'./imagen'},

]



export const getProductos = () => {

    return new Promise((resolve, reject) => {

        const {categoryName } = useParams()
        setTimeout(() => {
            if(!categoryId){
                    reject('No hay productos de esa categoria')
            }else {
                resolve(productosJSON.filter(productos => productos.category === categoryTitle))
            }
        },2000)
    })
}

export const getItem =(id) =>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
                resolve(lista.find((item)=>item.id === id))
        },2000)
    }
}