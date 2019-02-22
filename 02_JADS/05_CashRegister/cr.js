// Create an array of objects which hold the denominations and their values
var denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;

    // Transform CID array into drawer object
    var register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    // Handle exact change
    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Loop through the denomination array
    var change_arr = denom.reduce(function(acc, curr) {
        var value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Here is your change, ma'am.
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}

// test here
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);



/*+
#### MY REAL CODE SOLUTION --- which didn't work thanks to the statuses ####
function checkCashRegister(price, cash, cid) {
    var obj = {
        status: '',
        change: []
    };
    var changeDue = cash - price;
    var change = [];
    var index = cid.length -1;

    getChange(changeDue, cid, index, change, obj);
    console.log("STATUS: " + obj.status + " CHANGE: " + obj.change);
    return ret;
}

function getChange(changeDue, cid, index, change, obj){
    //console.log("------------------NEXT-----------------------");

    var totalFunds = getTotalFunds(cid);
    console.log(totalFunds);

    if(changeDue > totalFunds){
        obj.status = "INSUFFICIENT_FUNDS";
    }

    var valueList = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.10,
        "QUARTER": 0.25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    };
    let billValue = valueList[cid[index][0]];
    let billFunds = cid[index][1];
    //console.log("ChangeDue: " + changeDue + " | BillVal: " + billValue + " | BillN: " + cid[index][0] +  " | Bill Money left: " + billFunds + " | Index: " + index + " | Cashback: " + change);


    if(changeDue - billValue >= 0 && billFunds - billValue >= 0){
        console.log("--- RIGHT BILL ---");
        console.log("BILLS FIT IN CHANGEDUE: " + Math.floor(changeDue/billValue));
        console.log("BILLS FIT IN AV CASH: " + Math.floor(billFunds/billValue));
        let billCount = Math.min(Math.floor(changeDue/billValue), Math.floor(billFunds/billValue));
        console.log("BILL COUNT: " + billCount);
        cid[index][1] -= billValue * billCount;
        changeDue -= billValue * billCount;

        change.push([cid[index][0], billValue * billCount]);
        console.log("PUSH STATEMENT: " +cid[index][0] + " , " +billValue * billCount);
        console.log("ChangeDue: " + changeDue + " | Bill: " + billValue + " | Bill Money left: " + billFunds + " | Index: " + index + " | Cashback: " + change);
        index--;
        getChange(changeDue, cid, index, change);
    } else {
        console.log("ELSE");
        console.log("FUNDS:" + getTotalFunds(cid));
        console.log("ChangeDue: " + changeDue + " | Bill: " + billValue + " | Bill Money left: " + billFunds + " | Index: " + index + " | Cashback: " + change);
        if(changeDue == 0 && getTotalFunds(cid) === 0) {
            console.log("CLOSED");
            obj.status = "CLOSED";
            obj.change = change;

        } else if (changeDue == 0 && getTotalFunds(cid) > 0) {
            console.log("OPEN");
            obj.status = "OPEN";
            console.log(change);
            return change;
            //obj.change = change;

        } else {
            console.log("ELSE2");
            index--;
            getChange(changeDue, cid, index, change);
        }
        console.log("OUT");
    }

}

function getTotalFunds(cid){
    return cid.reduce((acc, el) => acc.concat(el)).filter(el => isFinite(el)).reduce((acc,el) => acc + el).toFixed(2);
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
*/