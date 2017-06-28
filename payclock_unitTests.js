function startTests() {
  test_startTime();
  test_checkTime();
  test_getTime();
  test_print();
  test_startPay();
  test_addPay();
}

function test_startTime() {
  if (startTime(true) == document.getElementById('clock').innerHTML) {
    console.log('startTime: pass');
  } else {
    console.log('startTime: failed');
  }
}

function test_checkTime() {
  if (checkTime(1) == "01") {
    console.log('checkTime: pass');
  } else {
    console.log('checkTime: failed');
  }
}

function test_getTime() {
  if (getTime().includes('undefined') != true) {
    console.log('getTime: pass');
  } else {
    console.log('getTime: failed');
  }
}

function test_print() {
  print('test print', 'printHere');
  if (document.getElementById('printHere').innerHTML == "test print") {
    console.log('print: pass');
  } else {
    console.log('print: failed');
  }
}

function test_startPay() {
  var forTest = startPay(3600, "0.00", true);
  if (forTest == 1.00) {
    console.log('startPay: pass');
  } else {
    console.log('startPay: failed');
  }
}
function test_addPay() {
  var forTest = addPay(1, "0.00", true);
  if (document.getElementById('pay').innerHTML == "0.00" && forTest == 1.00) {
    console.log('addPay: pass');
  } else {
    console.log('addPay: failed');
  }
}
