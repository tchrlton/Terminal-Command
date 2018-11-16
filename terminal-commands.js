const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString  = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('new-file.txt', 'Hello Bloc!', 'utf8', (err) => {
        if (err) throw err;

        console.log('success');
    });
};
  
module.exports.mkdir = () => {
    fs.mkdir('./terminal-commands',function(err) {
        if (err) throw err;

        console.log("New directory success!");
    });
};