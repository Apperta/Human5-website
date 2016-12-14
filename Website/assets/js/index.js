var resizing = false;
moveNavigation();
$(window).on('resize', function(){
	if (!resizing) {
		window.requestAnimationFrame(moveNavigation);
		resizing=true;
	}
});

function moveNavigation(){
	var mq;
	if (navigator.userAgent.match(/Tablet|iPad/i))
	{
		mq = tablet;
	} else if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) )
	{
    	mq = mobile;
	} else {
    	mq = desktop;
	}

	if (mq == 'mobile' && ) {}
}