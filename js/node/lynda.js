// start server $ node lynda

// process.argv
// console.log(process.argv); // array with path to this file
// process.stdout.write("hello \n"); // prints to terminal (need \n to craete line break)
//
// ---------Event Listeners---------
//
// let questions = [
//   'name',
//   'hobby',
//   'age'
// ];
//
// let answers = [];
//
// function ask(i) {
//   process.stdout.write(`\n\n ${questions[i]}`);
//   process.stdout.write(`  >  `);
// }
//
// process.stdin.on('data', function(submittedData) {
//   answers.push(submittedData.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });
//
// process.on('exit', function() {
//     process.stdout.write(`\n\n`);
//     process.stdout.write(`${answers[0]} ${answers[1]} ${answers[2]}`)
//     process.stdout.write(`\n\n`);
// })
//
// ask(0);

// ----Interval Timeouts To Log Waiting Percentages-----

// let waitTime = 3000;
// let currentTime = 0;
// let waitInterval = 10;
// let percentWaited = 0;
//
// function writeWaitingPercent(p) {
//   process.stdout.clearLine();
//   process.stdout.cursorTo(0);
//   process.stdout.write(`waiting ... ${p}%`);
// }
//
// let interval = setInterval(function() {
//   currentTime += waitInterval;
//   percentWaited = Math.floor((currentTime/waitTime) * 100);
//   writeWaitingPercent(percentWaited);
// }, waitInterval);
//
// setTimeout(function() {
//   clearInterval(interval);
//   writeWaitingPercent(100);
//   console.log('\n\n Done! \n');
// }, waitTime);
//
// process.stdout.write(`\n\n`);
// writeWaitingPercent(percentWaited);

// ----Core Modules (no npm needed)-----
// var path = require('path');
// var util = require('util'); // util.log() === console.log(); + timestamp
// var v8 = require('v8');
// util.log((path.basename(__filename))); // pluck file name
// util.log(v8.getHeapStatistics()); // gives us memory statistics

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What's your name? ", function(answer) {
  console.log(answer);
})




















//
