document.addEventListener("DOMContentLoaded", function() {strHTML(14, 10)});

function strHTML(h, w) {
  var htmlStr = "<table cellspacing='0' cellpadding='0'>";
  for (var r = 0; r < h; r++) {
    htmlStr += "<tr>"
    for (var s = 0; s < w; s++) {
      var btnId = "btn_" + r + s;
      htmlStr += createBtn(btnId);
    }
    htmlStr += "</tr><tr>";
  }
  htmlStr += "</tr></table>"
  document.getElementById('btnFrame').innerHTML = htmlStr;
  addListeners();
}

function addListeners() {
  var btnList = document.getElementsByClassName("btn");
  for (var i = 0; i < btnList.length; i++) {
    var btnId = btnList[i].id;
    new BtnListener(btnId);
  }
}

function BtnListener(id) {
  var idTemp = id;
  document.getElementById(idTemp).addEventListener('click', function() {clrChange(idTemp)});
}

function createBtn(id) {
  var htmlStr = "<td class='btn blank' id='"+id+"'></td>";
  return htmlStr;
}

function clrChange(id) {
  if (document.getElementById(id).className.includes("blank")) {
      document.getElementById(id).className = "btn black";
  } else if (document.getElementById(id).className.includes("black")) {
      document.getElementById(id).className = "btn blank";
  }
}
