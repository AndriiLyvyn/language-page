window.addEventListener("beforeunload", function () {
  localStorage.removeItem("getKeyLevel");
});

const number = document.querySelectorAll("#number li");
const head_topic = document.getElementById("head_topic");
const verbs_final = document.getElementById("verbs_final");
const numbersOfWords = document.getElementById("numbersOfWords");
const inputWords = document.getElementById("inputWords");
const wordsBlock = document.getElementById("wordsBlock");
const checkBtn = document.getElementById("check");
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
    const getLevel= localStorage.getItem("getKeyLevel")|| "Past";
    setloop(selectedNumber , getLevel);
    
    wordsBlock.style.display="block";
  });
});

const getLevel= localStorage.getItem("getKeyLevel")|| "Past";


head_topic.innerText= getLevel;



function setloop(count , type) {

  if(type === "Past"){
   
      fetch("https://andriilyvyn.github.io/language-page/data/irregularVerb.json")
    .then((response) => response.json())
    .then((data) => {
      const listWords = [];
      console.log(data .length)
      for (let i = 0; i < count; i++) {
        const random = Math.floor(Math.random() * data.length);
        console.log(
          data[random].base,
          data[random].past,
          data[random].id
        );
        listWords.push({
          id: data[random].id,
          base: data[random].base,
          past: data[random].past,
        });
        
      }
      console.log(listWords)
      createWords(listWords ,type);
    });
  }else if(type === "Participle"){
    
    fetch("https://andriilyvyn.github.io/language-page/data/irregularVerb.json")
    .then((response) => response.json())
    .then((data) => {
      const listWords = [];
      console.log(data .length)
      for (let i = 0; i < count; i++) {
        const random = Math.floor(Math.random() * data.length);
        console.log(
          data[random].base,
          data[random].participle,
          data[random].id
        );
        listWords.push({
          id: data[random].id,
          base: data[random].base,
          participle: data[random].participle,
        });
        
      }
      console.log(listWords)
      createWords(listWords ,type);
    });
  }

        
}

function createWords(list , type) {
  if(type === "Past"){
    verbs_final.innerText = type;
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
  word.innerText = list[currentIndex].base;

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
      finalList.innerHTML = `<p>${list[currentIndex].base}</p> <p>${list[currentIndex].past}</p> <p>${data}</p>`;
      if (data === list[currentIndex].past) {
        massege.innerText = "Great!!😁";
        finalList.innerHTML += `<p>✔</p>`;
      } else {
        massege.innerText = "Bed!!🤦‍♂️";
        finalList.innerHTML += `<p>💢</p>`;
      }
      finalPage.appendChild(finalList);
      currentIndex++;
      if (currentIndex < list.length) {
        word.innerText = list[currentIndex].base;
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
    finalList.innerHTML = `<p>${list[currentIndex].base}</p> <p>${list[currentIndex].past}</p> <p>Skip</p> <p>🤕</p>`;
    finalPage.appendChild(finalList);
    currentIndex++;
    if (currentIndex < list.length) {
      word.innerText = list[currentIndex].base;
      
    } else {
    wordsBlock.style.display = "none";

      finalBlock.style.display = "block";
    }
    welcom.innerHTML = `Number of words: <span>${list.length} / ${currentIndex}</span>`;
    masseForUsers.innerHTML = "";

    
     });

     exitBtn.addEventListener("click", () => {
      window.location.href="https://andriilyvyn.github.io/language-page/pages/exercises.html"
      localStorage.clear();
    });
  }else if(type === "Participle"){
    verbs_final.innerText = type;
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
  word.innerText = list[currentIndex].base;
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
      finalList.innerHTML = `<p>${list[currentIndex].base}</p> <p>${list[currentIndex].participle}</p> <p>${data}</p>`;
      if (data === list[currentIndex].participle) {
        massege.innerText = "Great!!😁";
        finalList.innerHTML += `<p>✔</p>`;
      } else {
        massege.innerText = "Bed!!🤦‍♂️";
        finalList.innerHTML += `<p>💢</p>`;
      }
      finalPage.appendChild(finalList);
      currentIndex++;
      if (currentIndex < list.length) {
        word.innerText = list[currentIndex].base;
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
    finalList.innerHTML = `<p>${list[currentIndex].base}</p> <p>${list[currentIndex].participle}</p> <p>Skip</p> <p>🤕</p>`;
    finalPage.appendChild(finalList);
    currentIndex++;
    if (currentIndex < list.length) {
      word.innerText = list[currentIndex].base;
      
    } else {
      wordsBlock.style.display = "none";

      finalBlock.style.display = "block";
    }
    welcom.innerHTML = `Number of words: <span>${list.length} / ${currentIndex}</span>`;
    masseForUsers.innerHTML = "";
     });
     exitBtn.addEventListener("click", () => {
      window.location.href="https://andriilyvyn.github.io/language-page/pages/exercises.html"
      localStorage.clear();
    });

  }
  
    
 

 
}

finalBtn.addEventListener("click", () => {
  window.location.href="https://andriilyvyn.github.io/language-page/pages/exercises.html"
  localStorage.clear();
});



      
    

