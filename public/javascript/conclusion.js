const correctColorDark = "#2B7D2F";
const correctColorLight = "#E9FAEA";
const incorrectColorDark = "#C92525";
const incorrectColorLight = "#FFEFEF";
const sysColorPrimaryDark = "#004A76";
const sysColorPrimaryBright = "#047DB7";
const sysColorPrimaryLight = "#DFF3FF";
const sysOutlineColor = "#79747E";

document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

document.addEventListener('DOMContentLoaded', () => {
    const contentMap = {
        next_section_principle: `
            <div>
                <h2>Lab Findings on the Figure of Merit</h2>

                <p>The figure of merit k is a physical property of the galvanometer that defines its sensitivity.</p> 

                <p>It is a constant that represents the amount of current needed to deflect the needle by one division on the scale.</p> 

                <p>This property is inherent to the design and construction of the galvanometer, including factors such as the number of turns in the coil, the strength of the magnetic field, and the area of the coil.</p>
                
                <div class="G-section">
                    <img src="/images/image9.png" alt="G">
                </div>
                
                <p class="instruction-image-label">(Construction of the Galvanometer)</p>

                <p>Since these physical characteristics do not change during the experiment, the figure of merit remains constant. It consistently represents the relationship between the current and the resulting deflection of the needle.</p>
                
                <p>Therefore, figure of merit is important in accurately measuring small currents, ensuring the reliability and precision of the galvanometer in various applications.</p>
                </div>
                <div class="button-container">
                    <md-outlined-button class="next-button" data-key="next_section_ECG">Next</md-outlined-button>
                </div>
            </div>
        `,

        next_section_ECG: `
            <div>
                <h2>Summary</h2>
                <p>Now, think back to your initial hypotheses. Did your predictions align with the results? Science is all about making guesses, testing them out, and sometimes, being surprised by what you find.</p>
    
                <div class="button-container">
                    <md-filled-button class="finish-button" >Finish</md-filled-button>
                </div>
            </div>
        `
    };

    const answerKey = {
        "principleq1c1": ["incorrect", "Incorrect. A voltmeter measures voltage directly, not a galvanometer."],
        "principleq1c2": ["correct", "Correct. A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
        "principleq1c3": ["incorrect", "Incorrect. An ohmmeter detects changes in electrical resistance, not a galvanometer."],
        "principleq1c4": ["info", "It’s okay! A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
    
        "principleq2c1": ["incorrect", "Incorrect. Galvanometers do not generate electrical currents. Instead, they measure the tiny electrical currents produced by the heart."],
        "principleq2c2": ["correct", "Correct. In an ECG machine, the galvanometer detects the small currents generated by the heart and converts them into visible deflections on the monitor."],
        "principleq2c3": ["incorrect", "Incorrect. Creating images of the heart using magnetic resonance is the function of an MRI machine, not a galvanometer."],
        "principleq2c4": ["info", "It’s okay! In an ECG machine, the galvanometer detects the small currents generated by the heart and converts them into visible deflections on the monitor."]
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

    // content map for dropdown
    const dropdownAnswerKey = {
        'c_1': ['not change'],
        'c_2': ['not change'],
        
    };

    // Giving Feedback for Dropdown
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('dropdown-button')) {
            let button = event.target;

            const menuEl = button.parentElement.querySelector('md-menu');
            const arrow = button.parentElement.querySelector('.dropdown-arrow');

            menuEl.open = !menuEl.open;

            menuEl.querySelectorAll('md-menu-item').forEach(item => {
                item.addEventListener('click', (event) => {
                    // Remove background color from previously selected items
                    menuEl.querySelectorAll('md-menu-item').forEach(item => {
                        item.style.backgroundColor = '';
                    });
    
                    // Change background color of the selected item
                    event.currentTarget.style.backgroundColor = sysColorPrimaryLight;
    
                    const mathContent = event.currentTarget.getAttribute('data-value');
                    button.innerHTML = mathContent;
                    menuEl.open = false;
    
                    // Trigger MathJax to re-process the updated button content
                    MathJax.typesetPromise([button]).catch((err) => console.log(err.message));
    
                    // Check if the answer is correct
                    const answerKey = dropdownAnswerKey[button.id];
                    if (mathContent==="Select") {
                        button.style.setProperty('--_label-text-color', '');
                        button.style.setProperty('--_focus-label-text-color', '');
                        button.style.setProperty('--_hover-label-text-color', '');
                        button.style.setProperty('--_outline-color', '');
                        button.style.backgroundColor = '';
                        arrow.style.setProperty('color','');
                    } else if (answerKey.includes(mathContent)) {
                        button.style.setProperty('--_label-text-color', correctColorDark);
                        button.style.setProperty('--_focus-label-text-color', correctColorDark);
                        button.style.setProperty('--_hover-label-text-color', correctColorDark);
                        button.style.setProperty('--_outline-color', correctColorDark);
                        button.style.backgroundColor = correctColorLight;
                        arrow.style.setProperty('color',correctColorDark);
    
                    } else {
                        button.style.setProperty('--_label-text-color', incorrectColorDark);
                        button.style.setProperty('--_focus-label-text-color', incorrectColorDark);
                        button.style.setProperty('--_hover-label-text-color', incorrectColorDark);
                        button.style.setProperty('--_outline-color', incorrectColorDark);
                        button.style.backgroundColor = incorrectColorLight;
                        arrow.style.setProperty('color',incorrectColorDark);
                    }
                });
            });

        }
    });
});
