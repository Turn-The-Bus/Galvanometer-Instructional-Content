const express = require("express");
const path = require("path");

// const hostname = "127.0.0.1";
// const port = 3000;

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;


const app = express();

// Set the view engine to EJS and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the home page
app.get('/', (req, res) => {
    res.render("welcome");  // Make sure the 'welcome.ejs' file exists in the 'views' directory
});

// Route for the introduction_to_g page
app.get('/introduction-to-galvanometers', (req, res) => {
    res.render("introduction_to_g");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the deflection page
app.get('/galvanometer-deflection', (req, res) => {
    res.render("deflection");  
});

// Route for the working principle page
app.get('/working-principle', (req, res) => {
    res.render("working_principle");  
});

// Route for the introduction_to_f page
app.get('/figure-of-merit', (req, res) => {
    res.render("introduction_to_figure_of_merit"); 
});

// Route for the half deflection method page
app.get('/half-deflection-method', (req, res) => {
    res.render("half_deflection");  
});


// Route for the circuit diagram page
app.get('/circuit-setup', (req, res) => {
    res.render("circuit_setup"); 
});

// Route for the formula derivation page
app.get('/deriving-our-formula', (req, res) => {
    res.render("formula"); 
});

// Route for the hypothesis page
app.get('/hypothesis', (req, res) => {
    res.render("hypothesis"); 
});


// Route for the hypothesis page
app.get('/lab-simulation-prep', (req, res) => {
    res.render("lab_simulation");
});

// Route for the conclusion page
app.get('/conclusion', (req, res) => {
    res.render("conclusion");  
});

// Route for the result page
app.get('/result', (req, res) => {
    res.render("result"); 
});

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
