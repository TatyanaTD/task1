'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


/* for (let i = 1; i < 3; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null ) 
            && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
    } else {
        i--;
    }
        
} */
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


let i = 1;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');
    if ((typeof(a) === 'string') && (typeof(a) != null ) && (typeof(b) != null ) 
            && a != '' && b != '' && a.length < 50 ) {
        appData.expenses[a] = b;
        i++;
    }    
}
while (i < 3);


appData.moneyPerDay = appData.budget/30;

if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка" );
} else {
    console.log("Произошла ошибка");
}




    