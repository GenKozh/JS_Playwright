// Створюємо елемент <article> з класами "article" і "postList"
const article = document.createElement('article');
article.classList.add('article', 'postList');

// Створюємо елемент <div> з id "container"
const container = document.createElement('div');
container.id = 'container';

// Створюємо три елементи <p> з текстом "Post 1", "Post 2" і "Post 3"
const post1 = document.createElement('p');
post1.textContent = 'Post 1';

const post2 = document.createElement('p');
post2.textContent = 'Post 2';

const post3 = document.createElement('p');
post3.textContent = 'Post 3';

// Додаємо елементи <p> до контейнера <div>
container.appendChild(post1);
container.appendChild(post2);
container.appendChild(post3);

// Додаємо <div> до <article>
article.appendChild(container);

// Додаємо <article> до <body>
document.body.appendChild(article);
