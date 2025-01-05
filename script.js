var op
//variable of an arythmetic operation
function calculate () {
    var result
    var num1 = Number(document.getElementById('textInput1').value)
    var num2 = Number(document.getElementById('textInput2').value)

    if (!op) {
        document.getElementById("outputField").value = 'Ошибка: Оператор не выбран';
        return;
    }
    switch (op){
        case '+':
        result = num1 + num2
        break
        case '-':
        result = num1 - num2
        break
        case '*':
        result = num1 * num2
        break
        case '/':
            if (num2 !== 0){
                result = num1 / num2
            } else {
                result = 'Ошибка: Деление на ноль'
            }
        break
    }
    document.getElementById("outputField").value = result;
}
document.getElementById("plus").onclick = function() {
    op = '+';
    console.log("Выбран оператор: " + op);
    this.classList.toggle("active")
};

document.getElementById("minus").onclick = function() {
    op = '-';
    console.log("Выбран оператор: " + op);
    this.classList.toggle("active")
};

document.getElementById("times").onclick = function() {
    op = '*';
    console.log("Выбран оператор: " + op);
    this.classList.toggle("active")
};

document.getElementById("divide").onclick = function() {
    op = '/';
    console.log("Выбран оператор: " + op);
    this.classList.toggle("active")
};
function clearFields() {
    // Очистка поля input
    document.getElementById('textInput1').value = '';
    document.getElementById('textInput2').value = '';
    
    // Очистка поля output
    document.getElementById('outputField').innerText = '';
}
