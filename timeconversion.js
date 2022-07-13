//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

//Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour /clock.
//- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
 // Find if AM or PM
    // if AM and 12 set it to 00
    // if PM and more than 12 add 12 to it
    // ignore the AM PM and return

    // 07:05:45PM
    //         ^ 
    let lastTwo = s.substring(8);

    // ignoring AM PM
    let fullTime = s.substring(0, 8);

    // array for test
    let times = fullTime.split(':');

    if(lastTwo === "PM") {
        if(times[0] !== "12") {
            times[0] = parseInt(times[0]) + 12;
        }
    } else {
        // AM case
        if(times[0] === "12") {
            times[0] = "00";
        }
    }

    return times.join(':');
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
