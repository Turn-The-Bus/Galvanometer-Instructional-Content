document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

document.addEventListener('DOMContentLoaded', () => {
    const contentMap = {
        next_section_principle: `
            <div id="principle">
                <p>Before starting, make one hypothesis about what will happen when you change the current.</p>
                    <div class="building-blockscard-statesel-parent">
                    <div class="building-blockscard-statesel">
                    <div class="state-layer">
                    </div>
                    </div>
                    <i class="example-hypothesis">Example Hypothesis</i>
                    <div class="if-i-increase-container">
                    <ul class="if-i-increase-the-current-the">
                    <li class="if-i-increase-the-current-the1">
                    <span class="if-i">If I </span>
                    <b class="if-i">increase</b>
                    <span> the current, the needle will move to the </span>
                    <b class="if-i">left</b>
                    <span class="if-i">.</span>
                    </li>
                    <li>
                    <span class="if-i">If the current is flowing in the </span>
                    <b class="if-i">positive</b>
                    <span class="if-i"> direction and I </span>
                    <b class="if-i">reverse</b>
                    <span class="if-i"> the current, the needle will move to the </span>
                    <b class="if-i">right</b>
                    <span class="if-i">.</span>
                    </li>
                    </ul>
                    </div>
                    </div>
                    <i class="make-your-hypothesis">Make Your Hypothesis</i>
                    <div class="if-i-the-container">
                        <ul class="if-i">
                            <li class="if-i1">
                                <span>If I</span>
                                <span class="dropdown-menu-inline">
                                    <select class="select-dropdown">
                                        <option value="increase">Increase</option>
                                        <option value="decrease">Decrease</option>
                                    </select>
                                </span>
                                <span> the current, the needle will move to the</span>
                                <span class="dropdown-menu-inline">
                                    <select class="select-dropdown">
                                        <option value="left">Left</option>
                                        <option value="right">Right</option>
                                    </select>
                                </span>
                                <span>.</span>
                            </li>
                        </ul>
                    </div>

                    <div class="if-the-current-container">
                        <div class="line-container">
                            <ul class="if-the-current-is-flowing-in-t">
                                <li class="if-the-current">
                                    <span>If the current is flowing in the</span>
                                </li>
                            </ul>
                            <span class="dropdown-menu-inline">
                                <select class="select-dropdown">
                                    <option value="positive">Positive</option>
                                    <option value="negative">Negative</option>
                                </select>
                            </span>
                            <span> direction and I reverse the current, the needle will move to the</span>
                        </div>
                        <span class="dropdown-menu-inline">
                            <select class="select-dropdown">
                                <option value="left">Left</option>
                                <option value="right">Right</option>
                            </select>
                        </span>
                        <span>.</span>
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.select-dropdown').forEach(dropdown => {
        dropdown.addEventListener('change', (event) => {
            const selectedOption = event.target.value;
            console.log(`Selected option: ${selectedOption}`);
            // Add your custom handling for the selected option here
        });
    });
});
