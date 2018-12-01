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

    ////////////// ADDING OR CHANGING CONTENT BEGIN //////////////////

     var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee'> this bug is solved by red team</div>";

     
    //  .append() adds content to the bottom of the elements
      $('#tweets div p').append(tweet);

    // .prepend() adds content to top of element
    $('#tweets div').prepend(tweet);

    // .before()  adds content before element
    $('#tweets div').before(tweet);

    // .after()   adds content after element
    $('#tweets div').after(tweet);

    // .html()    changes the whole html of the element
    $('#tweets div').html(tweet);

    // .text()    changes the text of an element
    $('#tweets div').text(tweet);


        ////////////// ADDING OR CHANGING CONTENT ENDS //////////////////

     /////// WRAP , UNWRAP ,UNWRAPALL //////

        // var wrapper = "<div class='wrapper'>";
        // var button = $(".button");
        // var wrapped = true;

        // button[0].onclick = function(){


        //   if(wrapped){

        //    $("section").unwrap();
        //    wrapped = false;
        //    button.text('WRAP');
        //   }
        //   else{

        //     $("section").wrapAll(wrapper);
        //     wrapped = true;
        //     button.text('UNWRAP');

        //   }


        // }

        ///////////  REMOVE AND EMPTY METHODS    ///////////////

        // EMPTY empties the inner HTML inside your element
          
        // $('.button').empty();

        // REMOVE  delete the whole element {handle with care :)}


        // $('.button').remove();

        ////////// ATTRIBUTE .removeAttr() and .attr()  /////////


                    // $('#contact img').removeAttr('alt');


                    // $('#contact img').attr('atl' , 'location');


        ////// REMOVECLASS , ADDCLASS AND TOGGLECLASS   /////////

                    $('header .wrapper').removeClass("wrapper");

                    $('header > div').addClass("wrapper");


                    // var button = $('#lead-banner a');
                    // button[0].onclick = function(){
                    //    $('#point-of-sale').toogleClass("open"); // {open is css here check the css file}//
                    //    return false;
                    // };
            
});