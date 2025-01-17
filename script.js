// банк
let name = 'Alex';
let money = 10000;
let account = 7777;

function check() {
  let user = prompt('Введите ваше имя:');
  if (user !== name) {
    alert('Пользователь не найден,дасвидули');
    return;
  }
  
  let accountNumber = Number(prompt('Введите счёта?'));
  if (accountNumber !== account) {
    alert('Неверный счёт');
    return;
  }
  
  let take = Number(prompt('Сколько обналичить?'));
  if (take > money) {
    alert('Недостаточно средвств');
    return;
  }
  
  alert(`Всё Отлично!`);
}

check();




// клуб
let dopuskCount = 0;
let peopleCount = Number(prompt("Сколько человек хочет зайти в клуб?"));

let name1 = prompt("Как вас зовут?");
if (name1[0].toUpperCase() === 'A') {
  let age = Number(prompt("Сколько вам лет?"));
  if (age > 20 && age <= 40) {
    let money = Number(prompt("Сколько у вас денег?"));
    if (money > 100) {
      dopuskCount++;
      alert("Пропускаем!");
    } else {
      alert("Не пропускаем");
    }
  } else {
    alert("Не пропускаем");
  }
} else {
  alert("Не пропускаем");
}


