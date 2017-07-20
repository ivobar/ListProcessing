module.exports = {
    insertStr: function (mainArr, index, item) {
        mainArr.splice(index, 0, item);
        return mainArr;
    }
};