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

function Stub(output) {
  var info = {
    output: output,
    called: 0,
    args: {
      all: [],
      log: function(current) {
        info.args.all[info.called] = current;
      },
    },
  }

  var functionStub = function() {
    info.args.log(arguments);
    info.called++;
    return info.output;
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
      app.simulateFirstVisit = new Stub();
      app.checkMemory = new Stub();
      app.toggleMenu = new Stub();
      app.userSaveButtonCheckDisplay = new Stub();
      app.run();
      assert.compare(app.addRollBarListeners.info.called, 1, 'addRollBarListeners() not called');
      assert.compare(app.addCalculatorListeners.info.called, 1, 'addCalculatorListeners() not called');
      assert.compare(app.addUserSaveButtonListener.info.called, 1, 'addUserSaveButtonListener() not called');
      assert.compare(app.simulateFirstVisit.info.called, 1, 'simulateFirstVisit() not called');
      assert.compare(app.checkMemory.info.called, 1, 'checkMemory() not called');
      assert.compare(app.toggleMenu.info.called, 1, 'toggleMenu() not called');
      assert.compare(app.userSaveButtonCheckDisplay.info.called, 1, 'userSaveButtonCheckDisplay() not called');
      return true;
    }),
    new UnitTest('addCalculatorListeners()', function(app, test) {
      app.addNumberKeyListeners = new Stub();
      app.addDiceKeyListeners = new Stub();
      app.addOperatorKeyListeners = new Stub();
      app.addCalculatorListeners();
      assert.compare(app.addNumberKeyListeners.info.called, 1, 'addNumberKeyListeners() not called');
      assert.compare(app.addDiceKeyListeners.info.called, 1, 'addDiceKeyListeners() not called');
      assert.compare(app.addOperatorKeyListeners.info.called, 1, 'addOperatorKeyListeners() not called');
      return true;
    }),
    new UnitTest('addNumberKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addNumberKeyListeners();
      assert.compare(app.keypadPress.bind.info.called, 10, 'keypadPress.bind() not called 10 times');
      assert.compareArgs(app.keypadPress.bind.info.args.all[0], [app, 0], 'keypadPress.bind() num0 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[1], [app, 1], 'keypadPress.bind() num1 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[2], [app, 2], 'keypadPress.bind() num2 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[3], [app, 3], 'keypadPress.bind() num3 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[4], [app, 4], 'keypadPress.bind() num4 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[5], [app, 5], 'keypadPress.bind() num5 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[6], [app, 6], 'keypadPress.bind() num6 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[7], [app, 7], 'keypadPress.bind() num7 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[8], [app, 8], 'keypadPress.bind() num8 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[9], [app, 9], 'keypadPress.bind() num9 unexpected arguments');
      assert.compare(app.context.attach.info.called, 10, 'context.attach() not called 10 times');
      assert.compareArgs(app.context.attach.info.args.all[0], ['num0', 'click', 'app.keypadPress.bind()'], 'context.attach() num0 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[1], ['num1', 'click', 'app.keypadPress.bind()'], 'context.attach() num1 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[2], ['num2', 'click', 'app.keypadPress.bind()'], 'context.attach() num2 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[3], ['num3', 'click', 'app.keypadPress.bind()'], 'context.attach() num3 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[4], ['num4', 'click', 'app.keypadPress.bind()'], 'context.attach() num4 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[5], ['num5', 'click', 'app.keypadPress.bind()'], 'context.attach() num5 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[6], ['num6', 'click', 'app.keypadPress.bind()'], 'context.attach() num6 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[7], ['num7', 'click', 'app.keypadPress.bind()'], 'context.attach() num7 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[8], ['num8', 'click', 'app.keypadPress.bind()'], 'context.attach() num8 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[9], ['num9', 'click', 'app.keypadPress.bind()'], 'context.attach() num9 unexpected arguments');
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addDiceKeyListeners();
      assert.compare(app.keypadPress.bind.info.called, 8, 'keypadPress.bind() not called 8 times');
      assert.compareArgs(app.keypadPress.bind.info.args.all[0], [app, 'd100'], 'keypadPress.bind() d100 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[1], [app, 'd20'], 'keypadPress.bind() d20 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[2], [app, 'd12'], 'keypadPress.bind() d12 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[3], [app, 'd10'], 'keypadPress.bind() d10 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[4], [app, 'd8'], 'keypadPress.bind() d8 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[5], [app, 'd6'], 'keypadPress.bind() d6 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[6], [app, 'd4'], 'keypadPress.bind() d4 unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[7], [app, 'd2'], 'keypadPress.bind() d2 unexpected arguments');
      assert.compare(app.context.attach.info.called, 8, 'context.attach() not called 8 times');
      assert.compareArgs(app.context.attach.info.args.all[0], ['d100', 'click', 'app.keypadPress.bind()'], 'context.attach() d100 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[1], ['d20', 'click', 'app.keypadPress.bind()'], 'context.attach() d20 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[2], ['d12', 'click', 'app.keypadPress.bind()'], 'context.attach() d12 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[3], ['d10', 'click', 'app.keypadPress.bind()'], 'context.attach() d10 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[4], ['d8', 'click', 'app.keypadPress.bind()'], 'context.attach() d8 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[5], ['d6', 'click', 'app.keypadPress.bind()'], 'context.attach() d6 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[6], ['d4', 'click', 'app.keypadPress.bind()'], 'context.attach() d4 unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[7], ['d2', 'click', 'app.keypadPress.bind()'], 'context.attach() d2 unexpected arguments');
      return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress.bind = new Stub('app.keypadPress.bind()');
      app.addOperatorKeyListeners();
      assert.compare(app.keypadPress.bind.info.called, 2, 'keypadPress.bind() not called twice');
      assert.compareArgs(app.keypadPress.bind.info.args.all[0], [app, '+'], 'keypadPress.bind() num+ unexpected arguments');
      assert.compareArgs(app.keypadPress.bind.info.args.all[1], [app, '-'], 'keypadPress.bind() num- unexpected arguments');
      assert.compare(app.context.attach.info.called, 2, 'context.attach() not called twice');
      assert.compareArgs(app.context.attach.info.args.all[0], ['num+', 'click', 'app.keypadPress.bind()'], 'context.attach() num+ unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[1], ['num-', 'click', 'app.keypadPress.bind()'], 'context.attach() num- unexpected arguments');
      return true;
    }),
    new UnitTest('addRollBarListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.clearDisplay.bind = new Stub('app.clearDisplay.bind()');
      app.rollPress.bind = new Stub('app.rollPress.bind()');
      app.toggleMenu.bind = new Stub('app.toggleMenu.bind()');
      app.addRollBarListeners();
      assert.compare(app.clearDisplay.bind.info.called, 1, 'clearDisplay.bind() not called');
      assert.compareArgs(app.clearDisplay.bind.info.args.all[0], [app], 'clearDisplay.bind() unexpected arguments');
      assert.compare(app.rollPress.bind.info.called, 1, 'rollPress.bind() not called');
      assert.compareArgs(app.rollPress.bind.info.args.all[0], [app], 'rollPress.bind() unexpected arguments');
      assert.compare(app.toggleMenu.bind.info.called, 1, 'toggleMenu.bind() not called');
      assert.compareArgs(app.toggleMenu.bind.info.args.all[0], [app], 'toggleMenu.bind() unexpected arguments');
      assert.compare(app.context.attach.info.called, 3, 'context.attach() not called thrice');
      assert.compareArgs(app.context.attach.info.args.all[0], ['clrBtn',  'click', 'app.clearDisplay.bind()'], 'context.attach() clrBtn unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[1], ['rollBtn',  'click', 'app.rollPress.bind()'], 'context.attach() rollBtn unexpected arguments');
      assert.compareArgs(app.context.attach.info.args.all[2], ['toggleMenuBtn',  'click', 'app.toggleMenu.bind()'], 'context.attach() toggleMenuBtn unexpected arguments');
      return true;
    }),
    new UnitTest('addUserSaveButtonListener()', function(app, test) {
      app.context.attach = new Stub();
      app.userSaveButtonPress.bind = new Stub('app.userSaveButtonPress.bind()');
      app.addUserSaveButtonListener();
      assert.compare(app.userSaveButtonPress.bind.info.called, 1, 'userSaveButtonPress.bind() not called');
      assert.compareArgs(app.userSaveButtonPress.bind.info.args.all[0], [app], 'userSaveButtonPress.bind() unexpected arguments');
      assert.compare(app.context.attach.info.called, 1, 'context.attach() not called');
      assert. compareArgs(app.context.attach.info.args.all[0], ['userSaveButton', 'click', 'app.userSaveButtonPress.bind()'], 'context.attach() unexpected arguments');
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
      assert.compare(app.saveItemPress.bind.info.called, 1, 'saveItemPress.bind() not called');
      assert.compareArgs(app.saveItemPress.bind.info.args.all[0], [app, id, rollArray], 'saveItemPress.bind() unexpected arguments');
      assert.compare(app.comingSoon.bind.info.called, 1, 'comingSoon.bind() not called');
      assert.compareArgs(app.comingSoon.bind.info.args.all[0], [app], 'comingSoon.bind() unexpected arguments');
      assert.compare(app.deleteSaveItem.bind.info.called, 1, 'deleteSaveItem.bind() not called');
      assert.compareArgs(app.deleteSaveItem.bind.info.args.all[0], [app, id], 'deleteSaveItem.bind() unexpected arguments');
      assert.compare(app.context.attach.info.called, 3, 'context.attach() not called 3 times');
      assert.compareArgs(app.context.attach.info.args.all[0], [id, 'click', 'app.saveItemPress.bind()'], 'context.attach() saveItemPress unexpected args');
      assert.compareArgs(app.context.attach.info.args.all[1], ['mod_' + id, 'click', 'app.comingSoon.bind()'], 'context.attach() mod_id unexpected args');
      assert.compareArgs(app.context.attach.info.args.all[2], ['delete_' + id, 'click', 'app.deleteSaveItem.bind()'], 'context.attach() delete_id unexpected args');
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
