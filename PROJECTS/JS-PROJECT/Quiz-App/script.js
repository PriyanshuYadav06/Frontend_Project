const LandingPage=document.querySelector(".landing-page");
const Section=document.querySelector(".section1");
const StartButton=document.querySelector(".sb");
const UpdateScore=document.querySelector(".updateScore");
const Next=document.querySelector(".Next");
const UpateQuestion=document.querySelector(".Question");
const option1=document.querySelector("#op1");
const option2=document.querySelector("#op2");
const option3=document.querySelector("#op3");
const option4=document.querySelector("#op4");
const Options=document.querySelectorAll(".option");
const Options1=document.querySelectorAll(".option1");
const FinalPage=document.querySelector(".section2");
const time=document.querySelector(".timer");
const finalScore=document.querySelector(".FinalScore");
const updateProgress=document.querySelector(".p");
const motivate=document.querySelector(".motivation");
const h=document.querySelector(".high");
const hi=document.querySelector(".highh");
let high_score=0;
let count=1;
let flag=false;
let flagw=true;
let wrongAnswer=0;
high_score=localStorage.getItem("high_score");
if(high_score==0){
    h.style.display="none";
}else{
    h.style.display="block";
    h.innerHTML=`Highest Score:${high_score}`;
}
StartButton.addEventListener("click",()=>{
    LandingPage.style.display="none";
    Section.style.display="block";
    RestartTimer();
})
function Update_Score(){
    UpdateScore.innerHTML=`${count}/10`
}
function correctCheck(op1){
    let parent=op1.parentElement;
    parent.classList.add("correct");
    flag=true;
}
function incorrectCheck(parent){
    parent.classList.add("wrong");
    flag=false;
    flagw=false;
}
function checkOption(parent,selectedOption){
    switch(count){
        case 1:if(selectedOption===option1){
            correctCheck(op1);
            break;
           }else{
            incorrectCheck(parent);
            alert("Try Again!");
            break;
           }
        case 2:if(selectedOption===option3){
                correctCheck(op3)
                break;
               }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
               }
        case 3:if(selectedOption===option3){
               correctCheck(op3);
               break;
               }else{
               incorrectCheck(parent);
               alert("Try Again!");
               break;
              }
        case 4:if(selectedOption===option2){
               correctCheck(op2);
               break;
              }else{
              incorrectCheck(parent);
              alert("Try Again!");
              break;
             }
        case 5:if(selectedOption===option3){
               correctCheck(op3);
               break;
               }else{
               incorrectCheck(parent);
               alert("Try Again!");
               break;
               }
        case 6: if(selectedOption===option2){
                correctCheck(op2);
                break;
                }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
                }
        case  7:if(selectedOption==option1){
                correctCheck(op1);
                break;
                }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
                }
        case  8:if(selectedOption==option1){
                correctCheck(op1);
                break;
                }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
                }
        case  9:if(selectedOption==option1){
                correctCheck(op1);
                break;
                }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
                }
        case  10:if(selectedOption==option3){
                correctCheck(op3);
                break;
                }else{
                incorrectCheck(parent);
                alert("Try Again!");
                break;
                }
    }

}
(function Click(){
    Options.forEach((ele) => {
        ele.addEventListener("click",()=>{
            if(!flag){
                let selectedOptionId=ele.id;
                let selectedOption=document.getElementById(selectedOptionId);
                let parent=ele.parentElement;
                checkOption(parent,selectedOption);
            }else{
                alert("Go to Next Question!");
            }
            
        })
    });
})();
function updatePro(){
    if(wrongAnswer==1){
        updateProgress.style.width="90%";
    }else if(wrongAnswer==2){
        updateProgress.style.width="80%";
    }else if(wrongAnswer==3){
        updateProgress.style.width="70%";
    }else if(wrongAnswer==4){
        updateProgress.style.width="60%";
    }else if(wrongAnswer==5){
        updateProgress.style.width="50%";
    }else if(wrongAnswer==6){
        updateProgress.style.width="40%";
    }else if(wrongAnswer==7){
        updateProgress.style.width="30%";
    }else if(wrongAnswer==8){
        updateProgress.style.width="20%";
    }else if(wrongAnswer==9){
        updateProgress.style.width="10%";
    }else if(wrongAnswer==10){
        updateProgress.style.width="0%";
    }else{
        motivate.innerHTML="Outstanding! A perfect 10/10! Keep up the great work!";
    }
}
function LoadFinalPage(){
    clearInterval(window.quizTimer); 
    LandingPage.style.display="none";
    Section.style.display="none";
    FinalPage.style.display="block";
    finalScore.innerHTML=`${10-wrongAnswer}/10`;
    if((10-wrongAnswer)>high_score){
        high_score=10-wrongAnswer;
        localStorage.setItem("high_score",high_score);
        hi.innerHTML=`Congratulations! You just set a new high score:${high_score} 🎉`;
        hi.style.display="block";
    }
    updatePro();
}
function LoadNextQues(count){
    switch(count){
        case 2: UpateQuestion.innerHTML="1:let array = [1, 2, 3] 2:array[6] = 9 3:console.log(array[5])";
                option1.innerHTML="1";
                option2.innerHTML="2";
                option3.innerHTML="9";
                option4.innerHTML="undefine";
                Update_Score();
                Click();
                break;
        case 3: UpateQuestion.innerHTML="Which of the following is not a JavaScript data type?";
                option1.innerHTML="String";
                option2.innerHTML="Boolean";
                option3.innerHTML="Float";
                option4.innerHTML="undefine";
                Update_Score();
                Click();
                break;
        case 4:UpateQuestion.innerHTML="What will typeof null return in JavaScript?";
               option1.innerHTML="null";
               option2.innerHTML="object";
               option3.innerHTML="number";
               option4.innerHTML="undefine";
               Update_Score();
               Click();
               break;
        case 5:UpateQuestion.innerHTML="Which keyword is used to declare a constant variable in JavaScript?";
               option1.innerHTML="var";
               option2.innerHTML="let";
               option3.innerHTML="const";
               option4.innerHTML="static";
               Update_Score();
               Click();
               break;
        case 6: UpateQuestion.innerHTML="How do you write a single-line comment in JavaScript?";
                option1.innerHTML="<-- This is a comment -->";
                option2.innerHTML="// This is a comment";
                option3.innerHTML="/* This is a comment */";
                option4.innerHTML=" $ This is a comment";
                Update_Score();
                Click();
                break;
        case 7: UpateQuestion.innerHTML="Which method is used to remove the last element from an array?";
                option1.innerHTML="pop()";
                option2.innerHTML="push()";
                option3.innerHTML="shift()";
                option4.innerHTML="splice()";
                Update_Score();
                Click();
                break;
        case 8: UpateQuestion.innerHTML="Which of the following is a correct way to define a function in JavaScript?";
                option1.innerHTML="function myFunc() {}";
                option2.innerHTML="def myFunc():";
                option3.innerHTML="void myFunc() {}";
                option4.innerHTML="fun myFunc() {}";
                Update_Score();
                Click();
                break;
        case 9: UpateQuestion.innerHTML="What will console.log(2 + 2) output?";
                option1.innerHTML="4";
                option2.innerHTML="22";
                option3.innerHTML="TypeError";
                option4.innerHTML="NaN";
                Update_Score();
                Click();
                break;
        case 10: UpateQuestion.innerHTML="Which event is triggered when a user clicks on an HTML element?";
                option1.innerHTML="mouseover";
                option2.innerHTML="keydown";
                option3.innerHTML="click";
                option4.innerHTML="change";
                Update_Score();
                Click();
                break;
    }
}
function RestartTimer(){
    clearInterval(window.quizTimer); 
    let t=30;
    window.quizTimer=setInterval(()=>{
        time.innerHTML=`00:${t--}`;
        if (t < 0) {
            clearInterval(window.quizTimer);
            wrongAnswer++;
            // LoadFinalPage(); we have to implement this feature
        }
        if(t<=30 && t>=14){
            document.body.style.background = "#CCE2C2";
        }else if(t<=15 && t>=4){
            document.body.style.background = "#D4D69F";
            time.style.background="#C5B100";
        }else if(t<=5){
            document.body.style.background = "#DBADAD";
            time.style.background="#C50C00";
        }
    },1000)
};
Next.addEventListener("click", () => {
    RestartTimer();
    document.body.style.background = "#CCE2C2";
    time.style.background="#02A409";

});
Next.addEventListener("click",()=>{
    if(flag){
        Options1.forEach((ele)=>{
            ele.classList.remove("correct");
            ele.classList.remove("wrong");
            flag=false;
        })
        count++;
        if(flagw==false){
            flagw=true;
            wrongAnswer++;
        }
        LoadNextQues(count);
        if(count==11) LoadFinalPage();
       
    }else{
        alert("Choose Correct Option!");
    }
})











document.querySelector(".rb").addEventListener("click", () => {
    location.reload(); 
    RestartTimer();
});


