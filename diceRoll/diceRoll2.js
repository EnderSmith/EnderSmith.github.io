document.addEventListener('DOMContentLoaded', function() {
  addRollBarListeners();
  printToInnerHTML('calcHolder', content.calculator, true);
  addCalculatorListeners();
  runTests(true);
  simulateFirstVisit(true);
  checkMemory();

  // new SaveRoll('maul', 'maul', '2d6', '');
});

// global variables
var g = {
  diceNameArray: ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2', 'd1'],
  sumArray: [],
  sumIndex: 0,
  contentStatus: content.calculator
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
function addCalculatorListeners() {
  addNumberKeyListeners();
  addDiceKeyListeners();
  addOperatorKeyListeners();
}
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
    roll(g.sumArray);
  });
  document.getElementById('savedBtn').addEventListener('click', function() {
    toggleSaved();
  })
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
function arrayToEquation(sumArray) {
  var equation = sumArray.join('');
  return equation;
}

// functions for displaying data
function toggleSaved() {
  if (g.contentStatus == content.calculator) {
    printToInnerHTML('calcHolder', content.savedMenu, true);
    printToInnerHTML('savedBtn', 'calc', true);
    addSaveRollListeners();
    content.savedMenu = document.getElementById('calcHolder').innerHTML;
    g.contentStatus = content.saved;
  } else if (g.contentStatus == content.saved) {
    printToInnerHTML('calcHolder', content.calculator, true);
    printToInnerHTML('savedBtn', 'saved', true);
    addCalculatorListeners();
    g.contentStatus = content.calculator;
  }
}
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
  g.sumIndex = 0;
  g.sumArray.length = 0;
  var testOutput = [g.sumArray.length, g.sumIndex];
  return testOutput;
}


// functions for taking input
function key_first(input) {
  g.sumArray[g.sumIndex] = input;
  g.sumIndex ++;
  var testOutput = [g.sumArray, g.sumIndex];
  return testOutput;
}
function key_numberAfterNumber(input) {
  g.sumIndex --;
  g.sumArray[g.sumIndex] = (g.sumArray[g.sumIndex] * 10) + parseInt(input);
  g.sumIndex ++;
  var testOutput = [g.sumArray, g.sumIndex];
  return testOutput;
}
function key_diceAfterNumber(input) {
  g.sumIndex--;
  var multiplier = g.sumArray[g.sumIndex];
  for (var i = 0; i < multiplier; i++) {
    g.sumArray[g.sumIndex] = input;
    g.sumIndex++;
    g.sumArray[g.sumIndex] = '+';
    g.sumIndex++;
  }
  g.sumIndex--;
  g.sumArray.length--; // this might go wrong
  var testOutput = [multiplier, g.sumIndex];
  return testOutput;
}
function key_operator(input) {
  g.sumArray[g.sumIndex] = input;
  g.sumIndex++;
  var testOutput = [g.sumArray[g.sumIndex-1], g.sumIndex];
  return testOutput;
}

// functions for evaluating logic
function keypadPress(input) {
  var output = input;
  if (document.getElementById('dispIn').innerHTML == '') {
    key_first(input);
  } else if (isNaN(g.sumArray[g.sumIndex - 1]) == false && isNaN(input) == false) {
    key_numberAfterNumber(input);
  } else if (isNaN(g.sumArray[g.sumIndex - 1]) == false && g.diceNameArray.indexOf(input) > -1) {
    key_diceAfterNumber(input);
  } else if (g.diceNameArray.indexOf(g.sumArray[g.sumIndex - 1]) > -1 &&
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
function roll(sumArray) {
  var equation = arrayToEquation(sumArray);
  equation = subRandomIntForDice(equation);
  var evaluation = eval(equation);
  var output = evaluation + ' [' + equation + '] ' + '<br><br>' + document.getElementById('dispOut').innerHTML;
  printToInnerHTML('dispOut', output, true);
  return output;
}

// keyPress Refactor
function Addend() {
  this.count = 0;
  this.dn = '';
  this.negative = false;
}
function addendToDisplay(addend) {
  var display;
  if (isNaN(addend.count)) {
    return display = '';
  } else if (g.diceNameArray.indexOf(addend.dn) == -1) {
    display = addend.count;
  } else {
    display = addend.count + addend.dn;
  }
  if (addend.negative == true) {
      display = "-" + display;
  }
  // console.log(display);
  return display;
}

function addendChange(input, addendTarget, newTF) {
  if (newTF) { addendTarget = new Addend; }
  var output = addendTarget;
  if (g.diceNameArray.indexOf(input) > -1) {
    output.dn = input;
  } else if (!isNaN(input)) {
    output.count = input;
  } else if (input == '-') {
    output.negative = true;
  } else if (input == '+') {
    output.negative = false;
  }
  // console.log(output);
  return output;
}

function keypadPresse(input) {
  // if sumArray is empty
  if (g.sumArray.length == 0) {
    g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
    // else if input is a dice...
  } else if (g.diceNameArray.indexOf(input) > -1) {
    // ...and input is not the same dice as current addend dice
    if (input != g.sumArray[g.sumIndex].dn && '' != g.sumArray[g.sumIndex].dn) {
      g.sumIndex++
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
      g.sumArray[g.sumIndex].count++;
      // ...and input is the same as current addend dice
    } else if (input == g.sumArray[g.sumIndex].dn) {
      g.sumArray[g.sumIndex].count++;
      // ...and current addend has a count, but no dice
    } else if (0 != g.sumArray[g.sumIndex].count) {
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], false);
      // ...and current addend has no count, and no dice
    } else if (0 == g.sumArray[g.sumIndex].count) {
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], false);
      g.sumArray[g.sumIndex].count++;
    }
    // else if input is a number...
  } else if (!isNaN(input)) {
    // ...and current addend has dice
    if ('' != g.sumArray[g.sumIndex].dn) {
      g.sumIndex++;
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
      // ...and current addend has no dice
    } else if ('' == g.sumArray[g.sumIndex].dn) {
      g.sumArray[g.sumIndex].count = (10 * g.sumArray[g.sumIndex].count) + input;
    }
    // else if input is + or - sign...
  } else if (input == '+' || input == '-' ) {
      g.sumIndex++;
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
  }
  console.log(g.sumArray);
  var testOut = addendToDisplay(g.sumArray[g.sumIndex]);
  return testOut;
}

 // save
function checkMemory() {
  if (localStorage.visited) {
    loadMemory();
    return;
  } else {
    localStorage.visited = true;
    demoSave();
    loadMemory();
    return;
  }
}
function loadMemory() {
  var savedMenu = "<div id='savedMenu'>";
  var saved = JSON.parse(localStorage.saved);
  var saved_props = (Object.getOwnPropertyNames(saved));
    for (var i = 0; i < saved_props.length; i++) {
      savedMenu += "<div class='row' id='row_" + saved[saved_props[i]].id + "'>" +
                      "<button class='btn saveItem col-m-8 col-t-8 col-8' id='" +
                        saved[saved_props[i]].id + "'>" +
                          saved[saved_props[i]].name + ": " + saved[saved_props[i]].roll +
                      "</button>" +
                      "<button class='btn modify saveItem col-m-2 col-t-2 col-2' id='" +
                        "mod_" + saved[saved_props[i]].id + "'>" +
                        "mod" +
                      "</button>" +
                      "<button class='btn delete saveItem col-m-2 col-t-2 col-2' id='" +
                        "delete_" + saved[saved_props[i]].id + "'>" +
                        "X" +
                      "</button>" +
                    "</div>";
    }
    savedMenu += "</div>";
    content.savedMenu = savedMenu;
}

function addSaveRollListeners() {
  var saved = JSON.parse(localStorage.saved);
  var saved_props = (Object.getOwnPropertyNames(saved));
    for (var i = 0; i < saved_props.length; i++) {
      new SaveRollListeners(saved[saved_props[i]].id, saved[saved_props[i]].roll);
    }
}
function SaveRollListeners(id, roll) {
  document.getElementById(id).addEventListener('click', function() {
    keypadPress(roll);
  });
  document.getElementById('mod_' + id).addEventListener('click', function() {return});
  document.getElementById('delete_' + id).addEventListener('click', function() {
    deleteRoll(id);
  });
}

function demoSave() {
  var saved = preloaded;
  localStorage.saved = JSON.stringify(saved);
}

function SaveRoll(id, name, roll, mod) {
  var copyOfSaved = JSON.parse(localStorage.saved);
  copyOfSaved[id] = {
    "id": id,
    "name": name,
    "roll": roll,
    "mod": mod
  }
  localStorage.saved = JSON.stringify(copyOfSaved);
  loadMemory();
  return copyOfSaved[id];
}

function deleteRoll(id) {
  var copyOfSaved = JSON.parse(localStorage.saved);
  delete copyOfSaved[id];
  localStorage.saved = JSON.stringify(copyOfSaved);
  document.getElementById('row_' + id).style.display = "none";
  loadMemory();
  return copyOfSaved;
}

function simulateFirstVisit(runTrue) {
  if (runTrue) {
    localStorage.removeItem('visited');
    localStorage.removeItem('saved');
    localStorage.removeItem('savedMenu');
  } else {return;}
}
