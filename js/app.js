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
const chgimg = document.querySelector('.swing img');
const getcardbtn = document.querySelector('.heart-btn-card');
const getwishcard = document.querySelector('.card');


// console.log(document.querySelector('.swing img'));

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const dateObj = new Date()
const monthNumber = dateObj.getMonth()
const monthName = monthNames[monthNumber];
const monthDate = dateObj.getDate();

month.innerHTML = monthName;
date.innerHTML = monthDate;

setTimeout(function() {
    getcalendar.style.display = 'none';
}, 3000);


setTimeout(function() {
    getballoon.style.display = 'block';
}, 3000);


// Typing Text
var text = "Sayar ...Today is your special day! I've prepared this tiny little thing for you ... ENJOY IT";

var speed = 100;
var index = 1;

function autotext() {
    gettypedtext.innerHTML = text.slice(0, index);

    index++;
    setTimeout(autotext, speed);
}

setTimeout(function() {
    gettypedtext.style.display = 'block';
    autotext();
}, 3000);

setTimeout(function() {
    getballoon.remove();
    gettypedtext.remove();
}, 14000);

setTimeout(function() {
    getcountdown.style.display = 'block';
}, 14000);

setTimeout(function() {
    getcountdown.remove();
}, 18000);

setTimeout(function() {
    getballoon.remove();
    gettypedtext.remove();
    getcountdown.remove();
}, 19000);

setTimeout(function() {
    getheartbtn.style.display = 'block';
}, 19000);

getheartbtn.addEventListener('click', () => {
    playaudio();

    getbanner.style.display = 'block';

    setTimeout(function() {
        getheartbtn.remove();
        getstreamer.style.display = 'block';
        getcat.style.display = 'block';

    }, 2000);


    setTimeout(function() {
        // getstreamer.style.display = 'none';
        getbanner.remove;
    }, 9000);

    setTimeout(function() {
        getstreamer.style.display = 'none';
        getswingpic.style.display = 'block';
        getbutterfly.style.display = 'block';
    }, 10000);

    // setTimeout(function() {
    //     getcake.style.display = 'block';
    // }, 15000);

    setTimeout(function() {
        getcake.style.display = 'block';
    }, 15000);

    setTimeout(function() {
        getcake.style.display = 'none';
        getcat.style.display = 'none';
        getbanner.style.display = 'none';
    }, 18000);


    setTimeout(function() {
        getwishmesg.style.display = 'block';
        wish();
    }, 18000);


    var wishmesg = "Happy Birthday To A Great Software Developer, my beloved teacher " +
        "who has the most beautiful soul, I feel very grateful and fortunate to say that I have been a student of yours!";
    var wishspeed = 150;
    var idx = 1;

    function wish() {
        getwishmesg.innerHTML = wishmesg.slice(0, idx);

        idx++;
        setTimeout(wish, wishspeed);
    }

    setTimeout(function() {
        getwishmesg.remove();
        getbutterfly.remove();
        getshinemessage.style.display = 'block';

        chgimg.src = "img/sayar_1.jpg";

    }, 48000);

    setTimeout(function() {
        getshinemessage.remove();
        gethappy30.style.display = 'block';
    }, 55000);

    setTimeout(function() {
        getshinemessage.remove();
        gethappy30.style.display = 'block';
        getcardbtn.style.display = 'block';
        chgimg.src = "img/sayar_2.jpg";
    }, 55000);

    getcardbtn.addEventListener('click', () => {
        getwishcard.style.display = 'block';
        gethappy30.style.display = 'none';
        getcardbtn.style.display = 'none';
        getwishcard.style.display = 'block';
    });

});

function playaudio() {
    var audio = document.getElementById("audio");
    audio.play();
}