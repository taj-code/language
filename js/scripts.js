$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();
    const favMusicInput = $("input#favMusic").val();

     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);
     $(".color").append(colorInput);
     $(".favMusic").append(favMucicInput);


      $("#final").show();

  });
});