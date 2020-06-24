/** index.js holds all the basic functions for the index page of Ben Highsted's portfolio website */

/** Takes the user to the requested div. Scrolls past any other divs on the way. */
function autoScrollTo(el) {

    if(el != null){
        var top = $("#" + el).offset().top;
        $("html, body").animate({ scrollTop: top }, 1000);
    }else{
        console.log("Error: el is null.");
    }
}

/** The following code adds the "return to top" button when a user scrolls down the webpage */

window.onscroll = function() {showButton()};

function showButton() {
    var returnToTopButton = document.getElementById("topButton");
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        returnToTopButton.style.display = "block";
    } else {
        returnToTopButton.style.display = "none";
    }
}

function topButtonPressed() {
    autoScrollTo('navbar');
}