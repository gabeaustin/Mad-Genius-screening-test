$(document).ready(function() {
  //link action
  $(".action").click(function(e) {
    e.preventDefault();

    $(".slide").removeClass("active");
    let slide = $(this).closest(".slide");
    slide.addClass("active");
  });
});

//check width

let checkWidth = function() {
  let windowSize = $(window).width();
  if(windowSize > 480){
    let slideWidth = $(".active").width();
    $(".slide-content").css(
      {
        "width": slideWidth + "px"
      }
    )
  }
}

$(window).resize(function() {
  //onresize
  checkWidth();

  //finsih resize
  clearTimeout(window.resizeFinished);
  windowSize.resizeFinished = setTimeout(checkWidth, 500);
})


