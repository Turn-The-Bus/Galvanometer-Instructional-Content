const correctColorDark = "#2B7D2F";
const correctColorLight = "#E9FAEA";
const incorrectColorDark = "#C92525";
const incorrectColorLight = "#FFEFEF";
const sysColorPrimaryDark = "#004A76";
const sysColorPrimaryBright = "#047DB7";
const sysColorPrimaryLight = "#DFF3FF";
const sysOutlineColor = "#79747E";

// Define the content for each next button
const contentMap = {
    next_page_fd_intro: `
        <div id="fd-intro">
            <h2>Introduction</h2>
            <p>In this activity, we will learn more about the formulas we can use in the Figure of Merit of a Galvanometer lab.</p>
            
            <p>First, <b>choose your learning path:</b></p>
            <div>
                <md-outlined-button class="learning-path-button" id="lp-full-activity">
                    <div class="lp-header">Full Activity (~25 min)</div>
                    <div class="lp-content">Dive deep with interactive activities. Ideal for those who want a comprehensive understanding.</div>
                </md-outlined-button>
                <md-outlined-button class="learning-path-button" id="lp-summary">
                    <div class="lp-header">Summary (~5 min)</div>
                    <div class="lp-content">Concise summary of key points. Ideal for those who prefer a quick overview.</div>
                </md-outlined-button>
            </div>
            
            <div class="hidden" id="learning-path-begin">
                <p>At any point, you can click on the progress bar to jump between the content and the summary.</p>
                <div class="button-container">
                    <md-filled-button class="learning-path-begin-button" data-key="next_page_fd_goal">Next Page</md-filled-button>
                </div>

            </div>

        </div> 
    `,
    next_fd_intro_toolbox: `
        <span>The formula toolbox contains helpful formulas for you to use throughout the activity. Click on the formula toolbox icon </span>
        <img class="toolbox-icon icon-inline" src="images/toolbox_icon.svg" alt="toolbox" >
        <span>in the upper left corner to view the formulas.</span> 
        <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_fd_intro_roadmap">Next</md-outlined-button>
        </div>
    `,
    next_fd_intro_roadmap: `
        <p>The roadmap gives an overview of the steps you have taken so far. Click on the roadmap icon <md-icon class="icon-inline">conversion_path</md-icon> in the upper left corner to review your steps throughout the activity.</p>
        <div class="button-container">
            <md-filled-button class="next-page-button" data-key="next_page_fd_goal">Next Page</md-filled-button>
        </div>
    `,
    next_page_fd_goal: `
        <div id="fd-goal">
            <div class="toolbox-tooltip hidden">
                The formula toolbox contains helpful formulas for you to use throughout the activity.
                <div class="tooltip-triangle"></div>
            </div>
            <h2>Finding the Figure of Merit</h2>
            <p>Our goal is to find the <b>figure of merit</b> of the galvanometer, indicated by the variable <b>k</b>. </p>
            <p>If we want to find <b>k</b>, which formula should we start with?</p>
            
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq1c1">
                        <span class="button-text">Ohm's Law: \\( V = IR \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq1c2">
                        <span class="button-text">Figure of Merit: \\( I = k \\theta \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq1c3">
                        <span class="button-text">Series Resistance: \\( R_T = R_1 + R_2 \\) </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>
            
            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_goal_current">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_goal_current: `
        <div id="fd-goal-current">
            <p>The <b>\\(I = k\\theta\\)</b> equation indicates that we can find the figure of merit (\\(k\\)) by using the current (\\(I\\)) and the deflection (\\(\\theta\\)). </p>
            <p>What values do we know now?</p>
            
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq2c1">
                        <span>Both </span> \\(I\\) <span> and </span> \\(\\theta\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq2c2">
                        <span>Only </span> \\(I\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq2c3">
                        <span>Only </span> \\(\\theta\\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>

            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_goal_findk">Next</md-outlined-button>
            </div>

        </div>
    `,
        next_fd_goal_findk: `
        <div id="fd_goal_find_k">
            <p>Since we don't know the <b>current (\\(I\\))</b>, we can't yet find the <b>figure of merit (\\(k\\))</b>.</p>

            <div class="diagram-container">
                <svg class="formula-block" width="120" height="150">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                        
                    </defs>

                    <text x="20" y="20" font-family="Roboto" font-size="16" fill="#004A76">Unknown</text>
                    <text x="58" y="140" font-family="Roboto" font-size="16" fill="#787878">Known</text>
                    
                    <foreignObject x="32" y="65" width="60" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I = k\\theta\\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="40" y1="60" x2="40" y2="35" class="arrow" stroke="#004A76" />
                    <line x1="72" y1="60" x2="72" y2="35" class="arrow" stroke="#004A76" />
                    <line x1="82" y1="90" x2="82" y2="115" class="arrow" />
                </svg>
            </div>
        
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_goal_current_ohms_law">Next</md-outlined-button>
            </div>

        </div> 
        `,
        next_fd_goal_current_ohms_law: `
        <div id="fd-goal-current-ohms-law">
            <p>If we don't know the current (\\(I\\)), maybe we can use another equation to solve for it. </p>
            <p>Which of these equations should we use to find more information about the current (\\(I\\))?</p>
            
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq3c1">
                        <span>Ohm's Law: </span> \\( V = IR \\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq3c2">
                        <span>Parallel Resistance: </span> \\( \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq3c3">
                        <span>Series Resistance: </span> \\( R_T = R_1 + R_2 \\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_goal_voltage">Next</md-outlined-button>
            </div>

        </div>
        `,
        next_fd_goal_voltage: `
        <div id="fd-goal-voltage">
            <p>To solve the <b>current (\\(I\\))</b> using Ohm's Law, let's check if we know the <b>voltage (\\(V\\))</b> and the <b>resistance (\\(R\\))</b>.</p>
            
            <h3>Voltage</h3>
            <p>The voltage in the circuit is the <b>emf of the battery, \\(E\\)</b>. You can find the emf value written on the battery itself, and it is usually <b>2V</b> for this lab.</p>
            <p>Let's update our formula with the known value:</p>

            <div class="diagram-container">
                <svg class="formula-block" width="250" height="80">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                        
                    </defs>
                    
                    <foreignObject x="10" y="30" width="100" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V = IR \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="138" y="30" width="100" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( E = IR \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="85" y1="40" x2="127" y2="40" class="arrow" />

                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_goal_resistance">Next</md-outlined-button>
            </div>

        </div> 
        `,
    next_fd_goal_resistance: `
        <div id="fd-goal-resistance">
            <h3>Resistance</h3>
            <p>To get the initial deflection, we close key \\(K_1\\). Let's look at the resistance in the circuit when key \\(K_1\\) is closed.</p>

            <div class="diagram-container">
                <svg width="247" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                    
            
                    <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>
            
                    <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                        <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                    </svg>
            
                    <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>
            
                    <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                        <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                    </svg>
                
                </svg>
            </div>

            <p>Which elements add resistance to the circuit?</p>

            <div class="multi-select-question">
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdfmm1c1"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>High Resistance Box</span>
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdfmm1c2"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Galvanometer</span>
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdfmm1c3"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Key</span> \\(K_1\\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>

                <div class="button-container">
                    <md-outlined-button class="multi-select-submit-button">Submit</md-outlined-button>
                </div>

            </div>
        
            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_goal_resistance_equation">Next</md-outlined-button>
            </div>

        </div> 
    `,
    next_fd_goal_resistance_equation: `
        <div id="fd-goal-series-resistance">
            <p>Since the <b>high resistance box</b> and <b>galvanometer</b> are connected in series, we can use the <b>series resistance formula</b>.</p>

            <div class="diagram-container">
                <span>\\(R_T = R_1 + R_2\\)</span>
            </div>

            <p>So, what's the resistance in the circuit?.</p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq5c1">
                        \\(\\frac{1}{R} + \\frac{1}{G}\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq5c2">
                        \\(R + G\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdgoalq5c3">
                        \\(R + \\frac{1}{G}\\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_goal_update_formula">Next</md-outlined-button>
            </div>
    

        </div>  
    `,
    next_fd_goal_update_formula: `
        <div id="fd-goal-update-formula">
            <p>Let's update our formula with the resistance:</p>

            <div class="diagram-container">
                <svg class="formula-block" width="260" height="80">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                        
                    </defs>
                    
                    <foreignObject x="10" y="30" width="100" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( E = IR \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="135" y="30" width="140" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( E = I(R+G) \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="85" y1="40" x2="125" y2="40" class="arrow" />

                </svg>
            </div>
            

            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_eliminating_intro" >Next Page</md-filled-button>
            </div>

        </div>   
    `,
    next_page_fd_eliminating_intro: `
        <div id="fd-eliminating-intro">
            <h2>Eliminating the Unknown Current</h2>
            <p>In the last section, we discovered that we can't solve for the current \\((I)\\) using the \\(I = kθ\\) formula or the \\(I = \\frac{E}{(R+G)}\\) formula since there are too many unknowns.  </p>
            
            <p>But, we can eliminate the unknown current \\((I)\\) by combining the two formulas.</p>

            <div class="diagram-container">
                <svg class="formula-block" width="280" height="170">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>

                    <!-- Text elements using MathJax -->
                    <foreignObject x="20" y="20" width="100" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I = k\\theta \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="180" y="20" width="150" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I = \\frac{E}{(R+G)} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="90" y="110" width="200" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{(R+G)} \\)</span>
                        </div>
                    </foreignObject>

                    <!-- Arrows -->
                    <line x1="70" y1="60" x2="90" y2="90" class="arrow" />
                    <line x1="200" y1="60" x2="180" y2="90" class="arrow" />
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_eliminating_unknowns">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_eliminating_unknowns: `
        <div id="fd-eliminating-unknowns">
            <p>Looking at our new formula, \\(k\\theta = \\frac{E}{R+G} \\), what unknowns do we have?</p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq1c1">
                        Only \\(k\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq1c2">
                        \\(k\\), \\(G\\)
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq1c3">
                        \\(k\\), \\(G\\), \\(\\theta\\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_eliminating_unknowns_diagram">Next</md-outlined-button>
            </div>
    

        </div>  
    `,
    next_fd_eliminating_unknowns_diagram: `
        <div id="next_fd_eliminating_unknowns_diagram">
            <p>Since we have <b>two</b> unknowns, we need at least <b>two</b> equations to solve for them.</p>

            <div class="diagram-container">
                <svg class="formula-block" width="200" height="180">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>
            
                    <text x="65" y="30" font-family="Roboto" font-weight="500" font-size="16" fill="#004A76">Unknown</text>
                    <text x="70" y="160" font-family="Roboto" font-weight="500" font-size="16">Known</text>

                    <rect x="47" y="82" rx="5" ry="5" width="16" height="20" fill="#D8EAFE" />
                    <rect x="118" y="90" rx="5" ry="5" width="16" height="20" fill="#D8EAFE" />
                    
                    <foreignObject x="50" y="80" width="100" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{R+G} \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="55" y1="75" x2="55" y2="55" class="arrow" style="stroke: #004A76"/>
                    <line x1="65" y1="110" x2="65" y2="130" class="arrow"  />
                    
                    <line x1="92" y1="85" x2="92" y2="130" class="arrow" />
                    <line x1="91" y1="85" x2="100" y2="85" class="line" />
                    
                    <line x1="105" y1="110" x2="105" y2="130" class="arrow" />

                    
                    <line x1="145" y1="105" x2="145" y2="55" class="arrow" style="stroke: #004A76" />
                    <line x1="135" y1="105" x2="146" y2="105" class="line" style="stroke: #004A76" />
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_eliminating_review_knowns">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_eliminating_review_knowns: `
        <div>
            <p>How can we get the second equation?</p>

            <p>First, let's review how we can get the value of each known variable.</p>
            <ul>
                <li>\\(E\\): emf of the battery (2V)</li>
                <li>\\(R\\): high resistance box value</li>
                <li>\\(\\theta\\): galvanometer deflection reading</li>
            </ul>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_eliminating_two_sets">Next</md-outlined-button>
            </div>
        </div>
    `,
    next_fd_eliminating_two_sets: `
        <div id="fd-eliminating-two-sets">
            <p>If we're able to get two sets of values for these three known variables, then we can get two equations.</p>

            <p>Let's say you set the high resistance box to 1000\(\Omega\) and get a galvanometer deflection of 30.</p>
            
            <div> 
                <p style="margin: 2px; text-align: center; font-style: italic">1st Set of Values</p>
                <p style="margin: 2px; text-align: center;">\\(E\\) = 2V</p>
                <p style="margin: 2px; text-align: center;">\\(R\\) = 1000\\(\\Omega\\)</p>
                <p style="margin: 2px; text-align: center">\\(\\theta\\) = 30</p>
            </div>

            <p>
                Now, we need to find another high resistance value and deflection value. What kind of deflection value should we try to get?
            </p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq2c1">
                        <span class="button-text">Equal to the first deflection value</span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq2c2">
                        <span class="button-text">Half the first deflection value</span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdeliminatingq2c3">
                        <span class="button-text">Any deflection value</span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>
            
            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_eliminating_conclusion">Next</md-outlined-button>
            </div>
                
        </div>
    `,
    next_fd_eliminating_conclusion: `
        <div id="fd-eliminating-conclusion">
            <p>Unfortunately, <b>the available high resistance box values are usually not enough</b> to achieve a half-deflection in the galvanometer.</p>
            <p>To get a half-deflection, we need to significantly reduce the current flowing through the galvanometer. So, we will <b>add a shunt resistance in parallel</b> to the galvanometer. This will allow us to fine-tune the amount of current diverted away from the galvanometer.</p>
            <p>In the Next Page, we will learn how adding a shunt resistance box will help us get the half deflection value and our second equation.</p>

            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_secondeq_intro">Next Page</md-filled-button>
            </div>
        </div>
    `,
    next_page_fd_secondeq_intro: `
        <div id="fd-secondeq-intro">
            <h2>Getting a Second Equation</h2>
            <p>When drawing the circuit diagram, we added a shunt resistance to decrease the current flowing to the galvanometer.</p>

            <div class="diagram-container">

            <svg width="360" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="#000000"/>
                        </marker>
                    </defs>

                    <g transform="translate(-40, 25) scale(0.6)" >
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        
                
                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                
                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                    
                    </g>

                    <line x1="110" y1="55" x2="130" y2="55" class="arrow" stroke="black" marker-end="url(#arrowhead-test2)"/>

                    <g transform="translate(140, 0) scale(0.6)" >
                        <g transform="translate(0, 39)">
                            <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                            
                    
                            <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                                <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                                <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                                <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                                <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                            </svg>
                    
                            <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                                <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                            </svg>
                        </g>
                

                        <rect x="83" y="15" width="105" height="10" fill="#C0E5FB"/>
                        <rect x="67" y="25" width="10" height="40" fill="#C0E5FB"/>
                        <rect x="177" y="16" width="10" height="50" fill="#C0E5FB"/>

                        <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                        <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>
                
                        <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                            
                    </g>
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_split">Next</md-outlined-button>
            </div>


        </div>
    `,
    next_fd_secondeq_split: `
        <div id="fd-secondeq-split">

            <p>Now, the current \\((I)\\) is split between the galvanometer path and the shunt resistance path.</p>

            <div class="diagram-container">
                <svg width="250" height="170" viewBox="0 0 250 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                        <marker id="blue-arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="#047DB7"/>
                        </marker>
                        
                    </defs>

                    <g transform="translate(0, 39)">
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        
                
                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                
                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                    </g>

                    <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                    <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>
            
                    <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>
            
                    <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>

                    <line x1="25" y1="55" x2="100" y2="55" stroke="#047DB7" stroke-width="3" marker-end="url(#blue-arrowhead)"/>

                    <g transform="translate(23,40)">
                        <path d="M2 15 H 32 C 32 15 38 13 38 9 C38 6 38 2 38 2" stroke="#047DB7" stroke-width="3" marker-end="url(#blue-arrowhead)"/>
                    </g>

                    <foreignObject x="10" y="45" width="20" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="115" y="35" width="25" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I_G \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="35" y="20" width="25" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I_S \\)</span>
                        </div>
                    </foreignObject>
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_ig">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_ig: `
        <div id="fd-secondeq-ig">

            <p>Using the formula \\(I = k\\theta\\), we know that the deflection (\\(\\theta\\)) of the galvanometer depends on the current flowing through it. </p>

            <p>Which of the following represents the current flowing through the galvanometer?</p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq1c1">
                        <span class="button-text">Ohm's Law: \\( I \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq1c2">
                        <span class="button-text">Figure of Merit: \\( I_S \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq1c3">
                        <span class="button-text">Series Resistance: \\( I_G \\) </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_ig_toolbox">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_ig_toolbox: `
        <div id="fd-secondeq-ig-toolbox">

            <p>How can we find \\(I_G\\)? Try looking in the formula toolbox to see if anything can help us. Then, click 'Next'.</p>

            <div class="button-container">
                <md-filled-button class="formula-toolbox-button">
                    Open Formula Toolbox
                    <img slot="icon" src="images/toolbox_icon_white.svg" alt="toolbox" >
                </md-filled-button>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_current">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_current: `
        <div id="fd-secondeq-ig-current">

            <p>Since the galvanometer and shunt resistance are in parallel, we can use the formula for calculating the current of parallel paths.</p>

            <div class="diagram-container">
                <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                    </defs>

                    <text x="20" y="20" font-family="Roboto" font-style="Italic" font-size="16" fill="black">Parallel Currents</text>

                    <foreignObject x="35" y="30" width="100" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I = I_1 + I_2 \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="35" y="90" width="100" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I = I_S + I_G \\)</span>
                        </div>
                    </foreignObject>

                    <line x1="80" y1="58" x2="80" y2="75" class="arrow" />

                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_know_v">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_know_v: `
        <div id="fd-secondeq-know-v">

            <p>Similar to finding the current in the previous circuit layout, we will use Ohm's Law.</p>

            <div class="equation-caption">
                <div>Ohm's Law</div>
            </div>

            <div class="equation" style="font-size: 16px">
                <div class="eqcol1">\\(V\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\(IR\\)</div>
            </div>

            <p>To solve for the current \\((I)\\), we need to find the voltage \\((V)\\) and the resistance \\((R)\\).</p>

            <p>Do we know the voltage \\((V)\\) in the circuit?</p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq2c1">
                        <span class="button-text">Yes, we know the voltage</span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq2c2">
                        <span class="button-text">No, we don't know the voltage</span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_add_r">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_add_r: `
        <div id="fd-secondeq-add-r">

            <p>Now, let's calculate the resistance \\((R)\\) of the circuit. Which elements add resistance to the circuit?</p>

            <div class="multi-select-question">
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdseqm1c1"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>High Resistance Box</span>
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdseqm1c2"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Galvanometer</span>
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdseqm1c3"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Key</span> \\(K_1\\)
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdseqm1c4"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Low Resistance Box</span>
                    </md-outlined-button>
                </div>
                <div class="multi-select-wrapper">
                    <md-checkbox class="multi-select-checkbox" touch-target="wrapper" data-key="fdseqm1c5"></md-checkbox>
                    <md-outlined-button class="multi-select-button"> 
                        <span>Key</span> \\(K_2\\)
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>

                <div class="button-container">
                    <md-outlined-button class="multi-select-submit-button">Submit</md-outlined-button>
                </div>

            </div>
        
            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_find_r">Next</md-outlined-button>
            </div>
            
        </div>
    `,
    next_fd_secondeq_find_r: `
        <div id="fd-secondeq-find-r">

            <p>To find the total resistance of the circuit, we need to use the resistance formulas from the formula toolbox.</p>
            
            <div class="diagram-container">
                <svg width="300" height="250" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                    </defs>

                    <text x="35" y="20" font-family="Roboto" font-style="Italic" font-size="16" fill="black">Series</text>

                    <foreignObject x="10" y="35" width="140" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span style="font-size: 16px;" class="mathjax">\\( R = R_1 + R_2 \\)</span>
                        </div>
                    </foreignObject>

                    <text x="190" y="20" font-family="Roboto" font-style="Italic" font-size="16" fill="black">Parallel</text>

                    <foreignObject x="150" y="30" width="140" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span style="font-size: 20px;" class="mathjax">\\( \\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} \\)</span>
                        </div>
                    </foreignObject>

                    <g transform="translate(25, 90)" >
                        <g transform="translate(0, 39)">
                            <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                            
                    
                            <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                                <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                                <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                                <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                                <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                            </svg>
                    
                            <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                                <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                            </svg>
                        </g>

                        <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                        <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>
                
                        <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                            
                    </g>

                </svg>
            </div>

            <p>Fill in the blanks.</p>

            <div>
                    <div class="dropdown-inline-container">
                        <span class="dropdown-inline-text">
                            The 
                        </span>
                        <div class="dropdown dropdown-inline">
                            <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 170px;" id="r_1">
                                Select
                            </md-outlined-button>
                            <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                            
                            <md-menu id="usage-menu" anchor="r_1">
                                <md-menu-item data-value="Select">
                                    <div slot="headline">Select</div>
                                </md-menu-item >
                                <md-menu-item data-value="Galvanometer">
                                    <div slot="headline">Galvanometer</div>
                                </md-menu-item>
                                <md-menu-item data-value="High Resistance Box">
                                    <div slot="headline">High Resistance Box</div>
                                </md-menu-item>
                                <md-menu-item data-value="Low Resistance Box">
                                    <div slot="headline">Low Resistance Box</div>
                                </md-menu-item>
                            </md-menu>
                        </div>
            
                        <span class="dropdown-inline-text">
                            is in series with the parallel combination of the
                        </span>
            
                        <div class="dropdown dropdown-inline">
                            <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 170px;" id="r_2">
                                Select
                            </md-outlined-button>
                            <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                            
                            <md-menu id="usage-menu" anchor="r_2">
                                <md-menu-item data-value="Select">
                                    <div slot="headline">Select</div>
                                </md-menu-item >
                                <md-menu-item data-value="Galvanometer">
                                    <div slot="headline">Galvanometer</div>
                                </md-menu-item>
                                <md-menu-item data-value="High Resistance Box">
                                    <div slot="headline">High Resistance Box</div>
                                </md-menu-item>
                                <md-menu-item data-value="Low Resistance Box">
                                    <div slot="headline">Low Resistance Box</div>
                                </md-menu-item>
                            </md-menu>
                        </div>

                        <span class="dropdown-inline-text">
                            and the 
                        </span>

                        <div class="dropdown dropdown-inline">
                            <md-outlined-button class="dropdown-button dropdown-button-inline" style="width: 170px;" id="r_3">
                                Select
                            </md-outlined-button>
                            <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                            
                            <md-menu id="usage-menu" anchor="r_3">
                                <md-menu-item data-value="Select">
                                    <div slot="headline">Select</div>
                                </md-menu-item >
                                <md-menu-item data-value="Galvanometer">
                                    <div slot="headline">Galvanometer</div>
                                </md-menu-item>
                                <md-menu-item data-value="High Resistance Box">
                                    <div slot="headline">High Resistance Box</div>
                                </md-menu-item>
                                <md-menu-item data-value="Low Resistance Box">
                                    <div slot="headline">Low Resistance Box</div>
                                </md-menu-item>
                            </md-menu>
                        </div>

                        <span class="dropdown-inline-text">
                            . 
                        </span>
                    </div>
            
            
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_r_parallel">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_r_parallel: `
        <div id="fd-secondeq-find-r">

            <p>Let's start by calculating the resistance of the parallel combination of the Galvanometer and the Shunt Resistance Box.</p>
            <p>Which of the following equations is correct?</p>
            
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq3c1">
                        <span class="button-text"> \\( \\frac{1}{R_{\\text{parallel}}} = \\frac{1}{G} + \\frac{1}{S} \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq3c2">
                        <span class="button-text"> \\( R_{\\text{parallel}} = \\frac{1}{G} + \\frac{1}{S} \\)  </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_isolate">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_isolate: `
        <div id="fd-secondeq-isolate">

            <p>To get an expression for the combined resistance of the galvanometer and shunt resistance box, we need to isolate \\( R_{\\text{parallel}} \\)</p>
            <div> 
                <div class="equation equation-large">
                    <div class="eqcol1">\\(\\frac{1}{R_{\\text{parallel}}}\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(\\frac{1}{G} + \\frac{1}{S}\\)</div>
                </div>

                <div class="reveal-container">
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    
                    <div class="button-container">
                        <md-filled-tonal-button class="reveal-steps">Reveal Steps</md-filled-tonal-button>
                    </div>

                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                

                <div class="steps">
                    <div class="equation equation-large">
                        <div class="eqcol1">\\(\\frac{1}{\\frac{1}{G} + \\frac{1}{S}}\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3">\\(R_{\\text{parallel}}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1">\\(\\frac{1}{\\frac{S}{GS} + \\frac{G}{GS}}\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3">\\(R_{\\text{parallel}}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1">\\(\\frac{1}{\\frac{G+S}{GS}}\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3">\\(R_{\\text{parallel}}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1">\\(\\frac{GS}{G+S}\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3">\\(R_{\\text{parallel}}\\)</div>
                    </div>
                </div>

                <div class="equation equation-large">
                    <div class="eqcol1">\\(R_{\\text{parallel}}\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(\\frac{GS}{G+S}\\)</div>
                </div>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_r_formula">Next</md-outlined-button>
            </div>

            
        </div>
    `,
    next_fd_secondeq_r_formula: `
        <div id="fd-secondeq-r-formula">

            <p>Now, let's find the resistance of the whole circuit.</p>
            <p>Which of the equations represents the high resistance box in series with the parallel combination of the galvanometer and the shunt resistance box?</p>
            
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq4c1">
                        <span class="button-text"> \\( \\frac{1}{R} + \\frac{GS}{G+S} \\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsecondeqq4c2">
                        <span class="button-text"> \\( R + \\frac{GS}{G+S} \\) </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_secondeq_plug_in">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_secondeq_plug_in: `
        <div id="fd-secondeq-plug-in">
            <p>Now, let's plug the voltage and resistance into Ohm's Law so we can solve for the current \\((I)\\).</p>

            <div class="formula-animation-container" data-key="ohms">

                <div class="replay-button-container">
                    <md-text-button class="replay-button">
                        <span slot="icon" class="material-symbols-outlined">replay</span>
                        Replay Animation
                    </md-text-button>
                </div>
                
                
                <div class="diagram-container">
                    
                    <svg class="formula-block" width="275" height="155">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                    refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                            </marker>
                        </defs>
                
                        <rect id="ohms-rectV" x="47" y="89" rx="5" ry="5" width="20" height="20" fill="#DFF3FF" />
                        <rect id="ohms-rectR" x="47" y="107" rx="5" ry="5" width="20" height="20" fill="#DFF3FF" />
                
                        <foreignObject id="ohms-form1" x="5" y="5" width="100" height="20">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 18px;">\\(V = IR\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="ohms-form2"x="7" y="50" width="100" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 18px;">\\(I = \\frac{V}{R} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form3-v1"x="7" y="95" width="100" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 18px;">\\(I = \\frac{V}{R} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form3-v2"x="7" y="95" width="100" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 18px;">\\(I = \\frac{E}{R} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form3-v3"x="7" y="95" width="100" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 18px;">\\(I = \\frac{E}{R + \\frac{GS}{G+S}} \\)</span>
                            </div>
                        </foreignObject>

                        <text id="ohms-text1" x="95" y="115" font-family="Roboto" font-size="16" font-style="italic">voltage: </text>
                        <text id="ohms-text2" x="115" y="115" font-family="Roboto" font-size="16" font-style="italic">resistance: </text>

                        <foreignObject id="ohms-form4"x="155" y="100" width="200" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 14px">\\( E \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form4-move"x="155" y="100" width="200" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 14px">\\( E \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form5"x="195" y="98" width="200" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 12px">\\( R + \\frac{GS}{G+S} \\)</span>
                            </div>
                        </foreignObject>

                        <foreignObject id="ohms-form5-move"x="175" y="98" width="200" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 12px">\\( R + \\frac{GS}{G+S} \\)</span>
                            </div>
                        </foreignObject>

                    </svg>
                </div>
            </div>

            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_ig_intro">Next Page</md-filled-button>
            </div>

        </div>
    `,
    next_page_fd_ig_intro: `
        <div id="fd-ig-intro">
            <h2>Solving for \\(I_G\\)</h2>
            <p>Now that we've solved for \\(I\\), we are one step closer to solving for \\(I_G\\). Next, we need to solve for \\(I_S\\).</p>

            <div class="diagram-container">
                <div>
                    \\(I = I_S + I_G \\)
                </div>
            </div>
            <div class="diagram-container">
                <svg width="250" height="170" viewBox="0 0 250 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                        <marker id="blue-arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="#047DB7"/>
                        </marker>
                        
                    </defs>

                    <g transform="translate(0, 39)">
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        
                
                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                
                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                    </g>

                    <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                    <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>
            
                    <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>
            
                    <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>

                    <line x1="25" y1="55" x2="100" y2="55" stroke="#047DB7" stroke-width="3" marker-end="url(#blue-arrowhead)"/>

                    <g transform="translate(23,40)">
                        <path d="M2 15 H 32 C 32 15 38 13 38 9 C38 6 38 2 38 2" stroke="#047DB7" stroke-width="3" marker-end="url(#blue-arrowhead)"/>
                    </g>

                    <foreignObject x="10" y="45" width="20" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="115" y="35" width="25" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I_G \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="35" y="20" width="25" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax" style="color: #047DB7">\\( I_S \\)</span>
                        </div>
                    </foreignObject>
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_ohms">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_ohms: `
        <div id="fd-ig-ohms">
            <p>To find an equation for \\(I_S\\), let's use Ohm's Law again. This time, we will apply Ohm's Law to the galvanometer path and the shunt resistance path individually.</p>
            
            <div class="dropdown-row-container">
                <div class="dropdown-row">
                    <div>
                        \\(V_G = \\)
                    </div>
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 100px;" id="v_g1">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="v_g1">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="\\(I\\)">
                                <div slot="headline">\\(I\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(I_G\\)">
                                <div slot="headline">\\(I_G\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(I_S\\)">
                                <div slot="headline">\\(I_S\\)</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
        
                    <div>
                        \\( \\times \\)
                    </div>
        
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 100px;" id="v_g2">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="v_g2">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="\\(S\\)">
                                <div slot="headline">\\(S\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(R\\)">
                                <div slot="headline">\\(R\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(G\\)">
                                <div slot="headline">\\(G\\)</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
                </div>
            </div>
        
            <div class="dropdown-row-container">
                <div class="dropdown-row">
                    <div>
                        \\(V_S = \\)
                    </div>
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 100px;" id="v_s1">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow" >keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="v_s1">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="\\(I\\)">
                                <div slot="headline">\\(I\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(I_G\\)">
                                <div slot="headline">\\(I_G\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(I_S\\)">
                                <div slot="headline">\\(I_S\\)</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
        
                    <div>
                        \\( \\times \\)
                    </div>
        
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 100px;" id="v_s2">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="v_s2">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="\\(S\\)">
                                <div slot="headline">\\(S\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(R\\)">
                                <div slot="headline">\\(R\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(G\\)">
                                <div slot="headline">\\(G\\)</div>
                            </md-menu-item>
                        </md-menu>
                    </div>
                </div>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_v_toolbox">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_v_toolbox: `
        <div id="fd-ig-toolbox">

            <p>Now we have an equation for \\(V_G\\) and \\(V_S\\). What formula from the formula toolbox do you think we should use next? </p>

            <div class="button-container">
                <md-filled-button class="formula-toolbox-button">
                    Open Formula Toolbox
                    <img slot="icon" src="images/toolbox_icon_white.svg" alt="toolbox" >
                </md-filled-button>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_voltage">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_voltage: `
        <div id="fd-ig-voltage">

            <p>Since the galvanometer and shunt resistance are in parallel, we can use the formula for calculating the voltage of parallel paths.</p>

            <div class="diagram-container">
                <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                    </defs>

                    <text x="20" y="20" font-family="Roboto" font-style="Italic" font-size="16" fill="black">Parallel Voltage</text>

                    <foreignObject x="30" y="30" width="120" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V = V_1 = V_2 \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="30" y="90" width="120" height="25">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V = V_S = V_G \\)</span>
                        </div>
                    </foreignObject>

                    <line x1="80" y1="58" x2="80" y2="75" class="arrow" />

                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_combine">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_combine: `
        <div id="fd-ig-combine">
            <p>Combining the formulas will give us more information about the relationship between \\(I_G\\) and \\(I_S\\).</p>

            <div class="diagram-container">
                <svg width="280" height="170" viewBox="0 0 280 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                    </defs>

                    <foreignObject x="90" y="5" width="120" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V_G = V_S \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="5" y="60" width="120" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V_G = I_G G\\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="160" y="60" width="120" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( V_S = I_S S\\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="80" y="135" width="120" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_G G = I_S S\\)</span>
                        </div>
                    </foreignObject>
                    
                    <line x1="95" y1="30" x2="80" y2="50" class="arrow" />
                    <line x1="150" y1="30" x2="165" y2="50" class="arrow" />
                    <line x1="127" y1="80" x2="127" y2="120" class="arrow" />

                </svg>
            </div>
            
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_eliminate">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_eliminate: `
        <div id="fd-ig-eliminate">
            <p>Although we can't solve for \\(I_S\\) directly, we can put it in terms of \\(I_G\\). This helps to eliminate the unknown \\(I_S\\) variable.</p>

            <div class="formula-animation-container" data-key="igg">

                <div class="replay-button-container">
                    <md-text-button class="replay-button">
                        <span slot="icon" class="material-symbols-outlined">replay</span>
                        Replay Animation
                    </md-text-button>
                </div>
                
                
                <div class="diagram-container">
                    
                    <svg class="formula-block" width="340" height="220">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                    refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                            </marker>
                        </defs>
                
                        <rect id="igg-rect1" x="10" y="80" rx="10" ry="10" width="115" height="40" fill="#DFF3FF" />
                        <rect id="igg-rect2" x="237" y="160" rx="10" ry="10" width="25" height="40" fill="#DFF3FF" />
                        <rect id="igg-rect3" x="235" y="160" rx="10" ry="10" width="75" height="40" fill="#DFF3FF" />
                
                        <text x="25" y="12" font-family="Roboto" font-size="16" font-style="italic">Formula 1</text>
                        <text x="190" y="12" font-family="Roboto" font-size="16" font-style="italic">Formula 2</text>
                
                        <foreignObject id="igg-form1" x="20" y="20" width="100" height="20">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(I = I_G + I_S\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form2"x="20" y="90" width="100" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(I_S = I_G - I\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form3" x="180" y="20" width="100" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(I_G G = I_S S\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form4-1" x="180" y="170" width="180" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(I_G G = \\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form4-2" x="240" y="170" width="180" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span id="igg-form4-2" class="mathjax">\\(I_S\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form4-3" x="240" y="170" width="180" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span id="igg-form4-3" class="mathjax">\\((I_G - I)\\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="igg-form4-4" x="260" y="170" width="180" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(S\\)</span>
                            </div>
                        </foreignObject>
                
                        <line id="igg-arrow1" x1="60" y1="50" x2="60" y2="65" class="arrow" />
                        <line id="igg-arrow2" x1="140" y1="120" x2="200" y2="153" class="arrow" />
                        <line id="igg-arrow3" x1="230" y1="50" x2="230" y2="150" class="arrow" />
                    </svg>
                </div>
            </div>
            
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_isolate">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_isolate: `
        <div id="fd-ig-isolate">
            <p>Since we want to solve for \\(I_G\\), let's isolate \\(I_G\\) on one side of the equation. </p>

            <div class="equation">
                <div class="eqcol1">\\(I_G G\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\((I - I_G)S\\)</div>
            </div>
        
            <div class="reveal-container">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                
                <div class="button-container">
                    <md-filled-tonal-button class="reveal-steps">Reveal Steps</md-filled-tonal-button>
                </div>
        
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            
        
            <div class="steps">
                <div class="equation">
                    <div class="eqcol1">\\(I_G G\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(IS - I_G S\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(I_G G + I_G S\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(IS\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(I_G(G + S)\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(IS\\)</div>
                </div>
            </div>
        
            <div class="equation">
                <div class="eqcol1">\\(I_G\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\(\\frac{IS}{G+S}\\)</div>
            </div>
    
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_plug_in">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_plug_in: `
        <div id="fd-ig-isolate">
            <p>Since we solved for I earlier, we can replace the I variable in our equation.</p>
            
            <div class="formula-animation-container" data-key="iggcombine">

                <!-- <div class="replay-button-container">
                    <md-text-button class="replay-button">
                        <span slot="icon" class="material-symbols-outlined">replay</span>
                        Replay Animation
                    </md-text-button>
                </div> -->
                
                
                
                <div class="diagram-container">
                    
                    <svg class="formula-block" width="340" height="220">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                    refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                            </marker>
                        </defs>
                
                        <!-- <rect id="iggcombine-rect1" x="10" y="80" rx="10" ry="10" width="115" height="40" fill="#DFF3FF" />
                        <rect id="iggcombine-rect2" x="237" y="160" rx="10" ry="10" width="25" height="40" fill="#DFF3FF" />
                        <rect id="iggcombine-rect3" x="235" y="160" rx="10" ry="10" width="75" height="40" fill="#DFF3FF" /> -->
            
                
                        <foreignObject id="iggcombine-form1" x="20" y="20" width="100" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_G = \\frac{IS}{G+S} \\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="iggcombine-form2"x="20" y="90" width="150" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\(I_G = I \\times \\frac{S}{G+S} \\) </span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="iggcombine-form3" x="200" y="20" width="100" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I = \\frac{E}{R+\\frac{GS}{G+S}} \\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="iggcombine-form4-1" x="110" y="170" width="180" height="50">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax">\\( I_G = \\frac{E}{R+\\frac{GS}{G+S}} \\times \\frac{S}{G+S} \\)</span>
                            </div>
                        </foreignObject>
                
                
                        <line id="iggcombine-arrow1" x1="60" y1="55" x2="60" y2="70" class="arrow" />
                        <line id="iggcombine-arrow2" x1="60" y1="120" x2="100" y2="153" class="arrow" />
                        <line id="iggcombine-arrow3" x1="240" y1="60" x2="200" y2="145" class="arrow" />
                    </svg>
                </div>
            </div>
            
        
        
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_simplify">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_ig_simplify: `
        <div id="fd-ig-simplify">
            <p>This is looking a bit complicated, so let's simplify the formula.</p>
            
            <div> 
                <div class="equation equation-large">
                    <div class="eqcol1-right">\\(I_G\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3-right">\\(\\frac{E}{R+\\frac{GS}{G+S}} \\times \\frac{S}{G+S}\\)</div>
                </div>

                <div class="reveal-container">
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    
                    <div class="button-container">
                        <md-filled-tonal-button class="reveal-steps">Reveal Steps</md-filled-tonal-button>
                    </div>

                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                

                <div class="steps">
                    <div class="equation equation-large">
                        <div class="eqcol1-right">\\(I_G\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3">\\(\\frac{E}{\\frac{R(G+S)}{G+S}+\\frac{GS}{G+S}} \\times \\frac{S}{G+S}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1-right">\\(I_G\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3-right">\\(\\frac{E}{\\frac{R(G+S)+GS}{G+S}} \\times \\frac{S}{G+S}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1-right">\\(I_G\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3-right">\\(\\frac{E(G+S)}{R(G+S)+GS} \\times \\frac{S}{G+S}\\)</div>
                    </div>
                    <div class="equation equation-large">
                        <div class="eqcol1-right">\\(I_G\\)</div>
                        <div class="eqcol2">=</div>
                        <div class="eqcol3-right">\\(\\frac{E}{R(G+S)+GS} \\times S\\)</div>
                    </div>
                </div>

                <div class="equation equation-large">
                    <div class="eqcol1-right">\\(I_G\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3-right">\\(\\frac{ES}{RG + RS + GS}\\)</div>
                </div>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_ig_conc">Next</md-outlined-button>
            </div>
        
        </div>
    `,
    next_fd_ig_conc: `
        <div id="fd-ig-conc">
            <p>Now, we have a second equation for the current! On the next page, we'll see how we can combine it with our first equation for the current.</p>

            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_solve_g_intro">Next Page</md-filled-button>
            </div>
        </div>
    `,
    next_page_fd_solve_g_intro: `
        <div id="fd-solve-g-intro">
            <h2>Solving for \\(G\\)</h2>
            <p>When drawing the circuit diagram, we added a shunt resistance to decrease the current flowing to the galvanometer.</p>

            <div class="diagram-container">

            <svg width="360" height="200" viewBox="0 0 360 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="#000000"/>
                        </marker>
                    </defs>

                    <text x="40" y="15" font-family="Roboto" fill="black" font-size="16" font-style="italic">Initial Deflection</text>
                    <text x="220" y="15" font-family="Roboto" fill="black" font-size="16" font-style="italic">Half Deflection</text>
                    
                    <g transform="translate(0, 50) scale(0.75)" >
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        
                
                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                
                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                    
                    </g>

                    <g transform="translate(180, 20) scale(0.75)" >
                        <g transform="translate(0, 39)">
                            <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                            <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                            <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                            <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                            
                    
                            <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                                <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                                <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                            </svg>
                    
                            <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                                <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                                <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                            </svg>
                    
                            <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                                <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                                <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                                <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                            </svg>
                        </g>
            

                        <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                        <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                        <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>
                
                        <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                            
                    </g>

                    <foreignObject fill="black" x="40" y="150" width="100" height="50">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\(I_\\text{G1} = \\frac{E}{R+G}\\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject fill="black" x="200" y="150" width="140" height="50">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\(I_\\text{G2} = \\frac{ES}{RG + RS + GS}\\)</span>
                        </div>
                    </foreignObject>

                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fg_solve_g_half_constant">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fg_solve_g_half_constant: `
        <div id="fd-solve-g-half-constant">
            <p>Fill in the blank.</p>
            
            <div class="dropdown-row-container">
                <div class="dropdown-row">
                    <div>
                        \\(I_\\text{G1} = k \\theta \\)
                    </div>
                    <div style="width: 50px">
                        &nbsp
                    </div>
                    <div>
                        \\(I_\\text{G2} = \\)
                    </div>
                    <div class="dropdown">
                        <md-outlined-button class="dropdown-button" style="width: 100px; height: 40px" id="half_constant">
                            Select
                        </md-outlined-button>
                        <span class="material-symbols-outlined dropdown-arrow">keyboard_arrow_down</span>
                        
                        <md-menu id="usage-menu" anchor="half_constant">
                            <md-menu-item data-value="Select">
                                <div slot="headline">Select</div>
                            </md-menu-item >
                            <md-menu-item data-value="\\(\\frac{1}{2}\\)">
                                <div slot="headline">\\(\\frac{1}{2}\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(2\\)">
                                <div slot="headline">\\(2\\)</div>
                            </md-menu-item>
                            <md-menu-item data-value="\\(1\\)">
                                <div slot="headline">\\(1\\)</div>
                            </md-menu-item>
                        </md-menu>
                    </div>

                    <div>
                        \\( k \\theta \\)
                    </div>
        
                    
                </div>
            </div>
        
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_solve_g_plug_in">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_solve_g_plug_in: `
        <div id="fd-solve-g-plug-in">
            <p>Now, we'll combine the formulas to eliminate the unknown current variables, \\(I_\\text{G1}\\) and \\(I_\\text{G2}\\).</p>
            
            <div class="formula-animation-container" data-key="ig12">

                <!-- <div class="replay-button-container">
                    <md-text-button class="replay-button">
                        <span slot="icon" class="material-symbols-outlined">replay</span>
                        Replay Animation
                    </md-text-button>
                </div> -->
            
                
                <div class="diagram-container">
                    
                    <svg class="formula-block" width="330" height="150">
                        <defs>
                            <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                    refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                            </marker>
                        </defs>
                
                        
                        <rect id="ig12-rect3" x="42" y="12" rx="10" ry="10" width="40" height="40" fill="#DFF3FF" />
                        <rect id="ig12-rect3" x="291" y="102" rx="10" ry="10" width="40" height="40" fill="#DFF3FF" />
            
                
                        <foreignObject id="ig12-form1" x="0" y="20" width="130" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 14px">\\( I_\\text{G1} = \\frac{E}{R+G} = k\\theta \\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="ig12-form3" x="150" y="20" width="180" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 14px">\\( I_\\text{G2} = \\frac{ES}{RG+RS+GS} = \\frac{1}{2}k\\theta \\)</span>
                            </div>
                        </foreignObject>
                
                        <foreignObject id="ig12-form4-1" x="180" y="110" width="150" height="30">
                            <div xmlns="http://www.w3.org/1999/xhtml">
                                <span class="mathjax" style="font-size: 14px">\\( \\frac{ES}{RG+RS+GS} = \\frac{1}{2}\\frac{E}{R+G} \\)</span>
                            </div>
                        </foreignObject>
                
                        <line id="ig12-arrow2" x1="95" y1="55" x2="255" y2="95" class="arrow" />
                        <line id="ig12-arrow3" x1="280" y1="60" x2="280" y2="90" class="arrow" />
                    </svg>
                </div>

            </div>
            
    
            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_solve_g_isolate">Next</md-outlined-button>
            </div>

        </div>

    `,
    next_fd_solve_g_isolate: `
        <div id="fd-solve-g-isolate">
            <p>Since we know the values for \\(E\\), \\(R\\), and \\(S\\), let's rearrange this equation to solve for \\(G\\).</p>

            <div class="equation equation-large">
                <div class="eqcol1">\\(\\frac{ES}{RG+RS+GS}\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\(\\frac{1}{2} \\frac{E}{R+G}\\)</div>
            </div>
        
            <div class="reveal-container">
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                
                <div class="button-container">
                    <md-filled-tonal-button class="reveal-steps">Reveal Steps</md-filled-tonal-button>
                </div>
        
                <div class="dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            
        
            <div class="steps">
                <div class="equation equation-large">
                    <div class="eqcol1">\\(\\frac{ES}{RG+RS+GS}\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(\\frac{E}{2(R+G)}\\)</div>
                </div>
                <div class="equation equation-large">
                    <div class="eqcol1">\\(\\frac{ES}{RG+RS+GS}\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(\\frac{E}{2R+2G}\\)</div>
                </div>
                <div class="equation equation-large">
                    <div class="eqcol1">\\(\\frac{S}{RG+RS+GS}\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(\\frac{1}{2R+2G}\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(S(2R+2G)\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(RG+RS+GS\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(2RS+2GS\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(RG+RS+GS\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(RS+GS\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(RG\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(RS\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(RG-GS\\)</div>
                </div>
                <div class="equation">
                    <div class="eqcol1">\\(RS\\)</div>
                    <div class="eqcol2">=</div>
                    <div class="eqcol3">\\(G(R-S)\\)</div>
                </div>
            </div>
        
            <div class="equation">
                <div class="eqcol1">\\(G\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\(\\frac{RS}{R-S}\\)</div>
            </div>
    
            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_solve_k_intro">Next Page</md-filled-button>
            </div>

        </div>
    `,
    next_page_fd_solve_k_intro: `
        <div id="fd-solve-k-intro">
            <h2>Solving for \\(k\\)</h2>

            <p>Now we have an equation for the galvanometer resistance \\((G)\\).</p>

            <div class="equation equation-large">
                <div class="eqcol1">\\(G\\)</div>
                <div class="eqcol2">=</div>
                <div class="eqcol3">\\(\\frac{RS}{R-S}\\)</div>
            </div>

            <p>To solve for \\(G\\), we need to know the high resistance value \\((R)\\) and the shunt resistance value \\((S)\\). What values do we know?</p>
        
            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq1c1">
                        <span class="button-text">Both \\(R\\) and \\(S\\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq1c2">
                        <span class="button-text">Only \\(R\\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq1c3">
                        <span class="button-text">Only \\(S\\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq1c4">
                        <span class="button-text">Neither </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>
    
            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_solve_k_goal">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_solve_k_goal: `
        <div id="fd-solve-k-goal">

            <p>Let's go back to the original equation we built for the initial deflection value. Remember, the goal of this lab is to find the figure of merit \\((k)\\).</p>

            <div class="equation-caption">
                Initial Deflection    
            </div>

            <div class="diagram-container">
                <svg width="247" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                    

                    <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>

                    <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                        <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                    </svg>

                    <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>

                    <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                        <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                    </svg>
                    

                </svg>
            </div>
            <div class="diagram-container">
                <svg class="formula-block" width="300" height="220">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                refX="0" refY="2" orient="auto">
                        <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>
            
                    <!-- Text elements using MathJax -->
                    <foreignObject x="20" y="20" width="60" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = k\\theta \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="200" y="20" width="60" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = \\frac{V}{R} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="200" y="90" width="80" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = \\frac{E}{R + G} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="120" y="170" width="90" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{R + G} \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="60" y1="60" x2="120" y2="150" class="arrow" />
                    <line x1="240" y1="60" x2="240" y2="75" class="arrow" />
                    <line x1="220" y1="130" x2="200" y2="150" class="arrow" />
                </svg>
            </div>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_solve_k_unknowns">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_solve_k_unknowns: `
        <div id="fd-solve-k-goal">

            <p>Are we able to solve for the figure of merit \\((k)\\)? What unknowns do we have?</p>

            <div class="mc-question">
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq2c1">
                        <span class="button-text">Only \\(k\\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq2c2">
                        <span class="button-text">\\(k\\), \\(G\\) </span>
                    </md-outlined-button>
                </div>
                <div class="mc-button-wrapper">
                    <md-outlined-button class="mc-button" data-key="fdsolvekq2c3">
                        <span class="button-text">\\(k\\), \\(G\\), \\(\\theta\\) </span>
                    </md-outlined-button>
                </div>

                <div class="feedback"></div>
            </div>

            <div class="button-container hidden-button">
                <md-outlined-button class="next-button" data-key="next_fd_solve_k_conc">Next</md-outlined-button>
            </div>

        </div>
    `,
    next_fd_solve_k_conc: `
        <div id="fd-solve-k-conc">

            <p>After all our hard work, we now have a formula we can use to solve the figure of merit \\((k)\\) of the galvanometer.</p>
            
            <div class="diagram-container">
                <svg class="formula-block" width="250" height="80">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                        
                    </defs>
                    
                    <foreignObject x="10" y="10" width="100" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{R+G} \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="145" y="10" width="100" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k = \\frac{E}{\\theta(R+G)} \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="105" y1="22" x2="130" y2="22" class="arrow" />

                </svg>
            </div>
            

            <div class="button-container">
                <md-filled-button class="next-page-button" data-key="next_page_fd_summary_intro">Next Page</md-filled-button>
            </div>

        </div>
    `,
    next_page_fd_summary_intro: `
        <div id="fd-summary-intro">
            <h2>Summary</h2>
            <p>Let's do a quick review of how to find the formulas we'll use in the Figure of Merit of a Galvanometer Lab.</p>
            <p>Using the half-deflection method, we take two measurements to find the figure of merit (k).</p>
            <p>But, why can't we find k with just one measurement?</p>

            <div class="button-container">
                <md-outlined-button class="next-button" data-key="next_fd_summary_init_deflection" >Next</md-outlined-button>
            </div>

        </div>   
    `,
    next_fd_summary_init_deflection: `
        <div id="fd-summary-init-deflection">
            <h3>Initial Deflection</h3>
            <p>To get the initial deflection, we set up the circuit like this:</p>
            <div class="diagram-container">
                <svg width="247" height="125" viewBox="0 0 247 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                    <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                    <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                    <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                    

                    <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>

                    <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                        <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                    </svg>

                    <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>

                    <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                        <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                        <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                    </svg>
                    

                </svg>
            </div>
            <p>Using the formula I = kθ and Ohm's Law (V = IR), we get the following information:</p>
            <div class="diagram-container">
                <svg class="formula-block" width="300" height="220">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" 
                                refX="0" refY="2" orient="auto">
                        <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>
            
                    <!-- Text elements using MathJax -->
                    <foreignObject x="20" y="20" width="60" height="20">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = k\\theta \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="200" y="20" width="60" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = \\frac{V}{R} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="200" y="90" width="80" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_1 = \\frac{E}{R + G} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="120" y="170" width="90" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{R + G} \\)</span>
                        </div>
                    </foreignObject>
            
                    <!-- Arrows -->
                    <line x1="60" y1="60" x2="120" y2="150" class="arrow" />
                    <line x1="240" y1="60" x2="240" y2="75" class="arrow" />
                    <line x1="220" y1="130" x2="200" y2="150" class="arrow" />
                </svg>
            </div>
        </div>

        <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_fd_summary_init_deflection_conclusion">Next</md-outlined-button>
        </div>
    `,
    next_fd_summary_init_deflection_conclusion: `
        <div id="fd-summary-init-deflection-conclusion">
            <p>Unfortunately, we don't know G (the resistance of the galvanometer). So, we can't solve for k.</p>
            <ul>
                <li><em>k: Unknown </em></li>
                <li>E: emf of the battery</li>
                <li>R: high resistance box value</li>
                <li><em>G: Unknown</em></li>
                <li>&theta;: galvanometer deflection reading</li>
            </ul>
        </div>

        <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_fd_summary_half_deflection">Next</md-outlined-button>
        </div>
    `,
    next_fd_summary_half_deflection: `
        <div id="fd-summary-half-deflection">
            <h3>Half Deflection</h3>
            <p>If we can get a second measurement, we will have enough information to solve for G and k.</p>
            <p>To get the second measurement, we add a shunt resistance in parallel with the galvanometer. That way, we can reduce the current flowing to the galvanometer and get a deflection value that’s half the initial value.</p>

            <div class="diagram-container">
                <svg width="247" height="200" viewBox="0 0 247 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0, 39)">
                        <line x1="221" y1="23.25" x2="221" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="63" x2="221" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="102.25" x2="99" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="90" y1="102.25" x2="26" y2="102.25" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="60" x2="26" y2="103" stroke="black" stroke-width="1.5"/>
                        <line x1="26" y1="23.25" x2="26" y2="43" stroke="black" stroke-width="1.5"/>
                        <line x1="131" y1="24" x2="26" y2="24" stroke="black" stroke-width="1.5"/>
                        <line x1="221" y1="24" x2="148" y2="24" stroke="black" stroke-width="1.5"/>
                        
                
                        <svg x="14" y="43" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">R</text>
                            <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="131" y="15" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="6.5" y="12" font-family="Roboto" font-size="50%" fill="black">G</text>
                            <circle cx="9" cy="9" r="7.5" stroke="black" stroke-width="1.5"/>
                        </svg>
                
                        <svg x="215" y="34" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                            <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">1</text>
                            <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                        </svg>
                
                        <svg x="82" y="77" width="23" height="35" viewBox="0 0 23 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="9" y1="17" x2="9" y2="34" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <line x1="16" y1="21.5" x2="16" y2="30" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                            <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">E</text>
                            <line x1="19" y1="18" x2="22" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="1" y1="18" x2="5" y2="18" stroke="black" stroke-width="1"/>
                            <line x1="3" y1="16" x2="3" y2="20" stroke="black" stroke-width="1"/>
                        </svg>
                    </g>

                    <line x1="182" y1="19" x2="83" y2="19" stroke="black" stroke-width="1.5"/>
                    <line x1="72" y1="26" x2="72" y2="63" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="18" x2="182" y2="31" stroke="black" stroke-width="1.5"/>
                    <line x1="182" y1="47" x2="182" y2="63" stroke="black" stroke-width="1.5"/>

                    <svg x="59" y="10" width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="11" font-family="Roboto" font-size="50%" fill="black">S</text>
                        <rect x="1" y="1" width="23" height="15" stroke="black" stroke-width="1.5"/>
                    </svg>

                    <svg x="176" y="20" width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="10" y="8" font-family="Roboto" font-size="50%" fill="black">K</text>
                        <text x="15" y="9" font-family="Roboto" font-size="25%" fill="black">2</text>
                        <path d="M 3 12 C 3 12 0.8 16 1 19.5 C 1 22.5 3 26.5 3 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M 9 12 C 9 12 11.8 16 11.5 19.5 C 11.5 22.5 9 26.5 9 26.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="6" cy="19.5" r="2.5" fill="black"/>
                    </svg>
                        
                </svg>
            </div>

            <div class="diagram-container">
                <svg class="formula-block" width="320" height="170">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" fill="black"/>
                        </marker>
                    </defs>

                    <!-- Text elements using MathJax -->
                    <foreignObject x="20" y="20" width="100" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_2 = k\\left( \\frac{1}{2} \\theta \\right) \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="180" y="20" width="150" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( I_2 = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="90" y="110" width="200" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( \\frac{1}{2} k \\theta = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                        </div>
                    </foreignObject>

                    <!-- Arrows -->
                    <line x1="80" y1="60" x2="100" y2="90" class="arrow" />
                    <line x1="200" y1="60" x2="180" y2="90" class="arrow" />
                </svg>
            </div>
        </div>

        <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_fd_summary_combining">Next</md-outlined-button>
        </div>
    `,
    next_fd_summary_combining: `
        <div id="fd-summary-combining">
            <h3>Combining the Measurements</h3>
            <p>By combining the formulas, we can solve for G.</p>

            <div class="diagram-container">
                <svg class="formula-block" width="370" height="270">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>

                    <!-- Text elements using MathJax -->
                    <text x="12" y="20" font-family="Roboto" font-size="16px" font-style="italic">Initial Deflection</text>
                    <foreignObject x="20" y="40" width="150" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k\\theta = \\frac{E}{(R+G)} \\)</span>
                        </div>
                    </foreignObject>

                    <text x="220" y="20" font-family="Roboto" font-size="16px" font-style="italic">Half Deflection</text>
                    <foreignObject x="200" y="40" width="150" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( \\frac{1}{2} k\\theta = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="168" y="130" width="200" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( \\frac{1}{2} \\frac{E}{(R+G)} = \\frac{\\text{ES}}{\\text{RG} + \\text{RS} + \\text{GS}} \\)</span>
                        </div>
                    </foreignObject>

                    <foreignObject x="220" y="220" width="150" height="40">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( G = \\frac{\\text{RS}}{R - S} \\)</span>
                        </div>
                    </foreignObject>

                    <!-- Arrows -->
                    <line x1="130" y1="80" x2="180" y2="110" class="arrow" />
                    <line x1="246" y1="80" x2="246" y2="110" class="arrow" />
                    <line x1="246" y1="170" x2="246" y2="200" class="arrow" />
                </svg>
            </div>

            <p>Since we know <b>R</b> (the high resistance box value) and <b>S</b> (the shunt resistance box value), we can solve for G.</p>
        </div>

        <div class="button-container">
            <md-outlined-button class="next-button" data-key="next_fd_summary_conclusion">Next</md-outlined-button>
        </div>
    `,
    next_fd_summary_conclusion: `
        <div id="fd-summary-conclusion">
            <p>Now, we have two helpful formulas. In the lab, you will take measurements and plug them into the formulas to find k.</p>

            <div class="diagram-container">
                <svg class="formula-block" width="310" height="120">
                    <!-- Arrow marker definition -->
                    <defs>
                        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
                            <polygon points="0 0, 4 2, 0 4" />
                        </marker>
                    </defs>

                    <!-- Text elements using SVG text for titles -->
                    <text x="20" y="10" font-size="16" font-style="italic">
                        <tspan x="20" dy="1.2em">Galvanometer</tspan>
                        <tspan x="28" dy="1.2em">Resistance</tspan>
                    </text>
                    <text x="190" y="40" font-size="16" font-style="italic">Figure of Merit</text>
                    
                    <!-- MathJax rendered formulas -->
                    <foreignObject x="30" y="65" width="80" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( G = \\frac{\\text{RS}}{\\text{R - S}} \\)</span>
                        </div>
                    </foreignObject>
                    <foreignObject x="200" y="65" width="95" height="30">
                        <div xmlns="http://www.w3.org/1999/xhtml">
                            <span class="mathjax">\\( k = \\frac{E}{\\theta(R+G)} \\)</span>
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>

        <div class="button-container">
            <md-filled-button class="next-section-button" data-key="/hypothesis">Complete Activity</md-filled-button>
        </div>
    `
};

const sectionMap = {
    "next_page_fd_intro": 0,
    "next_page_fd_goal": 1,
    "next_page_fd_eliminating_intro": 2,
    "next_page_fd_secondeq_intro": 3,
    "next_page_fd_ig_intro": 4,
    "next_page_fd_solve_g_intro": 5,
    "next_page_fd_solve_k_intro": 6,
    "next_page_fd_summary_intro": 7
}

const progressCircles = [
    "pc-intro",
    "pc-fm",
    "pc-elim",
    "pc-2nd",
    "pc-ig",
    "pc-g",
    "pc-k",
    "pc-summary"
]

// animated formulas
const animationDuration = 1.4; // duration in seconds

// animation mapping
const animationMap = {
    igg: {
        create: iggAnimation,
        reset: iggReset
    },
    ohms: {
        create: ohmsAnimation,
        reset: ohmsReset
    }
    // Add more animations as needed
};

//// individual animations ////

function iggAnimation() {
    const timeline = gsap.timeline()
        .to("#igg-form1, #igg-form3", { duration: animationDuration, opacity: 1})
        .to("#igg-arrow1, #igg-form2", { duration: animationDuration, opacity: 1 })
        .to("#igg-arrow3, #igg-form4-1, #igg-form4-2, #igg-form4-4", { duration: animationDuration, opacity: 1 })
        .to("#igg-rect1, #igg-rect2, #igg-arrow2", { duration: animationDuration, opacity: 1 })
        .to("#igg-arrow2", { duration: animationDuration, opacity: 1 })
        .to("#igg-form4-2", { duration: animationDuration, opacity: 0 })
        .to("#igg-rect1", { duration: animationDuration, opacity: 0 })
        .to("#igg-rect2", { duration: 1, width: 72 }, `-=${animationDuration}`)
        .to("#igg-form4-4", { duration: 1, x: 48 }, `-=${animationDuration}`)
        .to("#igg-form4-3", { duration: 1, opacity: 1 })
        .to("#igg-rect2", { duration: 1, opacity: 0 });
    
    return timeline;
}

function iggReset() {
    // Reset opacity and positions
    const elementsToReset = [
        "#igg-form1", "#igg-form3", "#igg-form2", "#igg-arrow1", 
        "#igg-arrow2", "#igg-arrow3", "#igg-form4-1", "#igg-form4-2", 
        "#igg-form4-3", "#igg-form4-4", "#igg-rect1", "#igg-rect2", "#igg-rect3"
    ];

    elementsToReset.forEach(selector => {
        gsap.set(selector, { opacity: 0 });
    });

    // Reset specific positions
    gsap.set("#igg-form4-4", { x: 0 });
    gsap.set("#igg-rect2", { width: 25 });
}

function ohmsAnimation() {
    const timeline = gsap.timeline()
        .to("#ohms-form1", { duration: animationDuration, opacity: 1})
        .to("#ohms-form2", { duration: animationDuration, opacity: 1})
        .to("#ohms-form3-v1", { duration: 0, y: -45})
        .to("#ohms-form3-v1", { duration: 0, opacity: 1})
        .to("#ohms-form3-v1", { duration: animationDuration, y: 0})

        .to("#ohms-rectV, #ohms-text1, #ohms-form4", { duration: animationDuration, opacity: 1})
        .to("#ohms-form4-move", { duration: 0, opacity: 1})
        .to("#ohms-form4-move", { duration: animationDuration, x: -106, y: -10})
        .to("#ohms-form3-v1, #ohms-form4-move", { duration: 0, opacity: 0})
        .to("#ohms-form3-v2", { duration: 0, opacity: 1 })
        .to("#ohms-rectV, #ohms-text1, #ohms-form4", { duration: animationDuration, opacity: 0})

        .to("#ohms-rectR, #ohms-text2, #ohms-form5", { duration: animationDuration, opacity: 1})
        .to("#ohms-form5-move", { duration: 0, opacity: 1})
        .to("#ohms-form5-move", { duration: animationDuration, x: -120, y: 10})
        .to("#ohms-rectR", { duration: 1, width: 67, height: 25 }, `-=${animationDuration}`)
        .to("#ohms-form3-v2, #ohms-form5-move", { duration: 0, opacity: 0})
        .to("#ohms-form3-v3", { duration: 0, opacity: 1 })
        .to("#ohms-rectR, #ohms-text2, #ohms-form5", { duration: animationDuration, opacity: 0})
        
    
    return timeline;
}

function ohmsReset() {
    // Reset opacity and positions
    const elementsToReset = [
        "#ohms-rectV", "#ohms-rectR", "#ohms-form1", "#ohms-form2", "#ohms-form3-v1", 
        "#ohms-form3-v2", "#ohms-form3-v3", "#ohms-text1", "#ohms-text2", "#ohms-form4", "#ohms-form4-move",
        "#ohms-form5", "#ohms-form5-move"
    ];

    elementsToReset.forEach(selector => {
        gsap.set(selector, { opacity: 0 });
    });

    // Reset specific positions
    gsap.set("#ohms-form4-move", { x: 0 });
    gsap.set("#ohms-form5-move", { x: 0 });
    gsap.set("#ohms-rectR", { width: 20 });
}

// official playAnimation function
function playAnimation(animationName) {
    if (animationMap[animationName]) {
        gsap.globalTimeline.clear(); // Clear any existing animations
        animationMap[animationName].reset();
        gsap.globalTimeline.clear(); // Clear any existing animations
        animationMap[animationName].create(); // Start the selected animation
    }
}

// progress bar animation
function animateProgressBar(newWidth) {
    const progressBarSVG = document.getElementById('progress-bar');
    const rect = progressBarSVG.querySelector('rect');
    gsap.to(rect, { duration: 1, attr: { width: newWidth + '%' }, ease: "power1.out" });
}

// Render Mathjax
document.addEventListener("DOMContentLoaded", function() {
    MathJax.typeset();
});

// Toolbox Overlay Open
document.getElementById('header-toolbox-icon').addEventListener('click', function() {
    document.getElementById('toolbox-overlay-dialog').setAttribute('open', '');
});

// Toolbox Overlay Close
document.getElementById('toolbox-overlay-close').addEventListener('click', function() {
    document.getElementById('toolbox-overlay-dialog').removeAttribute('open');
});

// Progress Overlay Open
document.getElementById('progress-bar-container').addEventListener('click', function() {
    document.getElementById('progress-overlay-dialog').setAttribute('open', '');
});

// Progress Overlay Close
document.getElementById('progress-overlay-close').addEventListener('click', function() {
    document.getElementById('progress-overlay-dialog').removeAttribute('open');
});

function jumpToSection(sectionName, animate) {
    const progressOverlay = document.getElementById('progress-overlay-dialog');
    const progressSections = progressOverlay.querySelectorAll('md-list-item');
    
    const currentSection = document.querySelector('.toc-section.current-section');
    const sectionNumber = sectionMap[sectionName];
    const newSection = progressSections[sectionNumber];

    if (!(currentSection == newSection)) {
        currentSection.classList.remove('current-section');
        newSection.classList.add('current-section');
    }

    progressOverlay.removeAttribute('open');

    const newContent = contentMap[sectionName];

    if (newContent) {
        const instructionContainer = document.querySelector('.instruction-content');
        instructionContainer.innerHTML = '';
        
        const textContainer = document.createElement('div');
        textContainer.innerHTML = newContent;

        instructionContainer.appendChild(textContainer);

        MathJax.typeset();

        // Check if newContent contains specific animation triggers and play the corresponding animation
        if (textContainer.querySelector('.formula-animation-container')) {
            const animationName = textContainer.querySelector('.formula-animation-container').getAttribute('data-key');
            playAnimation(animationName);
        }
        
        // update the progress bar

        let newWidth = 1;
        let circleWidth = 0;

        for (let i = 0; i < sectionNumber+1; i++) {
            let circleName = progressCircles[i];
            let circle = document.getElementById(circleName);

            circleWidth = parseFloat(circle.getAttribute('width').replace('%',''));
            if (i < sectionNumber) {
                newWidth += circleWidth;
                if (animate) {
                    animateProgressBar(newWidth);
                }
            }

            if (animate) {
                setTimeout(function() {
                    circle.classList.remove('progress-circle-incomplete');
                    circle.classList.add('progress-circle-complete');
                  }, 1000);
            } else {
                circle.classList.remove('progress-circle-incomplete');
                circle.classList.add('progress-circle-complete');
            }

            
        
        }

        for (let i = sectionNumber+1; i < progressCircles.length; i++) {
            let circleName = progressCircles[i];
            let circle = document.getElementById(circleName);

            circle.classList.remove('progress-circle-complete');
            circle.classList.add('progress-circle-incomplete');

        }

        if (!animate) {
            // update the progress bar length
            const progressBarSVG = document.getElementById('progress-bar');
            const rect = progressBarSVG.querySelector('rect');
            rect.setAttribute('width', newWidth + '%');

            // animateProgressBar(newWidth, 2000);
        }

    } else {
        console.log(`Error: No new content mapping found for button ${key}`)
    }
}

// Progress Overlay jump to section
document.querySelectorAll('.toc-section').forEach(item => {
    item.addEventListener('click', event => {
        const tocItem = event.target.closest('.toc-section');
        const sectionKey = tocItem.getAttribute('data-key');

        jumpToSection(sectionKey, false);
        
    });
});

// // Close toolbox tooltip
// document.addEventListener('click', function(event) {
//     var tooltip = document.querySelector('.toolbox-tooltip');
//     if (!tooltip.contains(event.target)) {
//         tooltip.classList.add('hidden');
//     }
// });

document.addEventListener('DOMContentLoaded', (event) => {
    
    document.body.addEventListener('click', (event) => {
        if (event.target && !(event.target.classList.contains('toolbox-tooltip'))) {
            
            const tooltip = document.querySelector('.toolbox-tooltip')
            
            if (tooltip) {
                tooltip.classList.add('invisible');
                setTimeout(function() {
                    tooltip.style.display = 'none';
                }, 500); // Match the transition duration in CSS
            }
        }
    });

    // Learning Path Selection
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('learning-path-button')) {
            const button = event.target;
            const buttonID = button.getAttribute('id');
            const learningPathBegin = document.getElementById('learning-path-begin');
            const nextButton = learningPathBegin.querySelector('md-filled-button');

            button.style.backgroundColor = sysColorPrimaryLight;

            if (buttonID == 'lp-full-activity') {
                nextButton.setAttribute('data-key','next_page_fd_goal');
                
                const otherButton = document.getElementById('lp-summary');
                otherButton.style.backgroundColor = "white";
                
            } else if (buttonID == 'lp-summary') {
                nextButton.setAttribute('data-key','next_page_fd_summary_intro');

                const otherButton = document.getElementById('lp-full-activity');
                otherButton.style.backgroundColor = "white";
            }

            learningPathBegin.classList.remove('hidden');
            
            learningPathBegin.style.scrollMarginTop =  '150px';
            learningPathBegin.scrollIntoView({ behavior: 'smooth' });

        }
    });


    // Learning Path Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('learning-path-begin-button')) {
            const button = event.target;

            const destination = button.getAttribute('data-key');

            if (destination == "next_page_fd_goal") {
                // add toolbox tooltip
                let tempDiv = document.createElement('div');
                tempDiv.innerHTML = contentMap[destination];
                
                let tooltip = tempDiv.querySelector('.toolbox-tooltip');
                tooltip.classList.remove('hidden');
                
                contentMap[destination] = tempDiv.innerHTML;

                jumpToSection(destination, true);
            } else {
                jumpToSection(destination, false);
            }
        }
    });
    
    
    //Reveal Steps
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('reveal-steps')) {
            const revealContainer = event.target.parentElement.parentElement;
            const parentDiv = revealContainer.parentElement;

            const steps = parentDiv.querySelector('.steps');
            steps.style.setProperty('display', 'block');
            setTimeout(() => {
                steps.style.opacity = "1";
            }, 10);

            revealContainer.style.display = "none";
        }
    });

    // Next Button
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

                // Remove the button container div
                button.parentElement.remove();

                // Scroll the first element in textContainer into view
                textContainer.style.scrollMarginTop =  '150px';
                textContainer.scrollIntoView({ behavior: 'smooth' });

                MathJax.typeset();

                // Check if newContent contains specific animation triggers and play the corresponding animation
                if (textContainer.querySelector('.formula-animation-container')) {
                    const animationName = textContainer.querySelector('.formula-animation-container').getAttribute('data-key');
                    playAnimation(animationName);
                }

            }
        }
    });

    // Next Page Button
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('next-page-button')) {
            const button = event.target;
            const key = button.getAttribute('data-key');

            jumpToSection(key,true);
        }
    });

    // content map for multiple choice feedback
    const answerKey = {
        "fdgoalq1c1": ["incorrect", "tbd"],
        "fdgoalq1c2": ["correct", "tbd"],
        "fdgoalq1c3": ["incorrect", "tbd"],
        "fdgoalq2c1": ["incorrect", `Not quite. We can get the <b>deflection (θ)</b> from the galvanometer reading, but we don't know the <b>current (I)</b>.`],
        "fdgoalq2c2": ["incorrect", `Not quite. We can get the <b>deflection (θ)</b> from the galvanometer reading, but we don't know the <b>current (I)</b>.`],
        "fdgoalq2c3": ["correct", `Correct. We can get the <b>deflection (θ)</b> from the galvanometer reading, but we don't know the <b>current (I)</b>.`],
        "fdgoalq3c1": ["correct", "tbd"],
        "fdgoalq3c2": ["incorrect", "tbd"],
        "fdgoalq3c3": ["incorrect", "tbd"],
        "fdgoalq5c1": ["incorrect", "tbd"],
        "fdgoalq5c2": ["correct", "tbd"],
        "fdgoalq5c3": ["incorrect", "tbd"],
        "fdeliminatingq1c1": ["incorrect", "tbd"],
        "fdeliminatingq1c2": ["correct", "tbd"],
        "fdeliminatingq1c3": ["incorrect", "tbd"],
        "fdeliminatingq2c1": ["incorrect", "tbd"],
        "fdeliminatingq2c2": ["correct", "tbd"],
        "fdeliminatingq2c3": ["incorrect", "tbd"],
        "fdsecondeqq1c1": ["incorrect", "tbd"],
        "fdsecondeqq1c2": ["incorrect", "tbd"],
        "fdsecondeqq1c3": ["correct", "tbd"],
        "fdsecondeqq2c1": ["correct", "tbd"],
        "fdsecondeqq2c2": ["incorrect", "tbd"],
        "fdsecondeqq3c1": ["correct", "tbd"],
        "fdsecondeqq3c2": ["incorrect", "tbd"],
        "fdsecondeqq4c1": ["incorrect", "tbd"],
        "fdsecondeqq4c2": ["correct", "tbd"],
        "fdsolvekq1c1" : ["correct","tbd"],
        "fdsolvekq1c2" : ["incorrect","tbd"],
        "fdsolvekq1c3" : ["incorrect","tbd"],
        "fdsolvekq1c4" : ["incorrect","tbd"],
        "fdsolvekq2c1" : ["correct","tbd"],
        "fdsolvekq2c2" : ["incorrect","tbd"],
        "fdsolvekq2c3" : ["incorrect","tbd"],

        // Add more choices as needed
    };

    // Giving Feedback for Multiple Choice
    document.body.addEventListener('click', (event) => {
        let button = event.target;

        // Traverse up the DOM to find the nearest button with the 'mc-button' class
        while (button && !button.classList.contains('mc-button')) {
            button = button.parentElement;
        }

        if (button) {
            const choiceID = button.getAttribute('data-key');
            const wrapperDiv = button.parentElement;
            const questionDiv = wrapperDiv.parentElement;

            if (choiceID in answerKey) {
                const [correctFlag, feedbackText] = answerKey[choiceID];
                const feedbackDiv = questionDiv.querySelector('.feedback');
                const nextButton = questionDiv.parentElement.querySelector('.button-container');

                // Reset buttons in the same parent div
                const siblingButtons = questionDiv.querySelectorAll('.mc-button');
                siblingButtons.forEach(sib => {
                    sib.style.setProperty('--_focus-label-text-color', '');
                    sib.style.setProperty('--_label-text-color', '');
                    sib.style.setProperty('--_outline-color', '');
                    sib.style.backgroundColor = '';
                    const icon = sib.parentElement.querySelector('.status-icon');
                    if (icon) icon.remove();
                });

                let icon;
                if (correctFlag === 'correct') {
                    button.style.setProperty('--_focus-label-text-color', correctColorDark);
                    button.style.setProperty('--_label-text-color', correctColorDark);
                    button.style.setProperty('--_outline-color', correctColorDark);
                    button.style.backgroundColor = correctColorLight;
                    icon = document.createElement('span');
                    icon.className = 'status-icon check-icon';
                    icon.innerHTML = '<span class="material-symbols-outlined">check</span>';
                } else {
                    button.style.setProperty('--_focus-label-text-color', incorrectColorDark);
                    button.style.setProperty('--_label-text-color', incorrectColorDark);
                    button.style.setProperty('--_outline-color', incorrectColorDark);
                    button.style.backgroundColor = incorrectColorLight;
                    icon = document.createElement('span');
                    icon.className = 'status-icon x-icon';
                    icon.innerHTML = '<span class="material-symbols-outlined">close</span>';
                }

                wrapperDiv.insertBefore(icon, button);

                // Display the feedback block and update the text
                feedbackDiv.style.display = 'block';
                feedbackDiv.innerHTML = `<b>Feedback:</b> ${feedbackText}`;

                // Display the next button and scroll to it
                nextButton.classList.remove("hidden-button"); 
                nextButton.scrollIntoView({ behavior: 'smooth', block: 'end' });
            } else {
                console.error(`No answer key found for choiceID ${choiceID}`);
            }
        }
    });

    // Selecting or Deselecting a mutli-select option
    document.body.addEventListener('click', (event) => {
        let button = event.target;

        // Traverse up the DOM to find the nearest button with the 'mc-button' class
        while (button && !button.classList.contains('multi-select-button')) {
            button = button.parentElement;
        }

        if (button) {
            const wrapperDiv = button.parentElement;
            const checkbox = wrapperDiv.querySelector('.multi-select-checkbox');

            if (!checkbox.hasAttribute('checked')) {
                button.style.setProperty('--_focus-label-text-color', '#FFFFFF');
                button.style.setProperty('--_label-text-color', '#FFFFFF');
                button.style.setProperty('--_outline-color', sysColorPrimaryBright);
                button.style.backgroundColor = sysColorPrimaryBright;
                checkbox.setAttribute('checked', 'true');
                console.log("true");
            } else {
                button.style.setProperty('--_focus-label-text-color', sysColorPrimaryDark);
                button.style.setProperty('--_label-text-color', sysColorPrimaryDark);
                button.style.setProperty('--_outline-color', sysOutlineColor);
                button.style.backgroundColor = '#FFFFFF';
                checkbox.removeAttribute('checked');
                console.log("false");
            }
            
        }
    });

    // content map for multi-select submit
    const multiAnswerKey = {
        "fdfmm1c1": ["correct", "tbd"],
        "fdfmm1c2": ["correct", "tbd"],
        "fdfmm1c3": ["incorrect", "tbd"],
        "fdseqm1c1": ["correct", "tbd"],
        "fdseqm1c2": ["correct", "tbd"],
        "fdseqm1c3": ["incorrect", "tbd"],
        "fdseqm1c4": ["correct", "tbd"],
        "fdseqm1c5": ["incorrect", "tbd"],
        
    };

    // Giving Feedback for Mutli-Select Submit
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('multi-select-submit-button')) {
            let submitButton = event.target;
            const questionDiv = submitButton.parentElement.parentElement;

            const feedbackDiv = questionDiv.querySelector('.feedback');
            const nextButton = questionDiv.parentElement.querySelector('.hidden-button');
            console.log(questionDiv.parentElement);
            console.log(nextButton);

            // feedbackDiv.innerHTML = '';  // Clear previous feedback
            feedbackText = '';
    
            const wrappers = questionDiv.querySelectorAll('.multi-select-wrapper');
                wrappers.forEach(wrapper => {
                    
                    const checkbox = wrapper.querySelector('.multi-select-checkbox');
                    const key = checkbox.getAttribute('data-key');
                    const isChecked = checkbox.hasAttribute('checked');
                    const correctAnswer = multiAnswerKey[key][0] === 'correct';
                    const feedback = multiAnswerKey[key][1];
                    const button = wrapper.querySelector('.multi-select-button');

                    button.disabled = true;

                    // Remove previous styles
                    button.classList.remove('correct-choice', 'incorrect-choice');
                    
                    let icon;
                    if ((isChecked && correctAnswer) || (!isChecked && !correctAnswer)) {
                        feedbackText += `<p><span style="color: ${correctColorDark}; font-weight: 500;">Correct: </span>${feedback}</p>`;
                        button.style.setProperty('--_focus-label-text-color', correctColorDark);
                        button.style.setProperty('--_disabled-label-text-color', correctColorDark);
                        button.style.setProperty('--_disabled-outline-color', correctColorDark);
                        button.style.setProperty('--_disabled-label-text-opacity', '100');
                        button.style.setProperty('--_disabled-outline-opacity', '100');
                        button.style.backgroundColor = correctColorLight;
                        checkbox.style.setProperty('--md-checkbox-selected-container-color',correctColorDark)
                        checkbox.style.setProperty('--md-checkbox-outline-color',correctColorDark)
                        checkbox.style.setProperty('--md-checkbox-selected-icon-color','#FFFFFF')
                        icon = document.createElement('span');
                        icon.className = 'multi-status-icon check-icon';
                        icon.innerHTML = '<span class="material-symbols-outlined">check</span>';
                    } else {
                        feedbackText += `<p><span style="color: ${incorrectColorDark}; font-weight: 500;">Incorrect: </span>${feedback}</p>`;
                        button.style.setProperty('--_focus-label-text-color', incorrectColorDark);
                        button.style.setProperty('--_disabled-label-text-color', incorrectColorDark);
                        button.style.setProperty('--_disabled-outline-color', incorrectColorDark);
                        button.style.setProperty('--_disabled-label-text-opacity', '100');
                        button.style.setProperty('--_disabled-outline-opacity', '100');
                        button.style.backgroundColor = incorrectColorLight;
                        checkbox.style.setProperty('--md-checkbox-selected-container-color', incorrectColorDark)
                        checkbox.style.setProperty('--md-checkbox-outline-color', incorrectColorDark)
                        checkbox.style.setProperty('--md-checkbox-selected-icon-color','#FFFFFF')
                        icon = document.createElement('span');
                        icon.className = 'multi-status-icon x-icon';
                        icon.innerHTML = '<span class="material-symbols-outlined">close</span>';
                    }

                    wrapper.insertBefore(icon, button);


                });

            // Display the feedback block and update the text
            feedbackDiv.style.display = 'block';
            feedbackDiv.innerHTML = `<b>Feedback</b> ${feedbackText}`;

            // Display the next button and scroll to it
            nextButton.classList.remove("hidden-button"); 
            nextButton.scrollIntoView({ behavior: 'smooth', block: 'end' });

            submitButton.classList.add("hidden-button");
        }
    });

    // content map for dropdown
    const dropdownAnswerKey = {
        "v_g1": ["\\(I_G\\)"],
        "v_g2": ["\\(G\\)"],
        "v_s1": ["\\(I_S\\)"],
        "v_s2": ["\\(S\\)"],
        "r_1": ["High Resistance Box"],
        "r_2": ["Galvanometer", "Low Resistance Box"],
        "r_3": ["Galvanometer", "Low Resistance Box"],
        "half_constant": ["\\(\\frac{1}{2}\\)"],
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

    // replay animated formulas
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('replay-button')) {
            let replayButton = event.target;
            const animationContainer = replayButton.parentElement.parentElement;
            const animation = animationContainer.getAttribute('data-key')

            playAnimation(animation);
        };
    });

    // open formula toolbox
    document.body.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('formula-toolbox-button')) {
            document.getElementById('toolbox-overlay-dialog').setAttribute('open', '');
        };
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



