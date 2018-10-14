alert('working');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

var hours = date.getHours();
var min = date.getMinutes();

if (min < 10) min = '0' + min;

document.getElementById('date_time').innerHTML = "Today\'s Date is " + day + "/" + month + "/" + year + "/";
