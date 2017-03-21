$(document).ready(function(){
  $(".design").hide();
  $(".ux").hide();
  $("#web").on("click", function(){
      $(".web").fadeIn();
      $(".design").hide();
      $(".ux").hide();
  });
  $("#design").on("click", function(){
      $(".design").fadeIn();
      $(".web").hide();
      $(".ux").hide();
  });
  $("#ux").on("click", function(){
      $(".ux").fadeIn();
      $(".web").hide();
      $(".design").hide();
  });
});
