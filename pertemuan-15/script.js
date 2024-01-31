// Destructuring Assignment / Variabel
// Destructuring itu simpel nya seperti membongkar atau meng-unpack

// Destructuring Array
// const perkenalan = ["Halo ", "nama ", "saya ", "Sandi "];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// const str = perkenalan.reduce((result, str) => result + str, "");
// console.log(str);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value
// sebagai return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest Parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5];
// console.log(b);

// Destructuring Object
// Kalau destructuring object ini tidak boleh sembarangan, nama variabelnya harus sama dengan nama properti dari objeknya.
// const mhs = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// };

// const { nama, email } = mhs;
// console.log(nama);
// console.log(email);

// Assignment tanpa deklarasi object
// jadi bisa langsung dijadikan seperti function expression
// const { nama, email } = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// };

// atau bisa menggunakan style IIFE, jadi langsung pakai kurung untuk menjalankan nya
// ({ nama, email } = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// });

// bahkan kalau objek nya simpel bisa disimpan 1 baris begini, tapi kalau banyak bisa disimpan ke bawah
// ({ nama, email } = { nama: "Sandi Arba", email: "sandiarbaa@gmail.com" });
// console.log(email);

// Assignment ke variabel baru
// jadi tadi kan kalau destructuring object itu harus sama nama variabel dengan nama properti di object nya, tetapi ternyata bisa di ubah untuk nama variabel nya, seperti ini :

// const mhs = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// };

// const { nama: n, email: e } = mhs;
// console.log(n);
// console.log(e);

// Memberikan default value
// const mhs = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// };

// const { nama: n, email: e, umur = 19 } = mhs;
// console.log(n);
// console.log(e);
// console.log(umur);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
// };

// const { nama: n, email: e, umur: u = 19 } = mhs;
// console.log(n);
// console.log(e);
// console.log(u);

// Rest Parameter
// jadi bisa juga di combine dengan rest parameter, dan hasilnya akan object juga
// const mhs = {
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
//   umur: 19,
// };

// const { nama: n, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "Sandi Arba",
//   email: "sandiarbaa@gmail.com",
//   umur: 19,
// };

// function getIdMhs(mhs) {
//   return mhs.id;
// }

// function getIdMhs({ id, nama }) {
//   //   return id;
//   return nama;
// }
// console.log(getIdMhs(mhs));

// function coba() {
//   return [1, 2];
// }
// const [, dua] = coba();
// console.log(dua);
