function publishMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageContainer = document.getElementById('messageContainer');

  const messageText = messageInput.value.trim();

  if (messageText === "") return;

  const timestamp = new Date().toLocaleString();

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = messageText;
  messageDiv.appendChild(messageParagraph);

  const timestampDiv = document.createElement('div');
  timestampDiv.classList.add('timestamp');
  timestampDiv.textContent = timestamp;
  messageDiv.appendChild(timestampDiv);

  messageContainer.appendChild(messageDiv);

  messageInput.value = "";
}
