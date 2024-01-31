const angka = [1, -3, 4, 6, 7, -1, 0, 11, -5, 5];

// Filtering menggunakan for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// Menggunakan filter // NOTE: memfilter array sesuai dengan kondisi yg diberikan, dan juga ini membuat array baru
// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map // NOTE: memetakan array ke bentuk baru sesuai intruksi nya, ini juga membuat array baru
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// const newAngka = angka.map((a) => a + 2);
// console.log(newAngka);

// reduce
// jadi khusus reduce ini dia mempunyai 2 parameter, yaitu :
// currentValue = posisi dari value yg skrg ada di mana
// accumulator = total nilai. Hasil penjumlahan antara total nilai yg ada (default nya 0) di akumulasi kan dengan accumulator

// [1 + -3 + 4 + 6 + 7 + -1 + 0 + 11 + -5 + 5]
// ILUSTRASI: accumulator sekarang adalah 0 (default). lalu currentValue nya adalah 1, lalu 0 ditambah 1 hasilnya adalah 1 maka accumulator skrg berubah menjadi 1, lalu currentValue nya geser jadi -3, jadi -3 ditambah dengan accumulator(total nilai) yg tadi jadi 1 ditambah -3 maka hasilnya -2, dan -2 ini akan menjadi accumulator, dan currentValue nya akan geser lagi menjadi 4 dan...
// dan begitulah seterusnya

// default, jadi ada nilai default kalau tidak ditambahkan yaitu 0, dan nilai default itu bisa diganti misal dengan angka yg lain atau nilai yg lain
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 0
// );
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 5
// );
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// Method Chaining
// cari angla > 5
// kalikan 3
// jumlahkan

// const angka = [1, -3, 4, 6, 7, -1, 0, 11, -5, 5];
// jadi gunakan . (titik)
// dan chaining ini bisa digunakan berulang seperti contoh dibawah ini, ketika sudah di kalikan 4 dengan map, maka dibagi lagi dengan 2 menggunakan map
const hasil = angka
  .filter((a) => a > 5)
  .map((m) => m * 4)
  .map((s) => s / 2)
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
