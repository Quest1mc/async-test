// 1,write a script in swapi to get home planets  
//************************************************ */Done
// function called homeworld which if you request a person  it should make a request for that persons homeworld 
// and post a picture of said homeworld. - a bit of a challenge since images are not in the api 

// 2,request a person from the star wars api and request data for all of thier vehicles 
// Github it 

// - advanced own initiative give it a front end and design it and launch it








// // Steps 2 Fetch api with userInput

// const person = fetch(`https://swapi.co/api/people/${userInput}`);

// person
//   .then(response => response.json())
//   .then(json => console.log(json));


// // use reponse to fetch homeworld 
// problem below as the js is grabbing the value before it is being input



async function homeWorld() {
  const userInput = document.getElementById('person').value;
  console.log(userInput);
  const person = fetch(`https://swapi.co/api/people/?search=${userInput}`);
  

person
  .then(response => response.json())
  .then( json=> {
    const data= json;
    const personObj = data.results;
    //console.log (personObj);
    const name = personObj[0].name
    const homeworld = personObj[0].homeworld;
    const vehicles = personObj[0].vehicles
    const starships= personObj[0].starships
    console.log (name,homeworld,vehicles,starships);
    return {
      name: name,
      homeworld : homeworld,
      vehicles: vehicles,
      starships: starships }
  }

  )
 }

  


homeWorld();

// this function displays all the varius strings in homeWorld object in the Ui  
function displayToUI (object){
//do something according to description 
};
