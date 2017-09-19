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

function stub() {
  var info = {
    called: {
      count: 0,
      check: function(expectedCount) {
        return (expectedCount && (expectedCount === info.called.count)) || info.called.count > 0;
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

  var placeHolder = function() {
    info.called.true = true;
    info.args.current = arguments;
    info.args.log(info.args.current);
    info.called.count++;
    return true;
  }

  placeHolder.info = info;
  return placeHolder;
}

function testList() {
  return [
    new UnitTest('run()', function(app, test) {
      app.addRollBarListeners = stub();
      app.addCalculatorListeners = stub();
      app.addUserSaveButtonListener = stub();
      app.simulateFirstVisit = stub();
      app.checkMemory = stub();
      app.toggleMenu = stub();
      app.userSaveButtonCheckDisplay = stub();
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
      app.addNumberKeyListeners = stub();
      app.addDiceKeyListeners = stub();
      app.addOperatorKeyListeners = stub();
      app.addCalculatorListeners();
      assert(app.addNumberKeyListeners.info.called.check(), 'addNumberKeyListeners() not called');
      assert(app.addDiceKeyListeners.info.called.check(), 'addDiceKeyListeners() not called');
      assert(app.addOperatorKeyListeners.info.called.check(), 'addOperatorKeyListeners() not called');
      return true;
    }),
    new UnitTest('addNumberKeyListeners()', function(app, test) {
      app.context.attach = stub();
      app.keypadPress = stub();
      app.addNumberKeyListeners();
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(10), 'context.attach() not called 10 times');
      assert(app.context.attach.info.args.all.check(0, 'num0', 'click', app.keypadPress.bind(this, 0)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'num1', 'click', app.keypadPress.bind(this, 1)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(2, 'num2', 'click', app.keypadPress.bind(this, 2)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(3, 'num3', 'click', app.keypadPress.bind(this, 3)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(4, 'num4', 'click', app.keypadPress.bind(this, 4)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(5, 'num5', 'click', app.keypadPress.bind(this, 5)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(6, 'num6', 'click', app.keypadPress.bind(this, 6)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(7, 'num7', 'click', app.keypadPress.bind(this, 7)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(8, 'num8', 'click', app.keypadPress.bind(this, 8)), 'attach() unexpected arguments');
      assert(app.context.attach.info.args.all.check(9, 'num9', 'click', app.keypadPress.bind(this, 9)), 'attach() unexpected arguments');
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      // return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      // return true;
    }),
    new UnitTest('addRollBarListeners()', function(app, test) {
      // return true;
    }),
    new UnitTest('addUserSaveButtonListener()', function(app, test) {
      // return true;
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
