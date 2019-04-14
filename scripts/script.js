// Scroll to top smooth
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',80);
	}
	else clearTimeout(timeOut);
}
