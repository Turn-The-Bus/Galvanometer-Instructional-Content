// Wrapper Event Listener
// Since most objects are loaded in through AJAX and do not exist when the DOM is loaded in,
// we use condition handling to listen for when they are clicked
// For each click, check if it corresponds to the target element
document.addEventListener('DOMContentLoaded', () => {

    // Check if the '+' or '-' buttons are clicked
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('sim-button')) {
            button = event.target;

            // Get the current simulation reading and convert it to an integer
            const simReadingEl = button.parentElement.querySelector('.sim-reading');
            let simReading = parseInt(simReadingEl.innerHTML, 10);

            // Increase or decrease the simulation reading based on whether it is the '+' or '-' button
            if (button.classList.contains('sim-plus')) {
                simReading += 5;
            } else if (button.classList.contains('sim-minus')) {
                simReading -= 5;
            } else {
                console.log("Error, simulation button class not recognized");
            }

            // Update the simulation reading element with the new value
            simReadingEl.innerHTML = `${simReading} mA`;

            // Select the visual elements
            const galvNeedle = document.getElementById('galv-needle');
            const warning = document.getElementById('galv-broken');
            const posLabel = document.getElementById('pos-current');
            const negLabel = document.getElementById('neg-current');
            const posLabelValue = document.getElementById('pos-current-label');
            const negLabelValue = document.getElementById('neg-current-label');

            // Update the current labels with the new simulation reading
            posLabelValue.textContent = `${simReading} mA`;
            negLabelValue.textContent = `${simReading} mA`;

            // Calculate the rotation angle based on the current value
            let angle = simReading * 3; // 3 times the simReading
            angle = angle > 90 ? 100 : (angle < -90 ? -100 : angle); // Clamp the angle within -100 to 100

            // Convert angle to radians
            const angleInRadians = angle * (Math.PI / 180);

            // Fixed point coordinates (x1, y1)
            const x1 = 165;
            const y1 = 133;
            
            // Length of the needle (distance from (x1, y1) to (x2, y2))
            const needleLength = 63;

            // Calculate new coordinates (x2, y2)
            const x2 = x1 + needleLength * Math.sin(angleInRadians);
            const y2 = y1 - needleLength * Math.cos(angleInRadians);

            // Update the needle position with an animation
            gsap.to(galvNeedle, {
                duration: 0.5,
                attr: {
                    x2: x2,
                    y2: y2
                }
            });

            // Show or hide labels and warning based on the angle
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
    
});