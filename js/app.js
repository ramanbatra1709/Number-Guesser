let min = 1, max = 10, winningNum = 5, guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function()   {
    let guess = parseInt(guessInput.value);
    if (guess && guess >= min && guess <= max)  {
        if (guess === winningNum)   {
            gameOver(true, `${winningNum} is the correct answer!`);
        }
        else    {
            if (--guessesLeft <= 0)  {
                gameOver(false, `Game Over! The Correct number was ${winningNum}`);
            }
            else    {
                guessInput.value = '';
                guessInput.style.borderColor = 'red';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            }
        }
    }
    else    {
        setMessage(`Please enter the number between ${min} and ${max}`, 'red');
    }
});

function gameOver(won, messageString) {
    guessInput.disabled = true;
    color = won ? 'green' : 'red';
    guessInput.style.borderColor = color;
    setMessage(messageString, color);
}

function setMessage(messageString, color)   {
    message.style.color = color;
    message.textContent = messageString;
}
