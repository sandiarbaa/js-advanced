// Konsep this
// var a = 10;
// console.log(this.a);

// function declaration. konsep this nya mengembalikan object window (global)
// function ba() {
//   console.log(this);
//   console.log("helo");
// }
// ba();
// window.ba();

// object literal. konsep this nya mengembalikan object itu sendiri
// var obj = { a: "sandi", e: 10 };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// obj.halo();

// constructor function, mengembalikan object yg baru dibuat atau masing-masing
// function Halo(nama) {
//   console.log(this);
//   console.log(nama);
// }

// var obj1 = new Halo("sandi");
// var obj2 = new Halo("arba");

// Function Expression
// Konsep this nya, mengacu ke object window
// var tampilNama = function (nama) {
//   console.log(this);
//   //   alert(`Helo ${nama}`);
// };
// tampilNama("sandiar");
