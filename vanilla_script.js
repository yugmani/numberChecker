  
    // **********************************************************************************
    // WITH VANILLA JAVASCRIPT
    
            let random;
            let chosen;
            let message = "";
            let text_color = "";
            let html = "";
    
            // Add code to have the computer guess a random number between 1 and 4
            const generateRandom = ()=>{
                random = Math.floor(Math.random()*4)+1;
                // console.log("random:"+ random);
                // return random;
            };
    
            const displayResult = (rand, choose)=>{
              
              if (rand == choose){
                message = "Correct number! You are winner";
                text_color = "blue";
                document.getElementById("computer-pick").textContent = rand;
              }
              else {
                message = "Not the correct choice! Try Again";
                text_color = "red";
              }
              html += `<h5>You Picked: ${choose}</h5>`;
              document.getElementById("picked-number").innerHTML = html;
              document.getElementById("result").innerHTML = `<h1 style="color:${text_color}">${message}</h1>`;
              
            }
            
                let buttonEl = document.querySelectorAll(".btn-choice");
                // console.log(buttonEl);
                generateRandom(4);
                for (let i=0; i<buttonEl.length; i++){
                  buttonEl[i].addEventListener("click", (event)=>{
                    event.preventDefault();
                    document.getElementById("computer-pick").textContent = "???";
                    chosen = buttonEl[i].value;
                    // console.log("chosen:"+chosen);
                   displayResult(random, chosen);
                  })
                 
    
                }
              
              
    
    