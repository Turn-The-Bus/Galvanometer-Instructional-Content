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
                            <span class="mc-button-text">Taking two measurements of the galvanometer’s deflection</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c2">
                            <span class="mc-button-text">Measure a 0.5 deflection in the galvanometer</span>
                        </md-outlined-button>
                    </div>
        
                    <div class="feedback"></div>

                </div>
                <div class="button-container">
                    <md-outlined-button class="fd-next-button" data-key="next_section_explanation">Next</md-outlined-button>
                </div>
            </div>
        `,
        
        next_section_explanation: `
            <p>In the half-deflection method, we take two measurements.</p>
            <p>The first measurement is called the initial deflection measurement.</p>
            <p>The second measurement is called the half-deflection measurement, and is equal to half the value of the initial deflection.</p>
            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_section_measurement">Next</md-outlined-button>
            </div>
        `,

        next_section_measurement: `
            <p>A student is using the half-deflection method and took two measurements, pictured below. Label the measurements.</p>
            <div class="grid-container">
                <div class="grid-item">
                    <img src="/images/Initial Deflection Image.png" alt="Image 1">
                    <p class="legend">Measurement 1</p>
                    <span class="dropdown-menu-inline">
                      <select class="select-dropdown">
                          <option value="Increase">Increase</option>
                          <option value="Decrease">Decrease</option>
                      </select>
                    </span>
                </div>
                <div class="grid-item">
                    <img src="/images/Half Deflection Image.png" alt="Image 2">
                    <p class="legend">Measurement 2</p>
                    <span class="dropdown-menu-inline">
                      <select class="select-dropdown">
                          <option value="Increase">Increase</option>
                          <option value="Decrease">Decrease</option>
                      </select>
                    </span>
                </div>
            <div class="button-container">
                <md-outlined-button class="fd-next-button" data-key="next_section_quiz">Next</md-outlined-button>
            </div>
            </div>
         `,

        next_section_quiz: `
        <p>By combining the information we get from the two measurements, we can determine the figure of merit of the galvanometer. We’ll learn more about how we can do this in later sections. </p>
        <p>How can we get the half-deflection measurement?</p>
            </div>
    
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c1">
                            <span class="mc-button-text">Reduce the current flowing through the galvanometer</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c2">
                            <span class="mc-button-text">Reduce the voltage the power source supplies to the galvanometer</span>
                        </md-outlined-button>
                    </div>
        
                    <div class="feedback"></div>

                </div>
                <div class="button-container">
                    <md-outlined-button class="fd-next-button" data-key="next_section_page">Next</md-outlined-button>
                </div>
            </div>
        `,

        next_section_page: `
            <p>Remember the formula I = kθ shows that current (I) is proportional to the galvanometer’s deflection (θ).</p>
            <p>In the next section, we’ll learn how to set up our circuit in order to reduce the current flowing through the galvanometer.</p>
            <div class="button-container">
                <md-outlined-button class="fd-next-button">Next Page</md-outlined-button>
            </div>
        `,
    };
    
    const answerKey = {
        "kq1c1": ["incorrect", "Incorrect. The maximum current the galvanometer can measure is the full-scale deflection current, not the figure of merit. The figure of merit is related to the current needed for one division deflection. We will learn more later."],
        "kq1c2": ["correct", "Correct. The figure of merit (k) is the current required to cause a deflection of one division on the galvanometer's scale. We will learn more later."],
        "kq1c3": ["incorrect", "Incorrect. The resistance of the galvanometer is a different parameter that affects its overall operation. The figure of merit specifically refers to the current needed for one division deflection. We will learn more later."],
        "kq1c4": ["info", "It’s okay! The figure of merit (k) is the current required to cause a deflection of one division on the galvanometer's scale. We will learn more later."]
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
});
