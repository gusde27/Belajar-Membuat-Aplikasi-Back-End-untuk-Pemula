const fs = require('fs');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
 
// fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

const data = fs.readFileSync('note.txt', 'UTF-8', fileReadCallback);
console.log(data);