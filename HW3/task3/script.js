// Отримуємо посилання на кнопку та елемент для відображення повідомлень
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Функція, яка викликається при натисканні кнопки
button.addEventListener('click', () => {
  message.textContent = "I was pressed!";
});

// Функція, яка викликається при наведенні миші на кнопку
button.addEventListener('mouseover', () => {
  message.textContent = "Mouse on me!";
});

// Функція, яка викликається при відведенні курсора миші з кнопки
button.addEventListener('mouseout', () => {
  message.textContent = "Mouse is not on me!";
});
