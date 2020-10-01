// Create variables 
$(document).ready(function () {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var d = new Date();
    var dayCount = d.getDay();
    var hour = new Date();
    var timeCount = hour.getHours() - 9;
    var currentDay = $("#currentDay")
    var container = $(".container")
    currentDay.text(weekdays[dayCount])
    var times = [{
        time: "9 am",
        count: "0"
    },
    {
        time: "10 am",
        count: "1"
    },
    {
        time: "11 am",
        count: "2"
    },
    {
        time: "12 pm",
        count: "3"
    },
    {
        time: "1 pm",
        count: "4"
    },
    {
        time: "2 pm",
        count: "5"
    },
    {
        time: "3 pm",
        count: "6"
    },
    {
        time: "4 pm",
        count: "7"
    },
    {
        time: "5 pm",
        count: "8"
    },]
    // Create a for each for the array time
    // times.forEach(generateTimeBlocks);
    renderEvents();

    function renderEvents() {
        for (var i = 0; i < times.length; i++) {

        }
    }
    // function generateTimeBlocks(element, index) {
    for (var i = 0; i < times.length; i++) {
        // Create div element for a row
        // Create the three cols
        // // Assign classes to those cols 
        var div = document.createElement("div")
        div.className = "row"
        container.append(div)
        timeCountString = JSON.stringify(timeCount)
        console.log(timeCountString)
        var timeblock = document.createElement("div")
        timeblock.className = "col-md-2 hour text-center"
        timeblock.textContent = times[i].time
        div.appendChild(timeblock);

        var eventBoxForm = document.createElement("form")
        if (timeCount > times[i].count) {
            eventBoxForm.className = "col-md-8 past text-input"
        }
        else if (timeCount == times[i].count) {
            eventBoxForm.className = "col-md-8 present text-input"
        }
        else if (timeCount < times[i].count) {
            eventBoxForm.className = "col-md-8 future text-input"
        }
        var eventBox = document.createElement("textarea")
        eventBox.className = "text-area"
        eventBox.textContent = content[i]
        eventBoxForm.appendChild(eventBox)
        div.appendChild(eventBoxForm)
        content.push(eventBox.value)
        window.eventBox = eventBox

        var saveBox = document.createElement("div")
        saveBox.className = "col-md-2 saveBtn"
        var saveBtn = document.createElement("button")
        saveBtn.className = "saveBtn"
        var saveBoxIcon = document.createElement("i")
        saveBoxIcon.className = "fas fa-save"
        saveBtn.appendChild(saveBoxIcon)
        saveBox.appendChild(saveBtn)
        div.appendChild(saveBox)


        // Add button event listener for each zone

        // // Add alert/prompt box to make an event
        // Assign that event text to the time block
    }
    
})
// // Make time blocks color coded based off the time
$(".saveBtn").on("click", function() { // Click the save button to save that hour's tasks
    var value = $(this).siblings(".text-area").val();
    var time = $(this).parent().attr("id");
    console.log(value);
    console.log(time);
    localStorage.setItem(time, value);
})
// // // Save these events to local storage
