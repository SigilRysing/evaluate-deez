import { useState } from 'react'

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


    return (
        <div className='calculator'>
            <Display />
            <div className='keyboard'>
            {
                keys[0].map((k, i) => {
                    return (
                        <div
                          key={i} 
                          className='key'
                        >{k}</div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Calculator
