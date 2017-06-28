function btnListen() {
  document.getElementById('dim0').addEventListener("click", function() { dispDie(0); } );
  document.getElementById('dim1').addEventListener("click", function() { dispDie(1); } );
  document.getElementById('dim2').addEventListener("click", function() { dispDie(2); } );
  document.getElementById('dim3').addEventListener("click", function() { dispDie(3); } );
  document.getElementById('dim4').addEventListener("click", function() { dispDie(4); } );
  document.getElementById('roll').addEventListener("click", function() { rollDie(); } );
}

function dispDie(dimNum) {
  dimNum = "dim" + dimNum;
  var btnText = document.getElementById(dimNum).innerHTML;
  document.getElementById('dispDie').innerHTML = btnText;
}

function rollDie() {
  var dimNum = whichDie();
  var result = randByDim(dimNum);
  document.getElementById('dispRoll').innerHTML = result;
}

function whichDie() {
  var chsnDie = document.getElementById('dispDie').innerHTML;
  if (chsnDie.includes("Select a Die") == true) {
    return;
  } else {
    var dimNum = parseInt(chsnDie);
    return dimNum;
  }
}

function randByDim(dimNum) {
  var byDim;
  if (dimNum == 4) {
    byDim = randCell();
  } else if (dimNum == 3) {
    byDim = "Cell: 1 (100% chance) <br>";
  } else {
    byDim = "Cell: none <br>";
  }
  if (dimNum >= 3) {
    byDim += randFace();
  } else if (dimNum == 2) {
    byDim += "Face: 1 (100% chance) <br>";
  } else {
    byDim += "Face: none <br>"
  }
  if (dimNum >= 2) {
    byDim += randEdge();
  } else if (dimNum == 1) {
    byDim += "Edge: 1 (100% chance) <br>";
  } else {
    byDim += "Edge: none <br>"
  }
  if (dimNum >= 1) {
    byDim += randVert();
  } else if (dimNum == 0) {
    byDim += "Vertex: 1 (100% chance) <br>";
  } else {
    byDim += "Vertex: none <br>"
  }
  return byDim;
}

function randCell() {
  var rollCell = 1 + Math.round(Math.random()*7);
  var result = "Cell: " + rollCell + " (12.5% chance) <br>";
  return result;
}
function randFace() {
  var rollFace = 1 + Math.round(Math.random()*5);
  var result = "Face: " + rollFace + " (16.67% chance) <br>";
  return result;
}
function randEdge() {
  var rollEdge = 1 + Math.round(Math.random()*3);
  var result = "Edge: " + rollEdge + " (25% chance) <br>";
  return result;
}
function randVert() {
  var rollVert = 1 + Math.round(Math.random());
  var result = "Vertex: " + rollVert + " (50% chance) <br>";
  return result;
}
