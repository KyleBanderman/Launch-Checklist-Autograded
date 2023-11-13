// Write your JavaScript code here!



window.addEventListener("load", function () {
    const button = document.getElementById("formSubmit");
    
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const pilot = document.getElementsByName("pilotName");
        const coPilot = document.getElementsByName("copilotName");
        const fuelLevel = document.getElementsByName("fuelLevel");
        const cargoMass = document.getElementsByName("cargoMass");
        let list = document.getElementById("faultyItems")
        formSubmission(this.document, list, pilot[0].value, coPilot[0].value, fuelLevel[0].value, cargoMass[0].value)
    })
    let listedPlanets = myFetch();

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        let result = addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    
 })});