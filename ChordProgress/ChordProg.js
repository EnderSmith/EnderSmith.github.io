function generate() {

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fChord() {
  var percent = Math.random();
  var chord = "";
  var x;
  for (x in probChord) {
    if (probChord[x].first >= percent) {
      chord = x;
      return chord;
    }
  }
}

function mChord(prevChord) {
  var percent = Math.random();
  var chord = "";
  var p;
  var x;
  for (p in probChord){
    if (p == prevChord) {
      for (x in probChord[p].next) {
        if (probChord[p].next[x] >= percent) {
          chord = x;
          return chord;
        }
      }
    }
  }
}

function print(input, getId, addOn) {
  if (addOn != true) {
    document.getElementById(getId).innerHTML = input;
  } else {
    document.getElementById(getId).innerHTML += input;
  }
}

function progress() {
  var startChord = fChord();
  var prog = [startChord];
  var progString = probChord[prog[0]].name.toString() + " ";
  var progLength = getRandomInt(2, 7);
  for (i = 1; i < progLength; i++) {
    j = i-1;
    prog[i] = mChord(prog[j]);
    // console.log(prog[j]);
    progString += probChord[prog[i]].name + " ";
  }
  print(progString, 'output');
}
