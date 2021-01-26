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

    generateTimeBlocks();

    function generateTimeBlocks() {
       // For loop to create all elements based off 
        for (var i = 0; i < times.length; i++) {
            // Grab local storage 
            var localKey = localStorage.getItem(i)

            // Create row div and assign the classes
            var div = document.createElement("div")
            div.className = "row"
            container.append(div)
            var timeblock = document.createElement("div")
            timeblock.className = "col-md-2 hour text-center"
            timeblock.textContent = times[i].time
            div.appendChild(timeblock);

            // Create text boxes 
            var eventBox = document.createElement("textarea")
            eventBox.setAttribute("id", i)
            // Define text area class based off the time 
            if (timeCount > times[i].count) {
                eventBox.className = "col-md-8 past text-area"
            }
            else if (timeCount == times[i].count) {
                eventBox.className = "col-md-8 present text-area"
            }
            else if (timeCount < times[i].count) {
                eventBox.className = "col-md-8 future text-area"
            }
            // Set text content based off of localStorage
            eventBox.textContent = localKey
            div.appendChild(eventBox)

            // Create save box elements
            var saveBox = document.createElement("div")
            saveBox.className = "col-md-2 saveBtn"
            var saveBtn = document.createElement("button")
            saveBtn.className = "saveBtn"
            var saveBoxIcon = document.createElement("i")
            saveBoxIcon.className = "fas fa-save"
            saveBtn.appendChild(saveBoxIcon)
            saveBox.appendChild(saveBtn)
            div.appendChild(saveBox)
        }
        saveLocalData();
    }
    // Create event listener that listens to all save buttons 
    function saveLocalData() {
        $(".saveBtn").on("click", function () { // Click the save button to save that hour's tasks
        // Grab the input value
            var value = $(this).siblings(".text-area").val();
        // Grab the input index
            var time = $(this).siblings(".text-area").attr("id");
            console.log(value);
            console.log(time);
            // Save both to localStorage
            localStorage.setItem(time, value);
        })
    }
})
