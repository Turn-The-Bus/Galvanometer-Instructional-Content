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
        next_section_k: `
            <p>What do you think is the half-deflection method?</p>
            </div>
    
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c1">
                            <span class="mc-button-text">Taking two measurements of the galvanometer's deflection</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c2">
                            <span class="mc-button-text">Measure a 0.5 deflection in the galvanometer</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c3">
                            <span class="mc-button-text">I don't know yet</span>
                        </md-outlined-button>
                    </div>
        
                    <div class="feedback"></div>

                </div>
                <div class="button-container hidden-button">
                    <md-outlined-button class="next-button" data-key="next_section_explanation">Next</md-outlined-button>
                </div>
            </div>
        `,
        
        next_section_explanation: `
            <p>In the half-deflection method, we take two measurements.</p>
            <p>The first measurement is called the initial deflection measurement.</p>
            <p>The second measurement is called the half-deflection measurement, and is equal to half the value of the initial deflection.</p>
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_section_measurement">Next</md-outlined-button>
            </div>
        `,

        next_section_measurement: `
            <md-divider></md-divider>
            <p>A student is using the half-deflection method and took two measurements, pictured below. Label the measurements.</p>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="/images/Initial Deflection Image.png" alt="Image 1">
                    <p class="legend">Measurement 1</p>
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 120px; height: 40px" id="hd_m1">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="hd_m1">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="Initial Deflection">
                                <div slot="headline">Initial Deflection</div>
                            </md-menu-item>
                            <md-menu-item data-value="Half-Deflection">
                                <div slot="headline">Half-Deflection</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
                </div>
                <div class="grid-item">
                    <img src="/images/Half Deflection Image.png" alt="Image 2">
                    <p class="legend">Measurement 2</p>
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 120px; height: 40px" id="hd_m2">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="hd_m2">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="Initial Deflection">
                                <div slot="headline">Initial Deflection</div>
                            </md-menu-item>
                            <md-menu-item data-value="Half-Deflection">
                                <div slot="headline">Half-Deflection</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
                </div>
            </div>
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_section_quiz">Next</md-outlined-button>
            </div>
         `,

        next_section_quiz: `
        <p>By combining the information we get from the two measurements, we can determine the figure of merit of the galvanometer. We’ll learn more about how we can do this in later sections. </p>
        <p>How can we get the half-deflection measurement?</p>
            </div>
    
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq2c1">
                            <span class="mc-button-text">Reduce the current flowing through the galvanometer</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq2c2">
                            <span class="mc-button-text">Reduce the voltage the power source supplies to the galvanometer</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq2c3">
                            <span class="mc-button-text">I don’t know yet</span>
                        </md-outlined-button>
                    </div>
                    <div class="feedback"></div>

                </div>
                <div class="button-container hidden-button">
                    <md-outlined-button class="next-button" data-key="next_section_page">Next</md-outlined-button>
                </div>
            </div>
        `,

        next_section_page: `
            <p>Remember the formula \\(I = k\\theta\\) shows that current \\((I)\\) is proportional to the galvanometer's deflection \\((\\theta)\\).</p>
            <p>In the next section, we'll learn how to set up our circuit in order to reduce the current flowing through the galvanometer.</p>
            <div class="button-container">
                <md-filled-button class="next-section-button" data-key="/circuit-setup">Next Section</md-filled-button>
            </div>
        `,
    };
    
    const answerKey = {
        "kq1c1": ["correct", "That's correct."],
        "kq1c2": ["incorrect", "Actually, the 'half' does not mean 0.5. Read on to learn more."],
        "kq1c3": ["info", "Let's read on to learn more."], 
        "kq2c1": ["correct", "That's correct."],
        "kq2c2": ["incorrect", "Incorrect. Usually, we are only given a 2V power supply and cannot change it."],
        "kq2c3": ["info", "The correct answer is the first one. Read on to learn more."]
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
        "hd_m1": ["Initial Deflection"],
        "hd_m2": ["Half-Deflection"],
        
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

    // Next Section Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('next-section-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');
            
            window.location.href = key;
        }
    });
});
