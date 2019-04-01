function calculatorModule(){
    var total = 0;
    var operator = '';
    var storeFirstNum = 0;
    var storeSecNum = 0;
    var calc = 0;
    var cashBal = 0;
    var tempOrder = 0;
    var tempTax = 0;
    var tempTotal = 0;
    var addPay = 0;
    var changeDue = 0;

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
        } else {return;}
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

    function buildOrder(x){
        tempOrder = tempOrder + parseFloat(x);
        console.log(tempOrder);
        return tempOrder;
    }

    function updateTax(){
        tempTax = parseFloat(tempOrder) * .04712;
        return tempTax
    }

    function updateTotal(){
        tempTotal = parseFloat(tempOrder + tempTax).toFixed(2);
        return tempTotal;
    }

    function cashOrder(){
        cashBal = parseFloat(cashBal) + parseFloat(tempTotal);
        return cashBal;
    }

    function updateModalTtls(){
        var updateTtlAmt = document.getElementById('subtotal');
        updateTtlAmt.innerHTML = formatter.format(parseFloat(tempOrder));

        var updateTax = document.getElementById('orderTax');
        updateTax.innerHTML = formatter.format(parseFloat(tempTax));

        var updateGrandTtl = document.getElementById('orderDue');
        updateGrandTtl.innerHTML = formatter.format(parseFloat(tempTotal));
    }

    function deleteItem(x){
        tempOrder = tempOrder - x;
        updateTax();
        updateTotal();
        updateModalTtls();
        return tempOrder;
    }

    function modalUpdate(item, amt){

        var newOrder = document.createElement('div');
        newOrder.className = 'singleItem';
        orders.appendChild(newOrder);

        var newItem = document.createElement('div');
        newItem.className = 'itemDscr';
        newItem.innerHTML = item;
        newOrder.appendChild(newItem)

        var newAmt = document.createElement('div');
        newAmt.className = 'itemAmt';
        newAmt.innerHTML = parseFloat(amt).toFixed(2);
        newOrder.appendChild(newAmt)

        updateModalTtls();

    }

    function clearTtls(){
        tempOrder = 0;
        updateTax();
        updateTotal();
        return tempOrder;
    }

    function receivePmt(x){
        if (tempTotal == 0){
            alert('No order entered')
        } else if (x<tempTotal){
            addPay = parseFloat(tempTotal) - parseFloat(x);
            tempTotal = addPay;
            alert('Please collect ' + addPay + ' more!');
            return addPay;
        } else if (x>tempTotal){
            changeDue = Math.abs(parseFloat(tempTotal) - parseFloat(x)).toFixed(2);
            alert('Change due to customer is ' + changeDue);
            return changeDue;

        }
    }



    return {
        getTotal: getTotal,
        load: load,
        getOperator: getOperator,
        firstNum: firstNum,
        secNum: secNum,
        calculate: calculate,
        cashAction: cashAction,
        getCashBal: getCashBal,
        buildOrder: buildOrder,
        updateTax: updateTax,
        updateTotal: updateTotal,
        deleteItem: deleteItem,
        modalUpdate: modalUpdate,
        clearTtls: clearTtls,
        updateModalTtls: updateModalTtls,
        cashOrder: cashOrder,
        receivePmt: receivePmt
    
    }



}
