window.addEventListener("beforeunload", function () {
  localStorage.removeItem("getKeyLevel");
});

const number = document.querySelectorAll("#number li");
const numbersOfWords = document.getElementById("numbersOfWords");
const head_topic = document.getElementById("head_topic");
const inputWords = document.getElementById("inputWords");
const wordsBlock = document.getElementById("wordsBlock");
const checkBtn = document.getElementById("checkWord");
const skipBtn = document.getElementById("skip");
const exitBtn = document.getElementById("exit");
const finalBtn = document.getElementById("finalBtn");
const masseForUsers = document.getElementById("masseForUsers");
const finalPage = document.getElementById("finalPage");
const finalBlock = document.getElementById("finalBlock");



number.forEach((items) => {
  items.addEventListener("click", () => {
    selectedNumber = Number(items.textContent);
    console.log(typeof selectedNumber, selectedNumber);
    numbersOfWords.style.display = "none";
    
    setloop(selectedNumber);
    wordsBlock.style.display="block";
  });
});

const getLevel= localStorage.getItem("getKeyLevel")|| "A1";
console.log(getLevel)
head_topic.innerText= getLevel;

function setloop(count) {
  fetch("/data/dictonaryLevel.json")
    .then((response) => response.json())
    .then((data) => {
      const listWords = [];
      for (let i = 0; i < count; i++) {
        const random = Math.floor(Math.random() * data[getLevel].length);
        console.log(
          data[getLevel][random].english,
          data[getLevel][random].polish,
          data[getLevel][random].id
        );
        listWords.push({
          id: data[getLevel][random].id,
          polish: data[getLevel][random].polish,
          english: data[getLevel][random].english,
        });
      }
      createWords(listWords);
    });
}

function createWords(list) {
  const welcom = document.createElement("p");
  const word = document.createElement("p");
  const checkWord= document.createElement("button");
  const skipWord= document.createElement("button");
  const exitBtn= document.createElement("button");
  const inputWords= document.createElement("input");
  const masseForUsers= document.createElement("div");
  masseForUsers.id="masseForUsers"; 
  inputWords.type="text"


  checkWord.innerText="Check"
  skipWord.innerText="Skip"
  exitBtn.innerText="Exit"

  word.classList.add("words")
  let currentIndex = 0;
  const massege = document.createElement("p");

  welcom.innerHTML = `Number of words: <span>${list.length} / ${currentIndex}</span>`;
  word.innerText = list[currentIndex].polish;

  wordsBlock.appendChild(word);
  wordsBlock.appendChild(inputWords);
  wordsBlock.appendChild(welcom);
  wordsBlock.appendChild(checkWord)
  wordsBlock.appendChild(skipWord)
  wordsBlock.appendChild(exitBtn)
  wordsBlock.appendChild(masseForUsers)

  checkWord.addEventListener("click", () => {
    const data = inputWords.value.trim().toLowerCase();
    if (data === "") {
      massege.innerText = "Field empty !!🤷‍♀️";
    } else {
      const finalList = document.createElement("li");
      finalList.innerHTML = `<p>${list[currentIndex].polish}</p> <p>${list[currentIndex].english}</p> <p>${data}</p>`;
      if (data === list[currentIndex].english) {
        massege.innerText = "Great!!😁";
        finalList.innerHTML += `<p>✔</p>`;
      } else {
        massege.innerText = "Bed!!🤦‍♂️";
        finalList.innerHTML += `<p>💢</p>`;
      }
      finalPage.appendChild(finalList);
      currentIndex++;
      if (currentIndex < list.length) {
        word.innerText = list[currentIndex].polish;
      } else {
        wordsBlock.style.display = "none";
        finalBlock.style.display = "block";
      }
      welcom.innerHTML = `Number of words: <span>${list.length} / ${currentIndex}</span>`;
      inputWords.value = "";
    }
    masseForUsers.appendChild(massege);
    
  });

  skipWord.addEventListener("click", () => {
    const finalList = document.createElement("li");
    finalList.innerHTML = `<p>${list[currentIndex].polish}</p> <p>${list[currentIndex].english}</p> <p>Skip</p> <p>🤕</p>`;
    finalPage.appendChild(finalList);
    currentIndex++;
    if (currentIndex < list.length) {
      word.innerText = list[currentIndex].polish;
      
    } else {
      wordsBlock.style.display = "none";

      finalBlock.style.display = "block";
    }
    welcom.innerHTML = `Number of words: <span>${list.length} / ${currentIndex}</span>`;
    masseForUsers.innerHTML = "";
    
  });

  exitBtn.addEventListener("click", () => {
    window.location.href="/pages/exercises.html"
    localStorage.clear();
  });
}

finalBtn.addEventListener("click", () => {
  window.location.href="/pages/exercises.html"
  localStorage.clear();
});

