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
        
    };

    const circuitDiagramMap = {
        circuit_diagram_1: `
            <p>We start with a battery to power our circuit.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-battery.svg" alt="battery">
            represents the battery. The + and &#8722; indicate the positive and negative terminals.</p>
        `,
        circuit_diagram_2: `
            <p>Now, let's place the galvanometer.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-galvanometer.svg" alt="galvanometer">
            represents the galvanometer. The galvanometer reading will show the deflection.</p>
        `,
        circuit_diagram_3: `
            <p>The galvanometer is sensitive and can break due to high currents. To reduce the current, let's place a resistance box.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-high-resistance.svg" alt="high resistance box">
            represents the high resistance box. We add and remove resistance to the circuit using the high resistance box.</p>
        `,
        circuit_diagram_4: `
            <p>The resistance box lets us test different resistance values to see how the galvanometer reacts.
            To protect the galvanometer, we need to pause the current before we switch resistance values. Let's add a key.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-key-1.svg" alt="key 1">
            represents the key. We can open and close the key to let current flow through the circuit.</p>
        `,
        circuit_diagram_5: `
            <p>Now, let's connect all the instruments in series so the current flows to all of them.</p>
        `,
        circuit_diagram_6: `
            <p>In the half-deflection method, we need a second measurement that is half the first measurement. 
            So, we need to significantly reduce the current flowing to the galvanometer.</p>
        `,
        circuit_diagram_7: `
            <p>To do this, we will add a shunt resistance in <b>parallel</b> to the galvanometer. Now, we have created two possible paths 
            for the current to flow through. Some of the current will go down the shunt resistance path rather than to the galvanometer.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-shunt-resistance.svg" alt="shunt resistance box">
            represents the shunt resistance box. It is smaller than the high resistance box. By choosing different shunt resistance values, we can control how much current is diverted from the galvanometer.</p>
        `,
        circuit_diagram_8: `
            <p>We don't want the shunt resistance to always divert current. Otherwise, we can't get our initial 
            reading. So, let's add a key to control when the current can flow to our parallel path.</p>
            <p></span><img class="circuit-diagram-icon-inline" src="images/diagram-key-2.svg" alt="key 2">
            represents the second key. </p>
        `,
        
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
        if (event.target && event.target.classList.contains('circuit-button')) {
            const button = event.target;
            const action = button.getAttribute('id');

            const backButton = document.getElementById('circuit-button-back');
            const nextButton = document.getElementById('circuit-button-next');
            
            const nextSectionButton = document.querySelector('.instruction-content').querySelector('.fd-next-section-button');
            
            const currentImageEl = button.parentElement.parentElement.querySelector('.circuit-diagram-image');
            const currentImageSRC = String(currentImageEl.getAttribute('src'));
            const currentImageNum = parseInt(currentImageSRC.charAt(currentImageSRC.length - 5));

            const captionContainer = document.querySelector('.instruction-content').querySelector('.circuit-diagram-caption');

            let nextNum = 0;

            if (action == 'circuit-button-next') {
                nextNum = currentImageNum + 1;
            } else if (action == 'circuit-button-back') {
                nextNum = currentImageNum - 1;
            }

            if (nextNum >= 8) {
                nextSectionButton.parentElement.classList.remove('hidden');
                nextSectionButton.parentElement.style.scrollMarginTop = '150px';
                nextSectionButton.parentElement.scrollIntoView({ behavior: 'smooth' });
                nextButton.classList.add('hidden');
                nextNum = 8;
            } else {
                nextButton.classList.remove('hidden');
            }

            if (nextNum <= 1) {
                backButton.classList.add('hidden');
                nextNum = 1;
            } else {
                backButton.classList.remove('hidden');
            }

            // update caption
            const nextCircuit = `circuit_diagram_${nextNum}`;
            captionContainer.innerHTML = circuitDiagramMap[nextCircuit];

            // update image
            currentImageEl.src = `/images/circuit-diagram-${nextNum}.svg`

        }
    });



    

    
    
});