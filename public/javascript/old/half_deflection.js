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
