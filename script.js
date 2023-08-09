
let currentInput = '';
let result = '';


document.querySelectorAll(".num-button, .op-button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute('data-value');
        Display(value);
    });
});

document.getElementById('result').addEventListener('click', () => {
    calculate(currentInput);
});

document.getElementById('clear').addEventListener('click', clearDisplay,);

function Display(value) {

    if    (currentInput.length < 14) {
        currentInput += value;
    }

        document.getElementById('display').value = currentInput;
    }



// separated functions to avoid eval()

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return ('Infinity');
    }
    return a / b;
}


function calculate(expression) {
    try {
        
        const match = expression.match(/([\d.]+)\s*([\+\-\*\/])\s*([\d.]+)/);
 
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        let result;
        switch (operator) {                                 
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                throw new Error('Invalid operator');
        }

        document.getElementById('display').value = result;
        currentInput = result.toString();
   
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}


        document.getElementById('display').value = result;
    


function clearDisplay() {
    currentInput = '';
    result = '';
    document.getElementById("display").value = '';
}
