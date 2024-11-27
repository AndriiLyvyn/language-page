const A1 = [
  "A Day at the Zoo",
  "A Trip to the Beach",
  "My Daily Routine",
  "My Family",
  "My Favorite Hobby",
  "My Pet Cat",
  "My Pet",
  "My School",
];

const A2 = [
  "A Day in the City",
  "My Best Friend",
  "A Visit to the Library",
  "A Weekend Trip to the Mountains",
];

const B1 = [
  "Going Abroad",
  "Job Searching",
  "Visiting the Doctor",
  "A Walk in the Forest",
];

const B2 = [
  "A Typical Day at the Office",
  "A Comprehensive Guide to Buying a Car",
  "How to Prepare for a Doctor's Appointment",
  "How to Conduct a Successful Client Meeting",
];

const C1 = [
  "Effective Strategies for Client Meetings",
  "Mastering Office Culture and Dynamics",
  "Preparing for a Comprehensive Medical Examination",
  "The Process of Purchasing a New Vehicle",
];

const level = [
  "Level A1",
  "Level A2",
  "Level B1",
  "Level B2",
  "Level C1",
  "Level C2",
  "Clothes",
  "Kitchen",
];
const verbsTopic = ["Past tense", "Past participle"];

const topic_level = document.getElementById("topic_level");
const topic_verb = document.getElementById("topic_verb");
const readSection = document.getElementById("readSection");
const writeSection = document.getElementById("writeSection");
const readTextBlock = document.getElementById("readTextBlock");
const grammarBlock = document.getElementById("grammarBlock");

const levelA_one = document.getElementById("levelA_one");
const levelA_two = document.getElementById("levelA_two");
const levelB_one = document.getElementById("levelB_one");
const levelAB_two = document.getElementById("levelB_two");
const levelAC_one = document.getElementById("levelC_one");

vocabularyBlock(level);

verbBlock(verbsTopic)


function verbBlock(data) {
  data.forEach((element) => {
    const listItems = document.createElement("li");
    listItems.innerHTML = `<p>${element}</p>`;
    topic_verb.appendChild(listItems);

    listItems.addEventListener("click", () => {
      switch (element) {
        case (element = "Past tense"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/verbs.html";
          localStorage.setItem("getKeyLevel", "Past");
          break;
        case (element = "Past participle"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/verbs.html";
          localStorage.setItem("getKeyLevel", "Participle");
          break;
      }
    });
  });
}

function vocabularyBlock(data) {
  data.forEach((element) => {
    const listItems = document.createElement("li");
    listItems.innerHTML = `<p>${element}</p>`;
    topic_level.appendChild(listItems);

    listItems.addEventListener("click", () => {
      switch (element) {
        case (element = "Level A1"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "A1");
          break;
        case (element = "Level A2"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "A2");
          break;
        case (element = "Level B1"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "B1");
          break;
        case (element = "Level B2"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "B2");
          break;
        case (element = "Level C1"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "C1");
          break;
        case (element = "Level C2"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "C2");
          break;
        case (element = "Clothes"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "Clothes");
          break;
        case (element = "Kitchen"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/vocabulary.html";
          localStorage.setItem("getKeyLevel", "Kitchen");
          break;
      }
    });
  });
}

readBlock(A1, levelA_one);
readBlock(A2, levelA_two);
readBlock(B1, levelB_one);
readBlock(B2, levelAB_two);
readBlock(C1, levelAC_one);

function readBlock(data, block) {
  data.forEach((element) => {
    const listItems = document.createElement("li");
    listItems.innerHTML = `<p>${element}</p>`;
    block.appendChild(listItems);

    listItems.addEventListener("click", () => {
      console.log(element);

      switch (element) {
        case (element = "A Day at the Zoo"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/a_day_at_the_zoo.html";
          break;
        case (element = "A Trip to the Beach"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/a_trip_to_the_beach.html";
          break;
        case (element = "My Daily Routine"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_daily_routine.html";
          break;
        case (element = "My Family"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_Family.html";
          break;
        case (element = "My Favorite Hobby"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_favorite_hobby.html";
          break;
        case (element = "My Pet Cat"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_pet_cat.html";
          break;
        case (element = "My Pet"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_Pet.html";
          break;
        case (element = "My School"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A1/my_school.html";
          break;
        case (element = "A Day in the City"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A2/a_day_in_the_city.html";
          break;
        case (element = "My Best Friend"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A2/my_best_friend.html";
          break;
        case (element = "A Visit to the Library"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/A2/visit_to_the_library.html";
          break;
        case (element = "A Weekend Trip to the Mountains"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/A2/week_trip_in_mountains.html";
          break;
        case (element = "Going Abroad"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/B1/going_abroad.html";
          break;
        case (element = "Job Searching"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/B1/job_searching.html";
          break;
        case (element = "Visiting the Doctor"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/B1/visiting_the_doctor.html";
          break;
        case (element = "A Walk in the Forest"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/B1/walk_in_the_forest.html";
          break;
        case (element = "A Typical Day at the Office"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/B2/a_typical_day_at_the_office.html";
          break;
        case (element = "A Comprehensive Guide to Buying a Car"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/B2/comprehensive_guide_to_buying_a_car.html";
          break;
        case (element = "How to Prepare for a Doctor's Appointment"):
          window.location.href = "https://andriilyvyn.github.io/language-page/pages/readText/B2/doctors_Appointment.html";
          break;
        case (element = "Effective Strategies for Client Meetings"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/B2/how_to_conduct_a_successful_client_meeting.html";
          break;
        case (element = "Mastering Office Culture and Dynamics"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/C1/mastering_office_culture_and_dynamics.html";
          break;
        case (element = "How to Conduct a Successful Client Meeting"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/C1/effective_strategies_for_client_meetings.html";
          break;
        case (element = "Preparing for a Comprehensive Medical Examination"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/C1/preparing_for_a_comprehensive_medical_examination.html";
          break;
        case (element = "The Process of Purchasing a New Vehicle"):
          window.location.href =
            "https://andriilyvyn.github.io/language-page/pages/readText/C1/the_process_of_purchasing_a_new_vehicle.html";
          break;
      }
    });
  });
}

readSection.addEventListener("click",()=>{
  console.log("read")
  readTextBlock.style.display = "block";
  grammarBlock.style.display = "none";

})
writeSection.addEventListener("click", ()=>{
  readTextBlock.style.display = "none";
  grammarBlock.style.display = "block";
}) 
