

// Script Landingpage/ Navigation Bar/

var navlinks = document.getElementById("nav-links");
        
        var menuIcon = document.getElementById("icon-menu");
        var closeIcon = document.getElementById("icon-close");

        function showMenu() {
            navlinks.style.right = "0";
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        }

        function hideMenu() {
            navlinks.style.right = "-200px";
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
        }

// Script Launch Countdown


      
    //   Launch Countdown Script


const secondsEl = document.querySelector('.seconds .number');
const minutesEl = document.querySelector('.minutes .number');
const hoursEl = document.querySelector('.hours .number');
const daysEl = document.querySelector('.days .number');

const endTime = new Date("2023-11-12T00:00:00");

function updateCountdown() {
    const now = new Date();
    const difference = endTime - now;

    if (difference <= 0) {
        clearInterval(interval);
        return;
    }

    const daysValue = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secValue = Math.floor((difference % (1000 * 60)) / 1000);

    secondsEl.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutesEl.textContent = minValue < 10 ? `0${minValue}` : minValue;
    hoursEl.textContent = hoursValue < 10 ? `0${hoursValue}` : hoursValue;
    daysEl.textContent = daysValue < 10 ? `0${daysValue}` : daysValue;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();