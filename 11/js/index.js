var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var adressEl = document.getElementById('adress');
var citiesEl = document.getElementById('cities');
var hobbiesEl = document.getElementById('hobbies');
var wrapperImg = document.getElementById('wrapper-img');
var avatarWrapperEl = document.getElementById('avatar-wrapper');
var numberList = document.getElementById('list');

function alertValue() {
        console.log(firstNameEl.value);
        console.log(lastNameEl.value);
        console.log(adressEl.value);
        console.log(citiesEl.value);
}


firstNameEl.value = 'Dima';
console.log('1');
console.log('2');
console.log('3');


lastNameEl.className = 'last-name default-input error-input';
alertValue();

wrapperImg.src = 'https://play-lh.googleusercontent.com/jG_lHmBh6kkwqH4YPFPSfmeamlWPxM1QGJp1g88PnMzZRGI7OKQ8gWg7bYdlw-3vs3JM=s128';
alertValue();


wrapperImg.title = 'i am avatar';

alertValue();

lastNameEl.title = 'wrong last-name';
alertValue();


citiesEl.value = 'Msk';

alertValue();
hobbiesEl.value = 'hey lessons JS';

alertValue();
avatarWrapperEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';





//alert(numberList.innerHTML);
/* alert(firstNameEl.value);
alert(lastNameEl.value);
alert(adressEl.value);
alert(citiesEl.value);
alert(hobbiesEl.value);
alert(wrapperImg.src); */