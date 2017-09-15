document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});

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
      console.log((test.passed ? 'PASSED: ' : 'FAILED: ') + test.testName + ': ' + test.report + ': ' + JSON.stringify(test.result || ''));
    }
    console.log('\nTEST RUN ' + (passed ? 'PASSED ' : 'FAILED ') + '(Failed: ' + failedCount + '; Passed: ' + passedCount + ')');
  } else {
    return;
  }
}

function testList() {
  return [
    new UnitTest('run()', function(app, test) {
      var called = {
        addRollBarListeners: false,
        addCalculatorListeners: false,
        addUserSaveButtonListener: false,
        simulateFirstVisit: false,
        checkMemory: false,
        toggleMenu: false,
        userSaveButtonCheckDisplay: false,
      }
      for (var functionName in called) {
        var placeHolder = new PlaceHolderFor(functionName, called);
        app[functionName] = placeHolder.placeHolder;
      };
      app.run();
      for (var functionName in called) {
        assert((called[functionName] === true), functionName);
      }
      return true;
    }),
    new UnitTest('addCalculatorListeners()', function(app, test) {
      var called = {
        addNumberKeyListeners: false,
        addDiceKeyListeners: false,
        addOperatorKeyListeners: false,
      }
      for (var functionName in called) {
        var placeHolder = new PlaceHolderFor(functionName, called);
        app[functionName] = placeHolder.placeHolder;
      };
      app.addCalculatorListeners();
      for (var functionName in called) {
        assert((called[functionName] === true), functionName);
      }
      return true;
    }),
  ];
}

function PlaceHolderFor(functionName, calledObject) {
  return {
    functionName: functionName,
    calledObject: calledObject,
    placeHolder: function() {
      calledObject[functionName] = true;
    }
  }
}

function assert(condition, message) {
  if (!condition) {
    message = message || 'Assertion failed';
    if (typeof Error !== 'undefined') {
      var err = Error.name + ' ' + message;
      throw err;
    }
    throw message;
  } else {
    return 'Assertion passed';
  }
}

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
        this.report = ' ERROR: ' + err;
        this.passed = false;
      }
    }
  };
}
