
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
        display.innerHTML = parseFloat(changeNum);
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
    total = parseFloat(display.innerHTML);
    calcMod.firstNum(firstOperand);
}

var deci = document.getElementsByClassName('decimal');
deci[0].addEventListener('click', addDeci);

function addDeci(){
    var checkDeci = display.innerHTML;
    var strDeci = checkDeci.toString()
    console.log(strDeci);
    if(strDeci.indexOf('.') === -1){
        display.innerHTML = display.innerHTML + this.value;
        total = display.innerHTML;
    } else {
        total = display.innerHTML;
    }

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
    calcMod.load(parseFloat(total));
    console.log('total: ' + calcMod.getTotal())
    calcMod.cashAction('+');
    display.innerHTML = '0';
}

var cashWith = document.getElementsByClassName('withCash');
cashWith[0].addEventListener('click', cashWithdraw);

function cashWithdraw(){
    total = display.innerHTML;
    calcMod.load(parseFloat(total));
    calcMod.cashAction('-');
    display.innerHTML = '0';
}

var cashBal = document.getElementsByClassName('getBal');
cashBal[0].addEventListener('click', dispBal);

function dispBal(){
    display.innerHTML = calcMod.getCashBal();
    console.log(calcMod.getCashBal());
    alert('Cash Balance is ' + display.innerHTML);
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
        display.innerHTML = parseFloat(removeLast);
        total = display.innerHTML;
    }
}

var getMenuButtons = document.getElementsByClassName('menuh1');

for(var i=0; i<getMenuButtons.length; i++){
    getMenuButtons[i].addEventListener('click', showDrinkMenu)
}

function showDrinkMenu(){
    var showDMB = document.getElementById('drinkMenuButtons');
    console.log(showDMB);
    if(showDMB.style.display === 'block'){
        showDMB.style.display = 'none';
    } else {
        showDMB.style.display = 'block';
    }
}

var getDrinkTypes = document.getElementsByClassName('drinkTypes');

for(var i=0; i<getDrinkTypes.length; i++){
    getDrinkTypes[i].addEventListener('click', showMoar);
}

function showMoar(){
    var showBuddons = this.querySelector('div');
    if(showBuddons.style.display === 'flex'){
        showBuddons.style.display = 'none';
    } else {
        showBuddons.style.display = 'flex'
    }
}


var getMenuButtons1 = document.getElementsByClassName('menuh2');

for(var i=0; i<getMenuButtons1.length; i++){
    getMenuButtons1[i].addEventListener('click', showFoodMenu)
}

function showFoodMenu(){
    var showDMB = document.getElementById('foodMenuButtons');
    console.log(showDMB);
    if(showDMB.style.display === 'block'){
        showDMB.style.display = 'none';
    } else {
        showDMB.style.display = 'block';
    }
}

var getFoodTypes = document.getElementsByClassName('foodTypes');

for(var i=0; i<getFoodTypes.length; i++){
    getFoodTypes[i].addEventListener('click', showMoar);
}
