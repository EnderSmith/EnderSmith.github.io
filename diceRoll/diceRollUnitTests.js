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
      }
    }
  };
}

function CheckCalledListFor(functionName, calledObject) {
  return {
    functionName: functionName,
    calledObject: calledObject,
    placeHolder: function() {
      calledObject[functionName] = true;
    }
  }
}
function placeHolderForAttach(listenerPlaceHolders, app, test) {
  app.context.attach = function(id, event, action) {
    listenerPlaceHolders[id] = {};
    listenerPlaceHolders[id].event = event;
    listenerPlaceHolders[id].action = action;
  };
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
        var placeHolder = new CheckCalledListFor(functionName, called);
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
        var placeHolder = new CheckCalledListFor(functionName, called);
        app[functionName] = placeHolder.placeHolder;
      };
      app.addCalculatorListeners();
      for (var functionName in called) {
        assert((called[functionName] === true), functionName);
      }
      return true;
    }),
    new UnitTest('addNumberKeyListeners()', function(app, test) {
      var listenerPlaceHolders = {};
      var expectedListenerPlaceHolderKeys = ["num0","num1","num2","num3","num4","num5","num6","num7","num8","num9"];
      placeHolderForAttach(listenerPlaceHolders, app, test);
      app.addNumberKeyListeners();
      var listenerPlaceHolderKeys = Object.getOwnPropertyNames(listenerPlaceHolders);
      assert((JSON.stringify(listenerPlaceHolderKeys) === JSON.stringify(expectedListenerPlaceHolderKeys)), 'failed to add numKey listener(s)');
      for (var listenerId in listenerPlaceHolders) {
        assert((listenerPlaceHolders[listenerId].event === 'click'), listenerId + '.event should be "click"');
      }
      return true;
    }),
    new UnitTest('addDiceKeyListeners()', function(app, test) {
      var listenerPlaceHolders = {};
      var expectedListenerPlaceHolderKeys = app.context.diceNameArray;
      placeHolderForAttach(listenerPlaceHolders, app, test);
      app.addDiceKeyListeners();
      var listenerPlaceHolderKeys = Object.getOwnPropertyNames(listenerPlaceHolders);
      assert((JSON.stringify(listenerPlaceHolderKeys) === JSON.stringify(expectedListenerPlaceHolderKeys)), 'failed to add diceKey listener(s)');
      for (var listenerId in listenerPlaceHolders) {
        assert((listenerPlaceHolders[listenerId].event === 'click'), listenerId + '.event should be "click"');
      }
      return true;
    }),
    new UnitTest('addOperatorKeyListeners()', function(app, test) {
      var listenerPlaceHolders = {};
      var expectedListenerPlaceHolderKeys = ["num+","num-"];
      placeHolderForAttach(listenerPlaceHolders, app, test);
      app.addOperatorKeyListeners();
      var listenerPlaceHolderKeys = Object.getOwnPropertyNames(listenerPlaceHolders);
      assert((JSON.stringify(listenerPlaceHolderKeys) === JSON.stringify(expectedListenerPlaceHolderKeys)), 'failed to add operator listener(s)');
      for (var listenerId in listenerPlaceHolders) {
        assert((listenerPlaceHolders[listenerId].event === 'click'), listenerId + '.event should be "click"');
      }
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
      console.log((test.passed ? 'PASSED: ' : 'FAILED: ') + test.testName + ': ' + test.report + ': ' + JSON.stringify(test.result || ''));
    }
    console.log('TEST RUN ' + (passed ? 'PASSED ' : 'FAILED ') + '(Failed: ' + failedCount + '; Passed: ' + passedCount + ')');
  } else {
    return;
  }
}
