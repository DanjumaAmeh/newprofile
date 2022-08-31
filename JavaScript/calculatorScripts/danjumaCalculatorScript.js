

function moveOn(thisID){
   
    var moveOnID = thisID;

if(document.getElementById("txtFirst").value == "" && document.getElementById("txtOperation").value =="" ){
document.getElementById("txtFirst").value=moveOnID;
    document.getElementById("txtEquation").value =moveOnID;
//alert(document.getElementById("txtFirst").value);
} 

else if(document.getElementById("txtFirst").value!="" && document.getElementById("txtOperation").value==""){
    
document.getElementById("txtFirst").value=""+document.getElementById("txtFirst").value+moveOnID;
    document.getElementById("txtEquation").value = document.getElementById("txtFirst").value;
}
   
else{  //operator and first are present or scientific
document.getElementById("txtSecond").value=""+document.getElementById("txtSecond").value+moveOnID;
document.getElementById("txtEquation").value =""+ document.getElementById("txtEquation").value+moveOnID;
}
}

function performArithmetic(){
    if((document.getElementById("txtFirst").value=="")&&(document.getElementById("txtSecond").value=="")){
       var   equalsKey="EQUAL SIGN. There is Nothing to evaluate yet.";
        alert("You Can Not Start Calculation with "+equalsKey);
    }
     else{          

//var ss=document.getElementById("txtEquation").value;
var theEquationToEvaluate = document.getElementById("txtEquation").value;

if(document.getElementById("txtFirst").value==""||document.getElementById("txtSecond").value==""){
if(theEquationToEvaluate.includes("cos")||theEquationToEvaluate.includes("sin")||theEquationToEvaluate.includes("log")||theEquationToEvaluate.includes("exp")
||theEquationToEvaluate.includes("tan")||theEquationToEvaluate.includes("sqrt")||theEquationToEvaluate.includes("round")){
var scientificForm=""+"Maths."+theEquationToEvaluate;
}
else{

var danjAnswer=eval(theEquationToEvaluate);

document.getElementById("txtEquation").value =danjAnswer;
document.getElementById("txtAnswer").value =danjAnswer;
document.getElementById("txtFirst").value=danjAnswer;
//document.getElementById("txtEquation").focus();

}}

let theAnswer=0.0;

let theFunc=document.getElementById("txtOperation").value;
let theFuncLength = theFunc.length;

let firstVal=document.getElementById("txtFirst").value;

let secondVal=document.getElementById("txtSecond").value;

let myFinalAnswer;

if(theFuncLength < 2)// ie + || - || / || *
{

theAnswer= firstVal + theFunc + secondVal;

 myFinalAnswer=eval(theAnswer);

document.getElementById("txtAnswer").value= myFinalAnswer;

continueCalculation();
}

else{     //Scientific Calculation as operand is Scientific i.e log cos rnd exp, etc
    if(theFunc.includes("round") && firstVal==""&& secondVal==""){
    //do nothing
    }
    
else if(theFunc.includes("round") && firstVal!=""&& secondVal==""){
secondVal=firstVal;
firstVal="";

if (firstVal == "")
{
firstVal = 1;
}
else{
//f=f;  //first number remains the same;
}
if(secondVal == "")
{
secondVal = 1;
}
else{
//second number is same;
}
}
   if(theFunc=="round"){
       
       var toDecimalPlaces= document.getElementById("decimalPlaces").value;
       if (firstVal==""&&secondVal!=""){
          var numToRound =secondVal;
var rounded =  Number.parseFloat(numToRound).toFixed(toDecimalPlaces)   //numToRound.toFixed(2);
           document.getElementById("txtAnswer").value= rounded;
           continueCalculation();
       }
       else if(firstVal!=""&&secondVal==""){
           numToRound=firstVal;
          var rounded =  Number.parseFloat(numToRound).toFixed(toDecimalPlaces)   //numToRound.toFixed(2);
           document.getElementById("txtAnswer").value= rounded;
           continueCalculation();
       }
       else{
          var numToRound =secondVal;
var rounded =  Number.parseFloat(numToRound).toFixed(toDecimalPlaces)   //numToRound.toFixed(2);
rounded=Number.parseFloat(rounded)*Number.parseFloat(firstVal);
           rounded=Number.parseFloat(rounded).toFixed(toDecimalPlaces);
           document.getElementById("txtAnswer").value= rounded;
           
            myFinalAnswer=document.getElementById("txtAnswer").value;
            document.getElementById("txtAnswer").value= myFinalAnswer;
            document.getElementById("txtFirst").value=myFinalAnswer;
            document.getElementById("txtSecond").value="";
            document.getElementById("txtOperation").value="";
            document.getElementById("txtEquation").value=myFinalAnswer;
            //document.getElementById("txtEquation").focus();
       }
   } 
    else{
        theAnswer= ""+"("+firstVal+"*(Math."+ theFunc +"(" + secondVal + ")))" ;
        myFinalAnswer= eval(theAnswer);
    }
    var toDegree=Math.PI / 180.0;
    var clickedRadioButton= document.querySelector('input[name="DegOrRad"]:checked').value; 
    if(theFunc=="sin"&& clickedRadioButton=="Degrees"){
        theAnswer=firstVal*Math.sin(secondVal*toDegree);
        document.getElementById("txtAnswer").value= theAnswer;
    }
    else if(theFunc=="cos" && clickedRadioButton=="Degrees"){
        theAnswer=firstVal*Math.cos(secondVal*toDegree);
        document.getElementById("txtAnswer").value= theAnswer;
    }
    else if(theFunc=="tan" && clickedRadioButton=="Degrees"){
        theAnswer=firstVal*Math.tan(secondVal*toDegree);
        document.getElementById("txtAnswer").value= theAnswer;
    }
    else if(theFunc=="exp"){
        theAnswer=firstVal*Math.exp(secondVal);
        document.getElementById("txtAnswer").value= theAnswer;
    }
    else if(theFunc=="log"){
        theAnswer=firstVal*Math.log10(secondVal);
        document.getElementById("txtAnswer").value= theAnswer;
    }
    else{
        document.getElementById("txtAnswer").value= myFinalAnswer;
    }
    continueCalculation();
    return;
}
}
}

function enterOps(myId, myInnerText){
    //alert("hello");
    //alert(myId+ " is my ID and "+myInnerText+" is my Inner Text");
    
   var firstPart=document.getElementById("txtFirst").value;
   var OldOperator =  document.getElementById("txtOperation").value;
   var secondPart=document.getElementById("txtSecond").value;
   var operatorlengthis=OldOperator.length;
   var oldAnswer="";

    if((firstPart=="")&&(document.getElementById("txtEquation").value=="")&&(operatorlengthis<2)&& (myId=="-"||myId=="+" ||myId=="/"||myId=="*"||myId=="=")){
        let keyPressedNow="";
        if(myId =="-"){
            keyPressedNow= "MINUS SIGN. Use TOGGLE Button Instead.";
        }
        else if(myId=="*"){
            keyPressedNow="MULTIPLICATION SIGN.";
        }
        else if(myId=="/"){
            keyPressedNow="DIVISION SIGN.";
        }
        else if(myId=="+"){
            keyPressedNow="PLUS SIGN. The first Number is already positive";
        }
        else if(myId=="="){
            keyPressedNow="EQUAL SIGN. There is Nothing to evaluate yet.";
        }
        else{
            //myId=myId;
        }
        
        alert("You Can Not Start Calculation with "+keyPressedNow);
    }
    else{
       
        if(firstPart==""&& myId.length>2&& myId!="round"){
           document.getElementById("txtFirst").value="1";
        }
    
    
   if(firstPart!=""&&OldOperator!=""&&secondPart!=""){
        var toEvaluate=""+firstPart+OldOperator+secondPart;
       
       if(operatorlengthis>2) {
           toEvaluate= ""+"("+firstPart+"*(Math."+ OldOperator +"(" + secondPart + ")))" ;
       }
       else{
           toEvaluate=document.getElementById("txtEquation").value;
       }
       
        oldAnswer=eval(toEvaluate);
       
       document.getElementById("txtAnswer").value=oldAnswer;//+thisID;
       document.getElementById("txtEquation").value=oldAnswer;//+thisID;
       document.getElementById("txtFirst").value=oldAnswer;//+thisID;
       document.getElementById("txtSecond").value="";//+thisID;
       document.getElementById("txtOperation").value=myId;//+thisID;
   }
    else{
         var a=document.getElementById("txtEquation").value;

        if((a!="")&&(a.includes("+")||a.includes("-")||a.includes("X")||a.includes("/"))){
          document.getElementById("txtFirst").value=  a.substring(0,a.length-1);
           document.getElementById("txtEquation").value=  document.getElementById("txtFirst").value;//+document.getElementById("txtOperation").value          
        }
        else{
        }
    }
    
    var OpsID=myId;
    var OpsInnerText=myInnerText;

        document.getElementById("txtOperation").value=OpsID;
        document.getElementById("txtEquation").value=""+document.getElementById("txtFirst").value+OpsID;
     
        var symbol="";
        if(OpsID.length>2){
            if(OpsID=="sqrt")
            {
             var symbol="√";
            }
        else{
            symbol=OpsID;
        }
//     document.getElementById("txtEquation").value= ""+document.getElementById("txtFirst").value+ symbol;
    // if(document.getElementById("txtFirst").value==""){
   //  }
}
        else{
            if(OpsID =="*")
            {
             var symbol="x";
            }
            if(OpsID =="/")
            {
             var symbol="÷";
            }
            if(OpsID =="+"||OpsID=="-")
            {
             var symbol=OpsID;
            }
            
            
            
        }
        document.getElementById("txtEquation").value= ""+document.getElementById("txtFirst").value+ symbol;
}

}



function myFunction(){
    //alert("I am here!");
    
  //var x = document.getElementById("Dcp").;
  //x.value = x.value.toUpperCase();


}
function myFunction(deci){
    if(deci=="0"){
        deci="0";
    }
    else if(deci=="1"){
        deci="1";
    }
    else if(deci=="3"){
        deci="3";
    }
    else if(deci=="4"){
        deci="4";
    }
    else{
        deci="2";
    }
    document.getElementById("decimalPlaces").value=deci;
}




function clearScreen(){
document.getElementById("txtOperation").value="";
document.getElementById("txtFirst").value="";
document.getElementById("txtSecond").value="";
document.getElementById("txtEquation").value="";
document.getElementById("txtAnswer").value="";
 }
function continueCalculation(){
myFinalAnswer=document.getElementById("txtAnswer").value;
document.getElementById("txtAnswer").value= myFinalAnswer;
document.getElementById("txtFirst").value=myFinalAnswer;
document.getElementById("txtSecond").value="";
document.getElementById("txtOperation").value="";
document.getElementById("txtEquation").value=myFinalAnswer;
 }

function toggleValue(){

    var checkAnswer=document.getElementById("txtAnswer").value;
    var checkFirst=document.getElementById("txtFirst").value;
    var checkSecond=document.getElementById("txtSecond").value;
    var checkOperator = document.getElementById("txtOperation").value;

if(checkFirst==""&&checkSecond!=""&& checkAnswer==""){
    document.getElementById("txtAnswer").value=checkSecond;
}
else if(checkFirst!=""&&checkSecond==""&& checkAnswer==""){
    document.getElementById("txtAnswer").value=""+"-"+checkFirst;
    document.getElementById("txtEquation").value=document.getElementById("txtAnswer").value;
}

if (checkAnswer==""){
    if(checkFirst=="" && checkSecond!=""){
        if (checkOperator=="-"){
            document.getElementById("txtFirst").value=checkSecond;
            document.getElementById("txtAnswer").value=checkSecond;
            document.getElementById("txtSecond").value="";
            document.getElementById("txtOperation").value="";
            document.getElementById("txtEquation").value=checkSecond;
}
        else if(checkSecond==""&& checkFirst!=""){  //operator is positive and first value is NOT empty
            checkFirst=""+"-"+ checkSecond;// checkSecond.slice(0, -3);
            document.getElementById("txtFirst").value=checkFirst;
            document.getElementById("txtAnswer").value=checkFirst;
            document.getElementById("txtSecond").value="";
            document.getElementById("txtOperation").value="";
            document.getElementById("txtEquation").value=checkFirst;
            }
        }
    }
else{
if (checkAnswer.startsWith("-")){

            checkFirst=""+checkAnswer.substring(1);
            document.getElementById("txtFirst").value=checkFirst;
            document.getElementById("txtAnswer").value=checkFirst;
            document.getElementById("txtSecond").value="";
            document.getElementById("txtOperation").value="";
            document.getElementById("txtEquation").value=checkFirst;

}
else {//(answer is positive)
            checkFirst=""+"-"+checkAnswer;// checkSecond.slice(0, -3);
            document.getElementById("txtFirst").value=checkFirst;
            document.getElementById("txtAnswer").value=checkFirst;
            document.getElementById("txtSecond").value="";
            document.getElementById("txtOperation").value="";
            document.getElementById("txtEquation").value=checkFirst;
}
}
}

function checkDecimal(){
  //CHECK TO ENSURE ONLY ONE DECIMAL (FULLSTOP) IN FORMULA
{
 var letter_CountFirst = 0;
 var letter_CountSecond = 0;
    var letter=".";
var letter2=".";
    var tempFirst=document.getElementById("txtFirst").value;
    var tempSecond = document.getElementById("txtSecond").value;

    
 for (var positionFirst = 0; positionFirst < tempFirst.length; positionFirst++) 
 {
    if (tempFirst.charAt(positionFirst) == letter) 
      {
      letter_CountFirst += 1;
      }
    if(letter_CountFirst>1){
       tempFirst= tempFirst.substring(0, tempFirst.length - 1);
        document.getElementById("txtFirst").value=tempFirst;
        document.getElementById("txtEquation").value=tempFirst;
    }
 }
for (var positionSecond = 0; positionSecond < tempSecond.length; positionSecond++) 
 {
    if (tempSecond.charAt(positionSecond) == letter2) 
      {
      letter_CountSecond += 1;
      }
    if(letter_CountSecond>1){
       tempSecond= tempSecond.substring(0, tempSecond.length - 1);
        document.getElementById("txtSecond").value=tempSecond;
        document.getElementById("txtSecond").value=tempSecond; 
        var eqau=document.getElementById("txtEquation").value;
        document.getElementById("txtEquation").value=eqau.substring(0,eqau.length-1);
    }
}
}
}


function roundNow(){
    if(document.getElementById("txtFirst").value==""&&document.getElementById("txtSecond").value==""){
        //do Nothing
    }
    else{  //Round 
    performArithmetic();
    }
}
    
function cleanDisplay(){
        var equationDisplayed=document.getElementById("txtEquation").value;
                
        if((equationDisplayed.startsWith("1sin"))||(equationDisplayed.startsWith("1cos"))||(equationDisplayed.startsWith("1tan"))
           ||(equationDisplayed.startsWith("1log"))||(equationDisplayed.startsWith("1exp"))||(equationDisplayed.startsWith("1√"))){   
            equationDisplayed=equationDisplayed.substring(1);
            document.getElementById("txtEquation").value=equationDisplayed;
        }
    }



    document.addEventListener("keydown", dealWithKeyboard, false);
//document.addEventListener("keypress", dealWithKeyboard, false);
//document.addEventListener("keyup", dealWithKeyboard, false);
var time = 200;
    
    var numPressedBackgroundColor="dodgerblue";
    var numPressedColor="red";
    var operatorPressedBackgroundColor="orangered";
    var operatorPressedColor="blue";
    var equalsPressedBackgroundColor="#000";
    var equalsPressedColor="red";
    
    
    var oldColorBackground="#4CAF50";
    var oldColor="#fff";
    
function dealWithKeyboard(event) {
    //alert(event.keyCode); // To Identify and link the keyboard buttons
	// gets called when any of the keyboard events are overheard
    if (event.keyCode === 96 || event.keyCode === 48) {
   event.preventDefault();
   document.getElementById("0").click();
        
       document.getElementById("0").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("0").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("0").style.backgroundColor=oldColorBackground;
        document.getElementById("0").style.color=oldColor;
   }, time);
  }
    if (event.keyCode === 97 || event.keyCode === 49) {
   event.preventDefault();
   document.getElementById("1").click();
       
        document.getElementById("1").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("1").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("1").style.backgroundColor=oldColorBackground;
        document.getElementById("1").style.color=oldColor;
   }, time);
  }
   if (event.keyCode === 98 || event.keyCode === 50) {
   event.preventDefault();
   document.getElementById("2").click();
       
       document.getElementById("2").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("2").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("2").style.backgroundColor=oldColorBackground;
        document.getElementById("2").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 99 || event.keyCode === 51) {
   event.preventDefault();
   document.getElementById("3").click();
        
       document.getElementById("3").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("3").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("3").style.backgroundColor=oldColorBackground;
        document.getElementById("3").style.color=oldColor;
   }, time);
        
  } 
    if (event.keyCode === 100 || event.keyCode === 52) {
   event.preventDefault();
   document.getElementById("4").click();
        document.getElementById("4").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("4").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("4").style.backgroundColor=oldColorBackground;
        document.getElementById("4").style.color=oldColor;
   }, time);  } 
    if (event.keyCode === 101 || event.keyCode === 53) {
   event.preventDefault();
   document.getElementById("5").click();
        
        document.getElementById("5").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("5").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("5").style.backgroundColor=oldColorBackground;
        document.getElementById("5").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 102 || event.keyCode === 54) {
   event.preventDefault();
   document.getElementById("6").click();
       
        document.getElementById("6").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("6").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("6").style.backgroundColor=oldColorBackground;
        document.getElementById("6").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 103 || event.keyCode === 55) {
   event.preventDefault();
   document.getElementById("7").click();
        
        document.getElementById("7").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("7").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("7").style.backgroundColor=oldColorBackground;
        document.getElementById("7").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 104 || event.keyCode === 56) {
   event.preventDefault();
   document.getElementById("8").click();
       
        document.getElementById("8").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("8").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("8").style.backgroundColor=oldColorBackground;
        document.getElementById("8").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 105 || event.keyCode === 57) {
   event.preventDefault();
   document.getElementById("9").click();
       
        document.getElementById("9").style.backgroundColor=numPressedBackgroundColor; 
        document.getElementById("9").style.color=numPressedColor; 
    setTimeout(function() {
        document.getElementById("9").style.backgroundColor=oldColorBackground;
        document.getElementById("9").style.color=oldColor;
   }, time);
  }
    if (event.keyCode === 107 ) {
   event.preventDefault();
   document.getElementById("+").click();
       
        document.getElementById("+").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById("+").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById("+").style.backgroundColor=oldColorBackground;
        document.getElementById("+").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 109 || event.keyCode === 189) {
   event.preventDefault();
   document.getElementById("-").click();
       
        document.getElementById("-").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById("-").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById("-").style.backgroundColor=oldColorBackground;
        document.getElementById("-").style.color=oldColor;
   }, time);
  } 
      if (event.keyCode === 106) {
   event.preventDefault();
   document.getElementById("*").click();
      
          document.getElementById("*").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById("*").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById("*").style.backgroundColor=oldColorBackground;
        document.getElementById("*").style.color=oldColor;
   }, time);
  } 
     if (event.keyCode === 110 || event.keyCode === 190) {
   event.preventDefault();
   document.getElementById(".").click();
       
         document.getElementById(".").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById(".").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById(".").style.backgroundColor=oldColorBackground;
        document.getElementById(".").style.color=oldColor;
   }, time);
  } 
      if (event.keyCode === 111) {
   event.preventDefault();
   document.getElementById("/").click();
       
          document.getElementById("/").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById("/").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById("/").style.backgroundColor=oldColorBackground;
        document.getElementById("/").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 13 || event.keyCode==187|| event.keyCode==61) {
   event.preventDefault();
   document.getElementById("=").click();
       
        document.getElementById("=").style.backgroundColor=equalsPressedBackgroundColor; 
        document.getElementById("=").style.color=equalsPressedColor; 
    setTimeout(function() {
        document.getElementById("=").style.backgroundColor=oldColorBackground;
        document.getElementById("=").style.color=oldColor;
   }, time);
  } 
    if (event.keyCode === 46) {
   event.preventDefault();
   document.getElementById("C").click();

        document.getElementById("C").style.backgroundColor=operatorPressedBackgroundColor; 
        document.getElementById("C").style.color=operatorPressedColor; 
    setTimeout(function() {
        document.getElementById("C").style.backgroundColor=oldColorBackground;
        document.getElementById("C").style.color=oldColor;
   }, time);
  }     
    else{
    }
}
//function decimalPlaces(){
//    alert("I am here!");
//}

