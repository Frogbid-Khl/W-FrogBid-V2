// disable right click
/*document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {

    // disable F12 key
    if (e.keyCode == 123) {
        return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}*/


// Get the container element
let btnContainer = document.getElementById("myNav");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active-nav");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active-nav", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active-nav";
    });
}

(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false
                },
                1000: {
                    items: 3,
                    nav: true
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();

$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.blogs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

let countDownDate = new Date("Jul 25, 2025 00:00:00").getTime();

let myfunc = setInterval(function () {
        let now = new Date().getTime();
        let timeleft = countDownDate - now;

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


        let path = window.location.pathname;
        let page = path.split("/").pop();

        if (page == 'Home' || page == '') {

            document.getElementById("hours").innerHTML = hours + "h"
            document.getElementById("mins").innerHTML = minutes + "m"
            document.getElementById("secs").innerHTML = seconds + "s"

            if (timeleft < 0) {
                clearInterval(myfunc);
                document.getElementById("hours").innerHTML = ""
                document.getElementById("mins").innerHTML = ""
                document.getElementById("secs").innerHTML = ""
            }
        }

    },
    1000
)


// Get the button:
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {

    let x = getCookie('alert');

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    if (x == 1) {
        $('#alertModal').modal("show");
        console.log('alert show');
        eraseCookie('alert');
    }


    function eraseCookie(name) {
        document.cookie = name + '=;';
    }

});
