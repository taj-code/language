$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const subjectInput = $("#subject").val();
    // const subjectInput = parseInt($("subjectInput#subject").val());
     $("#c").hide();
     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);
     $(".color").append(colorInput);
     $(".music").append(musicInput);
     $(".subject").append(subjectInput);
    // if (musicInput === rock) {
    //   $("#final").show();
    //   $("span#type").text("c")
    // }
    //  $(".subject").append(subjectInput);
 
    if (subjectInput === "art") {
        $("#final").show();
        $("#c").show();
        $("span#type").text("c")
      }

  // comment below out
  // $("#final").show();

  });
});



// if (musicInput="rock") {
//   $("#c").show();
//   $("#final").show();
// }