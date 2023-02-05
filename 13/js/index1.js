function LogValue(id) {
    var el = document.getElementById(id);
    console.log(el.value);
}

function getValue(id) {
    var el = document.getElementById(id);
    return el.value;
}

var firstNameId = 'first-name';
var lastNameId = 'last-name';

var value = getValue(firstNameId);

LogValue(firstNameId);
LogValue(lastNameId);
