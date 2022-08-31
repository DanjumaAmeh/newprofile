
 
function myFunction() {

 
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function changecolor(){
		document. getElementById('btnSubmit'). style. backgroundColor = 'Red';
		}
		
		function returnColor(){
		document. getElementById('btnSubmit'). style. backgroundColor = 'blue';
		}
		
		
		
  let d = new Date();
          //var n = d.toLocaleTimeString([], { timeStyle: 'short' }); //date.toLocaleTimeString([], {timeStyle: 'short'});

         // document.getElementById("theTime").innerHTML = n;


          let options = {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
          };
          let timeString = d.toLocaleString('en-US', options);

          //document.getElementById("theTime").innerHTML = "&nbsp;&nbsp;&nbsp;" + timeString;


//alert(timeString);
//alert("Here");
let today = new Date();
let curHr = today.getHours();
let greeting;

if (curHr < 12) {
  greeting="Good morning";
} else if (curHr < 16) {
  greeting="Good afternoon";
} else {
  greeting="Good evening";
}


let greet = "The Time is "+timeString; 
//alert(greet);

document.getElementById("welcomeMessage").innerHTML=greet;

document.getElementById("topGreet").innerHTML=greeting+",";


//alert(greet);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnOpenModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

 document.getElementById("btnOpenModal").click();
setInterval(function(){ document.getElementById("close").click(); }, 15000);



var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("remaining").innerHTML = "Thank you. Closing Now";
  } else {
  let len=timeleft;
  if(len<10){timeleft="0"+ timeleft;}else{}
    document.getElementById("remaining").innerHTML = "Closing in "+timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);


function lbl1Click() {
  let x = document.getElementById("readMore1");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.getElementById("lbl1").innerHTML="... Show Less";
	 document.getElementById("lbl1").style.color = "red";
	
  } else {
    x.style.display = "none";
	document.getElementById("lbl1").innerHTML="Read More ...";
	document.getElementById("lbl1").style.color = "blue";
  }
}

function lbl2Click() {
  let x = document.getElementById("readMore2");
  if (x.style.display === "none") {
    x.style.display = "block";
	document.getElementById("lbl2").innerHTML="... Show Less";
	 document.getElementById("lbl2").style.color = "red";
	
  } else {
    x.style.display = "none";
	document.getElementById("lbl2").innerHTML="Read More ...";
	document.getElementById("lbl2").style.color = "blue";
  }
}

function validateForms() {
var a;var b;var c; var d;

 a=document.getElementById("txtName").value;
 b=document.getElementById("txtPhoneNumber").value;
 c=document.getElementById("txtEmail").value;
 d=document.getElementById("txtMessage").value;
if(a!="" && b!="" &&c!=""&&d!=""){
alert("Thank you " + a+ ". I will get back to you shortly. ");
   return false;
   }
   else{
   return false;
   }
}

function makeAboutActive(){
	//alert("active")
	document.getElementById("aboutNav").style.backgroundColor = "dodgerblue";
	document.getElementById("contactNav").style.backgroundColor = "black";
	document.getElementById("PortfolioNav").style.backgroundColor = "black";
	}
	function makeContactActive(){
	//alert("active")
	document.getElementById("aboutNav").style.backgroundColor = "black";
	document.getElementById("contactNav").style.backgroundColor = "dodgerblue";
	document.getElementById("PortfolioNav").style.backgroundColor = "black";
	}

function makePortfolioActive(){
	//alert("active")
	document.getElementById("aboutNav").style.backgroundColor = "black";
	document.getElementById("contactNav").style.backgroundColor = "black";
	document.getElementById("PortfolioNav").style.backgroundColor = "dodgerblue";
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
