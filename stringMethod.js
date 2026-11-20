// const nama = "andi";

// console.log(nama.toUpperCase());
// console.log(nama.toLowerCase());

const username = "AnDI";
const username2 = username.toLowerCase();
// console.log(username2);

const nama2 = "andi";
// console.log(nama2);
// console.log(nama2.trim());

// const email = "andi@gmail.com";
// console.log(email.includes("@"));

// const nama3 = "candra";
// if (nama3.includes("di")){
//         console.log("valid");
// }   
// else{
//         console.log("tidak valid");
// }
// console.log(nama3.includes("di"));
// console.log(nama3.includes("nnn"));

const kode = "laporan.jpg";
// console.log(kode.startsWith("LT"));
// if (kode.endsWith(".jpg")){
//         console.log("file gambar");
// }
// else{
//         console.log("file tidak didefinisikan");
// }

// const nama = "andi";
// if (nama.indexOf("u") !== -1){
//         console.log("huruf ditemukan");
// }
// else{
//         console.log("huruf tidak ditemukan");
// }

// const numby = 2;
// if (numby % 2 === 0){
//         console.log("genap");
// }
// else{
//         console.log("ganjil");
// }

// const namaBarang = "pc-001";
// console.log(namaBarang.slice(3, 6));


// const kalimat = "saya belajar java";
// const hasil = kalimat.replace("saya", "aku").replace("java", "javascript");

// console.log(hasil);

// const nama = "andi,budi,candra";
// const hasil2 = nama.split(",");
// console.log(hasil2);

// const warna = "merah - kuning - hijau"
// const hasil3 = warna.split (" - ")
// console.log(hasil3);

// const namaKelompok = ["andi", "budi", "citra"];
// const joinKelompok = namaKelompok.join("-");
// console.log(joinKelompok);

// const kasus1 = ("aku suka renang");
// const kakus = kasus1.replace ("aku", "saya");
// const ks = kasus1.replace ("renang", "berenang");
// const 

// const username = "asmin"
// const hasil = username
// .trim()
// .toLowerCase();
// console.log(hasil);


 
//  const siswa = {
//     nama: "aNdi",
//     kelas: "x ict",
//     email: "ANDI@GMAIL.COM"
//  };

// const { nama, kelas, email } = siswa;

// console.log(`Nama: ${nama.toUpperCase()}
// Kelas: ${kelas.toUpperCase()}
// Email: ${email.toLowerCase()}`);


const siswa1 = [
    { nama: "andi", email: "andi@gmail.com", umur: 17},
    { nama: "budi", email: "budi@yahoo.com", umur: 17},
    { nama: "citra", email: "citra@gmail.com", umur: 17},
    
]
const gmailSiswa = siswa1.filter(function(s) {
  return s.email.endsWith("gmail.com");
});

const siswa = gmailSiswa.map(function(s) {
return {
    nama: s.nama,
    email: s.email};
});
console.log(siswa);