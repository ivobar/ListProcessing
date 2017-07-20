module.exports = {
    del:function (mainArr,itemIndex) {
        mainArr.splice(itemIndex,1);
        return mainArr;
    }
};