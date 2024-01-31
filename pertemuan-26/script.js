// Asyncronous Function
// Pengertian : adalah sebuah function yg bekerja secara asyncronous (tidak langsung dilakukan) yg menghasilkan (implisit) promise sebagai return valuenya, tapi penulisannya codenya seperti function synchronous (standard).

// function nya akan mengembalikan promise meskipun didalamnya tidak ada code yg asyncronous

// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// coba.then((response) => console.log(response));

// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     // setTimeout(() => {
//     //   resolve("ditepati");
//     // }, 2000);
//     resolve("ditepati");
//   } else {
//     // reject("tidak ditepati");
//   }
// });
// console.log(janji.then((response) => console.log(response)));

// jadi promise itu gini bro, jadi promise ini hanya objek, dan ketika si promise nya ini masih proses, mau misal query ke api atau dengan setTimeout yg harus tunggu beberapa waktu dulu, intinya selama si promise ini masih proses maka statusnya pending, tetapi ketika kondisinya promise nya terpenuhi misal query ke api nya berhasil, maka hasilnya akan masuk ke callback resolve.

// dan si resolve ini fungsinya memang untuk menangkap hasil dari si promise nya, kalau janjinya ditepati itu resolve nya akan dijalankan, kalau tidak ditepati itu reject nya.

// nah jadi bisa dibilang si resolve dan reject ini berfungsi sebagai apa yg akan ditampilkan ketika then atau catch di jalankan.

// dan then atau catch ini akan menjalankan apa yg sudah di tangkap oleh resolve dan reject

// tambahan: kalau resolve nya tidak seperti proses, misal langsung menampilkan string saja gitu, itu tidak akan pending promise nya, maka akan fullfield, tetapi untuk menjalankan hasilnya, tetap harus menggunakan then.

// ASYNC AWAIT
// jadi untuk menjalankan async dan await itu kita butuh function

// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, waktu);
//     } else {
//       reject("kelamaan!");
//     }
//   });
// }

// const coba = cobaPromise();
// console.log(coba);
// coba
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));

// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (err) {
//     console.log(err);
//   }
// }

// cobaAsync();

// jadi gini bro: function cobaPromise() ini hanya mengembalikan promise, nah untuk menjalankan resolve nya kan butuh then kalau langsung dijalankan di variabel kan belum bisa pakai async awaitnya, karena async await hanya bisa dilakukan di function. jadi bikin function dulu baru initialisasi ke dalam variabel lalu baru kasih keyword async dan await. baru hasil resolve nya langsung dijalankan

// dan di dalam async await itu itu asumsinya promise nya selalu resolve, jadi tidak bisa pakai then dan catch di dalam function async await

// const coba = new Promise((resolve, reject) => {
//   let a = 1;
//   if (a == 1) {
//     resolve("ditepati!");
//   } else {
//     reject("tidak ditepati!");
//   }
// });

// console.log("mulai");
// coba
// //   .finally(() => console.log("selesai menunggu!"))
//   .then((response) => console.log(response))
//   .catch((response) => console.log(response));
// console.log("selesai");

function cobaPromise() {
  return new Promise((resolve, reject) => {
    let a = 3;
    if (a == 1) {
      resolve("ditepati!");
    } else {
      reject("tidak ditepati!");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
