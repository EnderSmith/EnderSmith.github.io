function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var clockIn_press = false;
var clockOut_press = false;
var clockOut_vis = false;
function clockIn() {
  if (clockIn_press == false) {
    var inTime = document.getElementById('clock').innerHTML;
    document.getElementById('clockIn_btn').innerHTML = "In:" + inTime;
    clockIn_press = true;
    clockOut_vis = true;
  }
  else {return};
}

function clockOut() {

}
