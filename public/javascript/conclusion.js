// dropdown menu does not render properly unless loaded in via javascript
document.addEventListener('DOMContentLoaded', () => {
    const instructionContainer = document.querySelector('.instruction-content');

    const baseContent = `
        <div id="conc-intro">
            <h2>Come to Your Conclusion</h2>
            <p>
                Now that we finished the lab simulation, let's write down our discoveries:
            </p>

            <div class="block-card">
                <div class="block-card-content">
                    <h3>Your Conclusions</h3>

                    <div class="dropdown-inline-container">
                    <span class="dropdown-inline-text">
                        If I choose a <b>higher</b> initial deflection, the figure of merit of the galvanometer will
                    </span>
        
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 120px;" id="c_1">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="c_1">
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
        
                    <span class="dropdown-inline-text" >
                        .
                    </span>
                    </div>

                    <br>

                    <div class="dropdown-inline-container">
                    <span class="dropdown-inline-text">
                        If I choose a <b>lower</b> initial deflection, the figure of merit of the galvanometer will
                    </span>
        
                    <div class="dropdown dropdown-inline">
                        <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 120px;" id="c_2">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="c_2">
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
                <md-outlined-button class="next-button" data-key="next_conc_k">Next</md-outlined-button>
            </div>
            
            </div>`

    instructionContainer.innerHTML = baseContent;

});