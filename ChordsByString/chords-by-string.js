document.addEventListener("DOMContentLoaded", function() {
  var capo = 0;
  var output;
  document.getElementById("nxt").addEventListener("click", function() {
    capo++;
    output = searchWires(noteToNum(getWires()), noteToNum(getChecks()), capo);
    document.getElementById("out").innerHTML = output;
  });
  document.getElementById("nw").addEventListener("click", function() {
    capo = 0;
    output = searchWires(noteToNum(getWires()), noteToNum(getChecks()));
    document.getElementById("out").innerHTML = output;
  });

});

function findNote(wireNote, tgtNoteArray, capo) {
  if (capo == undefined) { capo = 0; }
  var fretNum = capo;
  var fretNote = (fretNum + wireNote) % 12;
  while (tgtNoteArray.indexOf(fretNote) == -1) {
    fretNum++;
    fretNote = (fretNum + wireNote) % 12;
    if (fretNum >= 25) {
      fretNum = "X";
      // console.log(fretNum);
      return fretNum;
    }
  }
  // console.log(fretNum);
  return fretNum;
}

function noteToNum(noteArray) {
  var numArray = [];
  for (var i = 0; i < noteArray.length; i++) {
    numArray[i] = notes[noteArray[i]];
  }
  // console.log(numArray);
  return numArray;
}

function getChecks() {
  var noteArray = [];
  var arrayPos = 0;
  for (var i = 0; i < 12; i++) {
    var chCur = document.getElementById("ch" + i);
    if (chCur.checked == true) {
      noteArray[arrayPos] = chCur.value;
      arrayPos++;
    }
  }
  // console.log(noteArray);
  return noteArray;
}

function getWires() {
  var wireArray = [];
  for (var i = 0; i < 6; i++) {
    var wireCur = document.getElementById("wire" + i);
    if (wireCur.selected != "") {
      wireArray[i] = wireCur.value;
    } else {
      wireArray[i] = "X"
    }
  }
  // console.log(wireArray);
  return wireArray;
}

function searchWires(wireArray, noteArray, capo) {
  var chordArray = [];
  for (var i = 0; i < wireArray.length; i++) {
    chordArray[i] = findNote(wireArray[i], noteArray, capo);
  }
  // console.log(chordArray);
  return chordArray;
}
