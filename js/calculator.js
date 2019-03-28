function calculatorModule(){
    var total = 0;
    var operator = '';
    var storeFirstNum = 0;
    var storeSecNum = 0;
    var calc = 0;
    var cashBal = 0;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

    function getTotal(x){
        return total;
    }

    function load(x){
        if(typeof x === 'number'){
            total = x;
            return total;
        } else {
            throw error;
        }
    };

    function getOperator(x){
        operator = x;
        return operator;
    }

    function firstNum(x){
        storeFirstNum = x;
        return storeFirstNum;
    }

    function secNum(x){
        storeSecNum = x;
        return storeSecNum;
    }

    function calculate(){
        if(operator === '/'){
            calc = parseFloat(storeFirstNum) / parseFloat(storeSecNum);
            return calc;
        } else if (operator === 'x'){
            calc = parseFloat(storeFirstNum) * parseFloat(storeSecNum);
            return calc;
        } else if (operator === '+'){
            calc = parseFloat(storeFirstNum) + parseFloat(storeSecNum);
            return calc;
        } else if (operator === '-'){
            calc = storeFirstNum - storeSecNum;
            return calc;
        }
    }

    function cashAction(x){
        if (x === '+'){
            cashBal = cashBal + total;
            formatter.format(cashBal);
            return cashBal;
        } else if (x === '-'){
            if(total > cashBal){
                return alert('Not enough money brah!');
            }
            cashBal = cashBal - total;
            formatter.format(cashBal);
            return cashBal;
        }
    }

    function getCashBal(){
        var daCash = formatter.format(parseFloat(cashBal));
        return daCash;
    }



    return {
        getTotal: getTotal,
        load: load,
        getOperator: getOperator,
        firstNum: firstNum,
        secNum: secNum,
        calculate: calculate,
        cashAction: cashAction,
        getCashBal: getCashBal
    }



}
