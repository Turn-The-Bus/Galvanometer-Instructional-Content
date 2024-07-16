const express = require("express");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

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
app.get('/introduction_to_g', (req, res) => {
    res.render("introduction_to_g");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the interactive simulation page
app.get('/interactive_simulation', (req, res) => {
    res.render("interactive_simulation");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the introduction_to_f page
app.get('/introduction_to_figure_of_merit', (req, res) => {
    res.render("introduction_to_figure_of_merit");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the half deflection method page
app.get('/half_deflection', (req, res) => {
    res.render("half_deflection");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});


// Route for the working principle page
app.get('/working_principle', (req, res) => {
    res.render("working_principle");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});


// Route for the circuit diagram page
app.get('/circuit', (req, res) => {
    res.render("circuit_diagram");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the formula derivation page
app.get('/deriving-our-formula', (req, res) => {
    res.render("formula");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the hypothesis page
app.get('/hypothesis', (req, res) => {
    res.render("hypothesis");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});


// Route for the hypothesis page
app.get('/lab_simulation', (req, res) => {
    res.render("lab_simulation");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the conclusion page
app.get('/conclusion', (req, res) => {
    res.render("conclusion");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});

// Route for the result page
app.get('/result', (req, res) => {
    res.render("result");  // Ensure the 'introduction_to_g.ejs' file exists in the 'views' directory
});


// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
