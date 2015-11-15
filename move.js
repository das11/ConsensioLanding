$('#bg-image').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 30);
    var amountMovedY = (e.pageY * -1 / 30);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

var clock = $('.clock').FlipClock(new Date("February 5, 2016 10:00:00"),{
    clockFace: 'DailyCounter',
    countdown: true
    });  

//ALGO 2, calc done in secs #kdas
/*
var clock = $('.clock').FlipClock(3600 * 24 * 51, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true,
	});
*/

//ALGO 1, interfacing in days, calc in secs #kdas
/*var date = new Date(2016, 1, 5);
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);

    var clock = $('.clock').FlipClock(diff,{
        clockFace: 'DailyCounter',
        countdown: true
    });  
    */
