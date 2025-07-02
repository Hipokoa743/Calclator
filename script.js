let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'エラー';
    }
}

function calculateSin() {
    try {
        display.value = Math.sin(eval(display.value));
    } catch {
        display.value = 'エラー';
    }
}

function calculateCos() {
    try {
        display.value = Math.cos(eval(display.value));
    } catch {
        display.value = 'エラー';
    }
}

function calculateTan() {
    try {
        display.value = Math.tan(eval(display.value));
    } catch {
        display.value = 'エラー';
    }
}

function calculateLog() {
    try {
        if (typeof Math.log10 === 'function') {
            display.value = Math.log10(eval(display.value));
        } else {
            display.value = Math.log(eval(display.value)) / Math.LN10;
        }
    } catch {
        display.value = 'エラー';
    }
}

function calculateSqrt() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = 'エラー';
    }
}
