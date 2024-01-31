// MATERI POKOK JS ADVANCED
// 1. Pembuatan Object
// 2. Destructuring Object & Array
// 3. Rest Parameter
// 4. Spread Operator
// 5. Arrow Function
// 6. Higher Order Function
// 7. Callback Function
// 8. Template Literals

// let mhs = {
//   nama: "Sandi",
//   umur: 19,
//   hobi: ["Ngoding", "Gaming", "Training"],
//   alamat: {
//     jalan: "Jl. Al-Muhajirin",
//     kota: "Tangerang",
//     provinsi: "Banten",
//     negara: "Indonesia",
//   },
//   // ini method di object literal menggunakan function declaration, this nya mengembalikan object literal ini sendiri
//   showThis: function () {
//     // let arr = ["BCM", "ML", "PUBG"];
//     // return arr.reverse();
//     return this;
//   },
//   // ini method object literal menggunakan arrow function, this nya mengembalikan object window
//   showThis2: () => {
//     // let arr = ["BCM", "ML", "PUBG"];
//     // return arr.reverse();
//     return this;
//   },
// };

// function Mhs(umur, energi) {
//   this.nama = "Arba";
//   this.umur = umur;
//   this.energi = energi;
//   (this.hobi = ["Ngoding", "Gaming", "Training"]),
//     (this.alamat = {
//       jalan: "Jl. Al-Muhajirin",
//       kota: "Tangerang",
//       provinsi: "Banten",
//       negara: "Indonesia",
//     });
//   this.main = function (jam) {
//     return "Main";
//   };
//   // this nya mengembalikan object ini sendiri
//   this.showThis = function () {
//     return this;
//   };

//   // this nya mengembalikan object ini sendiri
//   this.oke = () => {
//     return this;
//   };

//   console.log(this);
// }

// Mhs.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// // console.log(Mhs.makan(5));

// let orang1 = new Mhs(19, 20);
// let orang2 = new Mhs(19, 20);

// const arrow = (nama) => `${nama}`;

// const data = [1, 2, 3, 4, 5];
// const oke = data
//   .map((d) => d)
//   .filter((da) => {
//     return da >= 4;
//   });
// console.log(oke);

// let arr = [5, 3, 9];

// // Mengubah array menjadi array dua dimensi dengan kunci dan nilai
// let arrEntries = arr.map((index, value) => [value, index]);

// // Mengubah array dua dimensi menjadi objek
// let obj = Object.fromEntries(arrEntries);

// console.log(arrEntries);

// let arr2D = arr.map((index, value) => [value, index]);

// let obj = Object.fromEntries(arr2D);
// console.log(obj);

const arr = ["sandi", "arba", "putra"];
console.log(arr);
const arr2 = [...arr, "doddy"];
arr2[0] = "fajar";
console.log(arr2);

const [ketua, wakil, ...anggota] = arr2;
console.log(anggota);

// function angka(a, b, ...numbers) {
function angka({ nama, umur: u, nim = 30 }) {
  //   return Array.from(arguments).map((a) => a * 2);
  return nim;
}

// const Angka = [1, 2, 3, 4, 5, "aku"];
const obj = {
  nama: "sandi",
  umur: 19,
};
// const Angka = angka(1, 2, 3, 4, 5);
// console.log(Angka);
console.log(angka(obj));

// console.log(angka(1, 2, 3, 4, 5));
// console.log(Angka);

const mhs = ["sandi", "arba", "putra"];

// mhs.map((m, i) => console.log(`${m} mahasiswa ke-${i + 1}`));
// mhs.forEach((m, i) => console.log(m + " mahasiswa ke-" + (i + 1)));
// mhs.filter((m) => m === "sandi" && console.log(m));
mhs.filter((m, i) => {
  // (m === "sandi" ? console.log(m) : null)
  return console.log(i * i);
});
