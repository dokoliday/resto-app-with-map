const fs = require('fs');
fs.readFile('./restaurants.json', (err, data) => {
    if (err)
        console.log(err);
    else {
        filterJson = []
        JSON
            .parse(data)
            .map(e => {
                
                if (e.name && e.annotation && e.image_url && e.address2 && e.address1 && e.longitude && e.latitude && e.editorial_rating  !== undefined) filterJson
                    .push([e.name, e.annotation, e.image_url, e.address2, e.address1, e.latitude, e.longitude, e.editorial_rating])
            });
            console.log(filterJson)
        };

}
)


