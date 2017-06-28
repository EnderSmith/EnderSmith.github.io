function startTime(once) {
  var time = getTime();
  print(time, 'clock');
  if (once != true) {
    var t = setTimeout(startTime, 500);
  } else {
    return time;
  }
}

function getTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  var time = h + ":" + m + ":" + s;
  return time;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function startPay(perHour, initVal, once) {
  var cumPay = initVal;
  var perSec = (perHour / 3600);
  var forTest = addPay(cumPay, perSec, once);
  return forTest;
}
function addPay(cumPay, perSec, once) {
  var dispPay = parseFloat(cumPay).toFixed(2);
  print(dispPay, 'pay');
  cumPay += perSec;
  if (once != true) {
    setTimeout(addPay(cumPay, perSec), 1000);
  } else {
    return cumPay;
  }
}

function print(input, getId) {
  document.getElementById(getId).innerHTML = input;
}
function classChange(input, getId, add) {
  if (add != true) {
    document.getElementById(getId).className = input;
  } else {
    document.getElementById(getId).className += input;
  }
}
