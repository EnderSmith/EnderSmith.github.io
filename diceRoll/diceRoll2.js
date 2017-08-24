document.addEventListener('DOMContentLoaded', function() {
  var context = new Context(content, preloadedSaveItems);
  window.app = new App(context);
  window.app.run();
});

// global variables
function Context(content, preloadedSaveItems) {
  return {
    diceNameArray: ['d100', 'd20', 'd12', 'd10', 'd8', 'd6', 'd4', 'd2', 'd1'],
    sumArray: [],
    sumIndex: 0,
    preloadedSaveItems: preloadedSaveItems,
    content: content,
    contentStatus: content.calculator,
    listeners: {},
    //TODO: this needs to be depricated:
    userSaveButtonListenerExists: false,

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
    }
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

function Addend() {
  this.count = 0;
  this.dn = '';
  this.negative = false;
};

function SaveItem(id, name, rollArray) {
  return {
    "id": id,
    "name": name,
    "rollArray": rollArray
  };
}

function App(context) {
  return {
    context: context,

    run: function() {
      this.addRollBarListeners();
      //TODO: depricate this:
      this.context.html('calcHolder', this.context.content.calculator, false);
      this.addCalculatorListeners();
      this.simulateFirstVisit(true);
      this.checkMemory();
    },

    saveItemPress: function(id, rollArray) {
      var saved = JSON.parse(this.context.storage().saved);
      this.context.sumArray = saved[id].rollArray;
      this.context.sumIndex = this.context.sumArray.length - 1;
      var output = this.sumArrayToDisplay(rollArray);
      this.context.html('dispIn', output, false);
      //TODO: depricate:
      this.displayUserSaveButton();
    },
    userSaveButtonPress: function() {
      //TODO: running into a bug here, where the storage is undefined.
      var idNumber = (Object.keys(JSON.parse(this.context.storage.saved))).length + 1;
      var name = prompt('Save ' + this.sumArrayToDisplay(this.context.sumArray) + ' as:', 'roll' + idNumber);
      if (name == null) {
        return;
      }
      if (name === '') {
        this.context.alert('Oops! You need to enter a name!');
        return;
      }
      var id = 'saveItem' + idNumber;
      var output = new SaveItem(id, name, this.context.sumArray);
      return output;
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
      this.context.attach('rollBtn', 'click', this.roll.bind(this, this.context.sumArray));
      this.context.attach('savedBtn', 'click', this.toggleSaved.bind(this));
    },
    addSaveItemListeners: function() {
      var saved = JSON.parse(this.context.storage().saved);
      var saved_props = (Object.getOwnPropertyNames(saved));
      for (var i = 0; i < saved_props.length; i++) {
        var prop = saved[saved_props[i]];
        var id = prop.id;
        var rollArray = prop.rollArray;

        this.context.attach(id, 'click', this.saveItemPress.bind(this, id, rollArray));
        this.context.attach('mod_' + id, 'click', this.comingSoon.bind(this));
        this.context.attach('delete_' + id, 'click', this.deleteSaveItem.bind(this, id));
      }
    },
    addUserSaveButtonListener: function() {
      this.context.attach('userSaveButton', 'click', this.userSaveButtonPress.bind(this));
    },

    // memory
    storeSaveItem: function(id, name, rollArray) {
      var saved = JSON.parse(localStorage.saved);
      saved[id] = new SaveItem(id, name, rollArray);
      this.context.storage().saved = JSON.stringify(saved);
      //TODO: depricate:
      loadMemory();
      //TODO: depricate:
      toggleSaved(content.savedMenu);
      return this.saved[id];
    },
    checkMemory: function() {
      if (this.context.storage().visited) {
        this.loadMemory();
      } else {
        this.context.storage().visited = true;
        this.restoreDefaultSaveItems();
        this.loadMemory();
      }
      return this.context.storage().visited;
    },
    loadMemory: function() {
      var savedMenu = "<div id='savedMenu'>";
      var saved = JSON.parse(this.context.storage().saved);
      var saved_props = (Object.getOwnPropertyNames(saved));
        for (var i = 0; i < saved_props.length; i++) {
          var prop = saved[saved_props[i]];
          savedMenu += "<div class='row' id='row_" + prop.id + "'>" +
            "<button class='btn saveItem col-m-8 col-t-8 col-8' id='" +
            prop.id + "'>" +
            prop.name + ": " + this.sumArrayToDisplay(prop.rollArray) +
            "</button>" +
            "<button class='btn modify saveItem col-m-2 col-t-2 col-2' id='" +
            "mod_" + prop.id + "'>" +
            "mod" +
            "</button>" +
            "<button class='btn delete saveItem col-m-2 col-t-2 col-2' id='" +
            "delete_" + prop.id + "'>" +
            "X" +
            "</button>" +
            "</div>";
      }
      savedMenu += "<div id='userSaveButton'>" +
        "</div>" +
        "</div>";

      this.context.content.savedMenu = savedMenu;
      //TODO: depricate this:
      this.context.contentStatus = savedMenu;
      return savedMenu;
    },
    restoreDefaultSaveItems: function() {
      var saved = this.context.preloadedSaveItems;
      this.context.storage().saved = JSON.stringify(saved);
      return saved;
    },
    deleteSaveItem: function(id) {
      //TODO: depreicate:
      this.context.userSaveButtonListenerExists = false;
      var saved = JSON.parse(this.context.storage().saved);
      var name = saved[id].name;
      if (this.context.confirm('Are you sure you want to delete "' + name + '"?')) {
        delete saved[id];
        this.context.storage().saved = JSON.stringify(saved);
        //TODO: depreicate:
        loadMemory();
        //TODO: depreicate:
        toggleSaved(content.savedMenu);
        return saved;
      } else {
        return saved;
      }
    },
    simulateFirstVisit: function() {
       this.context.storage().removeItem('visited');
       this.context.storage().removeItem('saved');
       this.context.storage().removeItem('savedMenu');
       return JSON.stringify(this.context.storage());
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
    toggleSaved: function(override) {
      if (this.context.contentStatus === this.context.content.calculator || override === this.context.content.savedMenu) {
        this.context.html('calcHolder', content.savedMenu, false);
        this.context.html('savedBtn', 'calc', false);
        //TODO: depricate:
        this.addSaveItemListeners();
        this.context.content.savedMenu = this.context.html('calcHolder');
        this.context.contentStatus = this.context.content.savedMenu;
        this.displayUserSaveButton();
      } else if (this.context.contentStatus === this.context.content.savedMenu || override === this.context.content.calculator) {
        this.context.html('calcHolder', content.calculator, false);
        this.context.html('savedBtn', 'saved', false);
        this.addCalculatorListeners();
        this.context.userSaveButtonListenerExists = false;
        this.context.contentStatus = content.calculator;
      }
      return this.context.contentStatus;
    },
    clearDisplay: function(override) {
      if (this.context.html('dispIn') === '' || override === 'dispOut') {
        this.context.html('dispOut', '', false);
        this.clearSumArray();
      } else if (this.context.html('dispIn') !== '' || override === 'dispIn') {
        this.context.html('dispIn', '', false);
        this.clearSumArray();
      }
      return '';
    },
    clearSumArray: function() {
      this.context.sumIndex = 0;
      this.context.sumArray.length = 0;
      var testOutput = [this.context.sumArray.length, this.context.sumIndex];
      return testOutput.toString();
    },
    displayUserSaveButton: function() {
      // TODO: this method is based on material that needs to be depricated. there are bugs with it, but I think those are okay, since we need to rebuild this anyway
      if (this.context.contentStatus === content.savedMenu) {
        if (this.context.sumArray.length !== 0) {
          var saveText = this.sumArrayToDisplay(this.context.sumArray);
          this.context.html('userSaveButton', "<button class='btn new saveItem col-m-12 col-t-12 col-12' id='newSave'>save: " + saveText + "</button>", false);
          if (!this.context.userSaveButtonListenerExists) {
            this.addUserSaveButtonListener();
            this.context.userSaveButtonListenerExists = true;
          }
          return saveText;
        }
        this.context.html('userSaveButton', "", false);
      }
      return false;
    },

    // main
    keypadPress: function(input, testTF) {
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
      // console.log(this.context.sumArray);
      var output = this.sumArrayToDisplay(this.context.sumArray);
      this.context.html('dispIn', output, false);
      return output;
    },
    roll: function(sumArray) {
      var equation = this.sumArrayExpand(sumArray);
      equation = this.subRandomIntForDice(equation);
      var evaluation = eval(equation);
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
