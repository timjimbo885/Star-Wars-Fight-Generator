document.addEventListener("DOMContentLoaded", function(){
    // So this specific event listener above, makes sure the DOM content is loaded 
    // Before running the code below.
    // Basically allows for content on page to load up before running the javascript function
    // Because I put the script in the html in the header and not after the specfic object in the
  const dropdown1 = document.getElementById('ibox1');
  apiUrl = [];
  for(i = 1; i <= 82; i++){
        if(i === 17){
          continue;
        }
       apiUrl.push(`https://swapi.dev/api/people/${i}/`);
  }
  const myPromises1 = apiUrl.map(url => fetch(url).then(response => response.json()));
   
  Promise.all(myPromises1)
  .then(data => {
    // Data in this case is all of the values within myPromises1, which 
    // above is set to have all of the apis mapped out in a giant array
    data.forEach(person => {
      // forEach() was specfifically made to iterate over elements of an array
      // and perform a task with each function
      // So for each each person(which is each url)
      // is creating an option
        const optionElement = document.createElement('option');
        // 'option' is directly referring to the option tag in the html document
        // So optionElement shows the name as text, but the value is the api, and it is
        // appeneded into the first dropdown menu
        optionElement.value = person.url;
        optionElement.text = person.name;
        dropdown1.appendChild(optionElement);
  });
  
  dropdown1.style.display = 'block';  
  })
    .catch(error => console.error(error));
// ipbox2
    // So this specific event listener above, makes sure the DOM content is loaded 
    // Before running the code below.
    // Basically allows for content on page to load up before running the javascript function
    // Because I put the script in the html in the header and not after the specfic object in the
  const dropdown2 = document.getElementById('ibox2');

  apiUrl = [];
  for(i = 1; i <= 82; i++){
    if(i === 17){
      continue; 
    }
   apiUrl.push(`https://swapi.dev/api/people/${i}/`);
    // so apiUrl is an array that is all of the apis from swapi
}
   const myPromises2 = apiUrl.map(url => fetch(url).then(response => response.json()));
  //  myPromises2 is an array that is the data of each api
    Promise.all(myPromises2)
   .then(data => {
    // The promise is looking at all the data of myPromises2
    data.forEach(person => {
      // forEach() was specfifically made to iterate over elements of an array
      // and perform a task with each function
      // So for each each person(which is each url)
      // is creating an option
    const optionElement = document.createElement('option');
    optionElement.value = person.url;
    optionElement.text = person.name;
    dropdown2.appendChild(optionElement);
  });
  })
    .catch(error => console.error(error));

    function getPlanetName(url) {
      return fetch(url)
        .then(response => response.json())
        .then(data => data.name);
    }

const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", function() {
  const dropdown1Value = dropdown1.value;
  const dropdown2Value = dropdown2.value;
  const form = document.getElementById("myform");
  form.innerHTML = "loading";
  Promise.all([fetch(dropdown1Value)
    .then(response => response.json()), 
    fetch(dropdown2Value)
    .then(response => response.json())])
  .then(data => {
    console.log(data);
    const a1 = data[0].name;
    const b1 = data[1].name;
    let a2;
    if(data[0].gender === "male"){
       a2 = "his";
    }
    else if(data[0].gender === "female"){
       a2 ="her";
    }
    else if(data[0].gender === "n/a"){
       a2 = "their";
    }
    // Gender within the fetched api is either male, female or n/a, so changed the keywords for grammer
    const a3 = data[0].homeworld;
    const b3 = data[1].homeworld;
    const b4 = data[1].hair_color;
    const b5 = data[1].eye_color;

    const form = document.getElementById("myform");
    Promise.all([getPlanetName(a3), getPlanetName(b3)])
    .then(planetNames => {
      const a3 = planetNames[0];
      const b3 = planetNames[1];
      // This Promise.all above fetches the planet from the selected option
      // Because the homeworld element of the swapi/people is another URL, so this grabs the name from that URL
    if(a3 === "male")
    {}
    form.innerHTML = `${a1} was enjoying ${a2} time on ${a3} when a fierce ship came
    storming down right in front of them.<br> 
    The doors slowly open, and out comes ${b1}, with their ${b4} hair and piercing 
    ${b5} eyes, but shouldn’t they be residing on ${b3}?<br> \
    For years, these two warriors have been tested, each one going through their own adventures. 
    <br> They have participated in battles many times, but neither have been in a quarrel quite like this.\n
    <br>Now, they were preparing for their battle, a showdown that would determine who would reign supreme. 
    <br>They both knew that this would be the most challenging fight of their lives, and they were determined to come out on top.
    As they prepared for battle, ${a1} and ${b1} thought back to their childhoods,<br> to the land they had grown up in, 
    and the dreams they had once had.<br> But those days were long gone, replaced by a burning desire to win at any cost.
    Finally, the day of the battle arrived. <br>The two warriors faced each other, their weapons hungered for blood. <br>
    They exchanged a few words, each one trying to intimidate the other. And then, with a fierce determination, 
    they charged at each other.<br>
    For what seemed like hours, they fought tooth and nail, each one landing blow after blow.<br> But in the end, 
    there could only be one winner. And when the dust settled, it was ${a1} who emerged victorious.<br>
    As they drifted away from each other, battered and bruised, ${a1} couldn't help but feel a twinge of sadness. <br>
    They had always known that this battle would be the end of their rivalry, 
    but they hadn't quite been prepared for what that would mean.
    And so, as they flew off into the galaxy, ${a1}
    knew that they would always remember their deceased opponent,<br> the one who had pushed them to be their very best...
    `;
  })
  .catch(error => console.error(error));
})
.catch(error => console.error(error));
  console.log(dropdown1Value, dropdown2Value);

   const result = document.getElementById("result");
   result.textContent = 'Star Wars';


  // Use the selected values as needed, e.g. send a POST request to a server, display results on the page, etc.
});
});