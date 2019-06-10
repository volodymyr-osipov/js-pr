'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budjet: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income: [],
    savings: false
}

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
// let a2 = prompt("Во сколько обойдется?", '');
// let a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
// let a4 = prompt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;

    } else {
        i = i - 1;
    }
    
};

appData.moneyPerDay = appData.budjet / 30;

alert("budjet:" + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log('mimimum level');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('good level');
} else if (appData.moneyPerDay > 2000) {
    console.log('very good level');
} else {
    console.log('error');
}
