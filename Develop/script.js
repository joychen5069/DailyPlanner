$(document).ready(function () {


    //when you load the page, show current date
    var currentDay = moment().format('LLL');
    console.log(currentDay)
    $("#currentDay").append(currentDay);

    //create div to put things in
    var planDiv = $('#planContainer');


    //schedule can only be between 9am-5pm so 0900 to 1700
    var hourMil = moment().format('HH'); //current miltary time
    
    // hourMil = 12 use this to test to make sure code works
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
        hourCol.attr('class', 'hoursBox');
        hourCol.attr('id', 'index')
        // hourCol.addClass('hours');

        //put time in hours spot
        var hourBox = $("<span></span>");
        hourBox.addClass('timeBox');
        var disHour = displayHour.toString();

        // console.log(disHour, amPM)

        //displayHour is working, however, displayHour amPM is not...
        hourBox.attr('class', 'hoursBox');
        hourBox.text(disHour + amPM);
        // console.log(hourBox.text())
        hourCol.append(hourBox.text());
        // $(rows).append(hourCol);
        console.log(hourCol.text())

        console.log(index)
        if (i < hourMil) {
            $(hourCol).attr('class', 'past');
            console.log('this is in the past')
        } //if time displayed is greater than current hour, highlight in green
        else if (i> hourMil) {
            $(hourCol).attr('class', 'future');
        } //if time is within current hour, highlight
        else {
            $(hourCol).attr('class', 'present');
        }

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
        // saveDiv.attr('onClick','setStored(this)')
        saveDiv.attr('src', '../Assets/save.png')


        //append saveDiv to saveCol
        saveCol.append(saveDiv);

        //append everything to the row
        rows.append(hourCol, notesCol, saveDiv);
        // console.log(rows)
        $('.table').append(rows);
     

    }
        getStored();
        //save buttons--find out how to shorten this
        // console.log(disHour)
        // console.log(this.toString(disHour))
        $('#saveid-9').on("click", function () {
            console.log(this)
            console.log("click 9");
            var plan9 = $('#input-9').val();
            var toString = JSON.stringify(plan9)
            localStorage.setItem('plan9', plan9)

        })
        function getStored() {
            var storedPl = localStorage.getItem('plan9')
            // console.log(storedPl)
            // document.getElementById("input-9").textContent = storedPl;
            $('#input-9').val(storedPl);
        }

       for (let i = 1; i < 13; i++) {
           
           
       
        //try to simplify it all
        $('#saveid-'+ i).on("click", function () {
            console.log(this)
            console.log("click " + i);
            var plan = $('#input-' + i).val();
            var toString = JSON.stringify(plan[i])
            localStorage.setItem('plan'+ i, toString)

        })

        //get information from local storage 
        function getStored() {
            var storedPl = localStorage.getItem('plan9')
            // console.log(storedPl)
            // document.getElementById("input-9").textContent = storedPl;
            $('#input-9').val(storedPl);
        }
    
    }
    // rowColor(hourCol, hours)
})

