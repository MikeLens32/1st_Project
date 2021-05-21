// creating varibles for the different classes created in my HTML that I'll need for my back end work
const modal = document.getElementById("myModal");
const span = document.querySelector(".close");
const theHulk = document.querySelector('.column1')
const scarletWitch = document.querySelector('.column2')
const ironMan = document.querySelector('.column3')
const captainAmerica = document.querySelector('.column4')
const drStange = document.querySelector('.column5')
const spiderMan = document.querySelector('.column6')
const thor = document.querySelector('.column7')
const blackPanter = document.querySelector('.column8')
const falcon = document.querySelector('.column9')
const antMan = document.querySelector('.column10')
const theAvengers = document.querySelector('.row') // This is the <div> that contains all the images
const search = document.querySelector('.search-results') // This the buttons class name
const landscapeURL = "https://random-data-api.com/api/address/random_address"

// On the loading of the page I want a friendly safety warning for eager fans
document.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "block"
    search.disabled = true; // DISABLE THE LOCATOR BUTTON ON AFTER THE PAGE LOADS UP SO PEOPLE JUST CAN'T START GENERATING LOCATIONS
})


span.onclick = function() { // When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
theAvengers.addEventListener('click', () => {
    search.disabled = false
})

search.addEventListener('click', () => {
    fetch(landscapeURL)
    .then(res => res.json())
    .then((landScape) => {   // Fetch request for the image generators
        // debugger; --> had to use this to see what part of the API I wanted to use for location
        const h3 = document.querySelector('#find') // I used h3 so th font wasn't to bif before having to adjust via css
        h3.innerHTML = landScape.city //the inner HTML will illustrate the json data of the API's city information on each click
        search.disabled = true;
    })
    
})

        // const newLocation = document.createElement('img');
        // newLocation.setAttribute('src', landScape);
        // const container = document.querySelector('.locator-container');
        // container.innerHTML = ""
        // container.appendChild(landScape);