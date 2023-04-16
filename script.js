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

