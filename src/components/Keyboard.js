import { useState } from 'react'

import '../css/Keyboard.css'

const Keyboard = props => {

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
        <div className='keyboard'>
            {
                keys[0].map((k, i) => {
                    return (
                        <div
                          key={i} 
                          className='key'
                          onClick={() => props.handleBttnClick(k)}
                        >{k}</div>
                    )
                })
            }
        </div>
    )
}

export default Keyboard