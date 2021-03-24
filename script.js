'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    allMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var inMonth1 = prompt("Введите обязательную статью расходов в этом месяце"),
    inMonth2 = prompt("Во сколько обойдется?"),
    inMonth3 = prompt("Введите обязательную статью расходов в этом месяце"),
    inMonth4 = prompt("Во сколько обойдется?");

appData.expenses.inMonth1 = inMonth2;
appData.expenses.inMonth3 = inMonth4;

alert(appData.budget/30);




    