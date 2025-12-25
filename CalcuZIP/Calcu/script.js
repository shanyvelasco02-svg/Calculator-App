const result = document.getElementById("result");
const history = document.getElementById("history");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            currentInput = "";
            expression = "";
            result.textContent = "0";
            history.textContent = "";
        }
        else if (value === "=") {
            try {
                const calc = expression
                    .replace("×", "*")
                    .replace("÷", "/")
                    .replace("−", "-");

                const answer = eval(calc);
                result.textContent = answer;
                history.textContent = expression + " =";
                expression = answer.toString();
                currentInput = "";
            } catch {
                result.textContent = "Error";
            }
        }
        else {
            expression += value;
            currentInput += value;
            result.textContent = currentInput;
            history.textContent = expression;
        }
    });
});
