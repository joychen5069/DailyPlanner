$(document).ready(function () {


    //when you load the page, show current date
    var currentDay = moment().format('LLL');
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    //create div to put things in
    var planDiv = $('#planContainer');


    //schedule can only be between 9am-5pm so 0900 to 1700
    //current miltary time
    var hourMil = moment().format('HH');

    //use this to test to make sure code works
    hourMil = 12
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
        // console.log(hours)

        //build rows
        var rows = $("<tr></tr>");
        rows.attr('id', index)
        // rows.addClass('row');

        //build time column
        var hourCol = $("<td></td>");
        hourCol.attr('class', 'time');


        //put time in hours spot
        var hourBox = $("<span></span>");
        hourBox.attr('class', 'time');
        var disHour = displayHour.toString();

        // console.log(disHour, amPM)

        //displayHour is working, however, displayHour amPM is not...
        hourBox.text(disHour + amPM);
        // console.log(hourBox.text())
        hourCol.append(hourBox.text());
        // $(rows).append(hourCol);
        console.log(hourCol.text())

        console.log(index)

        // $(rows).append(hourBox.text());

        // $(".table").append(rows);
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
        saveDiv.attr('src', '../Assets/save.png')


        //append saveDiv to saveCol
        saveCol.append(saveDiv);

        if (i < hourMil) {
            $(hourCol).attr('class', 'past');
            $(notesCol).attr('class', 'past');
            console.log('this is in the past')
        } //if time displayed is greater than current hour, highlight in green
        else if (i > hourMil) {
            $(hourCol).attr('class', 'future');
            $(notesCol).attr('class', 'future');
        } //if time is within current hour, highlight
        else {
            $(hourCol).attr('class', 'present');
            $(notesCol).attr('class', 'present')
        }



        //append everything to the row
        rows.append(hourCol, notesCol, saveDiv);
        // console.log(rows)
        $('.table').append(rows);



    }

    for (let i = 1; i < 13; i++) {

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
    // rowColor(hourCol, hours)
})

