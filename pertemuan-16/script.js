// DESTRUCTURING FUNCTION

// Destructuring return value dari function
// function kalkulasi(a, b) {
//   //   return [a + b, a - b];
//   //   return [a + b, a - b, a * b, a / b];
//   return [a + b, a - b, a * b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang] = kalkulasi(2, 3);
// const [jumlah, kurang, kali, bagi = "nothing"] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     // bagi: a / b,
//   };
// }

// const { kurang, bagi: b = "nothing", tambah, kali } = kalkulasi(2, 3);
// console.log(kurang);
// console.log(kali);
// console.log(b);

// DESTRUCTURING FUNCTION ARGUMENTS
const mhs1 = {
  nama: "Sandi Arba",
  umur: 19,
  nim: "2255201259",
  email: "sandiarbaa@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// Jenis 1 | ini tanpa destructuring
// function cetakMhs(nama, umur) {
//   return `Halo nama saya ${nama}, saya ${umur} tahun`;
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// Jenis 2 | ini tanpa destructuring
// function cetakMhs(mhs) {
//   return `Halo nama saya ${mhs.nama}, saya ${mhs.umur} tahun`;
// }
// console.log(cetakMhs(mhs1));

// Jenis 3 | With Destructuring
function cetakMhs({
  nama,
  umur,
  hobi: h = "ngoding",
  nilai: { tugas, uts, uas },
}) {
  return `Halo nama saya ${nama}, saya ${umur} tahun, hobi saya adalah ${h}, dan nilai uas saya adalah ${uas}.`;
}
console.log(cetakMhs(mhs1));
