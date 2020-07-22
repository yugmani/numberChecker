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
                random = Math.floor(Math.random()*4)+1;
                console.log(random);
            }
                
            const pickNumber = ()=>{
                generateRandom();
                for (let i=0; i<btnEl.length; i++){
                    $(btnEl[i]).on("click", (event)=>{
                        event.preventDefault();
                      select = $(btnEl[i]).val();
                      html += `<h6>${select}</h6>`;
                      $("#picked-number").html(html);
                    })
                  }
                  displayResult(random, select);  
            }
            

                const displayResult = (rand, chosen)=> {
                    if (rand == chosen){
                        sms = "WINNER!!!";
                        $("#computer-pick").text(rand);
                      }
                      else {
                        sms = "TRY AGAIN";
                        
                      }
  
                      
                      
                      $("#result").text(sms);

                }

                
                pickNumber();


            });
         