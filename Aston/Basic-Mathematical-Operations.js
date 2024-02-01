function operations(operator, a, b) {
    switch(operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
}

console.log(operations('+', 4, 7));