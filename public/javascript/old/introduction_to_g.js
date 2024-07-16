document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
    initializeEventListeners();
});

document.addEventListener('DOMContentLoaded', () => {
    const contentMap = {
        next_section_principle: `
            <div id="principle">
                <p>Which principle does a galvanometer operate on?</p>
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq1c1">
                            <span class="mc-button-text">A) It measures voltage directly by using a voltage divider.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq1c2">
                            <span class="mc-button-text">B) A current-carrying coil interacts with a magnetic field.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq1c3">
                            <span class="mc-button-text">C) It detects changes in electrical resistance.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq1c4">
                            <span class="mc-button-text"> D) I don't know yet.</span>
                        </md-outlined-button>
                    </div>

                    <div class="feedback"></div>
                </div>
                <div class="button-container hidden-button">
                    <md-outlined-button class="next-button" data-key="next_section_ECG">Next</md-outlined-button>
                </div>
            </div>
        `,

        next_section_ECG: `
            <div id="ECG">
                <p>The sensitivity makes galvanometers indispensable in applications requiring precision, such as scientific research and medical equipment like ECG machines.</p>
                <div class="ECG-section">
                <img src="/images/image 8.png" alt="ECG">
                <p class="legend">(ECG Machines)</p>
                </div>
                <p>How is a galvanometer used in an ECG machine?</p>
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq2c1">
                            <span class="mc-button-text">A) It generates electrical currents to stimulate the heart.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq2c2">
                            <span class="mc-button-text">B) It detects small currents produced by the heart and converts them into visible deflections on the ECG monitor.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq2c3">
                            <span class="mc-button-text">C) It creates images of the heart using magnetic resonance.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="principleq2c4">
                            <span>D) I don't know yet.</span>
                        </md-outlined-button>
                    </div>

                    <div class="feedback"></div>
                </div>
                <div class="button-container hidden-button">
                    <md-filled-button class="next-section-button" data-key="/galvanometer-deflection">Next Section</md-filled-button>
                </div>
            </div>
        `,

        next_fd_goal_current: '/interactive_simulation'
    };

    const answerKey = {
        "principleq1c1": ["incorrect", "Incorrect. A voltmeter measures voltage directly, not a galvanometer."],
        "principleq1c2": ["correct", "Correct. A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
        "principleq1c3": ["incorrect", "Incorrect. An ohmmeter detects changes in electrical resistance, not a galvanometer."],
        "principleq1c4": ["info", "It's okay! A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
    
        "principleq2c1": ["incorrect", "Incorrect. Galvanometers do not generate electrical currents. Instead, they measure the tiny electrical currents produced by the heart."],
        "principleq2c2": ["correct", "Correct. In an ECG machine, the galvanometer detects the small currents generated by the heart and converts them into visible deflections on the monitor."],
        "principleq2c3": ["incorrect", "Incorrect. Creating images of the heart using magnetic resonance is the function of an MRI machine, not a galvanometer."],
        "principleq2c4": ["info", "It's okay! In an ECG machine, the galvanometer detects the small currents generated by the heart and converts them into visible deflections on the monitor."]
    };

    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('next-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            const newContent = contentMap[key];
            const instructionContainer = document.querySelector('.instruction-content');
            
            if (newContent) {
                const textContainer = document.createElement('div');
                textContainer.innerHTML = newContent;
                instructionContainer.appendChild(textContainer);
                button.parentElement.remove();
                textContainer.style.scrollMarginTop = '150px';
                textContainer.scrollIntoView({ behavior: 'smooth' });
                MathJax.typeset();
            }
        }
    });

    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('mc-button')) {
            const button = event.target;
            const choiceID = button.getAttribute('data-key');
            const wrapperDiv = button.parentElement;
            const questionDiv = wrapperDiv.parentElement;

            if (choiceID in answerKey) {
                const [correctFlag, feedbackText] = answerKey[choiceID];
                const feedbackDiv = questionDiv.querySelector('.feedback');
                const nextButton = questionDiv.parentElement.querySelector('.button-container');

                const siblingButtons = questionDiv.querySelectorAll('.mc-button');
                siblingButtons.forEach(sib => {
                    sib.style.setProperty('--_focus-label-text-color', '');
                    sib.style.setProperty('--_outline-color', '');
                    sib.style.backgroundColor = '';
                    const icon = sib.parentElement.querySelector('.status-icon');
                    if (icon) icon.remove();
                });

                let icon;
                if (correctFlag === 'correct') {
                    button.style.setProperty('--_focus-label-text-color', '#319036');
                    button.style.setProperty('--_outline-color', '#319036');
                    button.style.backgroundColor = '#E9FAEA';
                    icon = document.createElement('span');
                    icon.className = 'status-icon check-icon';
                    icon.innerHTML = '<span class="material-symbols-outlined">check</span>';
                } else if (correctFlag === 'incorrect') {
                    button.style.setProperty('--_focus-label-text-color', '#C92525');
                    button.style.setProperty('--_outline-color', '#C92525');
                    button.style.backgroundColor = '#FFEFEF';
                    icon = document.createElement('span');
                    icon.className = 'status-icon x-icon';
                    icon.innerHTML = '<span class="material-symbols-outlined">close</span>';
                } else if (correctFlag === 'info') {
                    button.style.setProperty('--_focus-label-text-color', '#fff');
                    button.style.backgroundColor = '#047db7';
                }

                if (icon) {
                    wrapperDiv.insertBefore(icon, button);
                }
                feedbackDiv.style.display = 'block';
                feedbackDiv.innerHTML = `<b>Feedback:</b> ${feedbackText}`;
                nextButton.classList.remove("hidden-button");
                nextButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        }
    });

    // Next Section Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('next-section-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            
            window.location.href = key;
        }
    });
});

function loadPage(pageName) {
    console.log(`Loading page: ${pageName}`);
    
    fetch(pageName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Replace the entire body content with the new page content
            document.body.innerHTML = html;

            // Re-initialize any necessary scripts
            MathJax.typeset();

            // Reinitialize event listeners
            initializeEventListeners();

            // Scroll to the top of the new content
            window.scrollTo(0, 0);

            // If there's any specific initialization needed for interactive_simulation.ejs, call it here
            if (pageName === 'interactive_simulation.ejs') {
                initializeInteractiveSimulation();
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
            // Optionally, display an error message to the user
            alert('Failed to load the next page. Please try again.');
        });
}


function initializeInteractiveSimulation() {
    console.log('Initializing interactive simulation');
}

document.addEventListener('DOMContentLoaded', initializeEventListeners);
