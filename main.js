const path = require("path");
const os = require("os");
const { Repl } = require(path.join(__dirname, "repl", "repl.js"));

console.log("Welcome " + os.hostname() + "!");
console.log("Starting up repl...");
Repl();
