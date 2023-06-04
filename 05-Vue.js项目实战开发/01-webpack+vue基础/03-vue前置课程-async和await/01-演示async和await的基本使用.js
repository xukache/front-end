import thenFs from 'then-fs'

async function getFile() {
    const r1 = await thenFs.readFile('./files/1.txt', 'utf-8')
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt', 'utf-8')
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf-8')
    console.log(r3);
}

getFile()