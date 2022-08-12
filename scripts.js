$(document).ready(function() {
  //link action
  $(".action").click(function(e) {
    e.preventDefault();

    $(".slide").removeClass("active");
    let slide = $(this).closest(".slide");
    slide.addClass("active");
  });
});
