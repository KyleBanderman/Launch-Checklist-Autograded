// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        window.alert("All fields are required")
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let pilotValidate = validateInput(pilot);
        let coPilotValidate = validateInput(copilot);
        let fuelLevelValidate = validateInput(fuelLevel);
        let cargoLevelValidate = validateInput(cargoLevel);
        let shuttleLaunch = [];
        let iteratorLaunch = 0;
        if (pilotValidate === "Not a Number") {
            shuttleLaunch.push(true);
            list[0].innerHTML = `Pilot: ${pilot} Ready`
        } else {
            shuttleLaunch.push(false);
        }
        if (coPilotValidate === "Not a Number") {
            shuttleLaunch.push(true);
            list[1].innerHTML = `Co-pilot: ${copilot} Ready`
        } else {
            shuttleLaunch.push(false);
        }
        if (fuelLevelValidate === "Is a Number") {
            if (fuelLevel < 10000) {
                list[2].style.visibility = "visible";
                list[3].innerHTML = `Shuttle not ready for launch`
                list[3].style.color = "red";
                list[4].innerHTML = `There is not enough fuel for the journey.`
                shuttleLaunch.push(false);
            } else {
            shuttleLaunch.push(true);
            }
        } else {
            shuttleLaunch.push(false);
        }
        if (cargoLevelValidate === "Is a Number") {
            if (cargoLevel > 10000) {
                list[2].style.visibility = "visible";
                list[3].innerHTML = `Shuttle not ready for launch`
                list[3].style.color = "red";
                list[5].innerHTML = `There is too much mass onboard for the journey.`
            } else {
                shuttleLaunch.push(true);
            }
            
        } else {
            shuttleLaunch.push(false);
        }
        for (let i = 0; i < shuttleLaunch.length; i++) {
            if (shuttleLaunch[i] === true) {
                iteratorLaunch++;
            }
        }
        if (iteratorLaunch === 4) {
            list[3].innerHTML = `Shuttle is ready for launch`
            list[3].style.color = "green";
            list[2].style.visibility = "hidden";
        }
 

     }
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response;
    });
     return planetsReturned;
 }
 
 function pickPlanet(planets) {

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;