// Spread Operator
// yaitu memecah sebuah iterables menjadi single element

// const mhs = ["sandi", "arba", "putra"];
// const dosen = ["adi", "erik", "doddy"];

// const orang = [...mhs, ...dosen]; // spread operator
// const orang = [...mhs, "ida", ...dosen]; // spread operator
// const orang = mhs.concat(dosen); // concat yaitu menthod default dari array
// console.log(orang);
// console.log(...mhs);
// console.log(...mhs[0]);

// copy array
// const mhs = ["sandi", "arba", "putra"];
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs1);
// console.log(mhs);

// const liNama = document.querySelectorAll(".nama");

// let mhs = [];
// liNama.forEach((n) => {
//   mhs.push(n.textContent);
// });
// console.log(mhs);

// const mhs = [...liNama].map((n) => console.log(n.textContent));

// const Nama = document.querySelector(".name");

// const arr = [];
// arr.push(Nama.textContent);

// const g = [...arr[0]];
// let d = g
//   .map((g) => {
//     return `<span class="hl">${g}</span>`;
//   })
//   .join("");
// console.log(d);
// Nama.innerHTML = d;

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);

nama.innerHTML = huruf;
