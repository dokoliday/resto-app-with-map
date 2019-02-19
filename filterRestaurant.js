var fs = require('fs');
fs.readFile('./restaurants.json', (err, data) => {
    if (err)
        console.log(err);
    else {
        var json = JSON.parse(data);
        //your code using json object
        console.log(json)
    }
})

json
