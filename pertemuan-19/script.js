// Rest Parameter

// argument adalah semua yg dikirim ke parameter pada saat function nya di ambil
// function myFunc(...myArgs) {
//   //   return arguments; // bentuknya object
//   //   return Array.from(arguments); // jadi array
//   //   return [...arguments]; // jadi array

// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   //   let result = angka.reduce((acc, cur) => acc + cur);
//   //   return result;

//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array Destructuring
// const kelompok1 = ["sandi", "arba", "putra", "doddy", "erik"];
// const [ketua, wakilKetua, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Sandi",
//   frontEnd1: "Arba",
//   frontEnd2: "Putra",
//   backEnd: "Doddy",
//   ux: "Erik",
//   devOps: "Udin",
//   nilai: {
//     tugas: 90,
//     uts: 80,
//     uas: 95,
//   },
// };

// const {
//   pm,
//   nilai: { uts },
//   ...myTeam
// } = team;
// console.log(uts);

function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
  //   return values;
}

console.log(filterBy("string", 1, 2, "Sandi", false, 10, true, "Arba"));

const x = 10;
if (typeof x === "number") {
  setTimeout(() => console.log("true boy"), 2000);
}
