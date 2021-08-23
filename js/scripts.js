$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();

     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);


    
      $("#final").show();

  });
});