var generateBtn = document.querySelector("#generate"); 

generateBtn.addEventListener("click", function (event){

event.preventDefault();

var procceed = window.prompt("Hello! I am here to assist you in the process of generating a new secure password.\nDo you want to procceed? Answer 'YES' or 'NO'");

  console.log(procceed);

  console.log(typeof(procceed));

if (procceed === null ){

  window.alert("Ok. See you some other time.");

} else if (procceed.toUpperCase() ==='Y'|| procceed.toUpperCase() ==='YES'){

      validatePWlength();

} else{

  window.alert("Ok. See you some other time.");

}
var passwordLength;

var chooseType;

var ChosenType;

var RandomC;

function validatePWlength (){

  passwordLength = window.prompt("First, enter an integer between 8 and 128 as the desired lenght of the password: " );

if (passwordLength >= 8 && passwordLength <= 128){

 var genPassword =  window.confirm("So you want a password of length " + passwordLength + "?")

 if(genPassword){

  return passwordLength;

 } else{

  window.alert("Ok. See you some other time.");

  return passwordLength = undefined;

 }
} else {

  window.alert("Invalid input. You must press an integer between 8 and 128.");

  var tryAgain = window.confirm("Are you going to enter a valid lenght for your password?");

  if(!tryAgain){

    window.alert("Ok. See you some other time.");

    return passwordLength = undefined;

  } else{
    
    passwordLength = window.prompt("Enter an integer between 8 and 128 as the desired length of the password: " );

    if (passwordLength >= 8 && passwordLength <= 128){

      return passwordLength;

    } else{
      
      window.alert("Ok. See you some other time.");

      return passwordLength = undefined;
      
    }

  }
} 
}

console.log(passwordLength);

if(passwordLength === undefined){

  window.alert ("Cannot generate password without a valid password length.")

} else{

  var Length = Number(passwordLength);
  
    console.log(Length);
  
  var passwordArray = new Array(Length);
  
    console.log(passwordArray.length);
  
  var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  
    console.log(lowercaseArray.length);
  
  var uppercaseArray = new Array(lowercaseArray.length);
  
  for (i = 0; i < lowercaseArray.length; i++){ 

    uppercaseArray[i] = lowercaseArray[i].toUpperCase();
  }
    console.log(uppercaseArray.length);
  
  var numericArray = [0,1,2,3,4,5,6,7,8,9];
  
    console.log(numericArray.length);
  
  var specialArray = [' ','!', '"', '#', '$', '%','&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']','^','_', '`','{', '|','}', '~'];
  
    console.log(specialArray.length);

    window.alert ("The possible character types for your password are denoted as follows:\n L = lower case letter \n U = upper case letter \n N = indo-arabic digit from 0 through 9 \n S = password special character from the list compiled by OWASP\n (except for the backlash)");

  for (i = 0; i < passwordArray.length; i++) {
  
  var chooseType = window.prompt("Choose the type of character you want for your password string: L, U, N, or S.");
  
  console.log(chooseType);
  if (chooseType === null){

    window.alert("Goodbye then.");

    break;

  } else if(chooseType === 'L'|| chooseType === 'U'|| chooseType === 'N' || chooseType =='S'){
  
    genRandomC(chooseType); 

    console.log(RandomC);

    passwordArray[i] = RandomC;

    console.log(passwordArray[i]);
 }
  else{
    window.alert("Invalid Input!");
  
    chooseType = window.prompt("Again, try choosing the type of character you want for your password string: L, U, N, or S.");

    console.log(chooseType);
  
    if(chooseType === 'L'|| chooseType === 'U'|| chooseType === 'N' || chooseType === 'S'){
  
      genRandomC(chooseType);

      console.log(RandomC);

      passwordArray[i]= RandomC;

      console.log(passwordArray[i]);
  
    } else{
  
      window.alert("Ok. The input is wrong again. Goodbye then.");

      break;
  
    }

  }
}
}
console.log(passwordArray);

var passwordText = document.querySelector("#password");

var password;

function writePassword(){

   password = passwordArray[0];

  for(i = 1; i < passwordArray.length ; i++)
  {
    password = password + passwordArray[i];
  }

  passwordText.textContent = "Your new secure password is: " + password;

  return;

};

writePassword();

console.log(password);



passwoordTexT.textContent = `${password}`;

  function genRandomC(x){
    if(x ==='L'){
  
      return RandomC = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
  
    } else if(x ==='U'){
  
      return RandomC = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
  
    }else if(x ==='N'){
  
      return RandomC = numericArray[Math.floor(Math.random()*numericArray.length)];
  
    }else {
  
      return RandomC = specialArray[Math.floor(Math.random()*specialArray.length)];
  
    }
  }

});

