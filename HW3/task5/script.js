function publishMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageContainer = document.getElementById('messageContainer');

  // Отримуємо текст з текстового поля
  const messageText = messageInput.value.trim();

  // Перевіряємо, щоб повідомлення не було порожнім
  if (messageText === "") return;

  // Отримуємо поточну дату і час
  const timestamp = new Date().toLocaleString();

  // Створюємо контейнер для нового повідомлення
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  // Додаємо текст повідомлення
  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = messageText;
  messageDiv.appendChild(messageParagraph);

  // Додаємо дату і час
  const timestampDiv = document.createElement('div');
  timestampDiv.classList.add('timestamp');
  timestampDiv.textContent = timestamp;
  messageDiv.appendChild(timestampDiv);

  // Додаємо нове повідомлення до контейнера повідомлень
  messageContainer.appendChild(messageDiv);

  // Очищаємо поле вводу
  messageInput.value = "";
}
