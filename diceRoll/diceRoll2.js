document.addEventListener('DOMContentLoaded', function() {
  addNumberKeyListeners();
  addDiceKeyListeners();
  addOperatorKeyListeners();
  addRollBarListeners();
  runTests(true);
});

// global variables
var g = {
  diceNameArray: ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2', 'd1'],
  inputArray: [],
  currentIndex: 0
}

// prototype listeners
function NumberKeyListener(id) {
  document.getElementById(id).addEventListener('click', function() {
    var output = id.replace('num', '');
    keypadPress(output);
  });
}
function DiceKeyListener(id) {
  document.getElementById(id).addEventListener('click', function() {
    var output = id;
    keypadPress(output);
  });
}

// functions for adding listeners
function addNumberKeyListeners() {
  for (var i = 0; i < 10; i++) {
    var id = "num" + i;
    new NumberKeyListener(id);
  }
}
function addDiceKeyListeners() {
  for (var i = 0; i < 8; i++) {
    var id = g.diceNameArray[i];
    new DiceKeyListener(id);
  }
}
function addOperatorKeyListeners() {
  document.getElementById('num+').addEventListener('click', function() {
    var output = '+';
    keypadPress(output);
  });
  document.getElementById('num-').addEventListener('click', function() {
    var output = '-';
    keypadPress(output);
  });
}
function addRollBarListeners() {
  document.getElementById('clrBtn').addEventListener('click', function() {
    clearScreen();
  });
  document.getElementById('rollBtn').addEventListener('click', function() {
    roll(g.inputArray);
  });
}

// -- testable functions --

// functions for manipulating data i/o
function randomIntByDice(dn) {
  var numberOfSides = dn.replace('d', '');
  var randomInt = Math.floor((Math.random() * numberOfSides) + 1);
  return randomInt;
}
function subRandomIntForDice(str) {
  for (var i = 0; i < g.diceNameArray.length; i++) {
    var currentDice = g.diceNameArray[i];
    for (var t = true; t !=false; t = str.includes(currentDice) ) {
      str = str.replace(currentDice, '(' + randomIntByDice(currentDice) + ')');
    }
  }
  return str;
}
function arrayToEquation(inputArray) {
  var equation = inputArray.join('');
  return equation;
}

// functions for displaying data
function printToInnerHTML(id, str, replaceTF) {
  if (replaceTF != true) {
    document.getElementById(id).innerHTML += str;
  } else {
    document.getElementById(id).innerHTML = str;
  }
  var testOutput = document.getElementById(id).innerHTML;
  return testOutput;
}
function clearScreen(override) {
  if (document.getElementById('dispIn').innerHTML == '' || override == 'dispOut') {
    printToInnerHTML('dispOut', '', true);
    clearInputArray();
    var testOutput = document.getElementById('dispOut').innerHTML;
    return testOutput;
  } else if (document.getElementById('dispIn').innerHTML != '' || override == 'dispIn') {
    printToInnerHTML('dispIn', '', true);
    clearInputArray();
    var testOutput = document.getElementById('dispIn').innerHTML;
    return testOutput;
  }
}
function clearInputArray() {
  g.currentIndex = 0;
  g.inputArray.length = 0;
  var testOutput = [g.inputArray.length, g.currentIndex];
  return testOutput;
}


// functions for taking input
function key_first(input) {
  g.inputArray[g.currentIndex] = input;
  g.currentIndex ++;
  var testOutput = [g.inputArray, g.currentIndex];
  return testOutput;
}
function key_numberAfterNumber(input) {
  g.currentIndex --;
  g.inputArray[g.currentIndex] = (g.inputArray[g.currentIndex] * 10) + parseInt(input);
  g.currentIndex ++;
  var testOutput = [g.inputArray, g.currentIndex];
  return testOutput;
}
function key_diceAfterNumber(input) {
  g.currentIndex--;
  var multiplier = g.inputArray[g.currentIndex];
  for (var i = 0; i < multiplier; i++) {
    g.inputArray[g.currentIndex] = input;
    g.currentIndex++;
    g.inputArray[g.currentIndex] = '+';
    g.currentIndex++;
  }
  g.currentIndex--;
  g.inputArray.length--; // this might go wrong
  var testOutput = [multiplier, g.currentIndex];
  return testOutput;
}
function key_operator(input) {
  g.inputArray[g.currentIndex] = input;
  g.currentIndex++;
  var testOutput = [g.inputArray[g.currentIndex-1], g.currentIndex];
  return testOutput;
}

// functions for evaluating logic
function keypadPress(input) {
  var output = input;
  if (document.getElementById('dispIn').innerHTML == '') {
    key_first(input);
  } else if (isNaN(g.inputArray[g.currentIndex - 1]) == false && isNaN(input) == false) {
    key_numberAfterNumber(input);
  } else if (isNaN(g.inputArray[g.currentIndex - 1]) == false && g.diceNameArray.indexOf(input) > -1) {
    key_diceAfterNumber(input);
  } else if (g.diceNameArray.indexOf(g.inputArray[g.currentIndex - 1]) > -1 &&
              (isNaN(input) == false || g.diceNameArray.indexOf(input) > -1)) {
    // key_diceAfterDice or key_numberAfterDice
    output = '';
  } else {
    key_operator(input);
  }
  printToInnerHTML('dispIn', output);
  var testOutput = [input, output];
  return testOutput;
}

// main
function roll(inputArray) {
  var equation = arrayToEquation(inputArray);
  equation = subRandomIntForDice(equation);
  var evaluation = eval(equation);
  var output = evaluation + ' [' + equation + '] ' + '<br>' + document.getElementById('dispOut').innerHTML;
  printToInnerHTML('dispOut', output, true);
  return output;
}
