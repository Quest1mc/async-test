// 1,write a script in swapi to get home planets 
// fucntion called homeworld which if you request a person  it should make a request for that persons homeworld 
// and post a picture of said homeworld.

// 2,request a person from the star wars api and request data for all of thier vehicles 
// Github it 

// - advanced own initiative give it a front end and design it and launch it


// Steps 1 Get value from user input field

const userInput = document.getElementById('person').value;
console.log(userInput);
// seems there is a problem with consolelogging the value.



// Steps 2 Fetch api with userInput

const person = fetch(`https://swapi.co/api/people/${userInput}`);

person
  .then(response => response.json())
  .then(json => console.log(json));


// use reponse to fetch homeworld 
async function getHomeplanet() {
  const response = await fetch(`https://swapi.co/api/people/${userInput}.homeworld`);
  const json = await response.json();
}

getHomeplanet();