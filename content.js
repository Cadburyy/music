$(document).ready(function() {

        $(".card").mouseover(function() {

            $(this).css({
                "transform": "scale(1.05)",
                "transition": "transform 0.3s ease"
            });
        });

        $(".card").mouseout(function() {
            $(this).css({
                "transform": "scale(1)",
                "transition": "transform 0.3s ease"
            });
        });
    });
