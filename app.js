var stdin = process.openStdin();

function getInput(d) {
    console.log("you entered: [" + 
        d.toString().trim() + "]");
        
    if (d.toString().trim() === "end") {
        process.exit(1);
    }
}

stdin.addListener("data", getInput);