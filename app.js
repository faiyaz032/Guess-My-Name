'use strict';
//* Breaking down the project---------------------------------------------------------------------------------------------------------------------------------------------
//TODO: 1) First I need to store the generated random number in a variable
//TODO: 2) We need to select the check button using querySelector method and store into a variable
//TODO: 3) Then We need to Fire an click event on the check button
//TODO: 4) We need to select the input (guess) field in a variable and store the value of the input in another variable
//TODO: 5) We need to check if the input (guess) field is empty if empty then show a message.
//TODO: 6) For showing message we need to select the message element and store into a variable
//TODO: 7) The value is empty then we will show the message using textContent Property of DOM
//TODO: 8) Check if the secretNumber === guessfieldValue if true then display the match message
//TODO: 9) again check if secretNumber is greater than guessFieldValue if true then display the message
//TODO: 10) same as todo 9. This time check if its smaller than.
//TODO: 11) Select the number that displays in header. and if secretNumber === guessfieldValue then change the value to secretNumber using text content
//TODO: 12) Select the score element into a variable.
//TODO: 13) Create a score variable that carry's the value of 20. We will decrease the value when the users guessedNumber is high and low
//TODO: 14) then we will check if if the score is greater than 0 then otherwise we will show a loosing message
//TODO: 14) then we will check if if the score is greater than 0 then otherwise we will show a loosing message
//TODO: 15) If guessfield === secretNumber then change the background color of body and make wider the number div

//* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector('.check');
const guessField = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
number.textContent = secretNumber;
let score = 20;
let highScore = 0;
checkButton.addEventListener('click', function () {
   let guessFieldValue = Number(guessField.value);

   if (!guessFieldValue) {
      message.textContent = '⛔There is no Number';
   }
   //? When Player Wins
   else if (guessFieldValue === secretNumber) {
      message.textContent = 'Congrats Its Matched';
      document.body.style.backgroundColor = 'green';
      number.style.width = '30rem';

      //? check for the highscore
      if (score > highScore) {
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
      }
      //? When Guess is wromng
   } else if (guessFieldValue !== secretNumber) {
      if (score > 1) {
         message.textContent = guessFieldValue > secretNumber ? 'Number is high' : 'Number is low';
         score--;
         document.querySelector('.score').textContent = score;
      } else {
         message.textContent = 'You have loosed';
         score.textContent = 0;
      }
   }
});

//? Resetting all the variables
again.addEventListener('click', function () {
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   score = 20;
   guessField.value = 0;
   document.body.style.backgroundColor = '#222';
   message.textContent = 'Start guessing...';
   number.textContent = '?';
   number.style.width = '15rem';
   document.querySelector('.score').textContent = score;
});
