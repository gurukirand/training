// Gurukiran D
   var d = new Date();
   var hour = d.getHours();//cuurent hour 
   var minute = d.getMinutes();//current minute
   var seconds = d.getSeconds();//current seconds
function clock() {

    var ref1 = document.getElementsByClassName("seconds_hand")[0];
    var ref2 = document.getElementsByClassName("minute_hand")[0];
    var ref3 = document.getElementsByClassName("hour_hand")[0];

    if(hour>12)
    hour=hour-12;
// moving second hour minute to current time
    hour=180+hour*30+minute*0.5;
    minute=180+minute*6;
    seconds=180+seconds*6;
    ref3.style.transform = "rotate(" + hour + "deg)";

    ref2.style.transform = "rotate(" + minute + "deg)";

    ref1.style.transform = "rotate(" + seconds+ "deg)";
    var cal=seconds%360;
    
    setInterval(second_hand, 1000);//move second hand
   
    setInterval(hour_hand, 60000);//move hour hand

}
// function to move the second hand
function second_hand() {
    seconds += 6;
    var ref = document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform = "rotate(" + seconds + "deg)";
    ref.style.transformOrigin = "top left";

    if(seconds%360==180)
    {
        minute_hand();
    }

}
// function to move the minute hand
function minute_hand() {
    minute += 6;
    var ref = document.getElementsByClassName("minute_hand")[0];
    ref.style.transform = "rotate(" + minute + "deg)";
    ref.style.transformOrigin = "top left";

}
// function to move the hour hand
function hour_hand() {
    hour += 0.5;
    var ref = document.getElementsByClassName("hour_hand")[0];
    ref.style.transform = "rotate(" + hour + "deg)";
    ref.style.transitionOrigin = "top left";

}



