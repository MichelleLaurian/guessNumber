const guessInput = document.querySelector('.guess')
const messageText = document.querySelector('.message')
const number = document.querySelector('.number')
const scoreText = document.querySelector('.score')
const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const highScoreText = document.querySelector('.highscore')

const secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)

let score = 20
let highScore = localStorage.getItem('highscore') || 0;
console.log('high score', highScore);


const displayMessage = (message) =>{
    messageText.textContent= message
} 


function checkNumber (){
  checkButton.addEventListener ('click', ()=>{
      const guess = Number(guessInput.value)
      console.log(guess,typeof guess)
      if(!guess){
        displayMessage('No Number')
        score --
        scoreText.textContent = score
      }else if(guess === secretNumber){
        displayMessage('Correct Number :D')
        if(score > highScore){
          
    
        }
               
      }else if(guess!=secretNumber){
        if(score >1 ){
          displayMessage(guess > secretNumber ? 'Too high :O' : 'Too low :F')
          score--
          scoreText.textContent = score
        }else{
          displayMessage('You lose D:')
          scoreText.textContent = 0
        }
      }

  })
}
checkNumber() 

const again =()=>{
  againButton.addEventListener('click', ()=>{
    location.reload()
  })
}
again()
// const again = document.querySelector('.again')
// again.addEventListener('click', () => {
//   
// })
