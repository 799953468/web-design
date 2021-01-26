const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, res) => {
        if (err != null) {
            reject(err);
        } else {
            resolve(res);
        }
    });
});

promise.then((result) => {
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})
