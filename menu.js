var btnStart = document.getElementById("start");

var theme = document.querySelector('input[name=theme]:checked').value;
var level = document.querySelector('input[name=level]:checked').value;

var url = ""


function start(){
var theme = document.querySelector('input[name=theme]:checked').value;
var level = document.querySelector('input[name=level]:checked').value;
url = level+"_"+theme+".html"
document.location.href=url; 
}