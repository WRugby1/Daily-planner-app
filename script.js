// Create variables 
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var d = new Date();
var dayCount = d.getDay()
var currentDay = document.querySelector("#currentDay")
var container = document.querySelector(".container")
currentDay.textContent = weekDays[dayCount]
var times = ["6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"]
// Create a for each for the array time
times.forEach(generateTimeBlocks);

function generateTimeBlocks(item, index) {
    // Create div element for a row
    // Create the three cols
    // // Assign classes to those cols 
    var div = document.createElement("div")
    div.className = "row"
    container.append(div)
    var timeblock = document.createElement("div")
    timeblock.className = "col-md-2 hour"
    timeblock.textContent = times[index]
    div.appendChild(timeblock);
    var eventBox = document.createElement("input")
    eventBox.className = "col-md-8 past"
    div.appendChild(eventBox)
    var saveBox = document.createElement("div")
    saveBox.className = "col-md-2 saveBtn"
    var saveBtn = document.createElement("button")
    saveBtn.className = "col-md-10 saveBtn"
    saveBtn.textContent = "Save"
    saveBox.appendChild(saveBtn)
    div.appendChild(saveBox)

    // Add button event listener for each zone
    
    // // Add alert/prompt box to make an event
    // Assign that event text to the time block
}
// // Make time blocks color coded based off the time

// // // Save these events to local storage

