let content = document.querySelector('.quotes'),
  text = document.querySelector('.quotes__text'),
  author = document.querySelector('quotes__author'),
  btn = document.querySelector('.btn'),
  rand;

btn.addEventListener('click', () => {
  rand = Math.floor(Math.random() * 8);

  switch__change();
  if (rand == 9) rand = 0;
});

function switch__change() {
  switch (rand) {
    case 0:
      content.innerHTML =
        '<quotes class="quotes__text">"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"</quotes><p class="quotes__author">-Наполеон Хилл</p>';
      break;

    case 1:
      content.innerHTML =
        '<quotes class="quotes__text">" Стремитесь не к успеху, а к ценностям, которые он дает"</quotes><p class="quotes__author">-Альберт Эйнштейн</p>';
      break;

    case 2:
      content.innerHTML =
        '<quotes class="quotes__text">"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."</quotes><p class="quotes__author">-Флоренс Найтингейл</p>';
      break;

    case 3:
      content.innerHTML =
        '<quotes class="quotes__text">"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."</quotes><p class="quotes__author">-Майкл Джордан</p>';
      break;

    case 4:
      content.innerHTML =
        '<quotes class="quotes__text">"Сложнее всего начать действовать, все остальное зависит только от упорства."</quotes><p class="quotes__author">-Амелия Эрхарт</p>';
      break;

    case 5:
      content.innerHTML =
        '<quotes class="quotes__text">"Надо любить жизнь больше, чем смысл жизни."</quotes><p class="quotes__author">-Федор Достоевский</p>';
      break;

    case 6:
      content.innerHTML =
        '<quotes class="quotes__text">"Жизнь - это то, что с тобой происходит, пока ты строишь планы."</quotes><p class="quotes__author">-Джон Леннон</p>';
      break;

    case 7:
      content.innerHTML =
        '<quotes class="quotes__text">"Своим успехом я обязана тому, что никогда не о"</quotes><p class="quotes__author">-Флоренс Найтингейл</p>';
      break;

    case 8:
      content.innerHTML =
        '<quotes class="quotes__text">"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."</quotes><p class="quotes__author">-Альберт Эйнштейн</p>';
      break;
  }

  if (rand >= 9) rand = 0;
}
