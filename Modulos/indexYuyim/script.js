function addToDisplay(value) {
    document.getElementById
Id('display').value += value;
}

function calculate() {
    let result = eval(document.getElementById('display').value);
    Id('display').value = result;
}