// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("sandi"));

// Arrow Function
// 1 parameter
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("sandi"));

// 2 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("sandi", "malam"));

// implisit return
// 1 parameter, dan isi function hanya return saja
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama("sandi"));

// tanpa parameter
// const tampilNama = () => `hello World!`;
// console.log(tampilNama());

// let mahasiswa = ["sandi", "arba", "putra"];

// let jmlHuruf = mahasiswa.map((m) => {
//   return m.length;
// });

// let jmlHuruf = mahasiswa.map((m) => m.length);

// let jmlHuruf = mahasiswa.map((m) => ({ nama: m, jmlHuruf: m.length }));

// console.table(jmlHuruf);

// let jmlHuruf = mahasiswa.map((nama) => ({ nama, jml: nama.length }));
// console.table(jmlHuruf);

// function Rumah(jmlPintu, jmlJendela) {
//   this.pintu = jmlPintu;
//   this.jendela = jmlJendela;
//   console.log(this);
// }

// function Sekolah(jmlKelas, jmlLantai) {
//   // let this = Object.create(Sekolah.prototype)

//   this.kelas = jmlKelas;
//   this.lantai = jmlLantai;

//   this.tambahKelas = function (addKelas) {
//     this.kelas += addKelas;
//     return `Kelas sudah di tambah, total ${this.kelas}`;
//   };
//   console.log(this);

//   //   return this;
// }

// Rumah.prototype.tmbJendela = function (tambah) {
//   this.jendela += tambah;
//   return `Jendela berhasil ditambahkan! total ${this.jendela} jendela`;
// };

// let bangunan1 = new Rumah(2, 4);
// // console.log(bangunan1);

// let bangunan2 = new Sekolah(10, 3);
// // console.log(bangunan2);
