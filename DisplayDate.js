
setInterval(Display, 60000);

function Display() {
  
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var hours = date.getHours();
var min = date.getMinutes();
if (min < 10) min = '0' + min;
document.getElementById("dat").innerHTML = "Today\'s Date: " + day + "/" + month + "/" + year ;
document.getElementById("time").innerHTML = "Time: " + hours + ":" + min;
}
