




$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});





  $(function() {
    $(".mood").on("click", function (event) {
      event.preventDefault();

      var moodID = $(this).data("id");

    $.ajax("/api/serverCall/") 
    .then(
        function (moodID) {
          return moodID;
        }
    );
});

    }

}


    module.exports = moodGetter;  // How does this go to the API call

