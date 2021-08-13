// function play() {
//     var audio = document.getElementById("audio");
//     audio.play();
// }

// function turnlight() {
//     var body = document.body;
//     body.classList.add("light");
// }

const month = document.querySelector('.month-name');
const date = document.querySelector('.number');

const getballoon = document.querySelector('.balloon');
const getcalendar = document.querySelector('.calendar');
const gettypedtext = document.querySelector('.typedtext');
const getcountdown = document.querySelector('.countdownnum');
const getheartbtn = document.querySelector('.heart-btn');
const getbanner = document.querySelector('.banner img');
const getcat = document.querySelector('.cat img');
const getstreamer = document.querySelector('.streamer');
const getswingpic = document.querySelector('.swing');
const getcake = document.querySelector('.cake img');
const getbutterfly = document.querySelector('.butterfly img');
const getwishmesg = document.querySelector('.wishmesg');
const getshinemessage = document.querySelector('.btn-shine');
const gethappy30 = document.querySelector('.hbwrapper');
// console.log(document.querySelector('.swing img'));



const chgimg = document.querySelector('.swing img');


// Typing Text
var text = "Sayar ...Today is your special day! I've prepared this tiny little thing for you ... ENJOY IT";

var speed = 100;
var index = 1;

function autotext() {
  gettypedtext.innerHTML = text.slice(0, index);

  index++;
  setTimeout(autotext, speed);
}



const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const dateObj = new Date()
const monthNumber = dateObj.getMonth()
const monthName = monthNames[monthNumber];
const monthDate = dateObj.getDate();

month.innerHTML = monthName;
date.innerHTML = monthDate;

setTimeout(function () {
  getcalendar.style.display = 'none';
}, 2000);


setTimeout(function () {
  getballoon.style.display = 'block';
}, 2000);

setTimeout(function () {
  gettypedtext.style.display = 'block';
  autotext();
}, 2500);


setTimeout(function () {
  getballoon.remove();
  gettypedtext.remove();
}, 14000);

setTimeout(function () {
  getcountdown.style.display = 'block';
}, 14000);

setTimeout(function () {
  getcountdown.remove();
}, 18000);

setTimeout(function () {
  getballoon.remove();
  gettypedtext.remove();
  getcountdown.remove();
}, 19000);


setTimeout(function () {
  getheartbtn.style.display = 'block';
}, 19000);

getheartbtn.addEventListener('click', () => {
  playaudio();

  getbanner.style.display = 'block';

});

function playaudio() {
  var audio = document.getElementById("audio");
  audio.play();
}


setTimeout(function () {
  getheartbtn.remove();
  getstreamer.style.display = 'block';
  getcat.style.display = 'block';

}, 25000);


setTimeout(function () {
  getstreamer.style.display = 'none';
  getbanner.remove;
}, 30000);

setTimeout(function () {
  getswingpic.style.display = 'block';
  getbutterfly.style.display = 'block';
}, 30000);

setTimeout(function () {
  getcake.style.display = 'block';
}, 35000);

setTimeout(function () {
  getcake.style.display = 'block';
}, 35000);

setTimeout(function () {
  getcake.style.display = 'none';
  getcat.style.display = 'none';
  getbanner.style.display = 'none';
}, 40000);


setTimeout(function () {
  getwishmesg.style.display = 'block';
  wish();
}, 40000);


var wishmesg = "Happy Birthday To A Great Software Developer, my beloved teacher " +
  "who has the most beautiful soul, I feel very grateful and fortunate to say that I have been a student of yours!";
var wishspeed = 150;
var idx = 1;
function wish() {
  getwishmesg.innerHTML = wishmesg.slice(0, idx);

  idx++;
  setTimeout(wish, wishspeed);
}

setTimeout(function () {
  getwishmesg.remove();
  getbutterfly.remove();
  getshinemessage.style.display = 'block';

  chgimg.src = "img/sayar_1.jpg";

}, 70000);

setTimeout(function () {
  getshinemessage.remove();
  gethappy30.style.display = 'block';
}, 76000);






















