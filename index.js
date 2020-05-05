/** Takes the user to the requested div. Scrolls past any other divs on the way. */
function autoScrollTo(el) {

    showDivs();

    var top = $("#" + el).offset().top;
    $("html, body").animate({ scrollTop: top }, 1000);

    hideDivs(el);
}

/** Shows all divs for the animation to take place */
function showDivs(){
    var amountOfDivs = 4;
    for(var i = 0; i < amountOfDivs; i++){
        document.getElementById("div" + i).style.display = "block";
    }
}

/** Hides all divs except for the one the user wishes to view  */
function hideDivs(el){
    setTimeout(function(){
        for(var i = 0; i < 4; i++){
            var div = "div" + i;
            if(el != div){
                document.getElementById(div).style.display = "none";
            }
        }
    }, 1000);
}