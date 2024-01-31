// KONSEP THIS PADA ARROW FUNCTION
// NOTE: jadi sebetulnya tidak ada konsep this pada arrow function.
// tergantung arrow function nya jadi method di jenis function/objek yg seperti apa.

// Constructor Function | Expression
// const Mahasiswa = function () {
//   this.nama = "Sandi";
//   this.umur = 19;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
//   // console.log(this);
// };
// NOTE: konsep this pada arrow function yg menjadi method dari CONSTRUCTOR FUNCTION EXPRESSION this nya yaitu mengacu kepada object itu sendiri
// const Mahasiswa = function () {
//   this.nama = "Sandi";
//   this.umur = 19;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   };
//   // console.log(this);
// };

// const sandi = new Mahasiswa();

// NOTE: Sedangkan konsep this pada arrow function yg menjadi method dari OBJECT LITERAL konsep this nya mengacu kepada object window(global)
// let mhs = {
//   nama: "Sandi",
//   umur: 19,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//   },
// };

// function mhs() {
//   this.nama = "Sandi";
//   console.log(this.nama);
// }

// mhs();
// console.log(nama);

// NOTE: ini kan constructor function expression, jadi konsep this nya mengacu ke object ini sendiri.
const Mahasiswa = function () {
  this.nama = "Sandi";
  this.umur = 19;
  // ini adalah method yg dibuat dengan function expression, konsep thisnya mengacu ke pada object ini sendiri juga.
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
  };

  // dan setInterval ini sebenarnya adalah function declaration ya kan, jadi karena function declaration itu konsep this nya mengacu kepada object window maka this di dalam setInterval ini juga mengacu ke object window, meskipun si setInterval nya ini atau si function declaration nya ini ada di dalam object lain.
  // setInterval(() => {
  //   console.log(this.umur++);
  // }, 1000);
};

let sandi = new Mahasiswa();
