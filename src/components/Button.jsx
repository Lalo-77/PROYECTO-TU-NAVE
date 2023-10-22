
import '../styles/button.css'

export const Button =({callback, text}) =>{
    return(
    <button className="comprar" id={id} onClick={(() => (onClick(callback)))}>{text}</button>
    )
}






