import Display from './Display'
import Keyboard from './Keyboard'

import '../css/Calculator.css'

const Calculator = () => {
    return (
        <div class='calculator'>
            <Display/>
            <Keyboard/>
        </div>
    )
}

export default Calculator