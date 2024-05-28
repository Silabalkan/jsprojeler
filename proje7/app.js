const calculator=document.querySelector(".calculator");
const result=document.querySelector(".result");
const clearAll=document.querySelector("#clearAll");
const clearchar=document.querySelector("#clearchar");


let firstNumber="";
let selectedOperator="";
let  otherValue="";
let next=false;


runEventListener();

function runEventListener(){
    calculator.addEventListener("click",write);
    clearAll.addEventListener("click",clear);
    clearchar.addEventListener("click",clearAChar)

}

function clearAChar(){
    if(next){
        otherValue=control.deleteLastChar(otherValue);
    }else{
        firstNumber=control.deleteLastChar(firstNumber);
    }
    result.innerHTML=control.deleteLastChar(result.innerHTML);
}

function clear(){
    clearOther();
    clearPanel();
    firstNumber="";
    next=false;
}

function write(e){
    //console.log(e.target); target ile neye bastığını anlayabiliriz

 const element=e.target;
 if(element.classList.contains("number")){
    //sayıya basmıştır
    //console.log(element);
   // firstNumber+=element.value;
   // result.innerHTML+=element.value;
    if(next){
        otherValue+=element.value;
    }else{
        firstNumber+=element.value;
    }
    result.innerHTML+=element.value;


 }else if(element.classList.contains("operator")){
    //operatöre basmıştır
  
    if(!control.isHaveOperator(result.innerHTML)){
        next=true;
        selectedOperator=element.value;
        result.innerHTML+=element.value;
    }

 }else if(element.classList.contains("equal")){
    //eşitliğe basmıştır
    let answer=calculate(firstNumber,selectedOperator,otherValue).toString();
    firstNumber=answer;
    next=false;
    clearPanel();
    clearOther();
    result.innerHTML=answer;
    
  
    
 }
 console.log(firstNumber , selectedOperator , otherValue);
}


function calculate(firstNumber,operator,secondNumber){
    let result;
   let isDotHave=control.isDotHave(firstNumber) || control.isDotHave(secondNumber);
    switch(operator){
        case "+":
            result=isDotHave ? parseFloat(firstNumber)+ parseFloat(secondNumber) :parseInt(firstNumber)+parseInt(secondNumber);
            break;

         case "-":
             result=isDotHave ? parseFloat(firstNumber)- parseFloat(secondNumber) :parseInt(firstNumber)-parseInt(secondNumber);
                break;


        case "*":
            result=isDotHave ? parseFloat(firstNumber)* parseFloat(secondNumber) :parseInt(firstNumber)*parseInt(secondNumber);
                    break;


        case "/":
            result=isDotHave ? parseFloat(firstNumber)/ parseFloat(secondNumber) :parseInt(firstNumber)/parseInt(secondNumber);
                        break;


    }

    return result;
}

function clearPanel(){
    result.innerHTML="";
}

function clearOther(){
    selectedOperator = "";
    otherValue = "";
}