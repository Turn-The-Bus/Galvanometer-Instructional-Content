document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

document.addEventListener('DOMContentLoaded', () => {
    const contentMap = {
        next_section_k: `
            <div class="but-what-is-container">
            <p class="but-what-is-k">
            <span class="but-what-is">But, what is </span>
            <i class="k">k</i>
            <span>?</span>
            </p>
            <p>What does k mean in the context of this formula?</p>
            </div>
    
                <div class="mc-question">
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c1">
                            <span class="mc-button-text">A) The maximum current the galvanometer can measure.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c2">
                            <span class="mc-button-text">B) The current needed to move the needle by one division.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c3">
                            <span class="mc-button-text">C) The resistance of the galvanometer.</span>
                        </md-outlined-button>
                    </div>
                    <div class="mc-button-wrapper">
                        <md-outlined-button class="mc-button" data-key="kq1c4">
                            <span>D) I don’t know yet.</span>
                        </md-outlined-button>
                    </div>
    
                    <div class="feedback"></div>

                    <div class="k-known-as-container">
                    <p class="k-known-as-the-figure-of-merit">
                    <i class="k"><b>k</b></i>
                    <span class="known-as-the">, known as the </span>
                    <i class="k"><b>figure of merit</b></i>
                    <span>, is defined as the current needed to nudge the needle by one division on the scale. </span>
                    </p>
                    <p class="k-known-as-the-figure-of-merit">Figure of merit is an important concept that measures the sensitivity of a galvanometer. In other words, the figure of merit indicates how responsive the galvanometer is to small currents. </p>
                    </div>  

                </div>
                <div class="button-container hidden-button">
                    <md-outlined-button class="fd-next-button">Next Page</md-outlined-button>
                </div>
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
