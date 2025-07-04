const Button= ({buttonValue, onClick}) =>{
    const clickHandler=()=>onClick(buttonValue);

    return <button className='btn' onClick={clickHandler}>
        {buttonValue} 
        </ button>
};

export default Button;