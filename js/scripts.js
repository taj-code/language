$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const subjectInput = $("#subject").val();

     $("#c").hide();
     $("#java").hide();
     $("python").hide();
     $("unknown").hide();
     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);
     $(".color").append(colorInput);
     $(".music").append(musicInput);
     $(".subject").append(subjectInput);
 
    if (subjectInput === "art") {
        $("#final").show();
        $("#c").show();
        $("span#type").text("c")
      }
    if (subjectInput === "math") {
      $("#final").show();
        $("#java").show();
        $("span#type").text("java")
    }
    if (subjectInput === "science") {
      $("#final").show();
      $("#python").show();
      $("span#type").text("python")
    }
    if (subjectInput === "other") {
      $("#final").show();
      $("#unknown").show();
      $("span#type").text("unknown")
    }
  });
});