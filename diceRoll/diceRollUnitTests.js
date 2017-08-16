document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});

function runTests(runTF) {
  if (runTF == true) {
    var testAddend = new Addend();
    // document.getElementById('dispIn').innerHTML = 'runTest == true';
    // document.getElementById('dispOut').innerHTML = 'runTest == true';
    var passFail = [
    
      new UnitTest('simulateFirstVisit()', simulateFirstVisit(true), '{}'),
      new UnitTest('checkMemory()', checkMemory(), 'true'),
      new UnitTest('new SaveItem()', new SaveItem('test_id', 'test_name', ['test', 'array']).id, JSON.parse(localStorage.saved)['test_id'].id),
      new UnitTest('loadMemory()', loadMemory().includes("id='delete_test_id'>"), true),
      new UnitTest('deleteSaveItem()', !('test_id' in deleteSaveItem('test_id', true)), true),
      new UnitTest('restoreDefaultSaveItems()', restoreDefaultSaveItems()['longsword'].id, JSON.parse(localStorage.saved)['longsword'].id)
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
  this.functionToBeTested = testName;
  this.functionReturned = functionToBeTested;
  if (this.functionReturned == expectedOutput) {
    this.report = this.functionToBeTested + '\n\tPassed.\n\tReturned: ' + this.functionReturned;
    console.log(this.report);
    return this.report;
  } else {
    this.report = this.functionToBeTested + '\n\tFailed.\n\tReturned: ' + this.functionReturned;
    console.log(this.report);
    return this.report;
  }
}
