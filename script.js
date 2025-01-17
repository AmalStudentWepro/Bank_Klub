// банк
let name = 'Alex';
let money = 10000;
let account = 7777;

function check() {
  let user = prompt('Введите ваше имя:');
  if (user !== name) {
    alert('Нет такого пользователя');
    return;
  }
  
  let accountNumber = Number(prompt('Введите пароль:'));
  if (accountNumber !== account) {
    alert('Неверный счет');
    return;
  }
  
  let take = Number(prompt('Введите сумму для снятия:'));
  if (take > money) {
    alert('Недостаточно денег');
    return;
  }
  
  money -= take;
  alert(`Ок! Осталось: $${money}`);
}

check();




// клуб
const list = [
  { name: 'Alex', age: 25, money: 150 },
  { name: 'Anna', age: 19, money: 200 },
  { name: 'Alice', age: 30, money: 50 },
  { name: 'John', age: 35, money: 120 },
  { name: 'Alfred', age: 40, money: 110 },
  { name: 'Bob', age: 22, money: 90 }
];

function dopusk() {
  let nameStart = prompt('Введите первую букву имени (A-Z):').toUpperCase();
  let minAge = Number(prompt('Введите минимальный возраст:'));
  let maxAge = Number(prompt('Введите максимальный возраст:'));
  let minMoney = Number(prompt('Введите минимальное количество денег:'));
  
  let allowedList = list.filter(p =>
    p.name[0].toUpperCase() === nameStart &&
    p.age >= minAge && p.age <= maxAge &&
    p.money >= minMoney
  );

  if (allowedList.length === 0) {
    alert('Нет подходящих людей!');
    return;
  }
  
  alert(`Можно впустить: ${allowedList.length}`);
}

dopusk();
