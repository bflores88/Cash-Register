function calculatorModule(){
    var total = 0;
    var operator = '';
    var storeFirstNum = 0;
    var storeSecNum = 0;
    var calc = 0;

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
            calc = parseInt(storeFirstNum) / parseInt(storeSecNum);
            return calc;
        } else if (operator === 'x'){
            calc = parseInt(storeFirstNum) * parseInt(storeSecNum);
            return calc;
        } else if (operator === '+'){
            calc = parseInt(storeFirstNum) + parseInt(storeSecNum);
            return calc;
        } else if (operator === '-'){
            calc = parseInt(storeFirstNum) - parseInt(storeSecNum);
            return calc;
        }
    }



    return {
        getTotal: getTotal,
        load: load,
        getOperator: getOperator,
        firstNum: firstNum,
        secNum: secNum,
        calculate: calculate
    }



}
