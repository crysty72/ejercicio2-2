
document.addEventListener("DOMContentLoaded", function() {
    const operand1 = document.getElementById("operand1");
    const operator = document.getElementById("operator");
    const operand2 = document.getElementById("operand2");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function() {
        const op1 = parseFloat(operand1.value);
        const op2 = parseFloat(operand2.value);
        const selectedOperator = operator.value;
        let result;

        if (isNaN(op1) || isNaN(op2)) {
            result = "Ingrese números válidos.";
        } else {
            switch (selectedOperator) {
                case "+":
                    result = op1 + op2;
                    break;
                case "-":
                    result = op1 - op2;
                    break;
                case "*":
                    result = op1 * op2;
                    break;
                case "/":
                    if (op2 === 0) {
                        result = "División por cero no está permitida.";
                    } else {
                        result = op1 / op2;
                    }
                    break;
            }
        }

        resultDiv.textContent = "Resultado: " + result;
    });
});
