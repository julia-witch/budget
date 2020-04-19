'use strict';

let money, time;
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{}, 
    income: [],
    savings: false
    };


for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log('done!');
        appData.expenses[a] = b;
    } else {
        console.log('bad result!');
        i--;
    }
}
    appData.moneyPerDay = appData.budget/30;

    alert('Ваш бюджет на день составляет: ' + Math.round(appData.moneyPerDay) + ' ₽');

    if (appData.moneyPerDay <= 500) {
        alert("У Вас минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000) {
    alert("У Вас средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
        alert("Да этот человек богат!");
    } else {alert("Произошла ошибка!");

    }


console.log (appData);