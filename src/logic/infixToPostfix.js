// this module converts infix user input to postfix
// parsing & evaluating input much faster this way

const infixToPostfix = {
    operators: ['+', '-', '*', '/', '(', ')', '^'],
    priority: { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 },
    convert(expression) {
        const stack = []
        const output = []

        expression.forEach((character) => {
            if (!this.operators.includes(character)) {
                output.push(character)
            }
            else if (character === '(') {
                stack.push('(')
            }
            else if (character === ')') {
                while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop())
                }
                stack.pop()
            }
            else {
                while (stack.length > 0 && stack[stack.length - 1] !== '(' && this.priority[character] <= this.priority[stack[stack.length - 1]]) {
                    output.push(stack.pop())
                }
                stack.push(character)
            }
        })
        while (stack.length > 0) {
            output.push(stack.pop())
        }
        return output
    }
}

export default infixToPostfix