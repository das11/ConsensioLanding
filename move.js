$('#bg-image').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 30);
    var amountMovedY = (e.pageY * -1 / 30);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

var clock = $('.clock').FlipClock(3600 * 24 * 51, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: true,
	});
