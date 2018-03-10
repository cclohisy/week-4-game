//establish variables
//compScore
//establish possible computer scores vaules 19-120
var computerScore = Math.floor(Math.random() * 102) + 19;
console.log("comp guesss " + computerScore);
//display inital computer score - see below    
//userScore
var userScore = 0;
//win
var win = 0;
//loss
var loss = 0;
//resultWon
var resultWon = "You Won!!!!!"
//resultLoss
var resultLoss = "You Lost :(";

//set id for each button?, buttons given class of crystal...


//display initial values of..
//compScore
$("#computerScore").text(computerScore);
//userScore
$("#userScore").text(userScore);
//win
$("#win").text(win);
//loss
$("#loss").text(loss);
//result


// establish random crystal vaules 1-12 
var crystal = Math.floor(Math.random() * 12) + 1;
console.log("crystal value " + crystal);
//assign different random value to each crystal (4 diff vaules for four crystals)...TBD 


//create function to reset game - will run after user win or loss
function reset() {
    //set user score to 0 
    userScore = 0
    //display new user score 
    $("#userScore").text(userScore);
    //generate new random computer score 
    computerScore = Math.floor(Math.random() * 102) + 19;
    console.log("comp guesss " + computerScore);
    //display new computer score 
    $("#computerScore").text(computerScore);
    // generate new random vaules for each crystal
    crystal = Math.floor(Math.random() * 12) + 1;
    console.log("crystal value " + crystal);
};



//create function to run on user click of crystals userScore    
        //IF user score == computer score 
             // increase win +1
                //display new vaule of win in #win 
            //display you won result message in #result
            //run reset function
        if (userGuess === computerGuess) {
            //increase wins +1
            win++;
            //display new vaule of win in html
            document.getElementById("wins").innerHTML = win;
            //call reset function 
            reset();
        }
        //  else if (){};
        //ELSE IF user score < computer score 
        // when user clicks crystal
                //add value of crystal clicked to previous userScore
                //display new value of userScore in #userScore
           

        //ELSE 
            // increase loss +1
                //display new value of loss in #loss
            //display you lost result message in #result
            //run rest function







