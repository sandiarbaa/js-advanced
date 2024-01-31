// Tagged Templates
const nama = "Sandi Arba";
const umur = 19;
const email = "sandiarbaa@gmail.com";

function coba(strings, ...values) {
  //   let result = "";
  //   strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const string = coba`Halo nama saya ${nama}, saya ${umur} tahun, dan email saya adalah : ${email}.`;

// console.log(string);

document.body.innerHTML = string;
