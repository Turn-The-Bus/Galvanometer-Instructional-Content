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
        next_ic_sim_activity: `
            <div id="ic-sim-activity">
            <p>Before starting, make one hypothesis about what will happen when you change the current.</p>
            <div class="block-card">
                <div class="block-card-content">
                    <h3>Example Hypothesis</h3>
                    <ul>
                    <li><span>If I <b>increase</b> the current, the needle will move to the <b>left</b>.</span></li>
                    <li><span>If the current is flowing in the <b>positive</b> direction and I <b>reverse</b> the current, the needle will move to the <b>right</b>.</span></li>
                    </ul>
                </div>
            </div>

            <div>
            <h3>Make Your Hypothesis</h3>

            <ul class="dropdown-bullet">
                <li>
                <div class="dropdown-inline-container">
                    <span class="dropdown-inline-text">
                        If I 
                    </span>
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 100px;" id="sim_1" graded="false">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="sim_1">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="increase">
                                <div slot="headline">increase</div>
                            </md-menu-item>
                            <md-menu-item data-value="decrease">
                                <div slot="headline">decrease</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
        
                    <span class="dropdown-inline-text">
                        the current, the needle will move to the
                    </span>
        
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 100px;" id="sim_2" graded="false">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="sim_2">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="left">
                                <div slot="headline">left</div>
                            </md-menu-item>
                            <md-menu-item data-value="right">
                                <div slot="headline">right</div>
                            </md-menu-item>
                        </md-menu>
                    </div>

                    <span class="dropdown-inline-text">
                        . 
                    </span>
                </div>
                </li>
                <li>
                <div class="dropdown-inline-container">
                    <span class="dropdown-inline-text">
                    If the current is flowing in the 
                    </span>
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 100px;" id="sim_3" graded="false">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="sim_3">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="positive">
                                <div slot="headline">positive</div>
                            </md-menu-item>
                            <md-menu-item data-value="negative">
                                <div slot="headline">negative</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
        
                    <span class="dropdown-inline-text">
                    direction and I reverse the current, the needle will move to the
                    </span>
        
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 100px;" id="sim_4" graded="false">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="sim_4">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="left">
                                <div slot="headline">left</div>
                            </md-menu-item>
                            <md-menu-item data-value="right">
                                <div slot="headline">right</div>
                            </md-menu-item>
                        </md-menu>
                    </div>

                    <span class="dropdown-inline-text">
                        . 
                    </span>
                </div>
                </li>
            </ul>

            </div>
            
            <div>
            <h3>Test Your Hypothesis With Simulation</h3>
            <p>Adjust the Current</p>
            <div class="sim-controls-row">
                <div class="sim-variable"><b>Current = </b></div>
                <div class="sim-button sim-minus">&#8722</div>
                <div class="sim-reading">0 mA</div>
                <div class="sim-button sim-plus">+</div>
            </div>

            <div class="diagram-container">
                <svg width="320" height="230" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="triangle" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="1" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
                    </marker>

                    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                    <polygon points="0 0, 4 2, 0 4" />
                    </marker>

                    <filter id="dropshadow" height="130%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
                    <feOffset dx="1" dy="1" result="offsetblur"/> <!-- how much to offset -->
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3"/> <!-- opacity of the shadow -->
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/> <!-- this contains the offset blurred image -->
                        <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
                    </feMerge>
                    </filter>
                </defs>
                
                <image x="10" y="30" width="320" xlink:href="images/galvanometer-simulation.svg" />
                <line x1="165" y1="133" x2="165" y2="70" stroke-width="3px" stroke="red" marker-end="url(#triangle)" id="galv-needle"/>

                <g id="neg-current" class="sim-hidden">
                    <line x1="10" y1="190" x2="50" y2="180" stroke-width="3px" stroke="black" marker-end="url(#arrowhead)" />
                    <text id="neg-current-label" x="30" y="165" font-family="Roboto" font-size="14px" fill="black" text-anchor="middle" alignment-baseline="middle">
                    0 mA
                    </text>
                </g>

                <g id="pos-current" class="sim-hidden">
                    <line x1="320" y1="190" x2="290" y2="180" stroke-width="3px" stroke="black" marker-end="url(#arrowhead)" />
                    <text id="pos-current-label" x="300" y="160" font-family="Roboto" font-size="14px" fill="black" text-anchor="middle" alignment-baseline="middle">
                    0 mA
                    </text>
                </g>
                    
                
                <g id="galv-broken" class="sim-hidden">
                    <image x="220" y="0" xlink:href="images/galvanometer-broken.svg" />
                    <rect x="140" y="65" rx="5" ry="5" width="160" height="70" fill="white" filter="url(#dropshadow)" />
                    <text font-family="Roboto" font-size="12px" fill="black" text-anchor="middle" alignment-baseline="middle">
                    <tspan x="220" y="90">Oh no! We damaged the</tspan>
                    <tspan x="220" y="105">galvanometer by adding</tspan>
                    <tspan x="220" y="120">too much current!</tspan>
                    </text>
                </g>
                </svg>
            </div>
            
            
            
            </div>

            <div class="block-card">
            <div class="block-card-content">
                <h3>Tips</h3>
                <ol>
                <li>Use the simulation to increase, decrease, or reverse the current.</li>
                <li>Watch how the needle moves to your changes.</li>
                <li>Compare the actual results with your hypothesis.</li>
                </ol>
            </div>
            </div>

            <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_ic_sim_conc">Next</md-outlined-button>
            </div>
            
        
        </div>
        `,
        next_ic_sim_conc: `
            <div id="ic-sim-conc">
                <h3>Conclusion</h3>
                <p>From the simulation, we can see that the <b>deflection of the galvanometer is directly proportional to the current passing through it</b>. </p>
                <p>We can also see that the direction of deflection in a galvanometer is reversed if the direction of current is reversed. In other words, if the current is flowing in the positive direction, an increase in current results in the needle moving to the right, while a decrease in current causes the needle to move to the left. Conversely, <b>if the current is flowing in the negative direction, the deflection direction is reversed</b>. </p>
                <p>Great job on testing your hypothesis! Every step, even the wrong ones, brings you closer to understanding the truth.</p>
                <div class="button-container">
                    <md-filled-button class="next-section-button" data-key="/working-principle">Next Section</md-filled-button>
                </div>
            </div>
        `,
    };

    const answerKey = {
        "principleq1c1": ["incorrect", "Incorrect. A voltmeter measures voltage directly, not a galvanometer."],
        "principleq1c2": ["correct", "Correct. A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."],
        "principleq1c3": ["incorrect", "Incorrect. An ohmmeter detects changes in electrical resistance, not a galvanometer."],
        "principleq1c4": ["info", "It’s okay! A galvanometer operates on the principle that a current-carrying coil interacts with a magnetic field. We will learn more in next sections."]
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

    // content map for dropdown
    const dropdownAnswerKey = {
        
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
    
                    if (!(button.getAttribute('graded')==='false')) {
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
                    }
                    
                    
                });
            });

        }
    });

    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('sim-button')) {
            button = event.target;

            const simReadingEl = button.parentElement.querySelector('.sim-reading');
            let simReading = parseInt(simReadingEl.innerHTML, 10);

            if (button.classList.contains('sim-plus')) {
                simReading += 5;
            } else if (button.classList.contains('sim-minus')) {
                simReading -= 5;
            } else {
                console.log("Error, simulation button class not recognized");
            }

            simReadingEl.innerHTML = `${simReading} mA`;

            // Select the line element
            const galvNeedle = document.getElementById('galv-needle');
            const warning = document.getElementById('galv-broken');
            const posLabel = document.getElementById('pos-current');
            const negLabel = document.getElementById('neg-current');
            const posLabelValue = document.getElementById('pos-current-label');
            const negLabelValue = document.getElementById('neg-current-label');

            posLabelValue.textContent = `${simReading} mA`;
            negLabelValue.textContent = `${simReading} mA`;

            // Calculate the rotation angle based on the current value
            let angle = simReading * 3; // 3 times the simReading
            angle = angle > 90 ? 100 : (angle < -90 ? -100 : angle);

            const angleInRadians = angle * (Math.PI / 180); // Convert angle to radians
            

            // Fixed point (x1, y1)
            const x1 = 165;
            const y1 = 133;
            
            // Length of the needle (distance from (x1, y1) to (x2, y2))
            const needleLength = 63;

            // Calculate new coordinates (x2, y2)
            const x2 = x1 + needleLength * Math.sin(angleInRadians);
            const y2 = y1 - needleLength * Math.cos(angleInRadians);

            // Update the needle position
            gsap.to(galvNeedle, {
                duration: 0.5,
                attr: {
                    x2: x2,
                    y2: y2
                }
            });

            if ((angle >= 0 && angle < 100)) {
                posLabel.classList.remove('sim-hidden');
                negLabel.classList.add('sim-hidden');
                warning.classList.add('sim-hidden');
            } else if ((angle <= 0 && angle > -100)) {
                negLabel.classList.remove('sim-hidden');
                posLabel.classList.add('sim-hidden');
                warning.classList.add('sim-hidden');
            } else {
                warning.classList.remove('sim-hidden');
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