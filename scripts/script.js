// Menu
var navMenu = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.menu');
    var menuLinks = document.querySelectorAll('.menu li');

   
    burger.addEventListener('click', () => {
        
         // Toggle Menu
        nav.classList.toggle('menu-active');

        // Links Animate
        menuLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `menuFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    });


}

navMenu();

// Scroll to top smooth
var timeOut;
function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 15);
    }
    else clearTimeout(timeOut);
}

// Fade in elements
var fadeIn = function () {
    var elems;
    var windowHeight;
    function init() {
        elems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            var positionFromTop = elems[i].getBoundingClientRect().top; // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'hidden',
                    'fade-in-element'
                );
            }
        }
    }
    return {
        init: init
    };
};
fadeIn().init();


