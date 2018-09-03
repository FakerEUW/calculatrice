var calcform = document.querySelector("form[name=calcform]");
var txt1 = document.querySelector("input[name=txt1]");
var rst = document.querySelector("input[name=rstbtn]");

function displaynum(n1) {
    calcform.txt1.value = calcform.txt1.value+n1;
}

function resetTo() {
    calcform.txt1.value = "";
}

function enter() {
    document.addEventListener('keyup'); 
    if (event.keyCode == 13) {
        txt1.value=eval.txt1.value;
    }
    else {}
}
