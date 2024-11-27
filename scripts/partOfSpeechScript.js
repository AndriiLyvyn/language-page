

const  cardOfSection = document.getElementsByClassName("cardOfSection")


console.log( cardOfSection.length)



for (let i = 0; i < cardOfSection.length; i++) {
     cardOfSection[i].addEventListener("click", () => {
          const h3 = cardOfSection[i].querySelector("h3").textContent.trim();
          switch(h3){
               case"Verbs": 
               window.location.href = "/pages/partOfSpeech/type_of_verb.html";
               break;
               case"Nouns": 
               window.location.href = "/pages/partOfSpeech/type_of_noun.html";
               break;
               case"Adjectives": 
               window.location.href = "/pages/partOfSpeech/type_of_adjective.html";
               break;
               case"Adverbs": 
               window.location.href = "/pages/partOfSpeech/type_of_adverb.html";
               break;
               case"Pronouns": 
               window.location.href = "/pages/partOfSpeech/type_of_pronoun.html";
               break;
               case"Articles": 
               window.location.href = "/pages/partOfSpeech/type_of_article.html";
               break;
               case"Prepositions": 
               window.location.href = "/pages/partOfSpeech/type_of_preposition.html";
               break;
               case"Conjunctions": 
               window.location.href = "/pages/partOfSpeech/type_of_conjunction.html";
               break;
               case"Numerals": 
               window.location.href = "/pages/partOfSpeech/type_of_numeral.html";
               break;

          }
     
     })
     
   }