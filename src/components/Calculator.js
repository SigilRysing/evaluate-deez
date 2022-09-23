import Display from './Display'
import Keyboard from './Keyboard'

import '../css/Calculator.css'

const Calculator = () => {
    
    return (
        <div className='calculator'>
            <Display />
            <Keyboard />
        </div>
    )
}

export default Calculator