1,write a script in swapi to get home planets 
function called homeworld which if you request a person  it should make a request for that persons homeworld 
and post a picture of said homeworld.

2,request a person from the star wars api and request data for all of thier vehicles 
Github it 

- advanced own initiative give it a front end and design it 
and launch it 

<!-- rein example 

const down = fetch('https://swapi.co/api/people/1')

down
  .then(response => response.json())
  .then(json => console.log(json))

async function getLuke(){
  const response = await fetch('https://swapi.co/api/people/1')
  const json = await response.json()
}

getLuke(); -->

things that revealed themselves while coding
...it makes sense to actually create your html structure first instead of diving into your js immediately.
this helps solidify your vision of end points for your project.