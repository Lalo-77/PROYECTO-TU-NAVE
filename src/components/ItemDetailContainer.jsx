import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer () {

    const [productos, setProductos] = useState ();

    useEffect(() => {
        fetch()
        .then((res) => res.json())
        .then((data) => setProductos(data));
    }, []);

    if (!productos) return null;
    return (
        <div>
            <ItemDetail productos={productos}/>
        </div>
    );
    }