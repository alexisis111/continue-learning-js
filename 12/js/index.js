
function alertValues(elPar) {
       // console.log(elPar.value);
       // console.log(elPar.className);
}

var firstNameEl = document.getElementById('first-name');
alertValues(firstNameEl);
var lastNameEl = document.getElementById('last-name');
alertValues(lastNameEl);
var adressEl = document.getElementById('adress');
alertValues(adressEl);
var citiesEl = document.getElementById('cities');
alertValues(citiesEl);
var hobbiesEl = document.getElementById('hobbies');
alertValues(hobbiesEl);
var wrapperImg = document.getElementById('wrapper-img');
var avatarWrapperEl = document.getElementById('avatar-wrapper');
var numberList = document.getElementById('list');




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