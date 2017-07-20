//Functions
const setMainArray = require('./functions/setMainArray');
const mainArrFunc = require('./functions/mainArray');

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

    inputTokens = input.split(' ');

    switch (inputTokens[0]) {
        case 'append':
            mainArr = mainArrFunc.append(mainArr, inputTokens[1]);
            break;
        case 'prepend':
            mainArr = mainArrFunc.prepend(mainArr, inputTokens[1]);
            break;
    }

    console.log(mainArr.join(' '));

    //If the input is 'end' then kill the script process, ending the program.
    if (input === "end") {
        process.exit(1);
    }
});