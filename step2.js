const fs = require('fs');
const axios = require('axios');
const argv = process.argv;



function cat(path){
    
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log("ERROR:", err);
            process.exit(1)
        }
        console.log("DATA:", data)
    })
};

// cat(argv[2]);


async function webCat(url){
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log(`Error: ${err}`);
        process.exit(1);
    }
}

// function webCat(url){
//     let resp = axios.get(url);
//     resp.then((data) => {
//         console.log(`DATA: ${data}`);
//     });
// };

let path = argv[2];

if(path.slice(0,4) === 'http') {
    webCat(path);
} else {
    cat(path);
}