// Callback
// yaitu sebuah function yg dikirimkan sebagai parameter di function yg lain

// Synchronous Callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }

// function panggilNama(callback) {
//   const nama = prompt("Masukan nama :");
//   return callback(nama);
// }

// panggilNama(halo);
// panggilNama((nama) => alert(`Halo ${nama}`));

// const mhs = [
//   {
//     nama: "Sandi Arba Putra",
//     nim: "2255201259",
//     email: "sandiarbaa@gmail.com",
//   },
//   {
//     nama: "Han Soo He",
//     nim: "2255201260",
//     email: "hansoo@gmail.com",
//   },
//   {
//     nama: "Go Yoon Jung",
//     nim: "2255201261",
//     email: "goyoon@gmail.com",
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("Mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("Selesai");

// JQuery
console.log("Mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("Selesai");
