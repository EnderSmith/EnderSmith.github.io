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

function Stub() {
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
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(10), 'context.attach() not called 10 times');
      assert(app.context.attach.info.args.all.check(0, 'num0', 'click', app.keypadPress.bind(this, 0)), 'attach() num0 unexpected arguments');
      assert(app.context.attach.info.args.all.check(1, 'num1', 'click', app.keypadPress.bind(this, 1)), 'attach() num1 unexpected arguments');
      assert(app.context.attach.info.args.all.check(2, 'num2', 'click', app.keypadPress.bind(this, 2)), 'attach() num2 unexpected arguments');
      assert(app.context.attach.info.args.all.check(3, 'num3', 'click', app.keypadPress.bind(this, 3)), 'attach() num3 unexpected arguments');
      assert(app.context.attach.info.args.all.check(4, 'num4', 'click', app.keypadPress.bind(this, 4)), 'attach() num4 unexpected arguments');
      assert(app.context.attach.info.args.all.check(5, 'num5', 'click', app.keypadPress.bind(this, 5)), 'attach() num5 unexpected arguments');
      assert(app.context.attach.info.args.all.check(6, 'num6', 'click', app.keypadPress.bind(this, 6)), 'attach() num6 unexpected arguments');
      assert(app.context.attach.info.args.all.check(7, 'num7', 'click', app.keypadPress.bind(this, 7)), 'attach() num7 unexpected arguments');
      assert(app.context.attach.info.args.all.check(8, 'num8', 'click', app.keypadPress.bind(this, 8)), 'attach() num8 unexpected arguments');
      assert(app.context.attach.info.args.all.check(9, 'num9', 'click', app.keypadPress.bind(this, 9)), 'attach() num9 unexpected arguments');
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      app.context.attach = new Stub();
      app.keypadPress = new Stub();
      app.addDiceKeyListeners();
      assert(app.context.attach.info.called.check(), 'context.attach() not called');
      assert(app.context.attach.info.called.check(8), 'context.attach() not called 8 times');
      assert(app.context.attach.info.args.all.check(0, 'd100', 'click', app.keypadPress.bind(this, 'd100')), 'attach() d100 unexpected arguments')
      assert(app.context.attach.info.args.all.check(1, 'd20', 'click', app.keypadPress.bind(this, 'd20')), 'attach() d20 unexpected arguments')
      assert(app.context.attach.info.args.all.check(2, 'd12', 'click', app.keypadPress.bind(this, 'd12')), 'attach() d12 unexpected arguments')
      assert(app.context.attach.info.args.all.check(3, 'd10', 'click', app.keypadPress.bind(this, 'd10')), 'attach() d10 unexpected arguments')
      assert(app.context.attach.info.args.all.check(4, 'd8', 'click', app.keypadPress.bind(this, 'd8')), 'attach() d8 unexpected arguments')
      assert(app.context.attach.info.args.all.check(5, 'd6', 'click', app.keypadPress.bind(this, 'd6')), 'attach() d6 unexpected arguments')
      assert(app.context.attach.info.args.all.check(6, 'd4', 'click', app.keypadPress.bind(this, 'd4')), 'attach() d4 unexpected arguments')
      assert(app.context.attach.info.args.all.check(7, 'd2', 'click', app.keypadPress.bind(this, 'd2')), 'attach() d2 unexpected arguments')
      return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      // assert(app.contex.attach.info.called.check)
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
