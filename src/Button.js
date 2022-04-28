import './Button.css'
function Button(props){
    const value = (event) =>{
        console.log(props.value)
    }

    const isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }
    return(
        <button className='component-button button' onClick={value}>{props.value}</button>
    )
}

export default Button