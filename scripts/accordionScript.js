const accordion = document.getElementsByClassName("contetnBx");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
  
    for (let j = 0; j < accordion.length; j++) {
      if (accordion[j] !== this) {
        accordion[j].classList.remove("active");
      }
    }
    this.classList.toggle("active");
  });
}
