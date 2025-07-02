var display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = calc.evaluate(display.value);
    } catch {
        display.value = 'エラー';
    }
}

function calculateSin() {
    try {
        display.value = calc.sin(display.value);
    } catch {
        display.value = 'エラー';
    }
}

function calculateCos() {
    try {
        display.value = calc.cos(display.value);
    } catch {
        display.value = 'エラー';
    }
}

function calculateTan() {
    try {
        display.value = calc.tan(display.value);
    } catch {
        display.value = 'エラー';
    }
}

function calculateLog() {
    try {
        display.value = calc.log10(display.value);
    } catch {
        display.value = "エラー";
    }
}

function calculateSqrt() {
    try {
        display.value = calc.sqrt(display.value);
    } catch {
        display.value = 'エラー';
    }
}
