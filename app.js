//Load HTTP module
const http = require("http");
const express = require("express");
// import path from "path";
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "public")));
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


//Create HTTP server and listen on port 3000 for requests
app.get('/', (req, res) => {
    res.render("home")
})


//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
