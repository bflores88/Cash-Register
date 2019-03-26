
var calcMod = calculatorModule();
console.log(calcMod.load);

var getNums = document.getElementsByClassName('numButt');
console.log(getNums);

for(var i=0; i<getNums.length; i++){
    getNums[i].addEventListener('click', showNum);
}

var total = 0;
var firstOperand = 0;
var secondOperand = null;

function showNum(){
    var changeNum = this.value;
    console.log(changeNum);

    if(display.innerHTML === "0"){
        display.innerHTML = changeNum;
        total = display.innerHTML;
    } else {
        total = total + changeNum;
        display.innerHTML = total;
    }
}

var getOps = document.getElementsByClassName('opButt');
console.log(getOps);

for(var i=0; i<getOps.length; i++){
    var opera = getOps[i].addEventListener('click', operaNum);
}

function operaNum(){
    calcMod.getOperator(this.value);
    firstOperand = total;
    console.log('firstNum: ' + calcMod.firstNum(parseInt(firstOperand)));
    display.innerHTML = 0;
}

var calculate = document.getElementsByClassName('equal');
console.log(calculate);
calculate[0].addEventListener('click', calculating);

function calculating(){
    secondOperand = total;
    total = 0;
    calcMod.secNum(secondOperand);
    display.innerHTML = calcMod.calculate();
}
