const box = document.querySelector(".box");

// FLOW: jika di dalam elemen box tidak ada kelas size maka jalankan satu dan dua dengan normal, tapi jika maka tukar nilai antara satu dan dua
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains("size")) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  //  setTimeout ini pakai anonymous arrow function karena this di arrow function itu tidak ada maka dia akan mencari ke parent nya yaitu elemen box, kalau pakai function anonymous declaration konsep this nya akan langsung ke window.
  setTimeout(() => {
    // console.log(this);
    this.classList.toggle(dua);
  }, 500);
});
