function runTests(runTF) {
  if (runTF == true) {
    document.getElementById('dispIn').innerHTML = 'runTest == true';
    document.getElementById('dispOut').innerHTML = 'runTest == true';
    var passFail = [
      new ProtoTest('randomIntByDice', randomIntByDice('d1'), 1),
      new ProtoTest('subRandomIntForDice', subRandomIntForDice('d1 + 3'), '(1) + 3'),
      new ProtoTest('arrayToEquation', arrayToEquation([2,'+',700]), '2+700'),
      new ProtoTest('printToInnerHTML-replace', printToInnerHTML('forUnitTests', 'test', true), 'test'),
      new ProtoTest('printToInnerHTML-append', printToInnerHTML('forUnitTests', ' test', false), 'test test'),
      new ProtoTest('clearScreen-inputLine', clearScreen('dispOut'), ''),
      new ProtoTest('clearScreen-outputLine', clearScreen('dispIn'), ''),
      new ProtoTest('key_first', key_first('1'), '1,1'),
      new ProtoTest('key_numberAfterNumber', key_numberAfterNumber('0'), '10,1'),
      new ProtoTest('key_diceAfterNumber', key_diceAfterNumber('d20'), '10,19'),
      new ProtoTest('key_operator', key_operator('+'), '+,20'),
      new ProtoTest('clearInputArray', clearInputArray(), '0,0'),
      new ProtoTest('keypadPress-first', keypadPress('1'), '1,1'),
      new ProtoTest('keypadPress-numberAfterNumber', keypadPress('0'), '0,0'),
      new ProtoTest('keypadPress-diceAfterNumber', keypadPress('d2'), 'd2,d2'),
      new ProtoTest('keypadPress-diceAfterDice', keypadPress('d2'), 'd2,'),
      new ProtoTest('keypadPress-numberAfterDice', keypadPress('2'), '2,'),
      new ProtoTest('lazinessTest', clearScreen(clearScreen()), ''),
      new ProtoTest('roll', roll(['d1','+','d1']), '2 [(1)+(1)] <br>'),
      new ProtoTest('lazinessTest_redux', clearScreen(clearScreen()), '')
    ];
  } else {
    return;
  }
}

function ProtoTest(testName, functionToBeTested, expectedOutput) {
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
