function runTests(runTF) {
  if (runTF == true) {
    var testAddend = new Addend();
    // document.getElementById('dispIn').innerHTML = 'runTest == true';
    // document.getElementById('dispOut').innerHTML = 'runTest == true';
    var passFail = [
      // new UnitTest('randomIntByDice', randomIntByDice('d1'), 1),
      // new UnitTest('subRandomIntForDice', subRandomIntForDice('d1 + 3'), '(1) + 3'),
      // new UnitTest('arrayToEquation', arrayToEquation([2,'+',700]), '2+700'),
      // new UnitTest('printToInnerHTML-replace', printToInnerHTML('forUnitTests', 'test', true), 'test'),
      // new UnitTest('printToInnerHTML-append', printToInnerHTML('forUnitTests', ' test', false), 'test test'),
      // new UnitTest('clearScreen-inputLine', clearScreen('dispOut'), ''),
      // new UnitTest('clearScreen-outputLine', clearScreen('dispIn'), ''),
      // new UnitTest('key_first', key_first('1'), '1,1'),
      // new UnitTest('key_numberAfterNumber', key_numberAfterNumber('0'), '10,1'),
      // new UnitTest('key_diceAfterNumber', key_diceAfterNumber('d20'), '10,19'),
      // new UnitTest('key_operator', key_operator('+'), '+,20'),
      // new UnitTest('clearInputArray', clearInputArray(), '0,0'),
      // new UnitTest('keypadPress-first', keypadPress('1'), '1,1'),
      // new UnitTest('keypadPress-numberAfterNumber', keypadPress('0'), '0,0'),
      // new UnitTest('keypadPress-diceAfterNumber', keypadPress('d2'), 'd2,d2'),
      // new UnitTest('keypadPress-diceAfterDice', keypadPress('d2'), 'd2,'),
      // new UnitTest('keypadPress-numberAfterDice', keypadPress('2'), '2,'),
      // new UnitTest('lazinessTest', clearScreen(clearScreen()), ''),
      // new UnitTest('roll', roll(['d1','+','d1']), '2 [(1)+(1)] <br><br>'),
      // new UnitTest('lazinessTest_redux', clearScreen(clearScreen()), '')

      new UnitTest('sumArrayToDisplay', sumArrayToDisplay([{count: 12, dn: 'd6', negative: false}, {count: 1, dn: 'd4', negative: true}, {count: 3, dn: '', negative: false}]), '12d6-1d4+3'),

      new UnitTest('number', addendChange(4, testAddend).count + testAddend.dn, 4),
      new UnitTest('number to display', addendToDisplay(testAddend), '4'),
      new UnitTest('dice', addendChange('d4', testAddend).count + testAddend.dn, '4d4'),
      new UnitTest('dice to display', addendToDisplay(testAddend), '4d4'),
      new UnitTest('negative', addendChange('-', testAddend).count + testAddend.dn + testAddend.negative, '4d4true'),
      new UnitTest('negative to display', addendToDisplay(testAddend), '-4d4'),
      new UnitTest('positive', addendChange('+', testAddend).count + testAddend.dn + testAddend.negative, '4d4false'),
      new UnitTest('positive to display', addendToDisplay(testAddend), '4d4'),

      new UnitTest('keypadPresse first num', keypadPresse(4, true), '4'),
      new UnitTest('keypadPresse dicenext', keypadPresse('d8', true), '4d8'),
      new UnitTest('keypadPresse dice twice', keypadPresse('d8', true), '5d8'),
      new UnitTest('keypadPresse dice different', keypadPresse('d10', true), '1d10'),
      new UnitTest('keypadPresse minus', keypadPresse('-', true), '-0'),
      new UnitTest('keypadPresse number after sign', keypadPresse(10, true), '-10'),
      new UnitTest('keypadPresse minus before plus', keypadPresse('-', true), '-0'),
      new UnitTest('keypadPresse plus after minus', keypadPresse('+', true), '0'),
      new UnitTest('keypadPresse dice before number', keypadPresse('d20', true), '1d20'),
      new UnitTest('keypadPresse number after dice', keypadPresse(3, true), '3'),
      new UnitTest('keypadPresse number after number', keypadPresse(3, true), '33'),

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
    // console.log(this.report);
    return this.report;
  } else {
    this.report = this.functionToBeTested + '\n\tFailed.\n\tReturned: ' + this.functionReturned;
    console.log(this.report);
    return this.report;
  }
}
