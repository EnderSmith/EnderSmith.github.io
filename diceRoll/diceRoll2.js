// global variables
function Context(preloadedSaveItems) {
  return {
    diceNameArray: ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2'],
    sumArray: [],
    sumIndex: 0,
    preloadedSaveItems: preloadedSaveItems,
    listeners: {},

    alert: function(message) {
      alert(message);
    },
    confirm: function(message) {
      return confirm(message);
    },
    storage: function() {
      return localStorage;
    },
    elem: function(id) {
      return document.getElementById(id);
    },
    attach: function(id, event, action) {
      var key = id + '_' + event;
      this.listeners[key] = new Listener(id, event, action, this);
    },
    detach: function(id, event) {
      var key = id + '_' + event;
      var listener = this.listeners[key];
      if (listener) {
        this.listeners[key].detach();
      }
    },
    style: function(id) {
      return this.elem(id).style;
    },
    html: function(id, html, append) {
      var element = this.elem(id);
      if (arguments.length === 1) {
        return element.innerHTML;
      } else {
        if (append) {
          element.innerHTML += html;
        } else {
          element.innerHTML = html;
        }
      }
    },
    eval: function(target, onerror) {
      if (onerror) {
        try {
          return eval(target);
        } catch (ex) {
          onerror(ex);
        }
      } else {
        return eval(target);
      }
    },
    hide: function(id) {
      this.style(id).display = 'none';
    },
    show: function(id) {
      this.style(id).display = '';
    },
    swap: function(id, swapId) {
      if (this.style(id).display === 'none') {
        this.show(id);
      } else {
        this.hide(id);
      }
      if (arguments.length > 1) {
        if (this.style(id).display === '') {
          this.hide(swapId);
        } else {
          this.show(swapId);
        }
      }
    },
    deleteElem: function(id, event) {
      var elem = this.elem(id);
      elem.parentNode.removeChild(elem);
      if (arguments < 1) {
        this.detach(id, event);
      }
    },
    createElem: function(tag, id, className, parentId) {
      var created = document.createElement(tag);
      created.id = id;
      created.className = className;
      var parent = this.elem(parentId);
      parent.appendChild(created);
    },
  };
}

function Listener(id, event, action, context) {
  this.id = id;
  this.context = context;
  this.event = 'click';
  this.action = action;
  this.exec = function() {
    return this.action();
  };
  this.detach = function() {
    this.context.elem(id).removeEventListener(this.event, this.exec.bind(this));
  };
  this.context.elem(id).addEventListener(this.event, this.exec.bind(this));
}

function SaveItem(id, name, rollArray) {
  return {
    "id": id,
    "name": name,
    "rollArray": rollArray
  };
}
function Addend() {
  this.count = 0;
  this.dn = '';
  this.negative = false;
};

function App(context) {
  return {
    context: context,

    run: function() {
      this.addRollBarListeners();
      this.addCalculatorListeners();
      this.addUserSaveButtonListener();
      this.clearMemory(false);
      this.initializeMemory();
      this.toggleMenu();
      this.userSaveButtonCheckDisplay();
    },

    // functions for adding listeners
    addCalculatorListeners: function() {
      this.addNumberKeyListeners();
      this.addDiceKeyListeners();
      this.addOperatorKeyListeners();
    },
    addNumberKeyListeners: function() {
      for (var i = 0; i < 10; i++) {
        var id = "num" + i;
        this.context.attach(id, 'click', this.keypadPress.bind(this, i));
      }
    },
    addDiceKeyListeners: function() {
      for (var i = 0; i < 8; i++) {
        var id = this.context.diceNameArray[i];
        this.context.attach(id, 'click', this.keypadPress.bind(this, id));
      }
    },
    addOperatorKeyListeners: function() {
      this.context.attach('num+', 'click', this.keypadPress.bind(this, '+'));
      this.context.attach('num-', 'click', this.keypadPress.bind(this, '-'));
    },
    addRollBarListeners: function() {
      this.context.attach('clrBtn', 'click', this.clearDisplay.bind(this));
      this.context.attach('rollBtn', 'click', this.rollPress.bind(this));
      this.context.attach('toggleMenuBtn', 'click', this.toggleMenu.bind(this));
    },
    addUserSaveButtonListener: function() {
      this.context.attach('userSaveButton', 'click', this.userSaveButtonPress.bind(this));
    },
    addSaveItemListeners: function(id, rollArray) {
      this.context.attach(id, 'click', this.saveItemPress.bind(this, id, rollArray));
      this.context.attach('mod_' + id, 'click', this.comingSoon.bind(this));
      this.context.attach('delete_' + id, 'click', this.deleteSaveItem.bind(this, id));
    },

    // memory
    clearMemory: function(run) {
      if (run) {
        this.context.storage().removeItem('visited');
        this.context.storage().removeItem('saved');
        this.context.storage().removeItem('savedMenu');
        return JSON.stringify(this.context.storage());
      }
    },
    initializeMemory: function() {
      if (this.context.storage().visited) {
        this.loadSaved();
      } else {
        this.context.storage().visited = true;
        this.restoreDefaultSaveItems();
        this.loadSaved();
      }
      return this.context.storage().visited;
    },
    restoreDefaultSaveItems: function() {
      var saved = this.context.preloadedSaveItems;
      this.context.storage().saved = JSON.stringify(saved);
      return saved;
    },
    loadSaved: function() {
      var saved = JSON.parse(this.context.storage().saved);
      var saved_props = (Object.getOwnPropertyNames(saved));
      for (var i = 0; i < saved_props.length; i++) {
        var prop = saved[saved_props[i]];
        var id = prop.id;
        var name = prop.name;
        var rollArray = prop.rollArray;
        this.createSaveItem(id, name, rollArray);
      }
    },
    createSaveItem: function(id, name, rollArray) {
      this.createSaveItemStorage(id, name, rollArray);
      this.createSaveItemElement(id, name, rollArray);
      this.addSaveItemListeners(id, rollArray);
    },
    createSaveItemStorage: function(id, name, rollArray) {
      var saved = JSON.parse(localStorage.saved);
      saved[id] = new SaveItem(id, name, rollArray);
      this.context.storage().saved = JSON.stringify(saved);
      return saved[id];
    },
    createSaveItemElement: function(id, name, rollArray) {
      var rowId = 'row_' + id;
      this.context.createElem('div', rowId, 'row', 'saveItems');
      this.context.createElem('button', id, 'btn saveItem col-m-8 col-t-8 col-8', rowId);
      this.context.html(id, name + ': ' + this.sumArrayToDisplay(rollArray));
      this.context.createElem('button', 'mod_' + id, 'btn saveItem col-m-2 col-t-2 col-2', rowId);
      this.context.html('mod_' + id, 'mod');
      this.context.createElem('button', 'delete_' + id, 'btn delete saveItem col-m-2 col-t-2 col-2', rowId);
      this.context.html('delete_' + id, 'X');
    },
    deleteSaveItem: function(id) {
      var saved = JSON.parse(this.context.storage().saved);
      var name = saved[id].name;
      if (this.context.confirm('Are you sure you want to delete "' + name + '"?')) {
        this.deleteSaveItemStorage(id);
        this.deleteSaveItemElementAndListeners(id);
      }
    },
    deleteSaveItemStorage: function(id) {
      var saved = JSON.parse(this.context.storage().saved);
      delete saved[id];
      this.context.storage().saved = JSON.stringify(saved);
      return saved;
    },
    deleteSaveItemElementAndListeners: function(id) {
      this.context.deleteElem(id, 'click');
      this.context.deleteElem('mod_' + id, 'click');
      this.context.deleteElem('delete_' + id, 'click');
      this.context.deleteElem('row_' + id);
    },

    // data manipulation
    addendChange: function(input, targetAddend, first) {
      if (first) { targetAddend = new Addend; }
      var output = targetAddend;
      if (this.context.diceNameArray.indexOf(input) > -1) {
        output.dn = input;
      } else if (!isNaN(input)) {
        output.count = input;
      } else if (input == '-') {
        output.negative = true;
      } else if (input == '+') {
        output.negative = false;
      }
      return output;
    },
    addendToDisplay: function(addend) {
      var display;
      if (addend.dn === '') {
        display = addend.count;
      } else {
        display = addend.count + addend.dn;
      }
      if (addend.negative === true) {
          display = "-" + display;
      }
      return display;
    },
    sumArrayToDisplay: function(sumArray) {
      var display = this.addendToDisplay(sumArray[0]);
      for (var i = 1; i < sumArray.length; i++) {
        if (sumArray[i].negative === false) {
          display += '+'
        }
        display += this.addendToDisplay(sumArray[i]);
      }
      return display;
    },
    addendExpand: function(addend) {
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
    },
    sumArrayExpand: function(sumArray) {
      var expanded = '';
      for (var i = 0; i < sumArray.length; i++) {
        expanded += this.addendExpand(sumArray[i]);
      }
      if (expanded.indexOf('+') == 0) { expanded = expanded.slice(1); }
      return expanded;
    },
    randomIntByDice: function(dn) {
      var numberOfSides = dn.replace('d', '');
      var randomInt = Math.floor((Math.random() * numberOfSides) + 1);
      return randomInt;
    },
    subRandomIntForDice: function(string) {
      for (var i = 0; i < this.context.diceNameArray.length; i++) {
        var currentDice = this.context.diceNameArray[i];
        for (var t = true; t !=false; t = string.includes(currentDice) ) {
          string = string.replace(currentDice, '(' + this.randomIntByDice(currentDice) + ')');
        }
      }
      return string;
    },

    // functions for displaying data
    toggleMenu: function() {
      this.context.swap('savedMenu', 'calculator');
      if (this.context.style('calculator').display === '') {
        this.context.html('toggleMenuBtn', 'saved');
      } else {
        this.context.html('toggleMenuBtn', 'calc');
      }
    },
    clearDisplay: function(override) {
      if (this.context.html('dispIn') === '' || override === 'dispOut') {
        this.context.html('dispOut', '', false);
        this.clearSumArray();
        this.userSaveButtonCheckDisplay();
      } else if (this.context.html('dispIn') !== '' || override === 'dispIn') {
        this.context.html('dispIn', '', false);
        this.clearSumArray();
        this.userSaveButtonCheckDisplay();
      }
      return '';
    },
    clearSumArray: function() {
      this.context.sumIndex = 0;
      this.context.sumArray.length = 0;
      var testOutput = [this.context.sumArray.length, this.context.sumIndex];
      return testOutput.toString();
    },
    userSaveButtonCheckDisplay: function() {
      if (this.context.html('dispIn') === '') {
        this.context.hide('userSaveButtonHolder');
      } else {
        this.userSaveButtonText()
        this.context.show('userSaveButtonHolder');
      }
    },
    userSaveButtonText: function() {
      var userSaveText = this.sumArrayToDisplay(this.context.sumArray);
      this.context.html('userSaveButton', 'save: ' + userSaveText);
    },

    // main
    keypadPress: function(input) {
      // if sumArray is empty
      if (this.context.sumArray.length === 0) {
        this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], true);
        if (this.context.diceNameArray.indexOf(input) > -1) {
          this.context.sumArray[0].count++;
        }
        // else if input is a dice...
      } else if (this.context.diceNameArray.indexOf(input) > -1) {
        // ...and input is not the same dice as current addend dice
        if (input !== this.context.sumArray[this.context.sumIndex].dn && '' != this.context.sumArray[this.context.sumIndex].dn) {
          this.context.sumIndex++
          this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], true);
          this.context.sumArray[this.context.sumIndex].count++;
          // ...and input is the same as current addend dice
        } else if (input === this.context.sumArray[this.context.sumIndex].dn) {
          this.context.sumArray[this.context.sumIndex].count++;
          // ...and current addend has a count, but no dice
        } else if (0 !== this.context.sumArray[this.context.sumIndex].count) {
          this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], false);
          // ...and current addend has no count, and no dice
        } else if (0 === this.context.sumArray[this.context.sumIndex].count) {
          this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], false);
          this.context.sumArray[this.context.sumIndex].count++;
        }
        // else if input is a number...
      } else if (!isNaN(input)) {
        // ...and current addend has dice
        if ('' !== this.context.sumArray[this.context.sumIndex].dn) {
          this.context.sumIndex++;
          this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], true);
          // ...and current addend has no dice
        } else if ('' === this.context.sumArray[this.context.sumIndex].dn) {
          this.context.sumArray[this.context.sumIndex].count = (10 * parseInt(this.context.sumArray[this.context.sumIndex].count)) + parseInt(input);
        }
        // else if input is + or - sign...
      } else if (input === '+' || input === '-' ) {
          this.context.sumIndex++;
          this.context.sumArray[this.context.sumIndex] = this.addendChange(input, this.context.sumArray[this.context.sumIndex], true);
      }
      var output = this.sumArrayToDisplay(this.context.sumArray);
      this.context.html('dispIn', output, false);
      this.userSaveButtonCheckDisplay();
      return output;
    },
    saveItemPress: function(id, rollArray) {
      var saved = JSON.parse(this.context.storage().saved);
      this.context.sumArray = saved[id].rollArray;
      this.context.sumIndex = this.context.sumArray.length - 1;
      var output = this.sumArrayToDisplay(rollArray);
      this.context.html('dispIn', output, false);
      this.userSaveButtonCheckDisplay();
    },
    userSaveButtonPress: function() {
      var idNumber = (Object.keys(JSON.parse(this.context.storage().saved))).length + 1;
      var name = prompt('Save ' + this.sumArrayToDisplay(this.context.sumArray) + ' as:', 'roll ' + idNumber);
      if (name == null) {
        return;
      }
      if (name === '') {
        this.context.alert('Oops! You need to enter a name!');
        return;
      }
      var id = 'saveItem' + idNumber;
      this.createSaveItem(id, name, this.context.sumArray);
    },
    rollPress: function(sumArray) {
      var sumArrayLocal;
      if (arguments.length === 0) {
        sumArrayLocal = this.context.sumArray;
      } else {
        sumArrayLocal = sumArray;
      }
      var equation = this.sumArrayExpand(sumArrayLocal);
      equation = this.subRandomIntForDice(equation);
      var evaluation = this.context.eval(equation);
      var output = evaluation + ' [' + equation + '] ' + '<br><br>' + document.getElementById('dispOut').innerHTML;
      this.context.html('dispOut', output, false);
      return output;
    },

    // incomplete
    comingSoon: function() {
      this.context.alert('this feature is coming soon!');
    }
  };
}
