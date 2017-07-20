module.exports = {
    append: function (mainArr, item) {
        mainArr.push(item);
        return mainArr;
    },
    prepend: function (mainArr, item) {
        mainArr.splice(0,0,item);
        return mainArr;
    }
};