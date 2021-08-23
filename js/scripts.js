$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const subjectInput = $("#subject").val();
        
    if (musicInput = "Rock") {
        $("#c").show();
        $("span#answer").text("c")

     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);
     $(".color").append(colorInput);
     $(".music").append(musicInput);
     $(".subject").append(subjectInput);

    //  if (music >= "rock") {
    //   $("#c").show();
    //   $("span#final").text("c")
    //  }

      $("#final").show();

      
      }
  });
});



// if (musicInput="rock") {
//   $("#c").show();
//   $("#final").show();
// }