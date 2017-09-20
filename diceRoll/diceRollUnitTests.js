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

function assert(condition, message) {
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
}

function Stub(output) {
  var info = {
    called: {
      count: 0,
      check: function(expectedCount) {
        if (expectedCount) {
          return (expectedCount === info.called.count)
        } else {
          return info.called.count > 0;
        }
      }
    },
    args: {
      current: null,
      all: {
        array: [],
        check: function(index, expectedArguments) {
          var index = arguments[0];
          var expected = {};
          for (key in arguments) {
            if (key !== "0") {
              expected[key - 1] = arguments[key];
            }
          }
          return (JSON.stringify(expected) === JSON.stringify(info.args.all.array[index]));
        }
      },
      log: function(current) {
        info.args.all.array[info.called.count] = current;
      },
      check: function(expectedArgs) {
        var expected = arguments;
        return (JSON.stringify(expected) === JSON.stringify(info.args.current));
      }
    },
  }

  var functionStub = function() {
    info.args.current = arguments;
    info.args.log(info.args.current);
    info.called.count++;
    return output;
  }
  var bindStub = function() {
    bindStub.info.args.current = arguments;
    bindStub.info.args.log(bindStub.info.args.current);
    bindStub.info.called.count++;
    return arguments;
  }

  functionStub.info = info;
  bindStub.info = info;
  functionStub.bind = bindStub;
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
      assert(app.addRollBarListeners.info.called.check(), 'addRollBarListeners() not called');
      assert(app.addCalculatorListeners.info.called.check(), 'addCalculatorListeners() not called');
      assert(app.addUserSaveButtonListener.info.called.check(), 'addUserSaveButtonListener() not called');
      assert(app.simulateFirstVisit.info.called.check(), 'simulateFirstVisit() not called');
      assert(app.checkMemory.info.called.check(), 'checkMemory() not called');
      assert(app.toggleMenu.info.called.check(), 'toggleMenu() not called');
      assert(app.userSaveButtonCheckDisplay.info.called.check(), 'userSaveButtonCheckDisplay() not called');
      return true;
    }),
    new UnitTest('addCalculatorListeners()', function(app, test) {
      app.addNumberKeyListeners = new Stub();
      app.addDiceKeyListeners = new Stub();
      app.addOperatorKeyListeners = new Stub();
      app.addCalculatorListeners();
      assert(app.addNumberKeyListeners.info.called.check(), 'addNumberKeyListeners() not called');
      assert(app.addDiceKeyListeners.info.called.check(), 'addDiceKeyListeners() not called');
      assert(app.addOperatorKeyListeners.info.called.check(), 'addOperatorKeyListeners() not called');
      return true;
    }),
    new UnitTest('addNumberKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress = new Stub();
      app.addNumberKeyListeners();
      assert(app.keypadPress.bind.info.called.check(), 'keypadPress.bind() not called');
      assert(app.keypadPress.bind.info.called.check(10), 'keypadPress.bind() not called 10 times');
      assert(app.keypadPress.bind.info.args.all.check(0, app, 0), 'keypadPress.bind() num0 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(1, app, 1), 'keypadPress.bind() num1 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(2, app, 2), 'keypadPress.bind() num2 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(3, app, 3), 'keypadPress.bind() num3 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(4, app, 4), 'keypadPress.bind() num4 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(5, app, 5), 'keypadPress.bind() num5 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(6, app, 6), 'keypadPress.bind() num6 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(7, app, 7), 'keypadPress.bind() num7 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(8, app, 8), 'keypadPress.bind() num8 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(9, app, 9), 'keypadPress.bind() num9 unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(10), 'context.attach() not called 10 times');
      assert(app.context.attach.info.args.all.check(0, 'num0', 'click', app.keypadPress.bind(app, 0)), 'context.attach() num0 unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'num1', 'click', app.keypadPress.bind(app, 1)), 'context.attach() num1 unexpected arguments');
      assert(app.context.attach.info.args.all.check(2, 'num2', 'click', app.keypadPress.bind(app, 2)), 'context.attach() num2 unexpected arguments');
      assert(app.context.attach.info.args.all.check(3, 'num3', 'click', app.keypadPress.bind(app, 3)), 'context.attach() num3 unexpected arguments');
      assert(app.context.attach.info.args.all.check(4, 'num4', 'click', app.keypadPress.bind(app, 4)), 'context.attach() num4 unexpected arguments');
      assert(app.context.attach.info.args.all.check(5, 'num5', 'click', app.keypadPress.bind(app, 5)), 'context.attach() num5 unexpected arguments');
      assert(app.context.attach.info.args.all.check(6, 'num6', 'click', app.keypadPress.bind(app, 6)), 'context.attach() num6 unexpected arguments');
      assert(app.context.attach.info.args.all.check(7, 'num7', 'click', app.keypadPress.bind(app, 7)), 'context.attach() num7 unexpected arguments');
      assert(app.context.attach.info.args.all.check(8, 'num8', 'click', app.keypadPress.bind(app, 8)), 'context.attach() num8 unexpected arguments');
      assert(app.context.attach.info.args.all.check(9, 'num9', 'click', app.keypadPress.bind(app, 9)), 'context.attach() num9 unexpected arguments');
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress = new Stub();
      app.addDiceKeyListeners();
      assert(app.keypadPress.bind.info.called.check(), 'keypadPress.bind() not called');
      assert(app.keypadPress.bind.info.called.check(8), 'keypadPress.bind() not called 8 times');
      assert(app.keypadPress.bind.info.args.all.check(0, app, 'd100'), 'keypadPress.bind() d100 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(1, app, 'd20'), 'keypadPress.bind() d20 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(2, app, 'd12'), 'keypadPress.bind() d12 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(3, app, 'd10'), 'keypadPress.bind() d10 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(4, app, 'd8'), 'keypadPress.bind() d8 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(5, app, 'd6'), 'keypadPress.bind() d6 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(6, app, 'd4'), 'keypadPress.bind() d4 unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(7, app, 'd2'), 'keypadPress.bind() d2 unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(8), 'context.attach() not called 8 times');
      assert(app.context.attach.info.args.all.check(0, 'd100', 'click', app.keypadPress.bind(app, 'd100')), 'context.attach() d100 unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'd20', 'click', app.keypadPress.bind(app, 'd20')), 'context.attach() d20 unexpected arguments');
      assert(app.context.attach.info.args.all.check(2, 'd12', 'click', app.keypadPress.bind(app, 'd12')), 'context.attach() d12 unexpected arguments');
      assert(app.context.attach.info.args.all.check(3, 'd10', 'click', app.keypadPress.bind(app, 'd10')), 'context.attach() d10 unexpected arguments');
      assert(app.context.attach.info.args.all.check(4, 'd8', 'click', app.keypadPress.bind(app, 'd8')), 'context.attach() d8 unexpected arguments');
      assert(app.context.attach.info.args.all.check(5, 'd6', 'click', app.keypadPress.bind(app, 'd6')), 'context.attach() d6 unexpected arguments');
      assert(app.context.attach.info.args.all.check(6, 'd4', 'click', app.keypadPress.bind(app, 'd4')), 'context.attach() d4 unexpected arguments');
      assert(app.context.attach.info.args.all.check(7, 'd2', 'click', app.keypadPress.bind(app, 'd2')), 'context.attach() d2 unexpected arguments');
      return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress = new Stub();
      app.addOperatorKeyListeners();
      assert(app.keypadPress.bind.info.called.check(), 'keypadPress.bind() not called');
      assert(app.keypadPress.bind.info.called.check(2), 'keypadPress.bind() not called twice');
      assert(app.keypadPress.bind.info.args.all.check(0, app, '+'), 'keypadPress.bind() num+ unexpected arguments');
      assert(app.keypadPress.bind.info.args.all.check(1, app, '-'), 'keypadPress.bind() num- unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(2), 'context.attach() not called twice');
      assert(app.context.attach.info.args.all.check(0, 'num+', 'click', app.keypadPress.bind(app, '+')), 'context.attach() num+ unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'num-', 'click', app.keypadPress.bind(app, '-')), 'context.attach() num- unexpected arguments');
      return true;
    }),
    new UnitTest('addRollBarListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.clearDisplay = new Stub();
      app.rollPress = new Stub();
      app.toggleMenu = new Stub();
      app.addRollBarListeners();
      assert(app.clearDisplay.bind.info.called.check(), 'clearDisplay.bind() not called');
      assert(app.clearDisplay.bind.info.args.all.check(0, app), 'clearDisplay.bind() unexpected arguments');
      assert(app.rollPress.bind.info.called.check(), 'rollPress.bind() not called');
      assert(app.rollPress.bind.info.args.all.check(0, app), 'rollPress.bind() unexpected arguments');
      assert(app.toggleMenu.bind.info.called.check(), 'toggleMenu.bind() not called');
      assert(app.toggleMenu.bind.info.args.all.check(0, app), 'toggleMenu.bind() unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(3), 'context.attach() not called twice');
      assert(app.context.attach.info.args.all.check(0, 'clrBtn',  'click', app.clearDisplay.bind(app)), 'context.attach() clrBtn unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'rollBtn',  'click', app.rollPress.bind(app)), 'context.attach() rollBtn unexpected arguments');
      assert(app.context.attach.info.args.all.check(2, 'toggleMenuBtn',  'click', app.toggleMenu.bind(app)), 'context.attach() toggleMenuBtn unexpected arguments');
      return true;
    }),
    new UnitTest('addUserSaveButtonListener()', function(app, test) {
      app.context.attach = new Stub();
      app.userSaveButtonPress = new Stub();
      app.addUserSaveButtonListener();
      assert(app.userSaveButtonPress.bind.info.called.check(), 'userSaveButtonPress.bind() not called');
      assert(app.userSaveButtonPress.bind.info.args.check(app), 'userSaveButtonPress.bind() unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.args.check('userSaveButton', 'click', app.userSaveButtonPress.bind(app)), 'context.attach() unexpected arguments');
      return true;
    }),
    new UnitTest('addSaveItemListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.saveItemPress = new Stub();
      app.comingSoon = new Stub();
      app.deleteSaveItem = new Stub();
      var id = 'id';
      var rollArray = ['rollArray'];
      app.addSaveItemListeners('id', rollArray);
      assert(app.saveItemPress.bind.info.called.check(), 'saveItemPress.bind() not called');
      assert(app.saveItemPress.bind.info.args.check(app, id, rollArray), 'saveItemPress.bind() unexpected arguments');
      assert(app.comingSoon.bind.info.called.check(), 'comingSoon.bind() not called');
      assert(app.comingSoon.bind.info.args.check(app), 'comingSoon.bind() unexpected arguments');
      assert(app.deleteSaveItem.bind.info.called.check(), 'deleteSaveItem.bind() not called');
      assert(app.deleteSaveItem.bind.info.args.check(app, id), 'deleteSaveItem.bind() unexpected arguments');
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(3), 'context.attach() not called 3 times');
      assert(app.context.attach.info.args.all.check(0, id, 'click', app.saveItemPress.bind(app, id, rollArray)), 'context.attach() saveItemPress unexpected args');
      assert(app.context.attach.info.args.all.check(1, 'mod_' + id, 'click', app.comingSoon.bind(app)), 'context.attach() mod_id unexpected args');
      assert(app.context.attach.info.args.all.check(2, 'delete_' + id, 'click', app.deleteSaveItem.bind(app, id)), 'context.attach() delete_id unexpected args');
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
