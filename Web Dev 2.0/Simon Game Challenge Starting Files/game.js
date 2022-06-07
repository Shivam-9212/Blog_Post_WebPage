
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 0;
var gamePattern = [];
var userClickedPattern = [];
function startOver(){
  gamePattern = [];
  level = 0;
}

function animatePress(currentColour){
  $(currentColour).addClass("pressed");
  setTimeout(function () {
    $(currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if(gamePattern[gamePattern.length-1] === currentLevel){
    console.log("success");
  }
  else{
    $("h1").text("Game Over, Press Any Key to Restart");
    var wrong_audio = new Audio("sounds/wrong.mp3");
    wrong_audio.play();
    $("*").addClass("game-over");
    setTimeout(function(){
      $("*").removeClass("game-over");
    },200);
    console.log("wrong");
    startOver();
  }
}

$(this).keypress(function(event){
  setTimeout(nextSequence(),1000);
  userClickedPattern = [];
  $("h1").text("Level "+level);
})

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);;
  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  playSound(userChosenColour);
  animatePress($(this));
  setTimeout(nextSequence(),1000);
  userClickedPattern = [];
  $("h1").text("Level "+level);
  checkAnswer($(this).attr("id"));
});



function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level = level + 1;
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}

//2. Create a new function called playSound() that takes a single input parameter called name.
function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
