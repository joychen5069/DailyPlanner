$(document).ready(function () {
    //when you load the page, show current date
    var currentDay = moment().format('LLL');
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    //current hour-round down
    var currentHour = moment().format('LT');
    console.log(currentHour)

    //create save icon variable to use later
    var save = "./Assets/save.png";


    //need to create 9 hour schedule
    var hour24 = moment().format('H')
    console.log(hour24)
    //schedule can only be between 9am-5pm so 0900 to 1700
    var hours = []
    for (var i = 9; i < 18; i++) {
        // hours.push(i);
        var index = hours - 9

        // console.log(hours)

        //build rows and time columns
        var rows = $("<tr></tr>").text();
        $(rows).addClass('row');
        var colHour = $("<td></td>").text();
        $(colHour).addClass('hours');

        // var timeBox = $("<td></td>").text();
        // $(timeBox).addClass('timeBox');

        // $(rows).append(colHour, timeBox);


        var displayHour = 0;
        var amPM = "";
        //if time is past noon, display time in PM
        if (hour24 > 12) {
            displayHour = hour24 - 12;
            amPM = 'PM';
        }
        //else display time for the morning, AM
        else {
            displayHour = hour24 - 12
            amPM = 'AM';
        };

        //put time in hours spot
        var hourBox = $("<span></span>");
        $(hourBox).addClass('timeBox');
        var disHour = displayHour.toString();
        // console.log(disHour)
        // console.log(amPM)
        // console.log(disHour, amPM)

        //displayHour is working, however, displayHour amPM is not...
        $(hourBox).attr('class','hoursBox');
        $(hourBox).text(disHour + amPM);
        // console.log(hourBox.text())
        $(colHour).append($(hourBox))

        // $(rows).append(hourBox.text());

        // $(".table").append(rows);

    }






//FORMAT TIME BLOCKS COLORS
    //if time displayed is less than current hour, gray out
   function rowColor(hourRow,hours) {
      if (hours < hour24) {
          $(hourRow).attr('class','past');
      }
      else if (hours > hour24) {
        $(hourRow).attr('class','future');
      }
      else {
      $(hourRow).attr('class','present');
      }
   }
    //if time is within current hour, highlight
    //if time displayed is greater than current hour, highlight in green
    //when you click the save button, it saves the text to the local storage displays text

    //get information from local storage 
}) 