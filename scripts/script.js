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

    // Parent (only use parent element) || Parents (use all the parents)
    $('.banner-title').parent().css({border: "2px solid #33ffbd"});

    // Children

    $('#social-nav').children().css({border: "1px solid purple"});


    //Find method very flexible and easy to use {find also faster in performance}
    $('#contact ').find('.twitter').css({border: "2px solid black"});

    //Closest
    $('#social-nav').closest('.wrapper').css({border: "2px solid black"})

    ////////////// ADDING OR CHANGING CONTENT //////////////////

     




    /*
    .append() adds content to the bottom of the elements
    .prepend() adds content to top of element
    .before()  adds content before element
    .after()   adds content after element
    .html()    changes the whole html of the element
    .text()    changes the text of an element
    */
});