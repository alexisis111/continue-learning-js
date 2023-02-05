var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var adressEl = document.getElementById('adress');
var citiesEl = document.getElementById('cities');
var hobbiesEl = document.getElementById('hobbies');
var wrapperImg = document.getElementById('wrapper-img');
var avatarWrapperEl = document.getElementById('avatar-wrapper');


firstNameEl.value = 'Dima';
lastNameEl.className = 'last-name default-input error-input';
wrapperImg.src = 'https://play-lh.googleusercontent.com/jG_lHmBh6kkwqH4YPFPSfmeamlWPxM1QGJp1g88PnMzZRGI7OKQ8gWg7bYdlw-3vs3JM=s128';
wrapperImg.title = 'i am avatar';
lastNameEl.title = 'wrong last-name';
citiesEl.value = 'Msk2';
hobbiesEl.value = 'hey lessons JS';
avatarWrapperEl.innerHTML = '<ul id=\'list\'><li>1</li><li>2</li></ul>';
var numberList = document.getElementById('list');
alert(numberList.innerHTML);
        /* alert(firstNameEl.value);
alert(lastNameEl.value);
alert(adressEl.value);
alert(citiesEl.value);
alert(hobbiesEl.value);
alert(wrapperImg.src); */