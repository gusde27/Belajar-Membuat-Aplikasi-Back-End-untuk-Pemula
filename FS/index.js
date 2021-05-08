// const fs = require('fs');
 
// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };
 
// // fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// const data = fs.readFileSync('note.txt', 'UTF-8', fileReadCallback);
// console.log(data);

const fs = require('fs');

const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    console.log('Done');
});