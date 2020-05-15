//holds all the different div id's 
var pages = ["home", "about", "academic", "projects", "contact"];
var amountOfDivs = pages.length;

var position = 0; // thinking ill use this variable to keep track of what page the user is on

/** Takes the user to the requested div. Scrolls past any other divs on the way. */
function autoScrollTo(el) {

    //showDivs();

    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);

    //hideDivs(el);
}

/** Shows all divs for the animation to take place */
function showDivs(){
    for(var i = 0; i < amountOfDivs; i++){
        var div = pages[i];
        document.getElementById(div).style.display = "block";
    }
}

/** Hides all divs except for the one the user wishes to view  */
function hideDivs(el){
    setTimeout(function(){
        for(var i = 0; i < amountOfDivs; i++){
            var div = pages[i];
            if(el != div){
                document.getElementById(div).style.display = "none";
            }else{
                position = i;
            }
        }
    }, 1000);
}