let radomNumber = parseInt(Math.random() * 3 + 1); //Random Numbur Generate
const submit = document.querySelector('#submit'); //Get Submit Button
const userInput = document.querySelector('#guessInput'); //Get Input value
const GuessNumber = document.querySelector('.guesses'); //add previous guess number
const remainingGuess = document.querySelector('.remaing'); //Count remaining attemp
const lowOrhigh = document.querySelector('.lowOrhigh'); // Show number is low or high
const startOver= document.querySelector('#resultBox'); // Preivous Guess & Attemp count box
const p = document.createElement('p'); //Create p element for show start over button
let previousGuess = []; //This array for record all prevous guess
let newGuess = 1; //guess attemp count;
let playGame = true; // if game play true or false


if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

 function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Input Vaild Number');
    }
    else if(guess <1){
        alert('Please input a number greater then 1');
    }
    else if(guess >100){
        alert('Please input a number less then 100 or equel')
    }
    else{
        previousGuess.push(guess);
        
        if(newGuess === 11){
            displayGuess(guess);
            displayMessege(`Game over! Number waS ${radomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
 }


function checkGuess(guess){
    if(guess === radomNumber){
        displayMessege(`You guesses correctly`)
        endGame()
    }
    else if(guess < radomNumber){
        displayMessege(`it is to low`)
    }
    else if(guess > radomNumber){
        displayMessege(`it is to high`)
    }
}

function displayGuess(guess){
    userInput.value = '';
    GuessNumber.innerHTML += `${guess}, `;
    newGuess++;
    remainingGuess.innerHTML = `${11 - newGuess}`;
}

function displayMessege(messege){
    lowOrhigh.innerHTML = `<h1> ${messege}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')

    //Show Start Button After Game end
    p.classList.add('button')
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function(){
        radomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = [];
        newGuess = 1;
        GuessNumber.innerHTML = '';
        lowOrhigh.innerHTML = '';
        remainingGuess.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}