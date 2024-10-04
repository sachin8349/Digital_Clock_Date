let clockElement = document.getElementById("clock");

function updateClock() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hour = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let timeString = hour + ":" + min + ":" + sec + " " + am_pm;
  clockElement.innerHTML = timeString;
}

setInterval(updateClock, 1000);


const currentDate = new Date();

// Get the day (1-31)
const day = currentDate.getDate();

// Array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Get the current month index and use it to fetch the full month name
const month = monthNames[currentDate.getMonth()];  // No need to add 1, as we're using the array

// Display the date and full month name (e.g., "Date: 4, Month: October")
document.getElementById('date-display').innerText = `Date: ${day} / Month: ${month}`;