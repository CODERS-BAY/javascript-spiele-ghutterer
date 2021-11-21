let tries=3;
let distanceToMonster = Math.random()*90+10;
    distanceToMonster=Math.round(distanceToMonster);
function calculateThrow(){
    
    let fallingSpeed = document.getElementsByName("planet")[0].value;


    
    let speed = document.getElementsByName("speed")[0].value;
    console.log(speed);

    let angle = document.getElementsByName("angle")[0].value;
    angle = angle*(Math.PI/180);

    let throwingDistance =((speed*speed)*Math.sin(2*angle))/fallingSpeed;
        throwingDistance =Math.round(throwingDistance);
    if(tries>0){
    if(Math.abs(throwingDistance-distanceToMonster)<=5){
            let winimg = document.createElement("img");
            winimg.src = "images/Winner.jpg";
            let winnerImage = document.getElementById("winnerImage");
            winnerImage.append(winimg);
        createPopup("Wow you are amazing",true);
        distanceAway.innerHTML=("");
       
        
    }else{
        let distance = distanceToMonster-throwingDistance
        distanceAway.innerHTML="You are "+distance+" meters away";
    }
    tries--;
    trycount.innerHTML="Tries= "+tries;
    if (tries==0&&(Math.abs(throwingDistance-distanceToMonster)>5)){
        createPopup("You lost",true);
    }
    
    }
}

    function changeWorlds(){
        let world = document.getElementsByName("planet")[0].value;

        console.log(world=="1.62");
         if(world=="9.81"){
            earth.style.backgroundImage = "url(images/Earth.jpg)";
        }
        else if(world=="1.62"){
            earth.style.backgroundImage = "url(images/Moon.jpg)";
        }
         else if(world=="3.69"){
            earth.style.backgroundImage = "url(images/Mars.jpg)";
        }
        else if(world=="24.79"){
            earth.style.backgroundImage = "url(images/Jupiter.jpg)";
        }

    }


    //RockPaperScissors

    let counter;
let userPoint = 0;
let pcPoint = 0;
function readCounter(){
    counter = counterInput.value;

    if(counter<=0){
        //Fehlermeldung
      createPopup("Geben Sie eine Zahl > 0 ein");
    }else{
        let activeDiv=document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        activeDiv.nextElementSibling.classList.add("active");
    }
}

function createPopup(errorText,reload=false){

    let popup = document.createElement("div");
    popup.setAttribute("id","popup");
    
    let headline = document.createElement("h3");
    headline.append(errorText);

    let button = document.createElement("button");
    if(reload){
        button.append("Nochmal spielen");
        button.addEventListener("click",function(){
            location.reload();
        })
    }else{
    button.append("OK");
    button.addEventListener("click",function(){
        document.getElementById("popup").remove();
    })
    }
    popup.append(headline);
    popup.append(button);
    document.body.append(popup);
}

function play(usersChoice){
    let pcChoice = Math.ceil(Math.random()*3);

    if(usersChoice==1){
        userImage.setAttribute("src","images/rock.jpg");
    } else if(usersChoice==2){
        userImage.setAttribute("src","images/paper.jpg");
    }else{
        userImage.setAttribute("src","images/scissors.jpg");
    }

    if(pcChoice==1){
        pcImage.setAttribute("src","images/rock.jpg");
    } else if(pcChoice==2){
        pcImage.setAttribute("src","images/paper.jpg");
    }else{
        pcImage.setAttribute("src","images/scissors.jpg");
    }

    if(usersChoice ==pcChoice){
        userPoint++;
        pcPoint++;
        pcImage.style.boxShadow = "1px 1px 10px #FFF";
        userImage.style.boxShadow =" 1px 1px 10px #FFF";

    }else if(usersChoice==1& pcChoice==2){
        pcPoint ++;
        pcImage.style.boxShadow = "1px 1px 10px #00FF00";
        userImage.style.boxShadow =" 1px 1px 10px #FF0000";
    }
    else if(usersChoice==1& pcChoice==3){
    userPoint ++;
    pcImage.style.boxShadow = "1px 1px 10px #FF0000";
    userImage.style.boxShadow =" 1px 1px 10px #00FF00";
    }
     else if(usersChoice==2& pcChoice==1){ 
    userPoint ++;
    pcImage.style.boxShadow = "1px 1px 10px #FF0000";
    userImage.style.boxShadow =" 1px 1px 10px #00FF00";
    }
     else if(usersChoice==2& pcChoice==3){
    pcPoint ++;
    pcImage.style.boxShadow = "1px 1px 10px #00FF00";
    userImage.style.boxShadow =" 1px 1px 10px #FF0000";
    }else if(usersChoice==3& pcChoice==1){
        pcPoint ++;
        pcImage.style.boxShadow = "1px 1px 10px #00FF00";
        userImage.style.boxShadow =" 1px 1px 10px #FF0000";
    }else if(usersChoice==3& pcChoice==2){
        userPoint ++;
        pcImage.style.boxShadow = "1px 1px 10px #FF0000";
        userImage.style.boxShadow =" 1px 1px 10px #00FF00";
    }

    counter--;
    if(counter==0){

        setTimeout(function(){
        if(userPoint>pcPoint)
        createPopup("Du hast gewonnen",true);
        else if(userPoint==pcPoint)
        createPopup("Unentschieden", true);
        else
        createPopup("Leider verloren",true);
    },1000)
}

}


   
// guessNumbers game//


function startGame(){
//disable input oder screen active blabla
    let activeDiv = document.getElementsByClassName("active")[0];
    activeDiv.classList.remove("active");
    let values = document.getElementById("guessNumberValues");
    values.classList.add("active");
   numOfTries=numberOfTries.value;
   randomNumber = Math.random()*((upperLimit.value)-1)+1;
   randomNumber = Math.round(randomNumber);

}


let numOfTries; 
let randomNumber; 


function guessNumber(){
    if(numOfTries>0){
    console.log(randomNumber);
  let guess = yourGuess.value;
  let differenceToNumber = randomNumber -guess;
  console.log(differenceToNumber);
 
  if(guess<randomNumber){
      difference.innerHTML="Hint:Higher" ;
  }else if(guess>randomNumber){
      difference.innerHTML="Hint:Lower" ;
  }else{
     createPopup("You guessed right Champ",true);
  }

  numOfTries--;
  if(numOfTries==0){
    createPopup("Leider verloren",true);
  }
  
}

}

let versuche;
let randomCode1;
let randomCode2;
let randomCode3;
let randomCode;
function startCode(){
    //disable input oder screen active blabla
    versuche = numTries.value;
    if(versuche>12||versuche<1){
        createPopup("1-12 Tries");
       
      }else{
        let activeDiv = document.getElementsByClassName("active")[0];
        activeDiv.classList.remove("active");
        let values = document.getElementById("codeBreakervalues");
        values.classList.add("active");
        randomCode1 = Math.random()*((8))+1;
        randomCode1 = Math.round(randomCode1);
        randomCode2 = Math.random()*((8))+1;
        randomCode2 = Math.round(randomCode2);
        randomCode3 = Math.random()*((8))+1;
        randomCode3 = Math.round(randomCode3);
        randomCode = randomCode1.toString()+randomCode2.toString()+randomCode3.toString();
        
      }
      
       
        
}

let num1;
let num2;
let num3;
let code;
let hint;



function guessCode(){

    
    code=yourCode.value;
    num1 = code.charAt(0); 
    num2 = code.charAt(1);
    num3 = code.charAt(2);
    if(code.length<3)
    createPopup("Number is too small",true);
    else if(code.length>3)
    createPopup("Number is too big",true);
    else if(num1==0||num2==0||num3==0){
        createPopup("A number cant be 0",true);
    }else{
   

    console.log(randomCode1);
    console.log(randomCode2);
    console.log(randomCode3);

    
    correctNumbers.innerHTML=("");
    testfor.innerHTML=("");
    testnested.innerHTML=("");
       

        for(let i =0;i<code.length;i++){
            if(code.charAt(i)==randomCode.charAt(i)){
                testnested.append("You got the "+(i+1)+"number correct ");
                
        }else
            for(let j = 0;j<randomCode.length;j++){
                if(i!=j){
                    if(code.charAt(i)==randomCode.charAt(j)){
                        if(code.charAt(j)!=randomCode.charAt(j))
                        testfor.append("Number "+(i+1)+" is correct at the wrong place ")
                    }
                }
            }
        }
    }

        if(num1!=randomCode1&&num2!=randomCode2&&num3!=randomCode3){
            correctNumbers.innerHTML=("You got nothing full correct");
        }

        versuche--;
            

        if(num1==randomCode1&&num2==randomCode2&&num3==randomCode3){
            createPopup("Congrats !",true);
        }else if(versuche ==0)
            createPopup("Well you lost",true);
        
       
     
    
    }
    


