// Отримуємо посилання на кнопку та елемент для відображення повідомлень
const button = document.getElementById('myButton');
const message = document.getElementById('message');

function addMessage(text) {
  const newMessage = document.createElement('p');
  newMessage.textContent = text;
  // Додаємо нове повідомлення в початок контейнера
  messagesContainer.prepend(newMessage);
}

// Функція, яка викликається при натисканні кнопки
button.addEventListener('click', () => {
  addMessage("I was pressed!");
});

// Функція, яка викликається при наведенні миші на кнопку
button.addEventListener('mouseover', () => {
  addMessage("Mouse on me!");
});

// Функція, яка викликається при відведенні курсора миші з кнопки
button.addEventListener('mouseout', () => {
  addMessage("Mouse is not on me!");
});