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

function UnitTest(testName, functionToBeTested) {
  this.testName = testName;
  this.functionToBeTested = functionToBeTested;
  this.report;
  try {
    if (functionToBeTested() !== true) {
      throw 'unexpected result';
    }
    else{
      this.report = ' passed.'
    }
  }
  catch(err) {
    this.report = ' failed:\n' + err;
  }
  console.log(this.testName + this.report);
  return this.testName + this.report;
}
