$(document).ready(function() {
    $('#slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true
    });

    $('form textarea').keyup(function() {
        var vychZnaky = $(this).attr('maxlength');
        var znaky = $(this).val().length;
        $('#znaky').text(vychZnaky - znaky);

    });

});

$(document).ready(function() {

    var mql = window.matchMedia('screen and (max-width: 793px)');
    var handleMatchMedia = function(mediaQuery) {
        if (mediaQuery.matches) {
            $("#hamburger-show").show();
            $("#menu").hide();
        }
        else {
            $("#hamburger-show").hide();
            $("#menu").show();
        }
    };

    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);


    $("#hamburger-show").click(function() {
        $("#menu").toggle( );
    });

});

$(document).ready(function() {
    document.body.className += " js";

var raf = window.requestAnimationFrame || 
    window.mozRequestAnimationFrame  ||
    window.webkitRequestAnimationFrame  ||
    setTimeout;
    
var previousElementSibling = function(el) {
    do {
        el = el.previousSibling;
    } while (el && el.nodeType !== 1);

    return el;
};
 
var show = function(content) {
    content.style.display = "block";
    /*content.style.height = "";
    var height = content.offsetHeight;
    content.style.height = 0;
    content.offsetHeight; // layout trigger
    
    raf(function() {
        content.style.height = height + "px";
    });*/
    content.setAttribute("data-open", "1");    
};
 
var hide = function(content) {
  //content.style.height = 0;
  content.style.display = "none";
  content.removeAttribute("data-open");
};
 
var toggle = function() {
    var content = previousElementSibling(this);    
    
    if (content.getAttribute("data-open")) {
        hide(content);
        this.innerHTML = "<li>Více >></li>";
    }
    else {
        show(content);
        this.innerHTML = "<li><< Méně</li>";
    }
};
 
var headers = document.querySelectorAll(".toggle-header");
for (var i = 0; i < headers.length; i++) {
    headers[i].onclick = toggle;
}


});


