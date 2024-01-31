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
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};

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

// Cara membuat constructor function itu ada 2, bisa dengan function expression atau dengan function declaration
// Constructor Function | Expression
// const Mahasiswa = function () {
//   this.nama = "Sandi";
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
//   console.log(this);
// };

// const sandi = new Mahasiswa();

// Constructor Function | Declaration
// function Siswa() {
//   this.nama = "Arba";
//   this.umur = 15;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
//   console.log(this);
// }

// const arba = new Siswa();
