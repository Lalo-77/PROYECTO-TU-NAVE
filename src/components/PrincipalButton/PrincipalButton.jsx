
const PrincipalButton =({texto, id, onClick}) =>{
    return(
    <button className="btn-principal" id={id} onClick={(() => (onClick()))}>{texto}</button>
    )
}
export default PrincipalButton