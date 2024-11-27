 const listTimes =["Present Simple","Past Simple","Future Simple",
                   "Present Continuous","Past Continuous","Future Continuous",
                   "Present Perfect","Past Perfect","Future Perfect",
                   "Present Perfect Continuous","Past Perfect Continuous","Future Perfect Continuous"]

const container = document.getElementById("container");

function TimesBlock(data){
     data.forEach((element)=>{
      const timeBlock=  document.createElement("div");
        timeBlock.classList.add("times");
        const timeBlockText=  document.createElement("p")
        timeBlockText.innerHTML= element;
        timeBlock.appendChild(timeBlockText);
      container.appendChild(timeBlock);

      timeBlock.addEventListener("click",()=>{
      
       switch(element){
          case element = "Present Simple":
               window.location.href="/pages/timePages/presentSimple.html";
          break;
          case element = "Past Simple":
               window.location.href="/pages/timePages/pastSimple.html"
          break;
          case element = "Future Simple":
               window.location.href="/pages/timePages/futureSimple.html"
          break;
          case element = "Present Continuous":
               window.location.href="/pages/timePages/presentContinuous.html"
          break;
          case element = "Past Continuous":
               window.location.href="/pages/timePages/pastContinuous.html"
          break;
          case element = "Future Continuous":
               window.location.href="/pages/timePages/futureContinuos.html"
          break;
          case element = "Present Perfect":
               window.location.href="/pages/timePages/presentPerfect.html"
          break;
          case element = "Past Perfect":
               window.location.href="/pages/timePages/pastPerfect.html"
          break;
          case element = "Future Perfect":
               window.location.href="/pages/timePages/futurePerfect.html"
          break;
          case element = "Present Perfect Continuous":
               window.location.href="/pages/timePages/presentPerfectContinuous.html"
          break;
          case element = "Past Perfect Continuous":
               window.location.href="/pages/timePages/pastPerfectContinuous.html"
          break;
          case element = "Future Perfect Continuous":
               window.location.href="/pages/timePages/futurePerfectContinuous.html"
          break;
          
       }
      })
     })
}


TimesBlock(listTimes)

