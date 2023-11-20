// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const target = document.getElementById("missionTarget");
    target.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
    
   `
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
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
        const pilotStatus = document.getElementById("pilotStatus"); //start debugging here
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        const launchStatus = document.getElementById("launchStatus");
        let shuttleLaunch = [];
        let iteratorLaunch = 0;
        //[pilotText, copilotText, faultyItems, launchStatus, fuelStatus, cargoStatus]
            if (pilot === "" || copilot === "" || fuelLevel === "", cargoLevel === "") {
                window.alert("All fields are required")
            }
        if (pilotValidate === "Not a Number") {
            shuttleLaunch.push(true);
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        } else {
            shuttleLaunch.push(false);
        }
        if (coPilotValidate === "Not a Number") {
            shuttleLaunch.push(true);
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
        } else {
            shuttleLaunch.push(false);
        }
        if (fuelLevelValidate === "Is a Number") {
            if (fuelLevel < 10000) {
                list.style.visibility = "visible";
                launchStatus.innerHTML = `Shuttle Not Ready for Launch`
                launchStatus.style.color = "red";
                fuelStatus.innerHTML = `Fuel level too low for launch`
                shuttleLaunch.push(false);
            } else {
                fuelStatus.innerHTML = `Fuel level high enough for launch`
                shuttleLaunch.push(true);
            }
        } else {
            shuttleLaunch.push(false);
        }
        if (cargoLevelValidate === "Is a Number") {
            if (cargoLevel > 10000) {
                list.style.visibility = "visible";
                launchStatus.innerHTML = `Shuttle Not Ready for Launch`
                launchStatus.style.color = "red";
                cargoStatus.innerHTML = `Cargo mass too heavy for launch`
            } else {
                cargoStatus.innerHTML = `Cargo mass low enough for launch`
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
            launchStatus.innerHTML = `Shuttle is Ready for Launch`
            launchStatus.style.color = "green";
        }
 

     }
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")//.then( function(response) {
        //return response;
    //});
    planetsReturned = await planetsReturned.json()
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    return planets[randomPlanet];

 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;