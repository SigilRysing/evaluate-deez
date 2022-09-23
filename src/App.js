import Calculator from './components/Calculator';

import calculatorLogic from './logic/expressionTree'

import './css/App.css';

const App = () => {
  const tree = calculatorLogic.initializeTree()
  const answer = tree.returnAnswer(['8', '2', '^', '6', '+', '2', '10', '*', '2', '/', '-'])
  console.log('answer: ', answer)
  return (
    <div className="App">
     <Calculator/>
    </div>
  );
}

export default App;
