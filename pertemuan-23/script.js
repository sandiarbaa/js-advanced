// Promise | promise itu object

// fetch("http://www.omdbapi.com/?apikey=74fd9f5a&s=avengers") // fetch saja itu mengembalikan promise
//   .then((response) => response.json()) // lalu method json itu juga mengembalikan promise
//   .then((response) => console.log(response.Search));

// ALUR FETCH : jadi gini bro.. so far, fetch itu kan mengembalikkan promise, nah sebenarnya kalau memang query fetch nya itu berhasil, maka hasil query nya itu akan masuk ke callback resolve (di dalam promise) dan untuk menjalankan aksi dari callback resolve ini kan butuh method then ya. nah jadi pake dah tuh then, tetapi karna kita harus mem-parsing hasil query api nya ke json, jadi kita pake method json, tapiiii method json ini mengembalikan promise lagi, jadi untuk sekali lagi kita harus menggunakan method then lagi untuk mengambil callback resolve yg sekarang sudah ada di dalam hasil parse-an method json tadi. barulah tampil hasil dari query nya. jadi itu lah kenapa pakai 2 then ya!

// Promise
// Object yg merepresentasikan kegagalan / keberhasilan dari sebuah event yg asynchronous yg akan terjadi di masa yg akan datang

// janji (terpenuhi / tidak terpenuhi) | janji = states

// states (3) :  fulfilled (terpenuhi), rejected (diingkari), pending (waktu tunggu sebelum janji terpenuhi)

// dan untuk menjalankan keadaan tersebut menggunakan fungsi callback yaitu :
// callback (resolve/ reject / finally)
// aksi (then / catch)

// const 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati");
//   } else {
//     reject("Janji tidak ditepati");
//   }
// });

// janji1
//   .then((response) => console.log(`OK! ${response}`))
//   .catch((response) => console.log("NOT OK! " + response));

// console.log(janji1);

// jadi intinya so far: misal kalau ingin query ke api, jadi gini, untuk query nya menggunakan promise, dan response dari query nya akan di tangkap oleh resolve jika proses query nya berhasil, jika gagal, akan di tangkap oleh reject, nah resolve dan reject itu adalah sebuah callback atau hasil query (kalau memang ingin request api).

// nah lalu untuk menjalankan resolve nya atau mengambil resolve nya itu menggunakan then lalu gunakan parameter nama_apapun untuk mengambil hasil dari si resolve nya

// dan begitu sebaliknya

// atau bisa dibilang juga analogi nya begini, jika sudah dapat response nya (resolve / reject), nah apa yg akan kita lakukan dengan response itu, nah untuk melakukan aksinya itu menggunakan then atau catch, jadi begitu. Semoga diriku di masa depan mengerti jika lupa lagi hehehe.

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Janji ditepati");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Janji tidak ditepati");
//     }, 2000);
//   }
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu!")) // jadi mau hasil promise nya resolve atau reject, finnaly akan tetap dijalankan
//   .then((response) => console.log("OK! " + response))
//   .catch((response) => console.log("NOT OK! " + response));
// console.log("selesai");

// jadi bisa dipakaikan untuk animasi loading, ketika MULAI pasang animasi loading nya, lalu ketika pending nya selesai matikan animasi loadingnya dengan finally

// Alurnya : mulai, lalu janji2 disimpan ke webApi, lalu selesai,  baru setelah 2 detik janji2 masuk ke qallback queue lalu masuk ke stack jika event loop nya sudah membolehkan (jika stack nya sudah kosong) baru hasil resolve nya akan di tampilkan

// contoh 3
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avengers",
        sutradara: "Joss Whedon",
        actor: "Robert Downey Jr",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Jakarta",
        cuaca: "Hujan",
        temp: "28 C",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Promise.all([film, cuaca]).then((response) => console.log(response));
Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
