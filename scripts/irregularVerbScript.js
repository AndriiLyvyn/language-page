const dictionary_container = document.getElementById("container_for_dictionary");
const pagination = document.getElementById("pagination");

let thisPage = 1;
const limitItems = 50;
let items = [];
let filteredItems = [];

// Pobranie danych i utworzenie stron
fetch("https://andriilyvyn.github.io/language-page/data/irregularVerb.json")
  .then((response) => response.json())
  .then((data) => {
    items = data;
    filteredItems = items; // Na początku wyświetlamy wszystkie elementy
    createSearchBox(); // Tworzenie pola wyszukiwania
    paginateItems();
    createPagination();
  });

function paginateItems() {
  const searchContainer = document.querySelector('.boxForInput'); // Znajdź kontener wyszukiwania

  // Nie usuwaj całkowicie innerHTML kontenera
  const wordList = document.createElement("ul");
  let beginGet = limitItems * (thisPage - 1);
  let endGet = limitItems * thisPage;
  const header = document.createElement("h2");
  header.classList.add("header");
  header.innerHTML = `<h3>Base</h3><h3>Past</h3><h3>Participle</h3><h3>Translation</h3>`;

  // Resetuj listę słów
  for (let i = beginGet; i < endGet && i < filteredItems.length; i++) {
    const word_li = document.createElement("li");
    word_li.innerHTML = `
      <p>${filteredItems[i].base}</p>=
      <p>${filteredItems[i].past}</p>=
      <p>${filteredItems[i].participle}</p>=
      <p>${filteredItems[i].polish}</p>
    `;
    wordList.appendChild(word_li);
  }

  // Dodaj nagłówek i listę słów
  dictionary_container.innerHTML = ""; // Tylko wyczyść kontener
  dictionary_container.appendChild(searchContainer); // Przywróć pole wyszukiwania
  dictionary_container.appendChild(header); 
  dictionary_container.appendChild(wordList);
}

function createSearchBox() {
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('boxForInput');

  const inputWord = document.createElement('input');
  inputWord.classList.add('inputWords');
  inputWord.placeholder = 'Search by base verb...'; // Wskazówka w polu input

  const buttonSrh = document.createElement('button');
  buttonSrh.classList.add('buttonSrh');
  buttonSrh.innerText = 'Search';

  // Event Listener for Search
  buttonSrh.addEventListener('click', () => {
    const searchTerm = inputWord.value.trim().toLowerCase(); // Pobranie wprowadzonego ciągu znaków
    if (searchTerm.length > 0) {
      // Filtracja na podstawie wprowadzonego słowa
      filteredItems = items.filter(item => 
        item.base.toLowerCase().startsWith(searchTerm) // Filtrowanie po podstawowym słowie
      );
    } else {
      filteredItems = items; // Jeśli pole wyszukiwania jest puste, resetuj filtr
    }

    thisPage = 1; // Po filtracji zaczynamy od pierwszej strony
    paginateItems(); // Odswiezanie listy słów
    createPagination(); // Aktualizacja paginacji
  });

  searchContainer.appendChild(inputWord);
  searchContainer.appendChild(buttonSrh);

  // Dodaj pole wyszukiwania nad listą słów
  dictionary_container.prepend(searchContainer);
}

function createPagination() {
  pagination.innerHTML = ""; 
  let pageCount = Math.ceil(filteredItems.length / limitItems);

  const prevButton = document.createElement('li');
  prevButton.innerText = '<';
  prevButton.classList.add('prev');
  if (thisPage === 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.addEventListener('click', () => {
      thisPage--;
      paginateItems();
      createPagination();
    });
  }
  pagination.appendChild(prevButton);

  const maxPagesToShow = 3;
  let startPage = Math.max(1, thisPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(pageCount, thisPage + Math.floor(maxPagesToShow / 2));

  if (endPage - startPage + 1 < maxPagesToShow) {
    if (startPage === 1) {
      endPage = Math.min(startPage + maxPagesToShow - 1, pageCount);
    } else {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    let newPage = document.createElement('li');
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.addEventListener("click", () => {
      thisPage = i;
      paginateItems();
      createPagination();
    });
    pagination.appendChild(newPage);
  }

  const nextButton = document.createElement('li');
  nextButton.innerText = '>';
  nextButton.classList.add('next');
  if (thisPage === pageCount) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.addEventListener('click', () => {
      thisPage++;
      paginateItems();
      createPagination();
    });
  }
  pagination.appendChild(nextButton);
}

window.addEventListener('beforeunload', function() {
  localStorage.removeItem('level');
});
