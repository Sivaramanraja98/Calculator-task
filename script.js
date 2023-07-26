let outputdisplay=document.getElementById("result");

function Display(num){
    if(isNaN(num)){
        alert("invalidinput! Please enter a number")
    }
    else{
    outputdisplay.value += num;
    }
}

function display(num){

    outputdisplay.value += num;
}

function Clear(){
    outputdisplay.value='';
}

function Delete(){
    outputdisplay.value=outputdisplay.value.slice(0,-1);
}

function calculate(){
    if(outputdisplay.value.length>=1)
    {
     try {
        outputdisplay.value = eval(outputdisplay.value);
     } catch (error) {
        alert("invalid value");
     }}
    else{
        alert("enter value")
     }    
}

function checkKeyPress(event) {
    const key = event.key;

    // Check if the key is an alphabet or a symbol other than +, -, *, and /
    if (/[a-zA-Z]/.test(key) || /[^+\-*/=0-9]/.test(key)) {
        alert("Invalid input! Only numbers and operators (+, -, *, /) are allowed.");
        event.preventDefault(); // Prevent the default action of typing the invalid character
    }
}
