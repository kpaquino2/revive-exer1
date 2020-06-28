function compose() {
    var topBarValue = $("#topBar").html("\
    <a href=\"index.html\" class=\" my-auto ml-3\">\
          <i class=\"fas fa-arrow-left fa-md fa-blue\"></i>\
        </a>\
        <button type=\"button\" class=\"btn btn-primary btn-tweet font-weight-bold my-auto mr-3\" id=\"tweetButton2\" disabled>Tweet</button>\
    ")

    $("#tweetsSection").addClass("d-none")
    $("#composeTweetSection").removeClass("d-none");

    $(this).removeClass("d-sm-none d-block")
    $(this).addClass("d-none")
}

function tweet() {
    var thetweet = $("#composetweet").val();
    
    var topBarValue = $("#topBar").html("\
            <img src=\"source/icon.png\" class=\"d-block d-sm-none my-auto ml-3\" width=\"30\" height=\"30\">\
            <span class=\"font-weight-bold my-auto mx-3\">Home</span>\
            <i class=\"far fa-moon fa-lg fa-blue my-auto mr-3\"></i>\
    ")

    $("#tweetsSection").removeClass("d-none");
    $("#composeButton").removeClass("d-none");
    $("#composeButton").addClass("d-sm-none d-block");
    if($(window).width() < 576){
      $("#composeTweetSection").addClass("d-none");
    } else {
      $("#composeTweetSection").removeClass("d-none");
    }

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
    $("#tweetButton1").attr("disabled", true)
    $("#tweetButton2").attr("disabled", true)

}

$('#composetweet').on('change keyup paste', function() {
    if($("#composetweet").val()) {
        $("#tweetButton1").removeAttr("disabled")
        $("#tweetButton2").removeAttr("disabled")
    }else {
        $("#tweetButton1").attr("disabled", true)
        $("#tweetButton2").attr("disabled", true)
    }
});

$(window).on("resize load",function(){
  if($(window).width() < 576){
    $("#composeTweetSection").addClass("d-none");
  } else {
    $("#composeTweetSection").removeClass("d-none");
  }

  if($(window).width() > 1200){
    $("#sideBar").addClass("mr-5")
  } else {
    $("#sideBar").removeClass("mr-5")
  }
});



$("body").on("click", "#tweetButton1", tweet);
$("body").on("click", "#tweetButton2", tweet);

$("#composeButton").click(compose);
