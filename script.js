var op
//variable of an arythmetic operation
function calculate () {
    var result
    var num1 = Number(document.getElementById('textInput1').value)
    var num2 = Number(document.getElementById('textInput2').value)

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
calculate()