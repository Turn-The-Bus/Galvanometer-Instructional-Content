let currentScreen = 1;
const totalScreens = 4;

const colors = {
    1: "#FEEB8F",
    2: "#FF978C",
    3: "#A3ABFF",
    4: "#FFFFFF"
};

function showScreen(screenNumber) {
    const screens = document.querySelectorAll('.screen');
    const dots = document.querySelectorAll('.dot');

    screens.forEach(screen => screen.classList.remove('active'));
    if (screenNumber < 4) {
        dots.forEach(dot => dot.classList.remove('active'));
    }

    document.getElementById(`screen${screenNumber}`).classList.add('active');
    if (screenNumber < 4) {
        dots[screenNumber - 1].classList.add('active');
    }
    document.body.style.backgroundColor = colors[screenNumber];
    currentScreen = screenNumber;

    // Hide navigation dots on screen 4
    const navigation = document.querySelector('.navigation');
    if (screenNumber === 4) {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
}

function goBack() {
    if (currentScreen > 1) {
        showScreen(currentScreen - 1);
    }
}

function startCourse() {
    alert('Course started!');
}

// Initialize the first screen as active and set the background color
document.addEventListener('DOMContentLoaded', () => {
    showScreen(1);
    document.body.style.backgroundColor = colors[1];
});

// Swipe functionality
let touchstartX = 0;
let touchendX = 0;

const container = document.getElementById('container');

container.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    if (touchendX < touchstartX) {
        // Swiped left
        if (currentScreen < totalScreens) {
            showScreen(currentScreen + 1);
        }
    }
    if (touchendX > touchstartX) {
        // Swiped right
        if (currentScreen > 1) {
            showScreen(currentScreen - 1);
        }
    }
}
