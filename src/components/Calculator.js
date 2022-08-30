import Display from './Display'
import Keyboard from './Keyboard'

import '../css/Calculator.css'

const Calculator = () => {
    
    const handleBttnClick = bttn => {
        console.log('you clicked the ' + bttn + ' button!')
    }

    return (
        <div className='calculator'>
            <Display/>
            <Keyboard
              handleBttnClick={handleBttnClick}
            />
        </div>
    )
}

export default Calculator