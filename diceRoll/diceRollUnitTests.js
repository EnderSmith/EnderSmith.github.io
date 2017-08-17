document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});

function runTests(runTF) {
  if (runTF == true) {
    var passFail = [
    // memory function unit tests
      new UnitTest('simulateFirstVisit()', function() { return simulateFirstVisit(true); }, '{}'),
      new UnitTest('checkMemory()', function() { return checkMemory(); }, 'true'),
      new UnitTest('new SaveItem()', function() { return new SaveItem('test_id', 'test_name', ['test', 'array']).id; }, function() { return JSON.parse(localStorage.saved)['test_id'].id; }),
      new UnitTest('loadMemory()', function() { return loadMemory().includes("id='delete_test_id'>"); }, true),
      new UnitTest('deleteSaveItem()', function() { return !('test_id' in deleteSaveItem('test_id', true)); }, true),
      new UnitTest('restoreDefaultSaveItems()', function() { return restoreDefaultSaveItems()['longsword'].id; }, function() {return JSON.parse(localStorage.saved)['longsword'].id; }),
      // data manipulation tests

    ];
    clearScreen();
    clearScreen();
    return passFail;
  } else {
    return;
  }
}

function UnitTest(testName, functionToBeTested, expectedOutput) {
  this.report;
  this.testName = testName;
  this.functionToBeTested = functionToBeTested;
  this.expectedOutput = expectedOutput;
  try {
    this.functionReturned = this.functionToBeTested();
    if (typeof this.expectedOutput === 'function') { this.expectedOutput = this.expectedOutput(); }
    if (this.functionReturned != this.expectedOutput) {
      this.report = '\n\tFailed.\n\tReturned: ' + this.functionReturned + '\n\tExpected: ' + this.expectedOutput;
      throw this.report;
    }
  }
  catch(err) {
    console.log(this.testName + err);
    return this.testName + this.report;
  }
  this.report = '\n\tPassed.\n\tReturned: ' + this.functionReturned;
  console.log( this.testName + this.report);
  return this.testName + this.report;
}
