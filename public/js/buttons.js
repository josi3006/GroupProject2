$(function () {
    $(".moodBtn").on("click", function (event) {
        event.preventDefault();

        var mood = $(this).data("mood");

        console.log('Mood is: ' + mood);

        // var queryString = "SELECT * FROM tameimpala WHERE mood_id = " + mood + " ORDER BY Rand() LIMIT 1";

        // console.log('query is: ' + queryString);


    })

});


