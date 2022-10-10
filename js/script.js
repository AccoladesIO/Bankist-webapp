'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = function (movements) {
  containerMovements.innerHTML = ''
  movements.map((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const amps = mov < 0 ? '&#10136;' : '&#10138;'
    const html = `
    <div class="movements__row"> <p class='${type}'>${i + 1}${amps} </p> 
    <div class="movements__type movements__type--${type}"> ${type}</div>
    <div class="movements__date"></div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);

  });
}
// displayMovements(account1.movements)

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur )
  labelBalance.textContent = `${balance}€`;
}
// calcDisplayBalance(account1.movements)

const calcDisplaySummary = (acc) =>{
  // incoming funds
  const incomes = acc.movements
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur)
  labelSumIn.textContent = `${incomes}€`;

  // out going funds
  const outcomes =acc.movements
  .filter((mov) => mov < 0)
  .reduce((acc, cur) => acc + cur)
  labelSumOut.textContent = `${Math.abs(outcomes)}€`

  // interest of 1.2% on every deposit
  const interest = acc.movements
  .filter((mov) => mov > 0)
  .map((deposit) => deposit * acc.interestRate/100)
  .filter((int) => int >= 1)
  .reduce((acc, cur) => acc + cur)
  labelSumInterest.textContent = `${interest}€`
}

// calcDisplaySummary(account1.movements)


// Computing Usernames
// const user = "Steven Thomas Williams";
const creatUsername = (accs) => {
  accs.forEach(acc => {
    acc.username = acc.owner
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toLowerCase()
  });
}
creatUsername(accounts)
// console.log(accounts);

// Event Listener for Login
let currentAccount;

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();

 currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

 if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and welcome message
          labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
          containerApp.style.opacity = 100;
          
          // clear the input field
          inputLoginUsername.value = inputLoginPin.value =  ""
          
          // Display Movements
          
          displayMovements(currentAccount.movements)
          
          // Display Balance

          calcDisplayBalance(currentAccount.movements)

          // Display Summary

          calcDisplaySummary(currentAccount)
        }else if (currentAccount?.pin !== Number(inputLoginPin.value)) {
          labelWelcome.textContent = `Incorrect Credentials`;
          inputLoginUsername.value = inputLoginPin.value =  ""
          containerApp.style.opacity = 0;

 }
})


// Transfer implementation
  btnTransfer.addEventListener('click', (e) => {
    e.preventDefault()
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value)

    if (condition) {
      
    }
  })

// challenge 1

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 8]
// julia.shift()
// julia.splice(-2)

// const checkDogs = (jD, kD) =>{
//   const type = jD || kD >=   3 ? 'adult' : 'puppy';
//   julia.map((jD, i) =>{
//     console.log(`JUlIA's dog number ${i + 1} is a ${type} and is ${jD} years old`);
//   })
//   kate.forEach((kD, i) =>{
//     console.log(`KATE's dog number ${i + 1} is a ${type} and is ${kD} years old`);
//   })
// }
// checkDogs(julia, kate)

// displayMovements(account1.movements)
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// Challenge 2

// const ages = [5, 2, 4, 1, 15, 8, 3]
// const calcAverageHumanAge = ages => 
//   ages
//   .map((dogAge) =>{
//     if(dogAge <= 2 ) return 2 * dogAge
//     else return 16 + dogAge * 4
//   })
//   .filter((newDog) => newDog >= 18)
//   .reduce((acc, cur, i, arr) => acc + cur /arr.length, 0)
//   // console.log(humanAge);
//   // console.log(adultAverage)
//   const avg =calcAverageHumanAge(ages)
//   console.log(avg)



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


// const euroToUsd = 1.1;
// const movement = movements.map((mov)=>{
//   return mov * euroToUsd
// })
// // console.log(movement);

// /////////////////////////////////////////////////

// const deposit = movements.filter((mov) =>{
//   return mov > 0
// })
// const withdrawal = movements.filter((mov) => {
//   return mov < 0;
// })

// console.log(deposit, withdrawal)

