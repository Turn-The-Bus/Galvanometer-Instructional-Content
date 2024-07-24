// dropdown menu does not render properly unless loaded in via javascript
document.addEventListener('DOMContentLoaded', () => {
    const instructionContainer = document.querySelector('.instruction-content');

    const baseContent = `
        <div id="fd-intro">
        <h2>Make Your Hypothesis</h2>
        <p>
            Since our goal is to determine the figure of merit of the galvanometer, let's make a hypothesis about it and test the hypothesis using the lab simulation. 
        </p>  
        <p> 
            There is no right or wrong answer to the hypothesis, so feel free to write whatever you want to discover as the hypothesis!
        </p>

        <div class="block-card">
            <div class="block-card-content">
                <h3>Tips for Making a Hypothesis</h3>
                <ol>
                <li>What is figure of merit?</li>
                <li>Do you think the figure of merit is a constant or a variable?</li>
                <li>What parameters, such as the resistance of the galvanometer, might affect the figure of merit?</li>
                </ol>
            </div>
        </div>

        <h3>Your Hypothesis</h3>
        
        <div>
            <div>
            <div class="dropdown-inline-container" >
                <span class="dropdown-inline-text">
                    If I choose a  
                </span>
                <div class="dropdown dropdown-inline">
                    <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 150px;" id="h_1">
                        Select
                    </md-outlined-button>
                    <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                    
                    <md-menu id="usage-menu" anchor="h_1">
                        <md-menu-item data-value="Select">
                            <div slot="headline">Select</div>
                        </md-menu-item >
                        <md-menu-item data-value="higher">
                            <div slot="headline">higher</div>
                        </md-menu-item>
                        <md-menu-item data-value="lower">
                            <div slot="headline">lower</div>
                        </md-menu-item>
                    </md-menu>
                </div>

                <span class="dropdown-inline-text">
                    initial deflection, the figure of merit of the galvanometer will
                </span>

                <div class="dropdown dropdown-inline">
                    <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 150px;" id="h_2">
                        Select
                    </md-outlined-button>
                    <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                    
                    <md-menu id="usage-menu" anchor="h_2">
                        <md-menu-item data-value="Select">
                            <div slot="headline">Select</div>
                        </md-menu-item >
                        <md-menu-item data-value="increase">
                            <div slot="headline">increase</div>
                        </md-menu-item>
                        <md-menu-item data-value="decrease">
                            <div slot="headline">decrease</div>
                        </md-menu-item>
                        <md-menu-item data-value="not change">
                            <div slot="headline">not change</div>
                        </md-menu-item>
                    </md-menu>
                </div>

                <span class="dropdown-inline-text">
                    .
                </span>
            </div>


            </div>
        </div>
        

        
        
        
        <div class="button-container">
            <md-filled-button class="next-section-button" data-key="/lab-simulation-prep">Next Section</md-filled-button>
        </div>
        </div>`

    instructionContainer.innerHTML = baseContent;

});