let displayValue = '0';
let operator = '';
let waitingForSecondOperand = false;
let firstOperand = '';

function updateDisplay() {
    document.getElementById('result').textContent = displayValue;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        displayValue = String(number);
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? String(number) : displayValue + number;
    }
    updateDisplay();
}

function addDecimal() {
    if (waitingForSecondOperand) return;
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function addOperator(op) {
    if (waitingForSecondOperand) {
        operator = op;
        return;
    }
    if (firstOperand === '') {
        firstOperand = displayValue;
    } else {
        calculateResult();
    }
    operator = op;
    waitingForSecondOperand = true;
}

function calculateResult() {
    const prevValue = parseFloat(firstOperand);
    const currentValue = parseFloat(displayValue);

    if (operator === '+') {
        displayValue = prevValue + currentValue;
    } else if (operator === '-') {
        displayValue = prevValue - currentValue;
    } else if (operator === '*') {
        displayValue = prevValue * currentValue;
    } else if (operator === '/') {
        displayValue = prevValue / currentValue;
    }

    waitingForSecondOperand = true;
    updateDisplay();
    firstOperand = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    waitingForSecondOperand = false;
    firstOperand = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}