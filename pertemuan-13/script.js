// 1.HTML Fragments
// const mhs = {
//   nama: "Sandi Arba",
//   umur: 19,
//   nim: "2255201259",
//   email: "sandiarbaa@gmail.com",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span>${mhs.nim}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Sandi",
//     email: "sandi@gmail.com",
//   },
//   {
//     nama: "Arba",
//     email: "arba@gmail.com",
//   },
//   {
//     nama: "Putra",
//     email: "putra@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) =>
//         `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//     )
//     .join("")}
// </div>`;

// 3. Conditionals
// const lagu = {
//   judul: "Maju Mundur Syantik",
//   penyanyi: "Syahrini",
//   feat: "Jenita Janet",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>Judul : ${lagu.judul}</li>
//     <li>Penyanyi : ${lagu.penyanyi} ${
//   lagu.feat ? `(feat. ${lagu.feat})` : ""
// }</li>
//   </ul>
// </div>`;

const mhs = {
  nama: "Sandi Arba Putra",
  semester: 4,
  mataKuliah: [
    "Pemrograman Web",
    "Mobile Programming",
    "Pemrograman Berorientasi Objek",
    "Basis Data",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `<ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>`;
}

const el = `<div class="mhs">
  <h1>${mhs.nama}</h1>
  <span>Semester : ${mhs.semester}</span>
  <h4>Mata Kuliah :</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
