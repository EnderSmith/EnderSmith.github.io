function testing(testOn) {
  if (testOn != true) {return;}
  printTest_nullAddOn();
  printTest_trueAddOn();
  getRandomIntTest(1);
  fixKeyTest();
}

function printTest_nullAddOn() {
  var txt = "test";
  var printedTxt = "";
  print(txt, "test");
  printedTxt = document.getElementById('test').innerHTML;
  if (printedTxt == txt) {
    console.log("printTest_nullAddOn passed.");
  } else {
    console.log("printTest_nullAddOn failed.\n\t'" +
      printedTxt + "' != '" + txt + "'.");
  }
}

function printTest_trueAddOn() {
  document.getElementById('test').innerHTML = "this is a ";
  var txt = "test";
  var printedTxt = "";
  print(txt, "test", true);
  printedTxt = document.getElementById('test').innerHTML;
  if (printedTxt == "this is a test") {
    console.log("printTest_trueAddOn passed.");
  } else {
    console.log("printTest failed.\n\t'" +
      printedTxt + "' != 'this is a test'.\n\t");
  }
}

function getRandomIntTest(iteratn) {
  var randInt = getRandomInt(2, 4);
  if (randInt < 2 || randInt > 4) {
    console.log("getRandomIntTest failed.\n\tproduced int out of range: " + randInt);
  } else {
    console.log("getRandomIntTest passed.")
  }
}

function fixKeyTest() {
  var chordArray = ["c", "dm", "d", "em", "e", "fm", "f", "g", "am", "a", "bb"];
  var answerStr = "Ab Bbm Bb Cm C Dbm Db Eb Fm F Gb <br>";
  var output = fixKey("ab", chordArray, 11);
  if (output == answerStr) {
    console.log("fixKeyTest passed.")
  } else {
    console.log("fixKeyTest failed.\n\treturned: " + output + "\n\tinstead of: " + answerStr);
  }
}
