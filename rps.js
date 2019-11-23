let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const resultLine = document.getElementById("result");
const actionLine = document.getElementById("action");

// rock = 1 ,paper = 2,scissors =3
function restart(){
            compScore = 0;
            compScore_span.innerHTML = compScore;
            userScore = 0;
            userScore_span.innerHTML = userScore;
            resultLine.innerHTML = "Good luck"
            actionLine.innerHTML = "Make your move!"
            actionLine.style.color = "black"

}
function userPickRock(){
    var randomPick = Math.floor(Math.random() * 3) + 1 ;
    switch(randomPick){
        case 1:
            resultLine.innerHTML = "Its a draw! the computer picks Rock too."
            break;
        case 2:
            resultLine.innerHTML = "You lost! the computer picks Paper."
            compScore_span.innerHTML = ++compScore;
            break;
        case 3:
            resultLine.innerHTML = "You win! the computer picks scissors."
            userScore_span.innerHTML = ++userScore;
            break;
    }
    if (userScore>2 || compScore>2){
        if (userScore-compScore >= 2){
            actionLine.innerHTML = "You are a real WINNER!"
            actionLine.style.color = "darkgreen"
            
        }
        else if(compScore-userScore >= 2){
            actionLine.innerHTML = "You are such a LOOSER!"
            actionLine.style.color = "red"
        }

    }
}
function userPickPaper(){
    var randomPick = Math.floor(Math.random() * 3) + 1 ;
    switch(randomPick){
            case 1:
                resultLine.innerHTML = "You win! the computer picks Rock."
                userScore_span.innerHTML = ++userScore;
                break;
            case 2:
                resultLine.innerHTML = "Its a draw! the computer picks Paper too."
                

                break;
            case 3:
                resultLine.innerHTML = "You lost! the computer picks scissors."
                compScore_span.innerHTML = ++compScore;

                break;
    }if (userScore>2 || compScore>2){
        if (userScore-compScore >= 2){
            actionLine.innerHTML = "You are a real WINNER!"
            actionLine.style.color = "darkgreen"
            
        }
        else if(compScore-userScore >= 2){
            actionLine.innerHTML = "You are such a LOOSER!"
            actionLine.style.color = "red"
            
        }

    }
}
function userPickScissors(){
    var randomPick = Math.floor(Math.random() * 3) + 1 ;
    switch(randomPick){
            case 1:
                    resultLine.innerHTML = "You lost! the computer picks Rock."
                    compScore_span.innerHTML = ++compScore;
                break;
            case 2:
                    resultLine.innerHTML = "You win! the computer picks Paper."
                    userScore_span.innerHTML = ++userScore;
    
                break;
            case 3:
                    resultLine.innerHTML = "Its a draw! the computer picks scissors too."
                    
    
                break;
    }if (userScore>2 || compScore>2){
        if (userScore-compScore >= 2){
            actionLine.innerHTML = "You are a real WINNER!"
            actionLine.style.color = "darkgreen"
            
        }
        else if(compScore-userScore >= 2){
            actionLine.innerHTML = "You are such a LOOSER!"
            actionLine.style.color = "red"
            
        }

    }
}