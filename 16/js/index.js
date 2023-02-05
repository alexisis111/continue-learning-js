
function alertValues(elPar) {
       // console.log(elPar.value);
       // console.log(elPar.className);
}
function getEl(id) { 
       console.log('somebody wonts find el by id');
       var el = document.getElementById(id);
       return el;
 }

var firstNameEl = getEl('first-name');
alertValues(firstNameEl);
var lastNameEl = getEl('last-name');
alertValues(lastNameEl);
var adressEl = getEl('adress');
alertValues(adressEl);
var citiesEl = getEl('cities');
alertValues(citiesEl);
var hobbiesEl = getEl('hobbies');
alertValues(hobbiesEl);
var wrapperImg = getEl('wrapper-img');
var avatarWrapperEl = getEl('avatar-wrapper');
var numberList = getEl('list');




firstNameEl.value = 'Dima';
lastNameEl.className = 'last-name default-input error-input';
wrapperImg.src = 'https://play-lh.googleusercontent.com/jG_lHmBh6kkwqH4YPFPSfmeamlWPxM1QGJp1g88PnMzZRGI7OKQ8gWg7bYdlw-3vs3JM=s128';
wrapperImg.title = 'i am avatar';
lastNameEl.title = 'wrong last-name';
citiesEl.value = 'Msk';
hobbiesEl.value = 'hey lessons JS';
avatarWrapperEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';





//alert(numberList.innerHTML);
/* alert(firstNameEl.value);
alert(lastNameEl.value);
alert(adressEl.value);
alert(citiesEl.value);
alert(hobbiesEl.value);
alert(wrapperImg.src); */