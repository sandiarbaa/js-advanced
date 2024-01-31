// PERBEDAAN VAR, LET, CONST
// NOTE: scope = lingkup | blok code = kode apapun yg di tulis di dalam sebuah kurung kurawal.

// js itu menganut konsep pemrograman function scope, sedangkan bahasa lain itu menganut blok scope.
// jadi intinya itu kita pengen supaya sebuah variabel itu tidak bisa diakses dari scope luar nya. karena perilaku dari sebuah variabel harusnya memang begitu.
// nah kalau di bahasa lain agar supaya sebuah variabel itu tidak bisa d akses dari luar scope nya itu menggunakan blok scope, kalau di js supaya bisa begitu harus menggunakan function scope, jadi mau di blok code manapun si variabel itu, kalau bukan ada di dalam sebuah function scope, maka tetap akan bisa diakses dari luar scope nya

// PENGGUNAAN VAR *
// BLOK CODE
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// itu melakukan apa? jadi variabel i kan ada di dalam blok code yaitu blok scope code looping , nah karena js itu menganut function scope maka variabel i itu bisa di akses dari luar. kalau for itu dibungkus ke dalam sebuah function, barulah varibel i tidak dapat digunakan.

// FUNCTION SCOPE
// function tes() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// console.log(i);
// Nah itu baru function scope, jadi variabel di sebuah bahasa pemrograman memang seharusnya tidak sembarangan bisa di akses dari luar. jadi kalau variabel ada di dalam function scope di js, itu tidak bisa di akses dari luar.

// IIFE (Imediately Invoked Function Expression) | jadi membungkus sebuah blok code ke dalam function anonymous yg expression, dan otomatis function IIVE itu akan di jalankan.
// IIFE itu adalah sebuah function expression yg di panggil/dijalankan langsung ketika di buat.

// SIAF (Self Invoking Anonymous Function)
// IIFE atau SIAF sama aja, itu hanya singkatan.

// intinya mereka itu menjaga agar variabel yg ada di dalam function itu tidak bisa di akses dari luar.

// (function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);

//NAH tetap ada cara selain harus begitu, yaitu dengan menggunakan keyword var

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// nah jadi ganti aja var nya jadi let, maka perilaku nya sudah menjadi blok scope, bukan function scope lagi

// CONST
// jadi kalau yakin nilai dari sebuah variabel nya tidak akan berubah, maka gunakan const, dan juga nilai dari const itu tidak bisa di isi ulang
// bahkan ada yg bilang gunakan let ketika di for aja
// kenapa menggunakan const? ya karena sebisa mungkin nilai dari state(variabel) itu tidak berubah atau meminimalisir perubahan state

// let i = 10 // ini bisa di isi ulang nilai nya
// const i = 10; // ini tidak bisa di isi ulang
// i = 15;
// console.log(i);

// tapi const ini juga tidak sepenuhnya tidak bisa diubah
// contoh untuk object
// const mhs = {
//   nama: "Sandi",
//   umur: 19,
// };

// mhs.umur = 20; // ini bisa di isi ulang
// mhs = {  // ini tidak bisa
//   prodi: "Teknik Informatika",
// };
// console.log(mhs);

// jadi asalkan bukan objeknya yg diubah, itu dia masih bisa

// begitu juga dengan array
// const i = [1, 2, 3, 4];
// i = [1, 3, 2]; // tidak bisa di isi ulang dengan array yg baru

// i.push(5); // ini bisa
// console.log(i);

// jadi intinya constanta masih bisa di ubah, asal bukan semuanya
