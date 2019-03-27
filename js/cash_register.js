
var calcMod = calculatorModule();

var getNums = document.getElementsByClassName('numButt');

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
        display.innerHTML = parseInt(changeNum);
        total = display.innerHTML;
    } else {
        display.innerHTML = total + changeNum;
        total = display.innerHTML;
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
    calcMod.firstNum(firstOperand);
    display.innerHTML = 0;
}

var calculate = document.getElementsByClassName('equal');
console.log(calculate);
calculate[0].addEventListener('click', calculating);

function calculating(){
    secondOperand = total;
    total = "";
    calcMod.secNum(secondOperand);
    display.innerHTML = calcMod.calculate();
}

var deci = document.getElementsByClassName('decimal');
deci[0].addEventListener('click', addDeci);

function addDeci(){
    display.innerHTML = display.innerHTML + this.value;
    total = display.innerHTML;
}

var clr = document.getElementsByClassName('clear');
clr[0].addEventListener('click', clrDisp);

function clrDisp(){
    display.innerHTML = 0;

    if(secondOperand !== '0'){
        secondOperand = 0;
        calcMod.secNum(0);
    } else {
        firstOperand = 0;
        calcMod.firstNum(0);
    }
    total = display.innerHTML;
}

var cashDep = document.getElementsByClassName('depCash');
cashDep[0].addEventListener('click', cashDeposit);

function cashDeposit(){
    total = display.innerHTML;
    calcMod.load(parseInt(total));
    console.log('total: ' + calcMod.getTotal())
    calcMod.cashAction('+');
    display.innerHTML = '0';
}

var cashWith = document.getElementsByClassName('withCash');
cashWith[0].addEventListener('click', cashWithdraw);

function cashWithdraw(){
    total = display.innerHTML;
    calcMod.load(parseInt(total));
    calcMod.cashAction('-');
    display.innerHTML = '0';
}

var cashBal = document.getElementsByClassName('getBal');
cashBal[0].addEventListener('click', dispBal);

function dispBal(){
    display.innerHTML = calcMod.getCashBal();
}

var del = document.getElementsByClassName('delete');
del[0].addEventListener('click', delNum);

function delNum(){
    var backSpace = display.innerHTML;
    console.log(backSpace);
    var removeLast = backSpace.toString().substring(0, backSpace.length-1);
    console.log(removeLast);
    if(removeLast === ""){
        display.innerHTML = '0';
        total = display.innerHTML;
    } else {
        display.innerHTML = parseInt(removeLast);
        total = display.innerHTML;
    }
}