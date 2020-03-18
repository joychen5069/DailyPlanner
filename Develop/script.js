//You need to display the current day
var currentDay = moment().format('LLL');
console.log(currentDay)
$("#currentDay").append(currentDay);

//current hour-round down
var currentHour = moment().format('LT');
console.log(currentHour)



//need to create 9 hour schedule
var hour24 = moment().format('H')
var hour12 = moment().format('h')
console.log(hour12)
console.log(hour24)
    //schedule can only be between 9am-5pm so 0900 to 1700
    if (hour24 >= 17 && hour12 < 9) {
        console.log("not within work hours")
    }
    else {
        //run the code here
    }
    


//if time is less than currnt hour, gray out
//if time is within current hour, highlight
//if time is greater than current hour, highlight in green
//when you click the save button, it saves the text to the local storage displays text

