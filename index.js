"use strict"

let teams = [

  {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
  {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
  {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
  {code:"KAN", name:"Kansas City Chiefs",
               plays:"Kansas City, MO"},
];

window.onload = function () {
 
  let football = document.getElementById("football");
  let length = teams.length;
   
  let options = document.createElement("option");
  options.value= "";
  options.text= "Select a Team";
  football.appendChild(options);

   for (let i = 0; i < length; i++) {

    let options = document.createElement("option");
     
     options.value = teams[i].code
     options.text = teams[i].name
     options.name = teams[i].plays
    
    football.appendChild(options);
   }

   let btn = document.getElementById("btn");
   btn.onclick = submitBtn;
}

function submitBtn(){
  
  let para = document.getElementById("para");
  let length = football.length; 

  for (let i = 0 ; i < length ; i++){
    if (football[i].value == football.value){
      para.innerHTML= "You selected " + football[i].text  + " " + "(" + football[i].value + ")" + "who play in " + football[i].name ;
       
    }else if (football.value == "" ){
      para.innerHTML="";
    }
  }
    return false;
  
}