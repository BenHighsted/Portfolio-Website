
/** THOUGHTS ON ADAPTING FOR NEW WEBSITE:
 * As this could be viewed by potential employers, i want the divs to have appropriate names so
 * Instead of doing the 'div + i' method, ill instead have an array hard coded of all the primary divs
 * Hopefully shouldn't be too hard. Think I should get this going before adding any more to the document.
 */

var pages = ["home", "about", "academic", "projects", "contact"];


/** Takes the user to the requested div. Scrolls past any other divs on the way. */
function autoScrollTo(el) {

    showDivs();

    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);

    hideDivs(el);
}

/** Shows all divs for the animation to take place */
function showDivs(){
    var amountOfDivs = 5;
    for(var i = 0; i < 4; i++){
        var div = pages[i];
        document.getElementById(div).style.display = "block";
    }
}

/** Hides all divs except for the one the user wishes to view  */
function hideDivs(el){
    setTimeout(function(){
        for(var i = 0; i < 5; i++){
            var div = pages[i];
            if(el != div){
                document.getElementById(div).style.display = "none";
            }
        }
    }, 1000);
}