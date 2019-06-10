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
    savings: true
}

function chooseExpenses() {
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

    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budjet / 30).toFixed();//

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


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt(" какова сумма накоплений?"),
            percent = (" под какой процент ");

        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с депозита:" + appData.monthIncome);
    }
}
checkSavings();