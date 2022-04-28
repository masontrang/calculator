import './Display.css'
import React,{SetState} from 'react'
function Display(props){
    let displayOutput = 0
    return (
        <p className='component-display'>{displayOutput}</p>
    )
}

export default Display