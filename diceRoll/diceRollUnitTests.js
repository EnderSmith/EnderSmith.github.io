document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});
var testGlobals = {
  sumArray: [
    {
      count: 4,
      dn: 'd6',
      negative: false,
      display: '4d6'
    },
    {
      count: 2,
      dn: '',
      negative: true,
      display: '-2'
    }
  ],
  sumArray_display: '4d6-2'
}

function runTests(runTF) {
  if (runTF == true) {
    console.log('MEMORY FUNCTION UNIT TESTS:')
    var passFail = [
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
      })
    ];
    console.log('DATA MANIPULATION TESTS:')
    passFail += [
      new UnitTest('new Addend()', function() {
        var blankAddend = new Addend();
        var pass = true;
        if (blankAddend.count !== 0) {
          pass = false;
        }
        if (blankAddend.dn !== '') {
          pass = false;
        }
        if (blankAddend.negative !== false) {
          pass = false;
        }
        return pass;
      }),
      new UnitTest('addendChange()', function() {
        var pass = true;
        var workingAddend = addendChange('d4', '', true);
        if (workingAddend.dn !== 'd4') {
          pass = false;
        }
        workingAddend = addendChange(4, workingAddend);
        if (workingAddend.count !== 4) {
          pass = false;
        }
        workingAddend = addendChange('-', workingAddend);
        if (workingAddend.negative !== true) {
          pass = false;
        }
        workingAddend = addendChange('+', workingAddend);
        if (workingAddend.negative !== false) {
          pass = false;
        }
        return pass;
      }),
      new UnitTest('addendToDisplay()', function() {
        var pass = true;
        if (addendToDisplay(testGlobals.sumArray[0]) !== testGlobals.sumArray[0].display) {
          pass = false;
        }
        if (addendToDisplay(testGlobals.sumArray[1]) !== testGlobals.sumArray[1].display) {
          pass = false;
        }
        return pass;
      }),
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
    if (!functionToBeTested()) {
      throw '\t\tunexpected result';
    }
    this.report = ' PASS';
  }
  catch(err) {
    this.report = ' FAIL:\n' + err;
  }
  console.log('\t' + this.testName + this.report);
  return this.testName + this.report;
}
