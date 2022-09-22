console.log("JS is loading")
// Date counting to
var countDownDate = new Date("Dec 29, 2022 015:00:00").getTime();

//Update count down every second
var count = setInterval(function(){

    //Date today
    var today = new Date().getTime();

    // Find the distance between today and the target date
    var distance = countDownDate - today

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock-countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

})