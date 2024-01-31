// Konsep this pada arrow function
// NOTE: jadi sebetulnya tidak ada konsep this pada arrow function
//
// Constructor Function | Expression
// const Mahasiswa = function () {
//   this.nama = "Sandi";
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
//   // console.log(this);
// };
// NOTE: konsep this pada arrow function yg menjadi method dari constructor function expression
const Mahasiswa = function () {
  this.nama = "Sandi";
  this.umur = 19;
  this.sayHello = () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  };
  // console.log(this);
};
const sandi = new Mahasiswa();
let mhs = {
  nama: "Sandi",
  umur: 19,
  sayHello: () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  },
};
