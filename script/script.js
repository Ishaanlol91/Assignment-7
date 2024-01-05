let eldice1 = document.getElementById('dice1');
let eldice2 = document.getElementById('dice2');
let rollPts = null;
let diceRollPts = null;

let cashBalance = null;
let bet = 10;

//First Dice Roll & Points
$('#1stroll').click(function firstRoll(){
    
  var dice1   = Math.floor((Math.random() * 6) + 1);
  var dice2   = Math.floor((Math.random() * 6) + 1);
  var pts = dice1 + dice2;
  
    for (var i = 0; i <= 24; i++) {
  eldice1.classList.remove('show-' + i);
  if (dice1 === i) {
  eldice1.classList.add('show-' + i);
    }
  }

  for (var k = 0; k <= 24; k++) {
    eldice2.classList.remove('show-' + k);
    if (dice2 === k) {
      eldice2.classList.add('show-' + k);
    }
  }
  
  // console.log(dice1,dice2, +  pts);
  
  eldice1.classList.toggle('animate');
  eldice2.classList.toggle('animate');  
 
 
 var firstPts = dice1 + dice2;
 $("#points").text("Set Points:" +" "+ pts).css('color', 'blue')
  
  $('#roll').css('transform', 'scale(1)')
  $('#1stroll').css('display', 'none')
  
  rollPts = firstPts;
  console.log('First Roll', rollPts);
  
  initialWin();
  intialLose();
  })


//Game Logic

$('#roll').click(function diceRolls(){
   var dice1   = Math.floor((Math.random() * 6) + 1);
  var dice2   = Math.floor((Math.random() * 6) + 1);
  var pts = dice1 + dice2;
  
    for (var i = 0; i <= 24; i++) {
  eldice1.classList.remove('show-' + i);
  if (dice1 === i) {
  eldice1.classList.add('show-' + i);
    }
  }

  for (var k = 0; k <= 24; k++) {
    eldice2.classList.remove('show-' + k);
    if (dice2 === k) {
      eldice2.classList.add('show-' + k);
    }
  }
  
  
  eldice1.classList.toggle('animate');
  eldice2.classList.toggle('animate');  
 
 
 var pts = dice1 + dice2;
 $("#pointsRoll").text("Roll Points:" +" "+ pts) 
  
   diceRollPts = pts;
  console.log('Roll Points', diceRollPts)
  
  win();
  lose();
});

function win(){
  if(rollPts === diceRollPts){
    $('.note').text('');
  let message = 'You Win! 🤑'
   $('.note').append(message);
    $('.message').addClass('active');
  $('.messages').addClass('active');
   addCash();
  }
 
}

function lose(){
   if(rollPts != 7 && diceRollPts == 7){
    $('.note').text('');
  let message = 'Craps! You rolled a 7! You Lose.. 🤭'
   $('.note').append(message);
    $('.message').addClass('active');
  $('.messages').addClass('active');
     takeCash();
  }
  
}


function intialLose(){
   if(rollPts == 2 || rollPts == 3 || rollPts == 12){
    $('.note').text('');
  let message = 'Craps! You Lose.. 🤭'
   $('.note').append(message);
    $('.message').addClass('active');
  $('.messages').addClass('active')
     takeCash();
  }
  
}

function initialWin(){
  if(rollPts == 7 || rollPts == 11){
   $('.note').text('');
   let message = 'You Win! 🤑'
   $('.note').append(message);
   $('.message').addClass('active');
  $('.messages').addClass('active');
   addCash();
  }
  
  
}

$('#bet').click(function() {
  event.preventDefault();
  $('.bid h1').text(' ');
  $('.bid h1').css('animation', 'none')
  $('#bet').css('pointer-events', 'none');
  $('#1stroll').css('pointer-events', 'auto');
    
  updateBalance();
  
  gameOver();
  
});

function updateBalance() {
  
  if(cashBalance == null){
    cashBalance = 100;
  }
  let newBalance = cashBalance - bet;       
cashBalance = newBalance; 
  
 $('.bid h1').append('Cash Balance' + ':' + ' '+ '$' + cashBalance).css('color', '#85bb65');

return cashBalance;

  
};

function addCash(){
  $('.bid h1').text(' ');
  let win = cashBalance + 20;
  $('.bid h1').append('Cash Balance' + ':' + ' '+ '$' + win).css('color', '#85bb65');
   cashBalance = win;
 
};

function takeCash() {
  $('.bid h1').text(' ');
  let lose = cashBalance;
  $('.bid h1').append('Cash Balance' + ':' + ' '+ '$' + lose).css('color', '#85bb65');
}

$('.playagain').click(function playAgain(){
  event.preventDefault();
  $('.message').removeClass('active')
  $('.messages').removeClass('active')  
  $('#bet').css('pointer-events', 'auto');
  $('#1stroll').css('pointer-events', 'none');
  $('#1stroll').css('display', 'initial');
  $('#roll').css('transform', 'scale(0)')
  $("#pointsRoll").text("Roll Points:" +" "+ '');
   $("#points").text("1st Roll Points:" +" "+ '');

 
   gameOver(); 
});

function gameOver() {

   
 if(cashBalance < 0){
   $('.bid h1').text('');
   let message = "Oops You're out of cash!";
   $('.bid h1').append(message).css('color', 'red');
   $('.newGame').addClass('active');
    
 }

};

$('.play').click(function() {
  $('.game-rules').addClass('inactive'); 
  $('#1stroll').css('pointer-events', 'none');
});

function restartGame() {
   $('.newGame').removeClass('active');
  $('.bid h1').text(' '); 
  $('#bet').css('pointer-events', 'auto');
   cashBalance = 110;
  updateBalance();
  
  
};














//Roll Dice

// function getRandom(max,min){
//   // return(Math.floor( Math.random() * 6 ) + 1); 
  
//   return(Math.floor(Math.random() * (max-min)) + min) * 90;
// }


//SPINS 

// $('.btn').click(function rollDice() {
// var min = 1;
// var max = 24;  
// var xRand = getRandom(max,min);
//   console.log(xRand)
// var yRand = getRandom(max,min);
//   console.log(yRand)
  
// cube.style.webkitTransform = "rotateY("+yRand+"deg)rotateX("+xRand+"deg)";
  
// cube.style.transform = "rotateX("+xRand+"deg)rotateY("+yRand+"deg)";

  
// }) 

// $('.btn').click(function rollDice2() {
// var min = 1;
// var max = 24;  
// var xRand = getRandom(max,min);
// var yRand = getRandom(max,min);
  
//   cube2.style.webkitTransform = "rotateY("+yRand+"deg)rotateX("+xRand+"deg)";
  
//   cube2.style.transform = "rotateX("+xRand+"deg)rotateY("+yRand+"deg)";
  
// }) 
