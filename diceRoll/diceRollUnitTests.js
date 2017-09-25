document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});

function UnitTest(testName, testFunction) {
  return {
    testName: testName,
    testFunction: testFunction,
    report: null,
    result: null,
    passed: false,
    run: function(app) {
      try {
        this.result = this.testFunction(app, this);
        if (this.result === true) {
          this.passed = true;
          return true;
        }
      } catch(err) {
        this.report = 'ERROR: ' + err;
        this.passed = false;
        this.result = false;
      }
    }
  };
}

var assert = {
  ok: function(condition, message) {
    if (!condition) {
      message = message || 'Assertion failed';
      if (typeof Error !== 'undefined') {
        var err = Error.name + ': ' + message;
        throw err;
      }
      throw message;
    } else {
      return 'Assertion passed';
    }
  },
  compare: function(storedResult, expectedResult, message) {
    if (storedResult !== expectedResult) {
      message = message || 'Assertion failed';
      if (typeof Error !== 'undefined') {
        var err = Error.name + ': ' + message;
        throw err;
      }
      throw message;
    } else {
      return 'Assertion passed';
    }
  },
  compareArgs: function(storedResult, expectedResult, message) {
    storedResult = JSON.stringify(Array.from(storedResult));
    expectedResult = JSON.stringify(Array.from(expectedResult));
    if (storedResult !== expectedResult) {
      message = message || 'Assertion failed';
      if (typeof Error !== 'undefined') {
        var err = Error.name + ': ' + message;
        throw err;
      }
      throw message;
    } else {
      return 'Assertion passed';
    }
  },
}

function Stub(forcedOutput) {
  var info = {
    forcedOutput: forcedOutput,
    calls: [],
  }
  var functionStub = function() {
    info.calls.push({
      forcedOutput: info.forcedOutput,
      args: arguments,
    });
    return info.forcedOutput;
  }
  functionStub.info = info;
  return functionStub;
}

function testList() {
  return [
    new UnitTest('run()', function(app, test) {
      app.addRollBarListeners = new Stub();
      app.addCalculatorListeners = new Stub();
      app.addUserSaveButtonListener = new Stub();
      app.clearMemory = new Stub();
      app.initializeMemory = new Stub();
      app.toggleMenu = new Stub();
      app.userSaveButtonCheckDisplay = new Stub();
      app.run();
      assert.compare(app.addRollBarListeners.info.calls.length, 1, 'addRollBarListeners() not called');
      assert.compare(app.addCalculatorListeners.info.calls.length, 1, 'addCalculatorListeners() not called');
      assert.compare(app.addUserSaveButtonListener.info.calls.length, 1, 'addUserSaveButtonListener() not called');
      assert.compare(app.clearMemory.info.calls.length, 1, 'clearMemory() not called');
      assert.compare(app.initializeMemory.info.calls.length, 1, 'initializeMemory() not called');
      assert.compare(app.toggleMenu.info.calls.length, 1, 'toggleMenu() not called');
      assert.compare(app.userSaveButtonCheckDisplay.info.calls.length, 1, 'userSaveButtonCheckDisplay() not called');
      return true;
    }),
    new UnitTest('addCalculatorListeners()', function(app, test) {
      app.addNumberKeyListeners = new Stub();
      app.addDiceKeyListeners = new Stub();
      app.addOperatorKeyListeners = new Stub();
      app.addCalculatorListeners();
      assert.compare(app.addNumberKeyListeners.info.calls.length, 1, 'addNumberKeyListeners() not called');
      assert.compare(app.addDiceKeyListeners.info.calls.length, 1, 'addDiceKeyListeners() not called');
      assert.compare(app.addOperatorKeyListeners.info.calls.length, 1, 'addOperatorKeyListeners() not called');
      return true;
    }),
    new UnitTest('addNumberKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addNumberKeyListeners();
      assert.compare(app.keypadPress.bind.info.calls.length, 10, 'keypadPress.bind() not called 10 times');
      assert.compareArgs(app.keypadPress.bind.info.calls[0].args, [app, 0], 'keypadPress.bind() num0 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[1].args, [app, 1], 'keypadPress.bind() num1 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[2].args, [app, 2], 'keypadPress.bind() num2 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[3].args, [app, 3], 'keypadPress.bind() num3 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[4].args, [app, 4], 'keypadPress.bind() num4 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[5].args, [app, 5], 'keypadPress.bind() num5 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[6].args, [app, 6], 'keypadPress.bind() num6 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[7].args, [app, 7], 'keypadPress.bind() num7 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[8].args, [app, 8], 'keypadPress.bind() num8 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[9].args, [app, 9], 'keypadPress.bind() num9 unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 10, 'context.attach() not called 10 times');
      assert.compareArgs(app.context.attach.info.calls[0].args, ['num0', 'click', 'app.keypadPress.bind()'], 'context.attach() num0 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[1].args, ['num1', 'click', 'app.keypadPress.bind()'], 'context.attach() num1 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[2].args, ['num2', 'click', 'app.keypadPress.bind()'], 'context.attach() num2 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[3].args, ['num3', 'click', 'app.keypadPress.bind()'], 'context.attach() num3 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[4].args, ['num4', 'click', 'app.keypadPress.bind()'], 'context.attach() num4 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[5].args, ['num5', 'click', 'app.keypadPress.bind()'], 'context.attach() num5 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[6].args, ['num6', 'click', 'app.keypadPress.bind()'], 'context.attach() num6 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[7].args, ['num7', 'click', 'app.keypadPress.bind()'], 'context.attach() num7 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[8].args, ['num8', 'click', 'app.keypadPress.bind()'], 'context.attach() num8 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[9].args, ['num9', 'click', 'app.keypadPress.bind()'], 'context.attach() num9 unexpected arguments');
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addDiceKeyListeners();
      assert.compare(app.keypadPress.bind.info.calls.length, 8, 'keypadPress.bind() not called 8 times');
      assert.compareArgs(app.keypadPress.bind.info.calls[0].args, [app, 'd100'], 'keypadPress.bind() d100 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[1].args, [app, 'd20'], 'keypadPress.bind() d20 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[2].args, [app, 'd12'], 'keypadPress.bind() d12 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[3].args, [app, 'd10'], 'keypadPress.bind() d10 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[4].args, [app, 'd8'], 'keypadPress.bind() d8 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[5].args, [app, 'd6'], 'keypadPress.bind() d6 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[6].args, [app, 'd4'], 'keypadPress.bind() d4 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[7].args, [app, 'd2'], 'keypadPress.bind() d2 unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 8, 'context.attach() not called 8 times');
      assert.compareArgs(app.context.attach.info.calls[0].args, ['d100', 'click', 'app.keypadPress.bind()'], 'context.attach() d100 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[1].args, ['d20', 'click', 'app.keypadPress.bind()'], 'context.attach() d20 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[2].args, ['d12', 'click', 'app.keypadPress.bind()'], 'context.attach() d12 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[3].args, ['d10', 'click', 'app.keypadPress.bind()'], 'context.attach() d10 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[4].args, ['d8', 'click', 'app.keypadPress.bind()'], 'context.attach() d8 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[5].args, ['d6', 'click', 'app.keypadPress.bind()'], 'context.attach() d6 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[6].args, ['d4', 'click', 'app.keypadPress.bind()'], 'context.attach() d4 unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[7].args, ['d2', 'click', 'app.keypadPress.bind()'], 'context.attach() d2 unexpected arguments');
      return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addOperatorKeyListeners();
      assert.compare(app.keypadPress.bind.info.calls.length, 2, 'keypadPress.bind() not called twice');
      assert.compareArgs(app.keypadPress.bind.info.calls[0].args, [app, '+'], 'keypadPress.bind() num+ unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.calls[1].args, [app, '-'], 'keypadPress.bind() num- unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 2, 'context.attach() not called twice');
      assert.compareArgs(app.context.attach.info.calls[0].args, ['num+', 'click', 'app.keypadPress.bind()'], 'context.attach() num+ unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[1].args, ['num-', 'click', 'app.keypadPress.bind()'], 'context.attach() num- unexpected arguments');
      return true;
    }),
    new UnitTest('addRollBarListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.clearDisplay.bind = new Stub('app.clearDisplay.bind()');
      app.rollPress.bind = new Stub('app.rollPress.bind()');
      app.toggleMenu.bind = new Stub('app.toggleMenu.bind()');
      app.addRollBarListeners();
      assert.compare(app.clearDisplay.bind.info.calls.length, 1, 'clearDisplay.bind() not called');
      assert.compareArgs(app.clearDisplay.bind.info.calls[0].args, [app], 'clearDisplay.bind() unexpected arguments');
      assert.compare(app.rollPress.bind.info.calls.length, 1, 'rollPress.bind() not called');
      assert.compareArgs(app.rollPress.bind.info.calls[0].args, [app], 'rollPress.bind() unexpected arguments');
      assert.compare(app.toggleMenu.bind.info.calls.length, 1, 'toggleMenu.bind() not called');
      assert.compareArgs(app.toggleMenu.bind.info.calls[0].args, [app], 'toggleMenu.bind() unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 3, 'context.attach() not called thrice');
      assert.compareArgs(app.context.attach.info.calls[0].args, ['clrBtn',  'click', 'app.clearDisplay.bind()'], 'context.attach() clrBtn unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[1].args, ['rollBtn',  'click', 'app.rollPress.bind()'], 'context.attach() rollBtn unexpected arguments');
      assert.compareArgs(app.context.attach.info.calls[2].args, ['toggleMenuBtn',  'click', 'app.toggleMenu.bind()'], 'context.attach() toggleMenuBtn unexpected arguments');
      return true;
    }),
    new UnitTest('addUserSaveButtonListener()', function(app, test) {
      app.context.attach = new Stub();
      app.userSaveButtonPress.bind = new Stub('app.userSaveButtonPress.bind()');
      app.addUserSaveButtonListener();
      assert.compare(app.userSaveButtonPress.bind.info.calls.length, 1, 'userSaveButtonPress.bind() not called');
      assert.compareArgs(app.userSaveButtonPress.bind.info.calls[0].args, [app], 'userSaveButtonPress.bind() unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 1, 'context.attach() not called');
      assert. compareArgs(app.context.attach.info.calls[0].args, ['userSaveButton', 'click', 'app.userSaveButtonPress.bind()'], 'context.attach() unexpected arguments');
      return true;
    }),
    new UnitTest('addSaveItemListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.saveItemPress.bind = new Stub('app.saveItemPress.bind()');
      app.comingSoon.bind = new Stub('app.comingSoon.bind()');
      app.deleteSaveItem.bind = new Stub('app.deleteSaveItem.bind()');
      var id = 'id';
      var rollArray = ['rollArray'];
      app.addSaveItemListeners('id', rollArray);
      assert.compare(app.saveItemPress.bind.info.calls.length, 1, 'saveItemPress.bind() not called');
      assert.compareArgs(app.saveItemPress.bind.info.calls[0].args, [app, id, rollArray], 'saveItemPress.bind() unexpected arguments');
      assert.compare(app.comingSoon.bind.info.calls.length, 1, 'comingSoon.bind() not called');
      assert.compareArgs(app.comingSoon.bind.info.calls[0].args, [app], 'comingSoon.bind() unexpected arguments');
      assert.compare(app.deleteSaveItem.bind.info.calls.length, 1, 'deleteSaveItem.bind() not called');
      assert.compareArgs(app.deleteSaveItem.bind.info.calls[0].args, [app, id], 'deleteSaveItem.bind() unexpected arguments');
      assert.compare(app.context.attach.info.calls.length, 3, 'context.attach() not called 3 times');
      assert.compareArgs(app.context.attach.info.calls[0].args, [id, 'click', 'app.saveItemPress.bind()'], 'context.attach() saveItemPress unexpected args');
      assert.compareArgs(app.context.attach.info.calls[1].args, ['mod_' + id, 'click', 'app.comingSoon.bind()'], 'context.attach() mod_id unexpected args');
      assert.compareArgs(app.context.attach.info.calls[2].args, ['delete_' + id, 'click', 'app.deleteSaveItem.bind()'], 'context.attach() delete_id unexpected args');
      return true;
    }),
    new UnitTest('clearMemory(true)', function(app, test) {
      var falseStorage = {property:'value'};
      falseStorage.removeItem = new Stub();
      app.context.storage = new Stub(falseStorage);
      var output = app.clearMemory(true);
      assert.compare(output, '{"property":"value"}', 'clearMemory(true) unexpected output');
      assert.compare(app.context.storage.info.calls.length, 4, 'context.storage() not called 4 times');
      assert.compare(falseStorage.removeItem.info.calls.length, 3, 'context.storage().removeItem() not called 3 times');
      assert.compareArgs(falseStorage.removeItem.info.calls[0].args, ['visited'], 'context.storage().removeItem() visited unexpected argument');
      assert.compareArgs(falseStorage.removeItem.info.calls[1].args, ['saved'], 'context.storage().removeItem() saved unexpected argument');
      assert.compareArgs(falseStorage.removeItem.info.calls[2].args, ['savedMenu'], 'context.storage().removeItem() savedMenu unexpected argument');
      return true;
    }),
    new UnitTest('initializeMemory(), visited = false', function(app, test) {
      var falseStorage = {};
      falseStorage.visited = false;
      app.context.storage = new Stub(falseStorage);
      app.restoreDefaultSaveItems = new Stub();
      app.loadSaved = new Stub();
      var output = app.initializeMemory();
      assert.compare(output, true, 'initializeMemory() unexpected output');
      assert.compare(app.context.storage.info.calls.length, 3, 'context.storage() not called 3 times');
      assert.compare(app.restoreDefaultSaveItems.info.calls.length, 1, 'restoreDefaultSaveItems() not called 1 time');
      assert.compare(app.loadSaved.info.calls.length, 1, 'loadSaved() not called 1 time');
      return true;
    }),
    new UnitTest('initializeMemory(), visited = true', function(app, test) {
      var falseStorage = {};
      falseStorage.visited = true;
      app.context.storage = new Stub(falseStorage);
      app.restoreDefaultSaveItems = new Stub();
      app.loadSaved = new Stub();
      var output = app.initializeMemory();
      assert.compare(output, true, 'initializeMemory() unexpected output');
      assert.compare(app.context.storage.info.calls.length, 2, 'context.storage() not called 2 times');
      assert.compare(app.restoreDefaultSaveItems.info.calls.length, 0, 'restoreDefaultSaveItems() not called 0 times');
      assert.compare(app.loadSaved.info.calls.length, 1, 'loadSaved() not called 1 times');
      return true;
    }),
    new UnitTest('restoreDefaultSaveItems()', function(app, test) {
      var falsePreloadedStorage = {preloadedProperty:'preloadedValue'};
      var falseStorage = {property:'value'};
      app.context.preloadedSaveItems = falsePreloadedStorage;
      app.context.storage = new Stub(falseStorage);
      var output = app.restoreDefaultSaveItems();
      assert.compare(output, falsePreloadedStorage, 'restoreDefaultSaveItems() unexpected output');
      assert.compare(falseStorage.saved, '{"preloadedProperty":"preloadedValue"}', 'context.storage() unexpected output');
      assert.compare(app.context.storage.info.calls.length, 1, 'context.storage() not called once');
      return true;
    }),

  ];
}

function runTests(runTF) {
  if (runTF === true) {
    var testArray = testList();

    var passed = true;
    var failedCount = 0;
    var passedCount = 0;
    for (var i = 0; i < testArray.length; i++) {
      var context = new Context(preloadedSaveItems);
      var app = new App(context);
      var test = testArray[i];
      test.run(app, this);
      if (test.passed) {
        passedCount++;
      } else {
        failedCount++;
        passed = false;
      }
      console.log((test.passed ? 'PASSED: ' : 'FAILED: ') + test.testName + ':\n reported ' + test.report + '\n ' + 'returned ' + JSON.stringify(test.result));
    }
    console.log('TEST RUN ' + (passed ? 'PASSED ' : 'FAILED ') + '(Failed: ' + failedCount + '; Passed: ' + passedCount + ')');
  } else {
    return;
  }
}
