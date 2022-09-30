// let subject = document.createAttribute('div')
// let title = document.createElement('p');
// // subject.appendChild(title);
// title.innerText = "vibe with ann";
// title.classList.add('style')
// document.body.appendChild(title);

// let par = document.querySelector('p');
// par.addEventListener("click", (randum));
// par.classList.toggle('vim');
// function randum() {
//     let rand = [ ];
//     for (let i = 0; i < 5; i++){
//         rand.push(Math.floor(Math.random(i)*10))
//     }
//     par.textContent =`${rand}`
//     }
// document.addEventListener('DOMContentLoaded', () => {
//   function createParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
//   }

//   const buttons = document.querySelectorAll('button');

//   for (const button of buttons) {
//     button.addEventListener('click', createParagraph);
//   }
// });
let randnum = Math.floor(Math.random() * 100) + 1;
const  guesses = document.querySelector('.guesses');
const  lastResult = document.querySelector('.lastresult');
const  lohi = document.querySelector('.loHi');

const  guessSubmit =document.querySelector('.guess-submit');
const  guessField = document.querySelector('.Enterguess');

let guessTurns = 1;
let result;


// function checkGuess() {
//   const userGuess = Number(guessField.value);
//   if (guessTurns === 1) {
//     guesses.textContent = 'Previous guesses: ';
//   }
//   guesses.textContent += `${userGuess} `;

//   if (userGuess === randomNumber) {
//     lastResult.textContent = 'Congratulations! You got it right!';
//     lastResult.style.backgroundColor = 'green';
//     lohi.textContent = '';
//     setGameOver();
//   } else if (guessTurns === 10) {
//     lastResult.textContent = '!!!GAME OVER!!!';
//     lohi.textContent = '';
//     setGameOver();
//   } else {
    // lastResult.textContent = 'Wrong!';
    // lastResult.style.backgroundColor = 'red';
    // if (userGuess < randomNumber) {
    //   lohi.textContent = 'Last guess was too low!';
    // } else if (userGuess > randomNumber) {
    //   lohi.textContent = 'Last guess was too high!';
    // }
//   }

//   guessTurns++;
//   guessField.value = '';
//   guessField.focus();
// }

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessTurns === 1) {
        guesses.textContent = 'previous guess: ';
    }
    guesses.textContent +=`${userGuess}`;
    if (userGuess === randnum) {
        lastResult.textContent = "🎉🎉horray🎉🎉";
        lastResult.style.backgroundColor = 'purple';
        lohi.textContent = '';
        setGameover();
    } else if (guessTurns == 10) {
        lastResult.textContent = '🌋🌋Game Over🌋🌋';
        lohi.textContent = '';
        setGameover();
    } else {
       lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randnum) {
      lohi.textContent = 'Last guess was too low!';
    } else if (userGuess > randnum) {
      lohi.textContent = 'Last guess was too high!';
    }
}
guessTurns++;
guessField.value = '';
guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);
function setGameover() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame() {
    guessTurns = 1;
    const resetPara = document.querySelectorAll('.result-para p');
    for (const resetP of resetPara) {
        resetP.textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randnum = Math.floor(Math.random() * 100) + 1;
}
// function setGameOver() {
//   guessField.disabled = true;
//   guessSubmit.disabled = true;
//   resetButton = document.createElement('button');
//   resetButton.textContent = 'Start new game';
//   document.body.append(resetButton);
//   resetButton.addEventListener('click', resetGame);
// }
// let char = ["1,2,3,4,5,6,7,8,9,0,a,s,d,v,f,w,r,,w,t,y,b,u,c,z"];
// let rand = "";
// for (let i = 0; 1 < 6; i++){
//     let random = Math.floor(Math.random() * char.length);
//     rand == char("random");
//     console.log(rand)
// }

// function makeid() {
//     var result           = document.querySelector('.password');
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() *
//  charactersLength));
//    }
//    return result;
// }
// let generator =  document.querySelector('.click')
// generator.addEventListener('click', key);
// function key() {
//     let Password = document.querySelector(".password");
//     let rand = "";
//     let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < 9; i++) {
//         rand = char.charAt(Math.floor(Math.random() * char.length))
//         Password.textContent += `${rand}`;
//     }
// }