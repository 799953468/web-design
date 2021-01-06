function getMsg(callback) {
    setTimeout(function () {
        callback({
            msg: 'hellp node.js'
        })
    },2000)
}

getMsg(function(data) {
    console.log(data);
});
