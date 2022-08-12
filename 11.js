// Array Remover

// Buatlah script yang dapat menghilangkan "Jambu" yang terdapat pada array berikut

const fruits = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'];
const result = [];
for(let i = 0; i < fruits.length;i++){
    if(fruits[i] != 'Jambu'){
        result.push(fruits[i]);
    }
};
console.log(result);