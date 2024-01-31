// closure, yaitu function yg menggunakan parent scope nya, bisa dibilang juga gabungan antara function & scope nya

// function init() {
//   let nama = "Sandi"; // local variable
//   //   let umur = 19;
//   function tampilNama() {
//     // inner function (closure*)
//     console.log(nama); // akses ke parent variable
//     // console.log(umur);
//   }
//   console.dir(tampilNama);
//   tampilNama();
// }
// init();

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}`);
//   };
// }

// let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam("sandi"));

// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// IIFE
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());

// note: begitu dia menjalankan function add, maka dia akan langsung menjaankan inner function nya
