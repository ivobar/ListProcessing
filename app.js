//Functions
const setMainArray = require('./functions/setMainArray');
const mainArrFunc = require('./functions/mainArray');
const mainArrFuncDel=require('./functions/deleteString');
const mainArrFuncRev=require('./functions/reverseArray');
const mainArrFuncIns=require('./functions/insert');
const mainArrFuncCount=require('./functions/countArray');
const mainArrFuncSort=require('./functions/sortArray');
const mainArrFuncRollLeft=require('./functions/rollLeft');
const mainArrFuncRollRight=require('./functions/rollRight');

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
        case 'delete':
            mainArr = mainArrFuncDel.del(mainArr,inputTokens[1]);
            break;
        case 'reverse':
            mainArr=mainArrFuncRev.reverseArr(mainArr);
            break;
        case 'insert':
            mainArr=mainArrFuncIns.insertStr(mainArr,inputTokens[1],inputTokens[2]);
            break;
        case 'count':
            mainArrFuncCount.countArr(mainArr,inputTokens[1]);
            break;
        case 'sort':
            mainArr=mainArrFuncSort.sortArray(mainArr);
            break;
        case 'roll left':
            mainArr=mainArrFuncRollLeft.rollArray(mainArr);
            break;
        case 'roll right':
            mainArr=mainArrFuncRollRight.rollArrayRight(mainArr);
    }

    console.log(mainArr.join(' '));

    //If the input is 'end' then kill the script process, ending the program.
    if (input === "end") {
        process.exit(1);
    }
});
