// const correctColorDark = "#2B7D2F";
// const correctColorLight = "#E9FAEA";
// const incorrectColorDark = "#C92525";
// const incorrectColorLight = "#FFEFEF";
// const sysColorPrimaryDark = "#004A76";
// const sysColorPrimaryBright = "#047DB7";
// const sysColorPrimaryLight = "#DFF3FF";
// const sysOutlineColor = "#79747E";

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

// animated formulas
const animationDuration = 1.4; // duration in seconds

// animation mapping
const animationMap = {
    igg: {
        create: iggAnimation,
        reset: iggReset
    },
    ohms: {
        create: ohmsAnimation,
        reset: ohmsReset
    }
    // Add more animations as needed
};

//// individual animations ////

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

// official playAnimation function
function playAnimation(animationName) {
    if (animationMap[animationName]) {
        gsap.globalTimeline.clear(); // Clear any existing animations
        animationMap[animationName].reset();
        gsap.globalTimeline.clear(); // Clear any existing animations
        animationMap[animationName].create(); // Start the selected animation
    }
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

// progress bar animation
function animateProgressBar(newWidth) {
    const progressBarSVG = document.getElementById('progress-bar');
    const rect = progressBarSVG.querySelector('rect');
    gsap.to(rect, { duration: 1, attr: { width: newWidth + '%' }, ease: "power1.out" });
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

// function jumpToSection(sectionName, animate) {
//     const progressOverlay = document.getElementById('progress-overlay-dialog');
//     const progressSections = progressOverlay.querySelectorAll('md-list-item');
    
//     const currentSection = document.querySelector('.toc-section.current-section');
//     const sectionNumber = sectionMap[sectionName];
//     const newSection = progressSections[sectionNumber];

//     if (!(currentSection == newSection)) {
//         currentSection.classList.remove('current-section');
//         newSection.classList.add('current-section');
//     }

//     progressOverlay.removeAttribute('open');

//     const newContent = contentMap[sectionName];

//     if (newContent) {
//         const instructionContainer = document.querySelector('.instruction-content');
//         instructionContainer.innerHTML = '';
        
//         const textContainer = document.createElement('div');
//         textContainer.innerHTML = newContent;

//         instructionContainer.appendChild(textContainer);

//         MathJax.typeset();

//         // Check if newContent contains specific animation triggers and play the corresponding animation
//         if (textContainer.querySelector('.formula-animation-container')) {
//             const animationName = textContainer.querySelector('.formula-animation-container').getAttribute('data-key');
//             playAnimation(animationName);
//         }
        
//         // update the progress bar

//         let newWidth = 1;
//         let circleWidth = 0;

//         for (let i = 0; i < sectionNumber+1; i++) {
//             let circleName = progressCircles[i];
//             let circle = document.getElementById(circleName);

//             circleWidth = parseFloat(circle.getAttribute('width').replace('%',''));
//             if (i < sectionNumber) {
//                 newWidth += circleWidth;
//                 if (animate) {
//                     animateProgressBar(newWidth);
//                 }
//             }

//             if (animate) {
//                 setTimeout(function() {
//                     circle.classList.remove('progress-circle-incomplete');
//                     circle.classList.add('progress-circle-complete');
//                   }, 1000);
//             } else {
//                 circle.classList.remove('progress-circle-incomplete');
//                 circle.classList.add('progress-circle-complete');
//             }

            
        
//         }

//         for (let i = sectionNumber+1; i < progressCircles.length; i++) {
//             let circleName = progressCircles[i];
//             let circle = document.getElementById(circleName);

//             circle.classList.remove('progress-circle-complete');
//             circle.classList.add('progress-circle-incomplete');

//         }

//         if (!animate) {
//             // update the progress bar length
//             const progressBarSVG = document.getElementById('progress-bar');
//             const rect = progressBarSVG.querySelector('rect');
//             rect.setAttribute('width', newWidth + '%');

//             // animateProgressBar(newWidth, 2000);
//         }

//     } else {
//         console.log(`Error: No new content mapping found for button ${key}`)
//     }
// }

// // Progress Overlay jump to section
// document.querySelectorAll('.toc-section').forEach(item => {
//     item.addEventListener('click', event => {
//         const tocItem = event.target.closest('.toc-section');
//         const sectionKey = tocItem.getAttribute('data-key');

//         jumpToSection(sectionKey, false);
        
//     });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    
    // toolbox tooltip
    document.body.addEventListener('click', (event) => {
        if (event.target && !(event.target.classList.contains('toolbox-tooltip'))) {
            
            const tooltip = document.querySelector('.toolbox-tooltip')
            
            if (tooltip) {
                tooltip.classList.add('invisible');
                setTimeout(function() {
                    tooltip.style.display = 'none';
                }, 500); // Match the transition duration in CSS
            }
        }
    });

    // // Learning Path Selection
    // document.body.addEventListener('click', (event) => {
    //     if (event.target && event.target.classList.contains('learning-path-button')) {
    //         const button = event.target;
    //         const buttonID = button.getAttribute('id');
    //         const learningPathBegin = document.getElementById('learning-path-begin');
    //         const nextButton = learningPathBegin.querySelector('md-filled-button');

    //         button.style.backgroundColor = sysColorPrimaryLight;

    //         if (buttonID == 'lp-full-activity') {
    //             nextButton.setAttribute('data-key','next_page_fd_goal');
                
    //             const otherButton = document.getElementById('lp-summary');
    //             otherButton.style.backgroundColor = "white";
                
    //         } else if (buttonID == 'lp-summary') {
    //             nextButton.setAttribute('data-key','next_page_fd_summary_intro');

    //             const otherButton = document.getElementById('lp-full-activity');
    //             otherButton.style.backgroundColor = "white";
    //         }

    //         learningPathBegin.classList.remove('hidden');
            
    //         learningPathBegin.style.scrollMarginTop =  '150px';
    //         learningPathBegin.scrollIntoView({ behavior: 'smooth' });

    //     }
    // });

    // // Learning Path Button
    // document.body.addEventListener('click', (event) => {
    //     if (event.target && event.target.classList.contains('learning-path-begin-button')) {
    //         const button = event.target;

    //         const destination = button.getAttribute('data-key');

    //         if (destination == "next_page_fd_goal") {
    //             // add toolbox tooltip
    //             let tempDiv = document.createElement('div');
    //             tempDiv.innerHTML = contentMap[destination];
                
    //             let tooltip = tempDiv.querySelector('.toolbox-tooltip');
    //             tooltip.classList.remove('hidden');
                
    //             contentMap[destination] = tempDiv.innerHTML;

    //             jumpToSection(destination, true);
    //         } else {
    //             jumpToSection(destination, false);
    //         }
    //     }
    // });
    
    
    //Reveal Steps
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('reveal-steps')) {
            const revealContainer = event.target.parentElement.parentElement;
            const parentDiv = revealContainer.parentElement;

            const steps = parentDiv.querySelector('.steps');
            steps.style.setProperty('display', 'block');
            setTimeout(() => {
                steps.style.opacity = "1";
            }, 10);

            revealContainer.style.display = "none";
        }
    });

    // replay animated formulas
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('replay-button')) {
            let replayButton = event.target;
            const animationContainer = replayButton.parentElement.parentElement;
            const animation = animationContainer.getAttribute('data-key')

            playAnimation(animation);
        };
    });

    // open formula toolbox
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('formula-toolbox-button')) {
            document.getElementById('toolbox-overlay-dialog').setAttribute('open', '');
        };
    });

});



