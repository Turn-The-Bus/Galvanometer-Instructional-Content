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

// Start the server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
