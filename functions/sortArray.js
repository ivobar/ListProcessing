module.exports ={
    sortArray: function (mainArr) {

        return mainArr.sort(
            function(x, y)
            {
                return x.localeCompare(y);
            }
        );
    }
};
