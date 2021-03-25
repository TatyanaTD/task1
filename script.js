'use strict';


let money, time;

function start( ) {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
    
};

function chooseExpenses(){

        for (let i = 1; i < 3; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = +prompt("Во сколько обойдется?", '');
        if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null ) 
                && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
            
    } 

}

chooseExpenses();



/* let i = 1;
while (i < 3){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null ) 
            && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        i++;
    }
} */


/* let i = 1;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null ) 
            && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        i++;
    }    
}
while (i < 3); */

let moneyPerDay;

function detectLevel(){
   if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка" );
} else {
    console.log("Произошла ошибка");
} 
}

function detectDayBudget() {

appData.moneyPerDay = (appData.budget/30).toFixed();

detectLevel();

}

detectDayBudget();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);    
    }
}

checkSavings();
let optionalExpenses = {};

function chooseOptExpenses() {
let n = 1,

while (n < 3) {
    let с = prompt("Статья необязательных расходов?");
    optionalExpenses
}

}

    