//when you load the page, show current date
var currentDay = moment().format('LLL');
console.log(currentDay)
$("#currentDay").append(currentDay);

//current hour-round down
var currentHour = moment().format('LT');
console.log(currentHour)



//need to create 9 hour schedule
var hour24 = moment().format('H')
console.log(hour24)
//schedule can only be between 9am-5pm so 0900 to 1700
var hours = []
for (var i = 9; i <= 17; i++) {
    hours.push(i);
    var index = hours
}
console.log(hours)
var hoursTab = $("<td>").push(hours[0])
console.log(hoursTab)
var info = $("<td>").text()

//build rows and columns
var rows = $("<tr></tr>").text();
$(rows).addClass('row');
var colHour = $("<td></td>").text();
$(colHour).addClass('hours');

$(rows).append(colHour)
$(".table").append(rows)

var displayHour = 0;
      var amPM = "";
      //if time is past noon, display time in PM
      if (hour24 > 12) { 
        displayHour = hour - 12;
        amPM = "PM";
      } 
      //else display time for the morning, AM
      else {
        amPM = "AM";
      }






//if time displayed is less than current hour, gray out
if (hour24 < 17 && hour24 < 9 && hour24) {

}
//if time is within current hour, highlight
//if time displayed is greater than current hour, highlight in green
//when you click the save button, it saves the text to the local storage displays text

//get information from local storage 
