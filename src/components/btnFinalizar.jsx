export const btnFinalizar =({onclick, text}) => {
    return (
        <button className='btn-count' onClick={onclick}>
            <p className='text'>{text}</p>
        </button>
    );
}