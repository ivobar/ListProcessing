module.exports ={
    countArr:function (mainArr,pattern) {
        let occurances=0;
        var rgx = new RegExp(pattern,'gi');
        for(let element in mainArr){
           occurances += element.match(rgx).length;
        }
        return occurances;
    }
};
