var player_1 = document.querySelectorAll("img")[0];
var player_2 = document.querySelectorAll("img")[1];

var random = (Math.random()*6)+1;
var random_variable_1 = Math.floor(random);
random_out = "dice"+random_variable_1+".png";
var destination = "images/"+random_out;
player_1.setAttribute("src",destination);

var random = (Math.random()*6)+1;
var random_variable_2 = Math.floor(random);
random_out_2 = "dice"+random_variable_2+".png";
var destination_2 = "images/"+random_out_2;
player_2.setAttribute("src",destination_2);

var heading = document.querySelector("h1");
if(random_variable_1 > random_variable_2){
  heading.innerHTML = "Player 1 Wins!";
}
else if(random_variable_1 < random_variable_2){
  heading.innerHTML = "Player 2 Wins!";
}
else if(random_variable_1 == random_variable_2){
  heading.innerHTML = "Draw!";
}
