// Characters Section
$(document).ready(function() {
  $(".square").click(function() {
    $(this).siblings().slideToggle("slow");
  });
});



// Melodies Section
var listButtons = document.querySelectorAll(".list-group-item").length;

for (var i = 0; i < listButtons; i++) {

  document.querySelectorAll(".list-group-item")[i].addEventListener("click", function(event) {

    var buttonInnerHTML = this.innerHTML;

    playAudio(buttonInnerHTML);
    document.getElementById("currentSong").innerHTML = "Now Playing: ";
    document.getElementById("currentSong2").innerHTML = buttonInnerHTML;
    console.log(event);
  });
}

function playAudio(x) {
  switch (x) {
    case "Zelda's Lullaby":
      var zelda = new Audio("audio/25 - The Legend of Zelda - Ocarina Of Time - Ocarina Zelda's Lullaby.mp3");
      zelda.play();
      break;

    case "Epona's Song":
      var epona = new Audio("audio/27 - The Legend of Zelda - Ocarina Of Time - Ocarina Epona's Song.mp3");
      epona.play();
      break;

    case "Saria's Song":
      var saria = new Audio("audio/34 - The Legend of Zelda - Ocarina Of Time - Ocarina Saria's Song.mp3");
      saria.play();
      break;

    case "Song of Storms":
      var storm = new Audio("audio/56 - The Legend of Zelda - Ocarina Of Time - Ocarina Song Of Storms.mp3");
      storm.play();
      break;

    case "Sun's Song":
      var sun = new Audio("audio/31 - The Legend of Zelda - Ocarina Of Time - Ocarina Sun's Song.mp3");
      sun.play();
      break;

    case "Song of Time":
      var time = new Audio("audio/43 - The Legend of Zelda - Ocarina Of Time - Ocarina Song Of Time.mp3");
      time.play();
      break;

    case "Minuet of Forest":
      var forest = new Audio("audio/58 - The Legend of Zelda - Ocarina Of Time - Minuet Of Woods.mp3");
      forest.play();
      break;

    case "Bolero of Fire":
      var fire = new Audio("audio/60 - The Legend of Zelda - Ocarina Of Time - Bolero Of Fire.mp3");
      fire.play();
      break;

    case "Serenade of Water":
      var water = new Audio("audio/63 - The Legend of Zelda - Ocarina Of Time - Serenade Of Water.mp3");
      water.play();
      break;

    case "Requiem of Spirit":
      var spirit = new Audio("audio/70 - The Legend of Zelda - Ocarina Of Time - Requiem Of Spirit.mp3");
      spirit.play();
      break;

    case "Nocturne of Shadow":
      var shadow = new Audio("audio/65 - The Legend of Zelda - Ocarina Of Time - Nocturne Of Shadow.mp3");
      shadow.play();
      break;

    case "Prelude of Light":
      var light = new Audio("audio/66 - The Legend of Zelda - Ocarina Of Time - Prelude Of Light.mp3");
      light.play();
      break;
  }
}
