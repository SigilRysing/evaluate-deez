import { useState, useEffect } from 'react'

import Display from './Display'
import Keyboard from './Keyboard'

import '../css/Calculator.css'

const Calculator = () => {

    const [display, setDisplay] = useState('')
    
    const handleBttnClick = bttn => {
        let screen = display
        screen += bttn
        setDisplay(screen)
        console.log(display)
    }

    return (
        <div className='calculator'>
            <Display
              display={display[0]}
            />
            <Keyboard
              handleBttnClick={handleBttnClick}
            />
        </div>
    )
}

export default Calculator