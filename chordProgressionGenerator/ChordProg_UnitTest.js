function testing(testOn) {
  if (testOn != true) {return;}
  printTest_nullAddOn();
  printTest_trueAddOn();
  getRandomIntTest(1);
  fixKeyTest();
  mChordTest();
  fChordTest();
  progressTest();
  clearChordTest();
  generateTest();
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

function mChordTest() {
  var answerStr = "c d e f g am";
  var nextChord = mChord("em");
  if (answerStr.includes(nextChord) == true || nextChord == "dm") {
    console.log("mChordTest passed.\n\tem -> "+nextChord);
  } else {
    console.log("mChordTest failed.\n\treturned: " +
      nextChord+"\n\tinstead of: c dm d e f g or am.");
  }
}

function fChordTest() {
  var answerMjr = "c d e f g a bb";
  var answerMnr = "dm em fm am";
  var firstChord = fChord();
  if (answerMjr.includes(firstChord) == true || answerMnr.includes(firstChord) == true) {
    console.log("fChordTest passed.\n\t"+firstChord);
  } else {
    console.log("fChordTest failed.\n\treturned: " +
      firstChord+"\n\tinstead of: "+answerMjr+" "+answerMnr);
  }
}

function progressTest() {
  var override = {};
  override.fChord = "c";
  override.int = 3;
  var output = progress("c", override);
  if (output.includes("C C C") == true) {
    console.log("progressTest passed. \n\t" + output);
  } else {
    console.log("progressTest failed.")
  }
}

function clearChordTest() {
  var input = "test";
  document.getElementById('output').innerHTML = input;
  clearChord();
  var content = document.getElementById('output').innerHTML;
  if (content == "") {
    console.log("clearChordTest passed.")
  } else {
    console.log("clearChordTest failed.\n\t"+content);
  }
}

function generateTest() {
  var output = generate("c");
  var content = document.getElementById('output').innerHTML;
  if (content == output) {
    console.log("generateTest passed.");
  } else {
    console.log("generateTest failed.\n\t'"+content+"' != '"+output+"'.");
  }
  document.getElementById("output").innerHTML = "";
}
