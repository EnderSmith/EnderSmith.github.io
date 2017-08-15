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
    keypadPresse(output);
  });
}
function DiceKeyListener(id) {
  document.getElementById(id).addEventListener('click', function() {
    var output = id;
    keypadPresse(output);
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
    keypadPresse(output);
  });
  document.getElementById('num-').addEventListener('click', function() {
    var output = '-';
    keypadPresse(output);
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

// main
function roll(sumArray) {
  var equation = sumArrayToDisplay(sumArray);
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
function sumArrayToDisplay(sumArray) {
  var display = addendToDisplay(sumArray[0]);
  for (var i = 1; i < sumArray.length; i++) {
    if (sumArray[i].negative == false) {
      display += '+'
    }
    display += addendToDisplay(sumArray[i]);
  }
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

function keypadPresse(input, testTF) {
  // if sumArray is empty
  if (g.sumArray.length == 0) {
    g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
    if (g.diceNameArray.indexOf(input) > -1) { g.sumArray[0].count++; }
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
      g.sumArray[g.sumIndex].count = (10 * parseInt(g.sumArray[g.sumIndex].count)) + parseInt(input);
    }
    // else if input is + or - sign...
  } else if (input == '+' || input == '-' ) {
      g.sumIndex++;
      g.sumArray[g.sumIndex] = addendChange(input, g.sumArray[g.sumIndex], true);
  }
  // console.log(g.sumArray);
  var output = sumArrayToDisplay(g.sumArray);
  printToInnerHTML('dispIn', output, true);

  if (!testTF) { return output; }
  else { var testOut = addendToDisplay(g.sumArray[g.sumIndex]); return testOut; }

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
