$(document).ready(function() {
  $("#lang").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const birthdayInput = $("input#birthday").val();
    const colorInput = $("input#color").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const subjectInput = $("#subject").val();

     $(".userName").append(userNameInput);
     $(".birthday").append(birthdayInput);
     $(".color").append(colorInput);
     $(".music").append(musicInput);
     $(".subject").append(subjectInput)

     if (musicInput="rock") {
       $("#c").show();
       $("#final").show();
     }

      // $("#final").show();

    //   document.getElementById("rock").addEventListener("click", myFunction);

    //  function myFunction() {
    //   document.getElementById("rock").innerHTML = "c#";

  });
});

//const flavor = $("input:radio[name=flavor]:checked").val();

// const beverage = $("#beverage").val();



// if ("rock"=clicked)
    //   $("#c").show 