//Functions
const setMainArray = require('./functions/setMainArray');

const stdin = process.openStdin();

//The array on which all the operations will be done on
let mainArr;

//The handler for the input
stdin.addListener("data", function(d) {
    //Take the input and format it
    input = d.toString().trim();

    //If the mainArr is not set then it'll
    if (mainArr === undefined) {
        mainArr = setMainArray.setMainArray(input);
        return;
    }


    //If the input is 'end' then kill the script process, ending the program.
    if (input === "end") {
        process.exit(1);
    }
});