document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
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
                            <span>D) I don’t know yet.</span>
                        </md-outlined-button>
                    </div>

                    <div class="feedback"></div>
                </div>
                <div class="button-container hidden-button">
                    <md-outlined-button class="fd-next-button" data-key="next_fd_goal_current">Next</md-outlined-button>
                </div>
            </div>
        `
    };

    const answerKey = {
        "principleq1c1": ["incorrect", "Incorrect. A voltmeter measures voltage directly, not a galvanometer."],
        "principleq1c2": ["correct", "Correct. A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
        "principleq1c3": ["incorrect", "Incorrect. An ohmmeter detects changes in electrical resistance, not a galvanometer."],
        "principleq1c4": ["info", "It’s okay! A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."]
    };

    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('fd-next-button')) {
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
                    button.style.setProperty('--_focus-label-text-color', '#6874E8');
                    button.style.setProperty('--_outline-color', '#6874E8');
                    button.style.backgroundColor = '#EDEBFA';
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
});
