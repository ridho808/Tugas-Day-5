// Add to Array

// Buatlah script untuk menambahkan kata "Handuk" ke awal array, dan "Celana" ke akhir array.

const stuff = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];
stuff.splice(0,0,"Handuk");
stuff.splice(6,0,"Celana");
console.log(stuff);