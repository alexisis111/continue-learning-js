function addErrorClass (elId) { 
    var el = document.getElementById(elId);
    el.className = 'error-input ';
 }

function addErrorClassToAllInputs() { 
    addErrorClass('first-name');
    addErrorClass('last-name');
    addErrorClass('address');
 }

//setTimeout(addErrorClassToAllInputs, 3000);
/* 
var sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', addErrorClassToAllInputs); */
function onFirstNameKeyDown() {
    addErrorClass('first-name');
  }
var onFirstNameKeyDownFindEl = document.getElementById('first-name');
onFirstNameKeyDownFindEl.addEventListener('keydown',onFirstNameKeyDown )