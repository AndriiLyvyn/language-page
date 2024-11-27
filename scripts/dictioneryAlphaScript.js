const dictionary_container = document.getElementById("container_for_dictionary");
const pagination = document.getElementById("pagination");

let thisPage = 1;
const limitItems = 50;
let items = [];
let filteredItems = []; // Lista przefiltrowanych słów

fetch("/data/vocabluary.json")
  .then((response) => response.json())
  .then((data) => {
    items = data;
    filteredItems = items; // Domyślnie wyświetlamy wszystkie elementy
    paginateItems();
    createPagination();
  });

function paginateItems() {
  container_for_dictionary.innerHTML = "";

  // Header
  const header = document.createElement("h3");
  header.classList.add("header");
  header.innerHTML = `<p>English</p><p>Polish</p>`;

  // Search Input and Button
  const containerForInput = document.createElement("div");
  containerForInput.classList.add("boxForInput");

  const inputWord = document.createElement("input");
  inputWord.classList.add("inputWords");
  inputWord.placeholder = "Enter letters to search"; // Podpowiedź w input

  const buttonSrh = document.createElement("button");
  buttonSrh.classList.add("buttonSrh");
  buttonSrh.innerText = "Search";

  // Event Listener for Search
  buttonSrh.addEventListener("click", () => {
    const searchTerm = inputWord.value.trim().toLowerCase();  // Pobranie wprowadzonego ciągu znaków

    if (searchTerm.length > 0) {  // Jeśli wprowadzone zostały jakiekolwiek znaki
      // Filtrujemy słowa zaczynające się od wprowadzanego ciągu znaków (w języku angielskim lub polskim)
      filteredItems = items.filter((item) =>
        item.english.toLowerCase().startsWith(searchTerm) 
      //||item.polish.toLowerCase().startsWith(searchTerm)
      );
    } else {
      filteredItems = items; // Reset do pełnej listy jeśli brak wprowadzonego filtru
    }

    thisPage = 1; // Reset to first page after search
    paginateItems();
    createPagination();
  });

  const wordList = document.createElement("ul");
  let beginGet = limitItems * (thisPage - 1);
  let endGet = limitItems * thisPage;

  // Paginacja na podstawie przefiltrowanych słów
  for (let i = beginGet; i < endGet && i < filteredItems.length; i++) {
    const word_li = document.createElement("li");
    word_li.innerHTML = `<p>${filteredItems[i].english}</p>=<p>${filteredItems[i].polish}</p>`;
    wordList.appendChild(word_li);
  }

  containerForInput.appendChild(inputWord);
  containerForInput.appendChild(buttonSrh);
  container_for_dictionary.appendChild(containerForInput);
  container_for_dictionary.appendChild(header);
  container_for_dictionary.appendChild(wordList);
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
