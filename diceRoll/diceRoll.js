document.addEventListener('DOMContentLoaded', function() {
  loopNumListeners();
  loopDListeners();
  operListeners();
  rollBarListeners();
});
function NumListener(id) {
  document.getElementById(id).addEventListener('click', function() {
    var output = id.replace('num', '');
    // console.log(output);
    btnPress(output);
  });
}
function DListener(id) {
  document.getElementById(id).addEventListener('click', function() {
    var output = id;
    // console.log(output);
    btnPress(output);
  });
}
function loopNumListeners() {
  for (var i = 0; i < 10; i++) {
    var id = "num" + i;
    new NumListener(id);
  }
}
function loopDListeners() {
  var dArray = ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2'];
  for (var i = 0; i < 8; i++) {
    var id = dArray[i];
    new DListener(id);
  }
}
function operListeners() {
  document.getElementById('num+').addEventListener('click', function() {
    var output = '+';
    // console.log(output);
    btnPress(output);
  });
  document.getElementById('num-').addEventListener('click', function() {
    var output = '-';
    // console.log(output);
    btnPress(output);
  });
}
function rollBarListeners() {
  document.getElementById('clrBtn').addEventListener('click', function() {
    // console.log('clear');
    clear();
  });
  document.getElementById('rollBtn').addEventListener('click', function() {
    // console.log('roll');
    roll();
  });
}

var dispInG = [];
var countInG = 0;

function dice(dn) {
  var diceCount = dn.replace('d', '');
  diceRoll = Math.floor((Math.random() * diceCount) + 1);
  return diceRoll;
}

function btnPress(input) {
  var dArray = ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2'];
  var output = '';

  if (document.getElementById('dispIn').innerHTML == '') {
     // first input
    dispInG[countInG] = input;
    output = dispInG[countInG];
    countInG++;

  } else if (isNaN(dispInG[countInG - 1]) == false && isNaN(input) == false) {
    // num, followed by num
    countInG--;
    dispInG[countInG] = (dispInG[countInG] * 10) + parseInt(input);
    output = input;
    countInG++;

  } else if (isNaN(dispInG[countInG - 1]) == false && dArray.indexOf(input) > -1) {
    // num, followed by dn
    countInG--;
    var temp = dispInG[countInG];
    for (var i = 0; i < temp; i++) {
      dispInG[countInG] = input;
      countInG++;
      dispInG[countInG] = '+'
      countInG++;
    }
    countInG--;
    dispInG.length--;
    output = input;

  } else if (dArray.indexOf(dispInG[countInG - 1]) > -1 &&
              (isNaN(input) == false || dArray.indexOf(input) > -1)) {
    // dn, followed by dn or num
    //do nothing

  } else {
    dispInG[countInG] = input;
    output = dispInG[countInG];
    countInG++;
  }
  document.getElementById('dispIn').innerHTML += output;
  // console.log(dispInG);
}

function sub(str) {
  var dArray = ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2'];
  for (var i = 0; i < 8; i++) {
    var dValue = dArray[i];
    for (var t = true; t != false; ) {
      str = str.replace(dValue, '(' + dice(dValue) + ')');
      t = str.includes(dValue);
      // console.log(str);
    }
  }
  return str;
}

function arrayToEqu(arr) {
  var str = arr.toString();
  var equ = str.replace(/,/g, '');
  return equ;
}

function roll() {
  var equ = arrayToEqu(dispInG);
  equ = sub(equ);
  var eva = eval(equ);
  var output =  eva + ' [' + equ + ']' + '<br>' + document.getElementById('dispOut').innerHTML;
  document.getElementById('dispOut').innerHTML = output;
}
function clear() {
  if (document.getElementById('dispIn').innerHTML == '') {
    document.getElementById('dispOut').innerHTML = ''
    countInG = 0;
    dispInG.length = 0;
  } else {
    document.getElementById('dispIn').innerHTML = '';
    countInG = 0;
    dispInG.length = 0;
  }
}
