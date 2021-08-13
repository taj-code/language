$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    
    $(".userName").append(userNameInput);


    $("#result").show();


  });
});