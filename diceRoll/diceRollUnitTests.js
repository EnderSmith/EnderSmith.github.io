document.addEventListener('DOMContentLoaded', function() {
  runTests(true);
});
var testGlobals = {
  sumArray: [
    {
      count: 4,
      dn: 'd6',
      negative: false,
      display: '4d6',
      expanded: '+d6+d6+d6+d6'
    },
    {
      count: 2,
      dn: 'd12',
      negative: true,
      display: '-2d12',
      expanded: '-d12-d12'
    },
    {
      count: 2,
      dn: '',
      negative: true,
      display: '-2',
      expanded: '-2'
    }
  ],
  sumArray_display: '4d6-2d12-2',
  sumArray_expanded: 'd6+d6+d6+d6-d12-d12-2',
}

function runTests(runTF) {
  if (runTF == true) {
    console.log('MEMORY FUNCTION TESTS:');
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
    console.log('DATA FUNCTION TESTS:');
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
        if (addendToDisplay(testGlobals.sumArray[2]) !== testGlobals.sumArray[2].display) {
          pass = false;
        }
        return pass;
      }),
      new UnitTest('sumArrayToDisplay()', function() {
        return (sumArrayToDisplay(testGlobals.sumArray) === testGlobals.sumArray_display);
      }),
      new UnitTest('addendExpand()', function() {
        var pass = true;
        if (addendExpand(testGlobals.sumArray[0]) !== testGlobals.sumArray[0].expanded) {
          pass = false;
        }
        if (addendExpand(testGlobals.sumArray[1]) !== testGlobals.sumArray[1].expanded) {
          pass = false;
        }
        if (addendExpand(testGlobals.sumArray[2]) !== testGlobals.sumArray[2].expanded) {
          pass = false;
        }
        return pass;
      }),
      new UnitTest('sumArrayExpand()', function() {
        return (sumArrayExpand(testGlobals.sumArray) === testGlobals.sumArray_expanded);
      }),
      new UnitTest('randomIntByDice()', function() {
        var pass = true;
        for (var i = 1; i <= 20; i++) {
          var randomInt = randomIntByDice('d' + i);
          if ( 0 < randomInt && randomInt > i) {
            pass = false;
          }
        }
        return pass;
      }),
      new UnitTest('subRandomIntForDice()', function() {
        return !(subRandomIntForDice(testGlobals.sumArray_expanded).includes('d'));
      }),
    ];
    console.log('DISPLAY FUNCTION TESTS:');
    passFail += [
      new UnitTest('toggleSaved()', function() {
        var result;
        if (g.contentStatus === content.calculator) {
          result = (toggleSaved() === content.savedMenu);
        } else if (g.contentStatus === content.savedMenu) {
          result = (toggleSaved() === content.calculator);
        }
        if (result === true) {
          toggleSaved();
        }
        return result;
      }),
      new UnitTest('printToInnerHTML()', function() {
        var replacePass = true;
        var addonPass = true;
        document.getElementById('dispIn').innerHTML = 'init';
        if (printToInnerHTML('dispIn', 'replaced', true) !== document.getElementById('dispIn').innerHTML) {
          replacePass = false;
        }
        if ('replaced' + printToInnerHTML('dispIn', ' added on') !== document.getElementById('dispIn').innerHTML) {
          addonPass = false;
        }
        return (replacePass && addonPass);
      }),
      new UnitTest('clearScreen()', function() {
        var clearIn = true;
        var clearOut = true;
        document.getElementById('dispIn').innerHTML = 'not clear in';
        document.getElementById('dispOut').innerHTML = 'not clear out';
        if (clearScreen() !== document.getElementById('dispIn').innerHTML) {
          clearIn = false;
        }
        if (clearScreen() !== document.getElementById('dispOut').innerHTML) {
          clearOut = false;
        }
        return (clearIn && clearOut);
      }),
      new UnitTest('clearSumArray()', function() {
        g.sumArray = [5, 4, 3, 2, 1];
        g.sumIndex = 5;
        var arr = '0,0';
        return (clearSumArray() === arr);
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
  this.context = context;
  return;
}
