

let info = [];
let select  = document.querySelector('#skills');
function getInfo(){
   fetch('https://bootcamp-2022.devtest.ge/api/skills').then(function(r) {
         return r.json();
     }).then(function(r) {
         // console.log(r);
         for(let i =0; i < r.length; i++){
            let titles = r[i].title;
            info.push(titles);   
         }
         // console.log(info);
         for(let j = 0; j < info.length; j++){
            let option = document.createElement('option');
            option.value = info[j];
            option.text = info[j];
            select.appendChild(option);
            
        }
     })
     
}
getInfo();

function createList(){
   let addLanguage = document.querySelector('.addLanguage');
   let skill = document.querySelector('#skills');
   let experience = document.querySelector('.experienceDuration');
   let chosenList = document.querySelector('.languages');


   addLanguage.addEventListener('click', function(){
      if(skill.value == ""){
         alert("please choose skill")
      }else if(experience.value == ""){
         alert('please fill out experience field')
      }else{
         let newList = document.createElement('div');
         newList.classList.add('newList');
         chosenList.appendChild(newList);

         let chosenLanguage = document.createElement('p');
         chosenLanguage.innerHTML=skill.value;
         chosenLanguage.classList.add('chosenSkill');
         newList.appendChild(chosenLanguage);

         let chosenDuration = document.createElement('p');
         chosenDuration.innerHTML= 'Years of experience' + experience.value;
         newList.appendChild(chosenDuration);
         
         let remove = document.createElement('img');
         remove.src = './images/remove.png';
         remove.style.cursor="pointer";
         newList.appendChild(remove);

         remove.addEventListener('click', function(){
            newList.style.display = "none";
         })
      }
      
   })

   }
createList();
// fourth page
function checkCovidInput(){
   let yesCovid = document.querySelector('#yes');
   let whenCovid = document.querySelector('#when');
   let dateCovid = document.querySelector('#date');

   yesCovid.addEventListener('change', function(e){
      if(this.checked){
         whenCovid.style.display = "block";
         dateCovid.style.display = "block";
      }
   })
   }
   function checkVacineInput(){
      let yesVacine = document.querySelector('#yesVacine');
      let whenVacine = document.querySelector('#covidVacine');
      let dateVacine = document.querySelector('#dateVacine');

   yesVacine.addEventListener('change', function(e){
      if(this.checked){
         whenVacine.style.display = "block";
         dateVacine.style.display = "block";
      }

   })
   }

   checkCovidInput();
   checkVacineInput();