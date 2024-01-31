// Template Literals / Template String
// Fungsi:
// Multi-line String
// Embeded Expression
// HTML Fragments
// Expression Interpolation
// Tagged Template

// const nama = "Sandi";
// const umur = 19;
// console.log(`Halo nama saya ${nama}, saya ${umur} tahun`);

// Embeded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Halo!")}`);
// const x = 11;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Sandi Arba",
  umur: 19,
  nim: "2255201259",
  email: "sandiarbaa@gmail.com",
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);
