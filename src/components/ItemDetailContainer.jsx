import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail";

export default function ItemdatailContainer () {

    const [productos, setProductos] = useState ();

    useEffect(() => {
        fetch(./data/productos/id/1)
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