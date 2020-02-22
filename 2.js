/*
Di sebuah function memiliki sebuah parameter berupa array yang berisi array yang berisi abjad, 
yang mempunyai tugas untuk mengurutkan array terpendek ke terpanjang, 
dan juga mengurutkan abjad di dalamnya dari a ke z. 
Dilarang menggunakan built in function array_multisort

var data = [
[‘J’,’M’,’I’,’N’,L’,’K’],
[‘H’,’G’,’F’]
]
Jika function dijalankan:
sort_array(data);
Akan ditampilkan:
[
	[‘F’,’G’,’H’],
[‘I’,’J’,’K’,’L’,’M’,’N’]
]


var datalain = [
           [‘g’,’h’,’i’,’j’],
[‘a’,’c’,’b’,’e’,’d’],
[‘g’,’e’,’f’]
]
Jika function dijalankan:
sort_array(datalain);
Akan ditampilkan:
[
	[‘e’,’f’,’g’],
           [‘g’,’h’,’i’,’j’],
[‘a’,’b’,’c’,’d’,’e’]
]


*/

// fungsi utama
const urutkanArrayTerpanjangKePendek = arraySoal => {
  return arraySoal.map(item => item.sort()).sort((a, b) => a.length - b.length);
};

// contoh penggunaan
const data = [
  ["J", "M", "I", "N", "L", "K"],
  ["H", "G", "F"]
];
console.log(urutkanArrayTerpanjangKePendek(data));

const dataLain = [
  ["g", "h", "i", "j"],
  ["a", "c", "b", "e", "d"],
  ["g", "e", "f"]
];
console.log(urutkanArrayTerpanjangKePendek(dataLain));
