// Write your JavaScript code here!


window.addEventListener("load", function () {
    const button = document.getElementById("formSubmit");
    
    button.addEventListener("click", function(event) {
        event.preventDefault();
        const pilot = document.getElementsByName("pilotName");
        const coPilot = document.getElementsByName("copilotName");
        const fuelLevel = document.getElementsByName("fuelLevel");
        const cargoMass = document.getElementsByName("cargoMass");
        const pilotText = document.getElementById("pilotStatus");
        const copilotText = document.getElementById("copilotStatus");
        const faultyItems = document.getElementById("faultyItems");
        const launchStatus = document.getElementById("launchStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        let list = [pilotText, copilotText, faultyItems, launchStatus, fuelStatus, cargoStatus]
        formSubmission(this.document, list, pilot[0].value, coPilot[0].value, fuelLevel[0].value, cargoMass[0].value)
    })
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse)
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });