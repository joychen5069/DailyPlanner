$(document).ready(function () {

    //when you load the page, show current date
    var currentDay = moment().format('LLL');
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    //schedule can only be between 9am-5pm so 0900 to 1700
    //current miltary time
    var hourMil = moment().format('HH');

    //use this to test to make sure code works
    // hourMil = 12
    console.log(hourMil)
    var hours = ""
    for (var i = 9; i < 18; i++) {
        // hours.push(i);
        var displayHour = 0;
        var amPM = "";
        if (i > 12) {
            displayHour = i - 12;
            amPM = 'PM';

        }
        else if (i === 12) {
            displayHour = 12;
            amPM = 'PM';
        }
        //else display time for the morning, AM
        else {
            displayHour = i
            amPM = 'AM';
        };

        var index = displayHour
        hours = index + amPM
      
        //build rows
        var rows = $("<tr></tr>");
        rows.attr('id', index)
      
        //build time column
        var hourCol = $("<td></td>");
        hourCol.addClass('time');
       
        //put time in hours spot
        var hourBox = $("<span></span>");
        hourBox.attr('class', 'time');
        var disHour = displayHour.toString();

        //displayHour is working, however, displayHour amPM is not...
        hourBox.text(disHour + amPM);
        // console.log(hourBox.text())
        hourCol.append(hourBox.text());
 
        //build notes column, needs to be an input section so user can type
        var notesCol = $('<td></td>');
        var dailyNotes = $('<input>');

        dailyNotes.attr('id', `input-${index}`);
        dailyNotes.attr('hour-index', index);
        dailyNotes.attr('type', 'text'); //make sure you can actually put text in it
        dailyNotes.attr('class', 'dailyPlan col-12');
        notesCol.append(dailyNotes);
        //make sure notes are in relation to the hours
        // dailyNotes.val(""); //TEST TEXT

        //create save icon portion
        var saveCol = $('<td></td>');
        var saveDiv = $('<img>');
        saveDiv.attr('id', `saveid-${index}`);
        saveDiv.attr('value', index);
        saveDiv.attr('save-id', index);
        saveDiv.attr('class', 'btn saveBtn');
        saveDiv.attr('src', './Assets/save.png')

        //append saveDiv to saveCol
        saveCol.append(saveDiv);

        //highlight rows depending on if they've past, if its now, or if its in the future
        if (i < hourMil) {
            $(hourCol).addClass('past')
            // $(hourCol).attr('class', 'past');
            $(notesCol).attr('class', 'past');
            console.log('this is in the past')
        } //if time displayed is greater than current hour, highlight in green
        else if (i > hourMil) {
            $(hourCol).addClass('future');
            $(notesCol).attr('class', 'future');
        } //if time is within current hour, highlight
        else {
            $(hourCol).addClass('present');
            $(notesCol).attr('class', 'present')
        }
        //append everything to the row
        rows.append(hourCol, notesCol, saveDiv);
        // console.log(rows)
        $('.table').append(rows);
    }

    //push notes to localStorage and get them out
    for (let i = 1; i < 13; i++) {
        //for each ID
        getStored();

        //try to simplify it all
        $('#saveid-' + i).on("click", function () {
            console.log(this)
            console.log("click " + i);
            var plan = $('#input-' + i).val();
            localStorage.setItem('plan' + i, plan)

        })

        //get information from local storage 
        function getStored() {
            var storedPl = localStorage.getItem('plan' + i)
            //if nothing originally, do not display any text
            if (storedPl === 'undefined') {
                var nothing = ""
                $('#input-' + i).val(nothing)
            }
            else {
                $('#input-' + i).val(storedPl);
            }
        }

    }
    
})

