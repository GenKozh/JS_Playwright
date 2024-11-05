function addStyle() {
  // Змінюємо стиль тегу <h2>
  const header = document.querySelector('h2.header');
  header.style.color = 'red';
  header.style.textDecoration = 'underline';

  // Змінюємо стиль тегу <p>
  const paragraph = document.getElementById('data');
  paragraph.style.color = 'brown';
  paragraph.style.fontSize = '18px';
  paragraph.style.fontFamily = '"Comic Sans MS", sans-serif';

  // Змінюємо стиль тегу <h2> на зелений і курсив
  header.style.color = 'green';
  header.style.fontStyle = 'italic';

  // Робимо вміст <div> невидимим
  const divElement = document.querySelector('div');
  divElement.style.display = 'none';
}
