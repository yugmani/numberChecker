// **********************************************************************************
// WITH JQUERY  

$(document).ready(function() {

// Here we create the on click event that gets the user's pick
// Then determine which button was clicked
// Compare the computer and user guess
// Inform the user if the've guessed correctly or incorrectly
let select;
let sms ="";
let btnEl = $(".btn-choice");
let random;
let html = "";


const generateRandom = ()=>{
    select = "";
    sms ="";
    //  btnEl = $(".btn-choice");
    random = "";
    html = "";

    random = Math.floor(Math.random()*4)+1;
    $("#picked-number").html("");
    
}
                
const playGame = ()=>{
    
    generateRandom();
    $("#computer-pick").text("???");
    for (let i=0; i<btnEl.length; i++){
        $(btnEl[i]).on("click", (event)=>{
            event.preventDefault();

            select = $(btnEl[i]).val();
            html += `<h5>${select}</h5>`;
            $("#picked-number").html(html);
            displayResult(random, select); 
        });
        } 
    }
 
const displayResult = (rand, chosen)=> {
    if (rand == chosen){
        sms = `<h2>WINNER!!!</h2>`;
        sms += `<h1>GAME OVER</h1>`;
        $("#computer-pick").text(rand);
        $("#result").html(sms);
        
        }
    
    else {
                sms = `<h3>TRY AGAIN</h3>`;
            }

    $("#result").html(sms);

}

// Start the game;
playGame();

              
           

});
         