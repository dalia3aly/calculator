
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

    document.getElementById('clear').addEventListener('click', clearDisplay);

    function Display(value) {

        if    (currentInput.length < 14) {
            currentInput += value;

        } else {
            throw new Error('Input too long');
        };

            document.getElementById('display').value = currentInput;
        }


    function calculate(numbers) {
        try {
            result = parseFloat(eval(numbers).toFixed(7));
            document.getElementById('display').value = result;
            currentInput = result.toString();

        } catch (error) {
            document.getElementById("display").value = 'Error';
        }

    }
    

    function clearDisplay() {
        currentInput = '';
        result = '';
        document.getElementById("display").value = '';
    }
