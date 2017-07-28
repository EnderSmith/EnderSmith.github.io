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

function dice(dn) {
  var diceCount = dn.replace('d', '');
  diceRoll = Math.floor((Math.random() * diceCount) + 1);
  return diceRoll;
}
function sub(str) {
  var dArray = ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2'];
  for (var i = 0; i < 8; i++) {
    var dValue = dArray[i];
    for (var t = true; t != false; console.log(t)) {
      str = str.replace(dValue, '(' + dice(dValue) + ')');
      t = str.includes(dValue);
      // console.log(str);
    }
  }
  for (var i = 0; i < 10; i++) {
    for (var t = true; t != false; console.log(t)) {
      var noMult = i + '(';
      var mult = i + '*(';
      str = str.replace(noMult, mult);
      t = str.includes(i + '(');
      // console.log(str);
    }
  }
  return str;
}

function btnPress(input) {
  document.getElementById('dispIn').innerHTML += input;
}
function roll() {
  var equ = document.getElementById('dispIn').innerHTML;
  equ = sub(equ);
  var eva = eval(equ);
  var output = '[' + equ + '] ' + eva + '<br>' + document.getElementById('dispOut').innerHTML;
  document.getElementById('dispOut').innerHTML = output;
}
function clear() {
  document.getElementById('dispIn').innerHTML = '';
}
