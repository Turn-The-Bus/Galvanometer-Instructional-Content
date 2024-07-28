// commented out since already defined in main.js
// const correctColorDark = "#2B7D2F";
// const correctColorLight = "#E9FAEA";
// const incorrectColorDark = "#C92525";
// const incorrectColorLight = "#FFEFEF";
// const sysColorPrimaryDark = "#004A76";
// const sysColorPrimaryBright = "#047DB7";
// const sysColorPrimaryLight = "#DFF3FF";
// const sysOutlineColor = "#79747E";

// Maps each formula section to a corresponding index in the progress circles array
const sectionMap = {
    "next_page_fd_intro": 0,
    "next_page_fd_goal": 1,
    "next_page_fd_eliminating_intro": 2,
    "next_page_fd_secondeq_intro": 3,
    "next_page_fd_ig_intro": 4,
    "next_page_fd_solve_g_intro": 5,
    "next_page_fd_solve_k_intro": 6,
    "next_page_fd_summary_intro": 7
}

// Array of progress circle IDs
// used to map each section to a corresponding progress circle
// and to reset the progress circles
const progressCircles = [
    "pc-intro",
    "pc-fm",
    "pc-elim",
    "pc-2nd",
    "pc-ig",
    "pc-g",
    "pc-k",
    "pc-summary"
]

// Set the default animation for each animation step
const animationDuration = 1.4; // duration in seconds

// Map each animation to its creation and reset animation steps
// The 'create' animation runs the animation
// The 'reset' animation resets elements, such as opacity and position
const animationMap = {
    igg: {
        create: iggAnimation,
        reset: iggReset
    },
    ohms: {
        create: ohmsAnimation,
        reset: ohmsReset
    }
};

//// Individual Animations ////

function iggAnimation() {
    const timeline = gsap.timeline()
        .to("#igg-form1, #igg-form3", { duration: animationDuration, opacity: 1})
        .to("#igg-arrow1, #igg-form2", { duration: animationDuration, opacity: 1 })
        .to("#igg-arrow3, #igg-form4-1, #igg-form4-2, #igg-form4-4", { duration: animationDuration, opacity: 1 })
        .to("#igg-rect1, #igg-rect2, #igg-arrow2", { duration: animationDuration, opacity: 1 })
        .to("#igg-arrow2", { duration: animationDuration, opacity: 1 })
        .to("#igg-form4-2", { duration: animationDuration, opacity: 0 })
        .to("#igg-rect1", { duration: animationDuration, opacity: 0 })
        .to("#igg-rect2", { duration: 1, width: 72 }, `-=${animationDuration}`)
        .to("#igg-form4-4-container, #igg-form4-4", { duration: 1, x: 48 }, `-=${animationDuration}`)
        .to("#igg-form4-3", { duration: 1, opacity: 1 })
        .to("#igg-rect2", { duration: 1, opacity: 0 });
    
    return timeline;
}

function iggReset() {
    // Reset opacity and positions
    const elementsToReset = [
        "#igg-form1", "#igg-form3", "#igg-form2", "#igg-arrow1", 
        "#igg-arrow2", "#igg-arrow3", "#igg-form4-1", "#igg-form4-2", 
        "#igg-form4-3", "#igg-form4-4", "#igg-rect1", "#igg-rect2", "#igg-rect3"
    ];

    elementsToReset.forEach(selector => {
        gsap.set(selector, { opacity: 0 });
    });

    // Reset specific positions
    gsap.set("#igg-form4-4", { x: 0 });
    gsap.set("#igg-form4-4-container", { x: 0 });
    gsap.set("#igg-rect2", { width: 25 });
}

function ohmsAnimation() {
    const timeline = gsap.timeline()
        .to("#ohms-form1", { duration: animationDuration, opacity: 1})
        .to("#ohms-form2", { duration: animationDuration, opacity: 1})
        .to("#ohms-form3-v1", { duration: 0, y: -45})
        .to("#ohms-form3-v1", { duration: 0, opacity: 1})
        .to("#ohms-form3-v1", { duration: animationDuration, y: 0})

        .to("#ohms-rectV, #ohms-text1, #ohms-form4", { duration: animationDuration, opacity: 1})
        .to("#ohms-form4-move", { duration: 0, opacity: 1})
        .to("#ohms-form4-move-container", { duration: animationDuration, x: -106, y: -10})
        .to("#ohms-form3-v1, #ohms-form4-move", { duration: 0, opacity: 0})
        .to("#ohms-form3-v2", { duration: 0, opacity: 1 })
        .to("#ohms-rectV, #ohms-text1, #ohms-form4", { duration: animationDuration, opacity: 0})

        .to("#ohms-rectR, #ohms-text2, #ohms-form5", { duration: animationDuration, opacity: 1})
        .to("#ohms-form5-move", { duration: 0, opacity: 1})
        .to("#ohms-form5-move-container", { duration: animationDuration, x: -120, y: 10})
        .to("#ohms-rectR", { duration: 1, width: 67, height: 25 }, `-=${animationDuration}`)
        .to("#ohms-form3-v2, #ohms-form5-move", { duration: 0, opacity: 0})
        .to("#ohms-form3-v3", { duration: 0, opacity: 1 })
        .to("#ohms-rectR, #ohms-text2, #ohms-form5", { duration: animationDuration, opacity: 0})
        
    
    return timeline;
}

function ohmsReset() {
    // Reset opacity and positions
    const elementsToReset = [
        "#ohms-rectV", "#ohms-rectR", "#ohms-form1", "#ohms-form2", "#ohms-form3-v1", 
        "#ohms-form3-v2", "#ohms-form3-v3", "#ohms-text1", "#ohms-text2", "#ohms-form4", "#ohms-form4-move",
        "#ohms-form5", "#ohms-form5-move"
    ];

    elementsToReset.forEach(selector => {
        gsap.set(selector, { opacity: 0 });
    });

    // Reset specific positions
    gsap.set("#ohms-form4-move-container", { x: 0 });
    gsap.set("#ohms-form5-move-container", { x: 0 });
    gsap.set("#ohms-rectR", { width: 20 });
}

// Play the selected animation
function playAnimation(animationName) {
    // Check if the specified animation exists in the animationMap
    if (animationMap[animationName]) {
        // Clear any existing animations in the GSAP global timeline
        gsap.globalTimeline.clear();

        // Reset the selected animation
        animationMap[animationName].reset();

        // Clear again (just in case)
        gsap.globalTimeline.clear();

        // Create (start) the selected animation
        animationMap[animationName].create(); 
    }

    // Ensure MathJax typesetting is completed after the animation starts
    MathJax.startup.promise.then(() => {
        MathJax.typesetPromise()
          .then(() => {
            console.log('MathJax typesetting complete.');
          })
          .catch((err) => {
            console.error('MathJax typesetting failed:', err);
          });
    });
}

// Animate the progress bar
function animateProgressBar(newWidth) {
    // Get the SVG element with the ID 'progress-bar'
    const progressBarSVG = document.getElementById('progress-bar');
    
    // Select the 'rect' element inside the SVG
    const rect = progressBarSVG.querySelector('rect');
    
    // Use GSAP to animate the width attribute of the 'rect' element
    gsap.to(rect, { 
        duration: 1, // Animation duration in seconds
        attr: { width: newWidth + '%' }, // New width as a percentage
        ease: "power1.out" // Easing function for a smooth animation
    });
}

// Toolbox Overlay Open
document.getElementById('header-toolbox-icon').addEventListener('click', function() {
    document.getElementById('toolbox-overlay-dialog').setAttribute('open', '');
});

// Toolbox Overlay Close
document.getElementById('toolbox-overlay-close').addEventListener('click', function() {
    document.getElementById('toolbox-overlay-dialog').removeAttribute('open');
});

// Progress Overlay Open
document.getElementById('progress-bar-container').addEventListener('click', function() {
    document.getElementById('progress-overlay-dialog').setAttribute('open', '');
});

// Progress Overlay Close
document.getElementById('progress-overlay-close').addEventListener('click', function() {
    document.getElementById('progress-overlay-dialog').removeAttribute('open');
});

// Wrapper Event Listener
// Since most objects are loaded in through AJAX and do not exist when the DOM is loaded in,
// we use condition handling to listen for when they are clicked
// For each click, check if it corresponds to the target element
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Close the Toolbox Tooltip when clicking outside of the tooltip
    document.body.addEventListener('click', (event) => {
        // Check if the clicked element exists and does not have the class 'toolbox-tooltip'
        if (event.target && !(event.target.classList.contains('toolbox-tooltip'))) {
            
            // Select the element with the class 'toolbox-tooltip'
            const tooltip = document.querySelector('.toolbox-tooltip');
            
            // Check if the tooltip element exists 
            // Also, check that the clicked element does not have the class 'learning-path-begin-button'
            // Otherwise, the tooltip will close right away
            if (tooltip && !(event.target.classList.contains('learning-path-begin-button'))) {
                // Add the 'invisible' class to the tooltip element to hide it
                tooltip.classList.add('invisible');
                
                // Set the display style of the tooltip element to 'none' to hide it
                tooltip.style.display = 'none';
            }
        }
    });
    
    // Reveal Steps button Event Listener
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('reveal-steps')) {
            // Get the entire formula container
            const revealContainer = event.target.parentElement.parentElement;
            const parentDiv = revealContainer.parentElement;

            // Get the steps container
            const steps = parentDiv.querySelector('.steps');
            // Display the steps, with a fade-in animation
            steps.style.setProperty('display', 'block');
            setTimeout(() => {
                steps.style.opacity = "1";
            }, 10);

            // Hide the reveal steps button
            revealContainer.style.display = "none";
        }
    });

    // Replay Animated Formula Button Event Listener
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('replay-button')) {
            let replayButton = event.target;

            // get the formula container
            const animationContainer = replayButton.parentElement.parentElement;
            const animation = animationContainer.getAttribute('data-key')

            // Call the playAnimation function with the animation key to replay the animation
            playAnimation(animation);
        };
    });

    // Open Formula Toolbox Event Listener
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('formula-toolbox-button')) {
            document.getElementById('toolbox-overlay-dialog').setAttribute('open', '');
        };
    });

});



