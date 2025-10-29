const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "_","-"];
let firstPassword = []
let secondPassword = []
let passwordOne = document.getElementById("password-1")
let passwordTwo = document.getElementById("password-2")
let passwordLength = 15
let randomNumber = 0
let randomCharacter = ""


function randomPassword() {
  randomNumber = Math.floor(Math.random() * characters.length)
}

function generatePassword() {
  firstPassword = []
  secondPassword = []
  for (let i = 0; i < passwordLength; i++) {
    randomPassword()
    randomCharacter = characters[randomNumber]
    firstPassword.push(randomCharacter)
  }
  for (let i = 0; i < passwordLength; i++) {
    randomPassword()
    randomCharacter = characters[randomNumber]
    secondPassword.push(randomCharacter)
  }
  passwordOne.textContent = firstPassword.join("")
  passwordTwo.textContent = secondPassword.join("")
}
