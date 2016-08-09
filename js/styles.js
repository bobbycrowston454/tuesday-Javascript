$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $(".clicka").click(function() {
    $("#anotha-one-showing").fadeIn(1000);

   });
});
