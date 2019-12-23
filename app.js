const listIncome = []
const listExpense = []
let totalIncome= 0;
let totalExpense = 0;
let totalBudget = 0;

function count() {
    let description = document.querySelector('#input__text').value;

    let income = document.querySelector('.inkomst__value');
    let expenses = document.querySelector('.utgift__value');
    let budget = document.querySelector('.diff__value');
    let amount = document.querySelector('.input__nummer').value;
    let incomeItem = document.querySelector('.inkomster__item');
    let expenseItem = document.querySelector('.utgifter__item');
    let incOrExp = document.querySelector('#add__typ').value;
   
    console.log(incOrExp)

    if (incOrExp === 'ink') {

        incomeItem.innerHTML = "<span>" + " " + description + ":" + " " + amount + ":-" + "</span>";
        listIncome.push(incomeItem.textContent);
        console.log(listIncome)
        doLoop(listIncome, incomeItem ,amount, totalIncome)
        totalIncome +=Number(amount);
       



    } else if (incOrExp === 'utg') {

        expenseItem.innerHTML = "<span>" + " " + description + ":" + " " + amount + ":-" + "</span>";
        listExpense.push(expenseItem.textContent);
        console.log(listExpense)
        doLoop(listExpense, expenseItem, amount, totalIncome)
        totalExpense += Number(amount)

    }
    income.textContent = totalIncome
    expenses.textContent= totalExpense
    budget.textContent = Number((totalIncome) - (totalExpense))
    if (budget.textContent <= 0 ){
        budget.textContent = "0"
        
    }
    
  

}


let btn = document.querySelector('.add__btn');
btn.addEventListener("click", count);


function doLoop(value, element)

{

    for (i = 0; i < value.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = value[i];
        element.appendChild(li)
      

    }


    
}