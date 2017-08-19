document.addEventListener('DOMContentLoaded', function() {
  addRollBarListeners();
  printToInnerHTML('calcHolder', content.calculator, true);
  addCalculatorListeners();
  simulateFirstVisit(true);
  checkMemory();
  // new SaveItem('maul', 'maul', '2d6');
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
function SaveItemListeners(id, rollArray) {
  document.getElementById(id).addEventListener('click', function() {
    var saved = JSON.parse(localStorage.saved);
    g.sumArray = saved[id].rollArray;
    g.sumIndex = g.sumArray.length - 1;
    var output = sumArrayToDisplay(rollArray);
    printToInnerHTML('dispIn', output, true);
  });
  document.getElementById('mod_' + id).addEventListener('click', function() {
    comingSoon();
    return;
  });
  document.getElementById('delete_' + id).addEventListener('click', function() {
    deleteSaveItem(id);
    return;
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
function addSaveItemListeners() {
  var saved = JSON.parse(localStorage.saved);
  var saved_props = (Object.getOwnPropertyNames(saved));
    for (var i = 0; i < saved_props.length; i++) {

      new SaveItemListeners(saved[saved_props[i]].id, saved[saved_props[i]].rollArray);
    }
}

// -- testable functions --

// memory
function SaveItem(id, name, rollArray) {
 var copyOfSaved = JSON.parse(localStorage.saved);
 copyOfSaved[id] = {
   "id": id,
   "name": name,
   "rollArray": rollArray
 }
 localStorage.saved = JSON.stringify(copyOfSaved);
 loadMemory();
 // SaveItemListeners(copyOfSaved[id].id, copyOfSaved[id].rollArray);
 return copyOfSaved[id];
}

function checkMemory() {
 if (localStorage.visited) {
   loadMemory();
 } else {
   localStorage.visited = true;
   restoreDefaultSaveItems();
   loadMemory();
 }
 return localStorage.visited;
}
function loadMemory() {
 var savedMenu = "<div id='savedMenu'>";
 var saved = JSON.parse(localStorage.saved);
 var saved_props = (Object.getOwnPropertyNames(saved));
   for (var i = 0; i < saved_props.length; i++) {
     savedMenu += "<div class='row' id='row_" + saved[saved_props[i]].id + "'>" +
                     "<button class='btn saveItem col-m-8 col-t-8 col-8' id='" +
                       saved[saved_props[i]].id + "'>" +
                         saved[saved_props[i]].name + ": " + sumArrayToDisplay(saved[saved_props[i]].rollArray) +
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
   savedMenu += "<button class='btn new saveItem col-m-12 col-t-12 col-12' id='newSave'>+</button></div>";

   content.savedMenu = savedMenu;
   return savedMenu;
}
function restoreDefaultSaveItems() {
 var saved = preloaded;
 localStorage.saved = JSON.stringify(saved);
 return saved;
}
function deleteSaveItem(id, testTF) {
 var copyOfSaved = JSON.parse(localStorage.saved);
 if (testTF || confirm('Are you sure you want to delete "' + copyOfSaved[id].name + '"?')) {
   delete copyOfSaved[id];
   localStorage.saved = JSON.stringify(copyOfSaved);
   if (g.contentStatus == content.saved) {
        document.getElementById('row_' + id).style.display = "none";
   }
   loadMemory();
   return copyOfSaved;
 } else {
   return copyOfSaved;
 }
}
function simulateFirstVisit(runTF) {
 if (runTF) {
   localStorage.removeItem('visited');
   localStorage.removeItem('saved');
   localStorage.removeItem('savedMenu');
   return JSON.stringify(localStorage);
 } else {return runTF;}
}

// data manipulation
function Addend() {
  this.count = 0;
  this.dn = '';
  this.negative = false;
}

function addendChange(input, targetAddend, newTF) {
  if (newTF) { targetAddend = new Addend; }
  var output = targetAddend;
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
function addendToDisplay(addend) {
  var display;
  if (addend.dn === '') {
    display = addend.count;
  } else {
    display = addend.count + addend.dn;
  }
  if (addend.negative === true) {
      display = "-" + display;
  }
  // console.log(display);
  return display;
}
function sumArrayToDisplay(sumArray) {
  var display = addendToDisplay(sumArray[0]);
  for (var i = 1; i < sumArray.length; i++) {
    if (sumArray[i].negative === false) {
      display += '+'
    }
    display += addendToDisplay(sumArray[i]);
  }
  return display;
}
function addendExpand(addend) {
  var expanded = '';
  if (addend.dn != '') {
    for (var i = 0; i < addend.count; i++) {
      if (addend.negative == false) { expanded += '+' + addend.dn; }
      else { expanded += '-' + addend.dn; }
    }
  } else {
    expanded = addend.count;
    if (addend.negative == false) { expanded = '+' + expanded; }
    else { expanded = '-' + expanded; }
  }
  return expanded;
}
function sumArrayExpand(sumArray) {
  var expanded = '';
  for (var i = 0; i < sumArray.length; i++) {
    expanded += addendExpand(sumArray[i]);
  }
  if (expanded.indexOf('+') == 0) { expanded = expanded.slice(1); }
  return expanded;
}
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
    addSaveItemListeners();
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
    clearSumArray();
    var testOutput = document.getElementById('dispOut').innerHTML;
    return testOutput;
  } else if (document.getElementById('dispIn').innerHTML != '' || override == 'dispIn') {
    printToInnerHTML('dispIn', '', true);
    clearSumArray();
    var testOutput = document.getElementById('dispIn').innerHTML;
    return testOutput;
  }
}
function clearSumArray() {
  g.sumIndex = 0;
  g.sumArray.length = 0;
  var testOutput = [g.sumArray.length, g.sumIndex];
  return testOutput;
}

// main
function keypadPress(input, testTF) {
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
function roll(sumArray) {
  var equation = sumArrayExpand(sumArray);
  equation = subRandomIntForDice(equation);
  var evaluation = eval(equation);
  var output = evaluation + ' [' + equation + '] ' + '<br><br>' + document.getElementById('dispOut').innerHTML;
  printToInnerHTML('dispOut', output, true);
  return output;
}

function comingSoon() {
  alert('this feature is coming soon!');
}
