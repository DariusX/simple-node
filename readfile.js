var fs = require("fs");

//--- Sync read
console.log(" ----- Starting Sync Read ----- ");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log(" ----- Sync Read Ended -----\n ");

//--- Again, but async

console.log(" ----- Starting async Read ----- ");
fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log(" ----- Async Ended -----\n ");