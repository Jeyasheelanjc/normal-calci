let outputScreen =document.getElementById("output-screen")
function display(num){
    outputScreen.value+=num;
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value)
    }
    catch(err){
        alert("this is an invalid value")
    }
}
function allclear(){
    outputScreen.value=outputScreen.value.slice(0,-60)
}
function dele(){
    outputScreen.value=outputScreen.value.slice(0,-1)
}