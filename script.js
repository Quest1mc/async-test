// 1,write a script in swapi to get home planets  
//************************************************ */Done
// fucntion called homeworld which if you request a person  it should make a request for that persons homeworld 
// and post a picture of said homeworld.

// 2,request a person from the star wars api and request data for all of thier vehicles 
// Github it 

// - advanced own initiative give it a front end and design it and launch it

// rein example 

// const down = fetch('https://swapi.co/api/people/1')

// down
//   .then(response => response.json())
//   .then(json => console.log(json))

// async function getLuke(){
//   const response = await fetch('https://swapi.co/api/people/1')
//   const json = await response.json()
// }

// getLuke();






// // Steps 2 Fetch api with userInput

// const person = fetch(`https://swapi.co/api/people/${userInput}`);

// person
//   .then(response => response.json())
//   .then(json => console.log(json));


// // use reponse to fetch homeworld 
// problem below as the js is grabbing the value before it is being input
async function getHomeplanet() {
  const userInput = 'leia';
  // document.getElementById('person').value;

  console.log(userInput);
  const person = fetch(`https://swapi.co/api/people/?search=${userInput}`);
  

person
  .then(response => response.json())
  .then( json=> {
    const data= json;
    const personObj = data.results;
    console.log (personObj);
    const homeworld = personObj[0].homeworld;
    console.log(homeworld);
  }

  )

 //.then(json => console.log(json))
 

//   const response = await fetch(`https://swapi.co/api/people/${userInput}.homeworld`);
//   const json = await response.json();
 }

getHomeplanet();