
// function for composing a tweet in small screens
function compose() {
  // changes the top bar when composing a tweet
  var topBarValue = $("#topBar").html("\
    <a href=\"index.html\" class=\" my-auto ml-3\">\
      <i class=\"fas fa-arrow-left fa-md fa-blue\"></i>\
    </a>\
    <button type=\"button\" class=\"btn btn-primary btn-tweet font-weight-bold my-auto mr-3\" id=\"tweetButton2\" disabled>Tweet</button>\
  ")

  // shows the tweet section and removes the tweets
  $("#tweetsSection").addClass("d-none")
  $("#composeTweetSection").removeClass("d-none");

  // hides the compose button
  $(this).removeClass("d-sm-none d-block")
  $(this).addClass("d-none")
}

// function for making a tweet
function tweet() {
    // gets the text in the textarea
    var thetweet = $("#composetweet").val();
    
    // changes the top bar back to the normal (for small screens)
    var topBarValue = $("#topBar").html("\
            <img src=\"source/icon.png\" class=\"d-block d-sm-none my-auto ml-3\" width=\"30\" height=\"30\">\
            <span class=\"font-weight-bold my-auto mx-3\">Home</span>\
            <i class=\"far fa-moon fa-lg fa-blue my-auto mr-3\"></i>\
    ")

    // shows the button and the tweets again
    $("#tweetsSection").removeClass("d-none");
    $("#composeButton").removeClass("d-none");
    $("#composeButton").addClass("d-sm-none d-block");

    // hides the textarea for tweets based on screen size
    if($(window).width() < 576){
      $("#composeTweetSection").addClass("d-none");
    } else {
      $("#composeTweetSection").removeClass("d-none");
    }

    // adds the tweet
    $("#tweetsSection").prepend("\
    <div class=\"container twt-container\">\
        <div class=\"row\">\
          <div class=\"col-auto\">\
            <img src=\"source/icon.png\" width=\"50\" height=\"50\" alt=\"\">\
          </div>\
          <div class=\"col\">\
            <div class=\"row mr-0\">\
              <p class=\"display-name\">kyle aquino</p>\
              <p class=\"username\">@kpaquino2</p>\
              <i class=\"fas fa-chevron-down fa-grey ml-auto\"></i>\
            </div>\
            <div class=\"row mr-0\">\
              <p class=\"tweet\">"
              + thetweet +
              "</p>\
            </div>\
            <div class=\"row mr-0 justify-content-between w-100\" style=\"font-size: 1rem;\">\
              <i class=\"far fa-comment fa-grey\"></i>\
              <i class=\"fas fa-retweet fa-grey\"></i>\
              <i class=\"far fa-heart fa-grey\"></i>\
              <i class=\"fas fa-share-square fa-grey\"></i>\
            </div>\
          </div>\
        </div>\
      </div>\
    ")

    // resets the value of text area after tweeting and disables the tweet button again
    $("#composetweet").val("");
    $("#tweetButton1").attr("disabled", true)
    $("#tweetButton2").attr("disabled", true)

}

// disabling the tweet button when there is no text in the textarea
$('#composetweet').on('change keyup paste', function() {
    if($("#composetweet").val()) {
        $("#tweetButton1").removeAttr("disabled")
        $("#tweetButton2").removeAttr("disabled")
    }else {
        $("#tweetButton1").attr("disabled", true)
        $("#tweetButton2").attr("disabled", true)
    }
});

// removes or adds things based on the window screen
$(window).on("resize load",function(){
  // the textarea for tweeting is hidden in small screens
  if($(window).width() < 576){
    $("#composeTweetSection").addClass("d-none");
  } else {
    $("#composeTweetSection").removeClass("d-none");
  }

  // in xl screens, there is a right margin for the sidebar contents
  if($(window).width() > 1200){
    $("#sideBar").addClass("mr-5")
  } else {
    $("#sideBar").removeClass("mr-5")
  }
});


// tweet buttons
$("body").on("click", "#tweetButton1", tweet);
$("body").on("click", "#tweetButton2", tweet);


// compose button for small screen size
$("#composeButton").click(compose);
