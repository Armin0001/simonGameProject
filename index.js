
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;


function nextSequence() {

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
  level++;
  $("h1").text("Level " + level);
  animatePress(gamePattern[gamePattern.length-1]);
  // playSound(gamePattern[gamePattern.length-1]);
  console.log("next sequence called at level: " + level );
  }

function playSound(name) {

  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

//playSound(userClickedPattern[userClickedPattern.length-1]);

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}

$("body").keydown(function(){
  if (level === 0)
  nextSequence();
});

$("body").click(function(){
var userChoosenColour = event.target.id;
if (userChoosenColour === "red" || userChoosenColour === "blue" || userChoosenColour === "green" || userChoosenColour === "yellow") {
userClickedPattern.push(userChoosenColour);
animatePress(userClickedPattern[userClickedPattern.length-1]);
playSound(userClickedPattern[userClickedPattern.length-1]);

  check(level);

}
});

function check(currentLevel) {
  if (userClickedPattern[userClickedPattern.length-1]===gamePattern[userClickedPattern.length-1]) {

        if (userClickedPattern.length===level) {

  console.log("Hello, the current level is: " + level + " Is current level equal to the number of my guesses at this current level?");
  setTimeout(function(){
    nextSequence();
  }, 1000);
  userClickedPattern=[];
  }
}
  else if (userClickedPattern[userClickedPattern.length-1] != gamePattern[userClickedPattern.length-1]) {
  // console.log("Nope");
  var error = new Audio('sounds/wrong.mp3');
  error.play();

    $("body").addClass("game-over");

  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
}
else
console.log("So the userClickedPattern current element is correct BUT you are still not finished selecting the elements, are you?");
}

function startOver() {
  level = 0;
  gamePattern=[];
  userClickedPattern=[];
}

// function Pizza(currentLevel) {
//
// if(userClickedPattern.length === currentLevel ) {
//
//   for (var i = 0 ; i < currentLevel ; i++) {
//     for (var j = 0; j < currentLevel ; j++) {
//         if (userClickedPattern[i] === gamePattern[j])
//          var check = true;
//         else
//         check = false;
//     }
//   }
//   if(check) {
//
// console.log("Success" + i);
// // setTimeout(function(){
// //   nextSequence();
// // }, 1000);
// userClickedPattern=[];
// }
// // NOTE: Performs well when there is only 1 input.
//
//
//
// else {
// $("h1").text("Game over, press any key to start over.");
// level=0;
//
// }
// }
// }
