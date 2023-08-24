

const Greeting = ({props}) => {
    return <h1>{props}</h1>;

};

const Title = () => {
    const texto ="Tu Nave"
    return (
        <>
        
            <div className="header">
                <Greeting text={texto}/>
            </div>
        
        </>

    )
}
    export default Title 