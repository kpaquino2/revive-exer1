function compose() {
    var topBarValue = $("#topBar").html("\
    <a href=\"index.html\">\
          <i class=\"fas fa-arrow-left fa-md fa-blue\"></i>\
        </a>\
        <button type=\"button\" class=\"btn btn-primary btn-tweet font-weight-bold\" id=\"tweetButton\" disabled>Tweet</button>\
    ")

    $("#tweetsSection").hide()
    $("#composeTweetSection").show();

    $(this).hide();
}

function tweet() {
    var thetweet = $("#composetweet").val();
    
    var topBarValue = $("#topBar").html("\
    <a href=\"#\">\
        <img src=\"source/icon.png\" width=\"30\" height=\"30\" alt=\"\">\
      </a>\
      <span class=\"navbar-text font-weight-bold\">Home</span>\
      <i class=\"far fa-moon fa-lg fa-blue\"></i>\
    ")

    $("#tweetsSection").show()
    $("#composeTweetSection").hide();
    $("#composeButton").show();

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

    $("#composetweet").val("");

}

$('#composetweet').on('change keyup paste', function() {
    if($("#composetweet").val()) {
        $("#tweetButton").removeAttr("disabled")
    }else {
        $("#tweetButton").attr("disabled", true)
    }
});

$("#composeTweetSection").hide();

$("body").on("click", "#tweetButton", tweet);

$("#composeButton").click(compose);
