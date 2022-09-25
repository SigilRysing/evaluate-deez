
const calculatorLogic = {
    expressionTree: {
        // need 2 determine tree ht if possible    
        operations: {
                '^': (a, b) => a ** b,
                '*': (a, b) => a * b,
                '/': (a, b) => a / b,
                '+': (a, b) => a + b,
                '-': (a, b) => a - b
            },
    
        createNode(data) {
            const node = {
                data: data,
                left: null,
                right: null
            }
            return node
        },
    
        parse(expression) {
            const treeStack = []
            expression.forEach((char) => {
                const newNode = this.createNode(char)
                if (!Object.keys(this.operations).includes(char)) {
                    newNode.data = parseInt(newNode.data, 10)
                    treeStack.push(newNode)
                } else {
                    newNode.right = treeStack.pop()
                    newNode.left = treeStack.pop()
                    treeStack.push(newNode)
                }
            })
            // console.log('parsed input tree pre-evaluation: ')
            // console.log(JSON.stringify(treeStack[0], null, 4))
            return treeStack[0]
        },
    
        operate(n1, o, n2) {
            return this.operations[o](n1, n2)
        },
    
        evaluate(root) {
            if (!root.data) return 0
            if (!root.left && !root.right) return root.data
            const leftResult = this.evaluate(root.left)
            const rightResult = this.evaluate(root.right)
            return this.operate(leftResult, root.data, rightResult)
        },
    
        returnAnswer(input) { // postfix input goes here
            const parsedInput = this.parse(input) // processed here
            return this.evaluate(parsedInput)
        }
    }
}

export default calculatorLogic 