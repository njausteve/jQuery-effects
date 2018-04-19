$(document).ready(function() {


    $('ul').on('mouseover', 'li', function() {

        var targetDiv = $(this).find('.rotate'),

            targetLetter = targetDiv.text(),

            asciiValue = targetLetter.charCodeAt(0),

            pointer = 65;



        (function changeChar() {


            if (pointer <= asciiValue) {


                targetDiv.text(String.fromCharCode(pointer));

                pointer++;

                setTimeout(changeChar, 10);


            } else {

                $(this).stop();

            }

        })();



    });




    $('#openMenu').click(function() {

        $('#main').fadeIn(200);
        $('#openMenu').animate({ left: "-10%" });
        $('#closeMenu').animate({ left: "91%" });
        $('.menu').animate({left : "-1%"}, 10);


    });


   $('#closeMenu').click(function() {

        $('#main').fadeOut(200);
        $('#openMenu').animate({ left: "0%" });
        $('#closeMenu').animate({ left: "100%" });
        $('.menu').animate({left : "-50%"}, 10);


    });


});