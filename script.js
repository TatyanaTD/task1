'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    allMoney: money,
    timeData: time,
    expensesAll: expenses,
    optionalExpensesAll: optionalExpenses,
    incomeAll: income,
    savingsAll: saving
};

var moneyInMonth1 = prompt("Введите обязательную статью расходов в этом месяце"),
    moneyInMonth2 = prompt("Во сколько обойдется?");

var expenses = {moneyInMonth1, moneyInMonth2};
var optionalExpenses = {};
var income = [];
var saving = false;

var moneyDay = ((money-moneyInMonth2)/30);
alert (moneyDay);


    