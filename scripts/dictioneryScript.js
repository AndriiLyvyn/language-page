 const listDictionary = [
  "Dictionary A-Z",
  "Level A1",
  "Level A2",
  "Level B1",
  "Level B2",
  "Level C1",
  "Level C2",
  "Irregular verbs",
  "Clothes",
  "Kitchen",
];



const container = document.getElementById("container");

 function DictionaryBlock(data) {
  data.forEach((element) => {
    const dictionaryBlock = document.createElement("div");
    dictionaryBlock.classList.add("dictionary");
    const dictionaryBlockText = document.createElement("p");
    dictionaryBlockText.innerHTML = element;
    dictionaryBlock.appendChild(dictionaryBlockText);
    container.appendChild(dictionaryBlock);

    dictionaryBlock.addEventListener("click", () => {
      switch (element) {
        case (element = "Dictionary A-Z"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryAlphabet.html";
          break;
        case (element = "Level A1"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-A1.html";
          localStorage.setItem("level", "A1");
          break;
        case (element = "Level A2"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-A2.html";
          localStorage.setItem("level", "A2");
          break;
        case (element = "Level B1"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-B1.html";
          localStorage.setItem("level", "B1");
          break;
        case (element = "Level B2"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-B2.html";
          localStorage.setItem("level", "B2");
          break;
        case (element = "Level C1"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-C1.html";
          localStorage.setItem("level", "C1");
          break;
        case (element = "Level C2"):
          window.location.href =
            "/pages/dictionaryPages/dictionaryLevel-C2.html";
          localStorage.setItem("level", "C2");
          break;
        case (element = "Irregular verbs"):
          window.location.href = "/pages/dictionaryPages/irregular_verb.html";
          break;
        case (element = "Clothes"):
          window.location.href = "/pages/dictionaryPages/clothes.html";
          localStorage.setItem("level", "Clothes");
        case (element = "Kitchen"):
          window.location.href = "/pages/dictionaryPages/kitchen.html";
          localStorage.setItem("level", "Kitchen");
      }
    });
  });
}

DictionaryBlock(listDictionary);
