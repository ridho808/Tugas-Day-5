// 50 Bilangan Ganjil

// Buatlah script untuk mencetak bilangan ganjil antara 1 hingga 100.

const readline = require('readline');
const Rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

Rl.question('50 Bilangan Ganjil [enter]',(Result)=>{
    Result = 1;
    let arr =[]
    for (let i = Result; i < 100; i++) {
        if(i % 2 ===1){
            arr.push(i)
            console.log(i)
        }
    }
    console.log("Jumlah angka ganjil =",arr.length)
})