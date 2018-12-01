$(document).ready(function(){
    

    // filters in Jquery
    $('header nav li:first').css({border: "2px solid red"});
    $('header nav li:last').css({border: "2px solid blue"});


    $('section ul:first-child').css({border: "2px solid purple"});  
    $('section ul:even').css({border: "2px solid green"});

    // NOT Property Exceptional ' '  " " Uses

    $("section:not('#contact')").css({border: " 3px solid pink"});

    // Greater than and lesses than
    $("#social-nav li:lt(3)").css({border: "2px solid black"});
    $("#social-nav li:gt(2)").css({border: "2px solid orange"});

    // Attributes in jquery

    $("div[class]").css({border: "2px solid yellow"});
    $("img[alt]").css({border: "2px solid black"});

    // Jquery with DOM

    // next
    $("#contact-methods").next().css({border: "2px solid grey"});

    // previous

    $('#contact-methods').prev().css({border: "2px solid purple"});
});