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

      new UnitTest('keypadPress first num', keypadPress(4, true), '4'),
      new UnitTest('keypadPress dicenext', keypadPress('d8', true), '4d8'),
      new UnitTest('keypadPress dice twice', keypadPress('d8', true), '5d8'),
      new UnitTest('keypadPress dice different', keypadPress('d10', true), '1d10'),
      new UnitTest('keypadPress minus', keypadPress('-', true), '-0'),
      new UnitTest('keypadPress number after sign', keypadPress(10, true), '-10'),
      new UnitTest('keypadPress minus before plus', keypadPress('-', true), '-0'),
      new UnitTest('keypadPress plus after minus', keypadPress('+', true), '0'),
      new UnitTest('keypadPress dice before number', keypadPress('d20', true), '1d20'),
      new UnitTest('keypadPress number after dice', keypadPress(3, true), '3'),
      new UnitTest('keypadPress number after number', keypadPress(3, true), '33'),

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
