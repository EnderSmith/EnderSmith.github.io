document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});

function runTests(runTF) {
  if (runTF == true) {
    var passFail = [
    // memory function unit tests
      new UnitTest('simulateFirstVisit()', function() {
          return (simulateFirstVisit(true) === '{}');
      }),
      new UnitTest('checkMemory()', function() {
        return (checkMemory() === "true");
      }),
      new UnitTest('new SaveItem()', function() {
        var saveItem = new SaveItem('test_id', 'test_name', ['test', 'array']);
        saveItem = JSON.stringify(saveItem);
        var localSaveItem = localStorage.saved;
        return (localSaveItem.includes(saveItem));
      }),
      new UnitTest('loadMemory()', function() {
        var savedMenu = loadMemory();
        return (content.savedMenu.includes(savedMenu));
      }),
      new UnitTest('deleteSaveItem()', function() {
        return !('test_id' in deleteSaveItem('test_id', true));
      }),
      new UnitTest('restoreDefaultSaveItems()', function() {
        var saved = restoreDefaultSaveItems();
        saved = JSON.stringify(saved);
        return (saved === localStorage.saved);
      }),
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
      this.report = ' PASS'
    }
  }
  catch(err) {
    this.report = ' FAIL:\n' + err;
  }
  console.log(this.testName + this.report);
  return this.testName + this.report;
}
