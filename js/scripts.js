$(document).ready(function(){
  $(".design").hide();
  $("#web").on("click", function(){
      $(".web").fadeIn();
      $(".design").hide();
  });
  $("#design").on("click", function(){
      $(".design").fadeIn();
      $(".web").hide();
  });
});
