import { useState } from 'react'
import './App.css'

const Texto = ({ text }) => {// props
return <div> {text} </div>;
};

const Button =({callback}) =>{
    return (
    <button onClick={callback}>
        Sumar contador
    </button>
    );
}

function App() {

const [count, setCount]= useState(0)

    return (
    <div>
        <Texto text="Contador" /> 
        <Texto text={count} />
        <Button callback={() => setCount(count + 1)} />
    </div>
);
}

export default App
