import { useState } from 'react'

import calculatorLogic from '../logic/calculatorLogic'
import infixToPostfix from '../logic/infixToPostfix'

import Display from './Display'

import '../css/Calculator.css'

const Calculator = () => {

    const keys = useState([
        'AC',
        '+/-',
        '%',
        '÷',
        '7',
        '8',
        '9',
        '×',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '0',
        '.',
        '=',
        'Xʸ',
        '(',
        ')',
        '√',
        '<='
    ])

    const [display, setDisplay] = useState("")
    
    const handleClick = (k) => {
        setDisplay(display + k)
    }

    return (
        <div className='calculator'>
            <Display
              display={display}
            />
            <div className='keyboard'>
            {
                keys[0].map((k, i) => {
                    return (
                        '5',
                        <div
                          key={i} 
                          className='key'
                          onClick={() => handleClick(k)}
                        >{k}</div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Calculator