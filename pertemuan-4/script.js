// Execution Context, Hoisting & Scope
// 1. Creation Phase
// 2. Execution Phase

// CREATION PHASE
// console.log(nama);
// var nama = "Sandi";

// hoisting
// nama var = undefined;
// nama function = fn()

// kalau ada variabel akan di gerek ke atas (istilahnya begitu ceritanya) dan di isi dulu dengan undefined
// kalau ada keyword function akan di isi dengan function itu sendiri

// execution phase
// windows
// arguments
// hoisting

// console.log(sayHello);

// var nama = "Sandi";
// var umur = 19;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun`;
// }
// var nama = "sandi";
// var username = "@sandi";

// function cetakURL() {
//   //   console.log(arguments);
//   var igURL = "https://instagram.com/";
//   return igURL + username;
// }

// console.log(cetakURL("@arba", "@putra"));
// scope, yaitu mencari dulu ke variabel terdekat, baru kalau tidak ada akan ke global

function satu() {
  var nama = "Sandi";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Arba";
satu();
dua("Putra");
console.log(nama);
