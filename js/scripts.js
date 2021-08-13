$(document).ready(function) {
  $("#lang").submit(function(event) {
    event.preventDefult();
    const userNameInput = $("input#userName").val();
    
    $(".userName").append(userNameInput);


    $("#result").show();


  });
});