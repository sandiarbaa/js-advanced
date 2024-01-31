// Object.create()
// Yaitu untuk memanggil object yg lain, untuk dijadikan parent nya (seperti konsep pewarisan)

// Cara untuk membuat Objek pada Javascript

// 1. Object Literal
// NOTE: konsep this pada object literal itu mengacu kepada object itu sendiri
// let mahasiswa1 = {
//   nama: "Sandi",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan! `);
//   },
// };

// let mahasiswa2 = {
//   nama: "Arba",
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan! `);
//   },
// };

// 2. Function Declaration
// NOTE: konsep this nya mengacu kepada  global atau object window
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan! `);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain! `);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let sandi = Mahasiswa("sandi", 10);
// let arba = Mahasiswa("arba", 20);

// 3. Constructor Function
// NOTE: konsep this nya mengacu kepada object yg baru dibuat (masing-masing)
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan! `);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain! `);
//   };
// }

// let sandi = new Mahasiswa("sandi", 10);

// Function Expression
// var tampilNama = function (nama) {
//   console.log(this);
//   //   alert(`Helo ${nama}`);
// };
// tampilNama("sandiar");

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }
