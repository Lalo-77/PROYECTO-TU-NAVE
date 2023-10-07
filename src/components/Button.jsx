
import '../styles/button.css'

export const button =({onclick, text}) => {//function
    return (
        <button className='btn-count' onClick={onclick}>
            <p className='text'>{text}</p>
        </button>
    );
}
