// Loop with Range

// Buatlah script untuk mencetak dengan rentang angka tertentu.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('first_Number ? ',(first_Number)=> {
    rl.question('Secound_Number ? ',(Secound_Number)=>{
      let Result =[];
      let length = Secound_Number - first_Number;
      for(let i = 0 ; i < length+1;i++){
        Result.push(Number(first_Number) + i)
      }
      console.log(`Output : ${Result}`)
    });
});
