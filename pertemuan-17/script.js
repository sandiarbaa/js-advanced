// Iterable Object Yaitu :
// 1. String
// 2. Array
// 3. Arguments / NodeList
// 4. TypedArray
// 5. Map
// 6. Set
// 7. User-defined Iterables

// FOR OF
// For ... of | sebuah looping untuk mengulang atau menelusuri object-object yg iterable

// ARRAY
// const mhs = ["sandi", "arba", "putra"];

// for (let i = 0; i < mhs.length; i++) {
//   // console.log(mhs[i].length);
//   // console.log(Array.from(mhs[i]));
//   //   if (mhs[i] == "arba") {
//   //     console.log(mhs[i]);
//   //   } else {
//   //     console.log("bukan");
//   //   }
// }

// mhs.forEach((mhs) => {
//   let arr = Array.from(mhs);
//   return console.log(arr);
// });

// mhs.map((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "Sandi";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["sandi", "arba", "putra"];
// mhs.forEach((m, i) => {
//   return console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// const liNama = document.querySelectorAll(".nama");

// walaupun forEach itu looping khusus untuk array, tetapi kalau di browser versi terbaru forEach juga bisa digunakan untuk looping NodeList

// liNama menghasilkan NodeList
// liNama.forEach((n) => console.log(n.textContent));

// kalau forOf langsung bisa, karna liNama sudah nodeList, dan nodeList itu termasuk ke dalam iterable
// ada default keyword var, kalau tidak ditulis keyword untuk penampungan variabel nya
// for (n of liNama) {
//   console.log(n.textContent);
// }

// Arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }

//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// FOR IN
// For ... in | untuk melooping enumerable | enumerable itu adalah properti pada object

// const mhs = {
//   nama: "Sandi",
//   umur: 19,
//   email: "sandiarbaa@gmail.com",
// };

// for (const m in mhs) {
//   //   console.log(m); // untuk mengambil key nya atau nama properti dari object nya
//   console.log(mhs[m]); // untuk mengambil indeks nya, jadi di combo aja object sama key dari forIn nya
//   //   console.log(m.length);
// }
