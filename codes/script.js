// Assignment code here
//prompts for password criteria
//user chooses criteria
//criteria to choose from lenght(8-128), lowercase, uppercase, numbric, special charaters
//validate users answer
//password generated that meets users criteria
//password is either displayed or in an alert window


var charaterLength = 8;
var choiceArr =[];

  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbric = ['1','2','3','4','5','6','7','8','9','0'];
  var special = ['!','@','#','$','%','^','&','*','(',')'];
  
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var correctPrompts = getPrompts();

if (correctPrompts) {
  var newpassword = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;
} else {
  passwordText.value = wrong;
}

}

function generatepassword(){
  var newpassword = "";
  for(var i = 0; i < charaterLength; i++){
    var randomindex = Math.floor(Math.random()* choiceArr.length);
    password = password + choiceArr[randomindex];
  }
    return password;
}

function getPrompts() {
  choiceArr = [];
  charaterLength = pasrseInt(prompt('How many charaters do you want your password to be? (8-128)'));
 
  if(isNaN(charaterLength)|| charaterLength < 8 ||charaterLength > 128){
    alert("passwords has have between 8 and 128 charaters. please try again.");
    return false;
  }

  if(confirm("would you like lowercase letters in your password?")){
    choiceArr = choiceArr.concat(lowercase);
  }
  if(confirm("would you like uppercase letters in your password?")){
    choiceArr = choiceArr.concat(uppercase);
  }
  if(confirm("would you like numbers in your password?")){
    choiceArr = choiceArr.concat(numbric);
  }
  if(confirm("would you like special charaters in your password?")){
    choiceArr = choiceArr.concat(special);
  }
return true;

}
