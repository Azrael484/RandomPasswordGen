var generateBtn = document.querySelector("#generate"); //Global variable: stores a reference to the unique button element with id #generate so that it can be accessed dynamically through DOM 

generateBtn.addEventListener("click", function (event){ //Applying the .addEventListener method to generateBtn. The event that will initiate the function in the second argument is a click with a mouse/mouse-pad.

  event.preventDefault(); //Prevents some default behaviors usually triggered by the "click" event that would be counterproductive for the execution of the function's body

  // Initial prompt: initiates the process of password generation if the user chooses to procceed

  var procceed = window.prompt("Hello! I am here to assist you in the process of generating a new secure password.\nDo you want to procceed? Answer 'YES' or 'NO'"); // Variable stores the input provided by the user after the prompt is displayed on the window(global object)

  console.log(procceed); // Logs the content of the variable to the console

  console.log(typeof(procceed)); //Logs the type of the data stored in the variable to the console. The console.log() lines of JS code aid in testing/debugging the algorithm.

  //Checks whether the user pressed "Cancel" to the first prompt, in which case terminates the generation of the password with an alert displayed on the window

  if (procceed === null ){ 

    window.alert("Ok. See you some other time.");

  }else if (procceed.toUpperCase() ==='Y'|| procceed.toUpperCase() ==='YES'){ //Else, if some input was entered in the prompt box, we check to see if the input indicates that the user really wants to generate a new password.

      validatePWLength(); //If the user answered affirmatively to the prompt, then we invoke this hoisted function to validate the desired length of the password.

  } else{

    window.alert("Ok. See you some other time.");//Else, if the user did not answered affirmatively, we display this alert message and stop the generation of new password

  }

  var passwordLength; // This variable will store the length (supposed to be a number between 8 and 128) of the password that the user chooses

  //This previously invoked function produces output that guides the user through the procees of validating the length of the password.

  function validatePWLength (){ 

    passwordLength = window.prompt("First, enter the desired length of the password. It must be an integer between 8 and 128: " );

    if (passwordLength >= 8 && passwordLength <= 128){//Checks if the desired length is within the allowed interval.

    var genPassword =  window.confirm("So you want a password of length " + passwordLength + "?")//This prompt ensures the user actually wants to continue generating a password of the specified length

      if(genPassword){

        return passwordLength; //If the user's answer is affirmative, then the function returns the length that was previously specified.

      }else{

          window.alert("Ok. See you some other time.");//If the user' answer is negative, then we get "undefined" as the value stored in "passwordLength"

          return;
      }
    }else { //If the initial input does not fall within the allowed integer interval, an alert is displayed and the user is asked whether to continue using the app.

      window.alert("Invalid input. You must enter an integer between 8 and 128.");

      var tryAgain = window.confirm("Are you going to enter a valid lenght for your password? This is the last chance.");

          if(!tryAgain){//If the user no longer wants to use the app, then a goodbye message is displayed and "passwordLength" is assigned "undefined"

          window.alert("Ok. See you some other time.");

          return;

          } else{//If the user wants to continue using the app, we ask again for an integer between 8 and 128 (including endpoints) and verify if the input is allowed.

            passwordLength = window.prompt("Enter an integer between 8 and 128 as the desired length of the password: " );

            if (passwordLength >= 8 && passwordLength <= 128){//If the input is validated, we return the value stored in "passwordLength" (entered by the user)

            return passwordLength;

            }else{//If the input is invalid, then we display agoodbye message and set the value of "passwordLength" to "undefined"
    
            window.alert("The length chosen is invalid again. See you some other time.");

            return;
    
            }
          }
      } 
  }

  if(passwordLength === undefined){ //Checks if the variable is undefined. In that case, the alert below is displayed and the password generation is stopped.

    window.alert ("Cannot generate password without a valid password length.")

  } else{ //This part of the code excutes only if "passwordLength" stores a validated password length.

  console.log(passwordLength); //Logs the validated length of the password if it is not "undefined". Logs "undefined" otherwise.

  var chosenType; //This variable will store the type (lower-case letter, upper-case letter, numeric, or special symbol) that the user chooses for each of the randomly generated characters. The variable will be assigned a value a "passwordLength" amount of times.

  var randomChar; //This variable will store a randomly generated character that will be included in the password's string. The variable will be assigned a value a "passwordLength" amount of times.


  var arrayLength = Number(passwordLength); //Change the string-typed numeral stored in "passwordlength" to a number and store the result in arrayLength.

  console.log(arrayLength);//Logs the value stored in "Length" to the console.

  var passwordArray = new Array(arrayLength); //Uses the array constructor to create an array of length "Length". Its entries will be each of the randomly generated characters that will form the password string in the order they where generated.
  
  console.log(passwordArray.length); //Logs the length of the array to the console. It must be loosely-equal to the value stored in passwordLength.
  
  
  var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //Declared a variable whose entries are the lower-case letters of the English alphabet in order.
  
  console.log(lowercaseArray.length);//Logs the length of lowercaseArray in order to verify that its length equals the number of letters in the English alphabet (i.e. 26)

  var uppercaseArray = new Array(lowercaseArray.length);//Employs the array constructor the create an array that will store each of the 26 upper-case letters of the English alphabet in order.


  for (i = 0; i < lowercaseArray.length; i++){ //This loops maps each of the entries in "lowercaseArray" to the correspondingly indexed entry in the "uppercaseArray", transforming each letter from lower-case to upper-case using the .toUpperCase() method.

      uppercaseArray[i] = lowercaseArray[i].toUpperCase();
  }

  console.log(uppercaseArray.length); //Logs the length of "uppercaseArray" . It must equal the length of the "lowercaseArray"

  var numericArray = [0,1,2,3,4,5,6,7,8,9]; //Creates an array containing each of the base 10 indo-arabic numerals in increasing order.

  console.log(numericArray.length);//Logs the length of "numericArray" to confirm it contains all 10 required single digit numerals.

  var specialArray = [' ','!', '"', '#', '$', '%','&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']','^','_', '`','{', '|','}', '~'];//Declares a new array whose values will be all of the OWASP-listed special characters for password ordered according to increasing corresponding hexadecimal UTF-8 code, except for the backslash "\".

  console.log(specialArray.length); //Logs the length of "specialArray" to the console.

  function generatePWArray (){

  //Displays an alert on the window indicating the four possible types of characters the user can choose amongst for each of the randomly generated characters that will be stored in randomChar.
    
  window.alert ("The possible character types for your password are denoted as follows:\n L = lower case letter \n U = upper case letter \n N = indo-arabic digit from 0 through 9 \n S = password special character from the list compiled by OWASP\n (except for the backlash)");

  for (i = 0; i < arrayLength; i++) {//Each iteration of this loop will generate each of the random characters that will be concatenated to form the password string.
  
      var chosenType = window.prompt("Choose the type of character you want for your password string: L, U, N, or S.");//Assigns the input entered by the user after each prompt as the value of the chooseType variable.
  
      console.log(chosenType);//Logs the value stored in the variable "chosenType" after each iteration of the loop. If the user's input is valid, then a random character will be generated.

      if (chosenType === null){

      window.alert("Goodbye then."); //Ends the loop if at some iteration the user presses the  "Cancel" button of the prompt box instead of entering one of the requested values.

      break;

      } else if(chosenType.toUpperCase() === 'L'|| chosenType.toUpperCase() === 'U'|| chosenType.toUpperCase() === 'N' || chosenType.toUpperCase() =='S'){ //Provided the user entered a value, the condition in the "else if" checks wheter the input is valid.
  
        genRandomChar(chosenType); //If the input is valid, then the hoisted "genRandomChar()" function" is invoked, returning a value to be stored in the "RandomC" variable.

        console.log(randomChar);//The value stored in "randomChar" at the i-th iteration will be logged to the console in "ChromeDevTools".

        passwordArray[i] = randomChar; //The value (randomly generated character) will be stored as the i-th element of "passwordArray"

        console.log(passwordArray[i]); //The value stored at "passwordArray[i]" will be logged to the console. It must equal that of "RandomC".
      }else{
        
        //Assuming the input is not validated through the above condition, an alert will be displayed and the user will be given an additional chance to enter valid input.
    
        window.alert("Invalid Input!");
  
        chosenType = window.prompt("Again, for the last time, try choosing the type of character you want for your password string: L, U, N, or S.");

        console.log(chosenType);
  
        if(chosenType.toUpperCase() === 'L'|| chosenType.toUpperCase() === 'U'|| chosenType.toUpperCase() === 'N' || chosenType.toUpperCase() === 'S'){
          
          //If the input entered during the second try is valid, then the same commands in the previously skipped "else-if" section will be executed 
  
        genRandomChar(chosenType);

        console.log(randomChar);

        passwordArray[i]= randomChar;

        console.log(passwordArray[i]);
  
        }else{
          //If the user fails to enter a valid input a second time, then an alert message is displayed and the generation of the random password is stopped.
  
        window.alert("The input is invalid again. Goodbye then.");

        break;
        }
      }
    }
  }
}

//Execute the previously defined function:
  generatePWArray();
 // console.log(passwordArray);//Assuming all of the iterations of the previous loop were executed successfully, this will log the array( in object form) to the console, showing all of the randomly generated characters that will be sequentially concatenated in the password string according to their index.

  function genRandomChar(x){ //Given a string as argument, this function checks if one of the four conditions of strict equality hold. If a condition holds, it returns a random character and stores it in RandomC. Otherwise, it returns nothing.
    if(x.toUpperCase() === 'L'){
    
        return randomChar = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
    
      }else if(x.toUpperCase() === 'U'){
    
        return randomChar = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    
      }else if(x.toUpperCase() === 'N'){
    
        return randomChar = numericArray[Math.floor(Math.random()*numericArray.length)];
    
      }else if(x.toUpperCase() ==='S'){
    
        return randomChar = specialArray[Math.floor(Math.random()*specialArray.length)];
    
      }else {
  
        return;
  
      }
  }

  var passwordTextEl = document.querySelector("#password"); //Uses "querySelector()" to get a reference to the element in the DOM with id="password" and stores that reference in the "passwordText" variable. 

  var password; //Declares the variable that will store the password string (i.e., the password) to be displayed in the read-only text-area

  //Function declaration: Creates the password string to be shown as output to the user by concatenating the elements of "passwordArray" in the order they appear.

  function writePassword(){

    password = passwordArray[0]; //Base case for the following loop.

    for(i = 1; i < passwordArray.length; i++){

      password += passwordArray[i];//For each iteration of the loop, concatenate a new character to the password string.

    }

    passwordTextEl.innerHTML = "Your new secure password is:\n" + password;//After the condition in the loop evaluates as false, output the message after the assignment operator by using the "".textContent" method to insert the text in the area corresponding to the <textarea> element.

    return;//Ends execution of the function.

  };

  writePassword();//Invokes the function defined above.

  console.log(password);//Logs the value of "password" to the console. It must be equal to the password displayed in the textarea of the page.

}); //Ends the exexution of the event-handler after the event.

