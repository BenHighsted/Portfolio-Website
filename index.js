//holds all the different div id's 
var pages = ["home", "about", "academic", "projects", "contact"];

/** Takes the user to the requested div. Scrolls past any other divs on the way. */
function autoScrollTo(el) {

    if(el != null){
        var top = $("#" + el).offset().top;
        $("html, body").animate({ scrollTop: top }, 1000);
    }else{
        console.log("Error: el is null.");
    }

    sleep(1000);
} 