//builds clock
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

var perHour = 11;
var cumPay;
var cumTax;
var dispPay;
var dispTax;
var dispTake;
var inTime;
var outTime;

function startMoney() {
  var t = setTimeout(addMoney, 1000)
  cumPay = parseFloat(document.getElementById('pay').innerHTML);
}
function addMoney() {
  if (clockOut_press == false) {
    var perSecond = perHour / 60 / 60;
    cumPay += perSecond;
    dispPay = parseFloat(cumPay).toFixed(2);
    document.getElementById('pay').innerHTML = dispPay;
    addFedTax();
    addTakeHome();
    var t = setTimeout(addMoney, 1000);
  }
}

function addFedTax() {
  cumTax = cumPay * .18;
  dispTax = parseFloat(cumTax).toFixed(2);
  document.getElementById('taxFedCount').innerHTML = dispTax;
}
function addTakeHome() {
  dispTake = parseFloat(dispPay - dispTax).toFixed(2);
  document.getElementById('takeHomeCount').innerHTML = dispTake;
}

//set clock in/out vars
var clockIn_press = false;
var clockOut_press = false;
//checks whether clockin has been pressed,
//writes the current time to the clock in div,
//sets clockout to visible
function clockIn() {
  if (clockIn_press == false) {
    inTime = document.getElementById('clock').innerHTML;
    document.getElementById('clockIn_btn').innerHTML = "In: " + inTime;
    document.getElementById('clockIn_btn').className = "btn pressedIn";
    clockIn_press = true;
    clockOutStart();
    startMoney();
  }
  else {return};
}

function clockOutStart() {
  document.getElementById('clockOut_btn').className = "btn btnOut";
  document.getElementById('clockOut_btn').innerHTML = "Clock Out";
}
function clockOut() {
  if (clockOut_press == false && clockIn_press == true) {
    outTime = document.getElementById('clock').innerHTML;
    document.getElementById('clockOut_btn').innerHTML = "Out: " + outTime;
    document.getElementById('clockOut_btn').className = "btn pressedOut";
    clockOut_press = true;
    restartStart();
    clipboardStart();
  }
  else {return};
}

function restartStart() {
  document.getElementById('restart_btn').innerHTML = "Restart";
  document.getElementById('restart_btn').className = "btn btnRe";
}
function restart() {
  if (clockOut_press == true) {
    location.reload(true);
  }
}

function clipboardStart() {
  document.getElementById('clipboard_btn').innerHTML = "Copy";
  document.getElementById('clipboard_btn').className = "btn btnCopy";
}
function clipboard() {
  if (clockOut_press == true) {
    var copyText =
      "In: " + inTime +
      "\nPay: $" + document.getElementById('pay').innerHTML +
      "\nAvg Fed Tax: $" + document.getElementById('taxFedCount').innerHTML +
      "\nTake Home: $" + document.getElementById('takeHomeCount').innerHTML +
      "\nOut: " + outTime;
    copyTextToClipboard(copyText);
    document.getElementById('clipboard_btn').innerHTML = "Copied";
    document.getElementById('clipboard_btn').className = "btn pressedCopy";
    var t = setTimeout(clipboardStart, 3000);
  }
}
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';

  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}
