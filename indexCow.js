const chalk = require("chalk");
const cowsay = require("cowsay");
const figlet = require("figlet");
const gradient = require("gradient-string");

const namaLengkap = "Muhammad Aryan Fathurrahman";
const namaPanggilan = "M. Aryan Fathurrahman";
const nim = "F1D022069";
const pesanMotivasi = "Saya Adalah Sapi *Mooooo*";

console.log(chalk.blue.bold("Nama Lengkap: ") + chalk.yellow(` ${namaLengkap}`));
console.log(chalk.blue.bold("NIM: ") + chalk.green.underline(` ${nim}`));
console.log("\n");

figlet(namaPanggilan, function (err, data) {
  if (err) {
    console.log("Sesuatu salah...");
    return;
  }

    console.log(
    cowsay.say({
      text: pesanMotivasi,
      e: "oO", 
      T: "U ", 
    })
  );

    console.log(gradient.pastel(data));
});