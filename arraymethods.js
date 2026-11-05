// const nilai = [80, 75, 90, 85, 70, 83, 95, 76, 60, 93];
// nilai.forEach((angka) => {
//      console.log(angka + 5);
//  });

//  nilai.forEach((angka)  => {
// if (angka >= 75){
//         console.log(angka + " -lulus");
// } else {
//         console.log(angka + " -remedial")
// }
// });

// const baru = ["harry", "potter", "gracia", "cipak", "elsa", "cece", "raya", "ciaa", "kanaya", "namira"];
// baru.forEach((nama) => {
//         console.log("hallo, " + nama);
// });

const siswa = [
      { nama:"joko", alamat:"solo", umur:12, kelas:7},
      { nama:"wowo", alamat:"sukoharjo", umur:13, kelas:8},
      { nama:"anis", alamat:"tawangsari", umur:14, kelas:9}
];

// const namaSaja = siswa.map((namaDoang) => namaDoang.umur)
// console.log(namal8iSaja);
// const umurSaja = siswa.map((umurDoang) => umurDoang.umur)
// console.log(umurSaja);

const nilaiBaru = [80, 85, 77, 90, 70, 94, 68, 78, 83, 67];
const nilaiLulus = nilaiBaru.filter((angka) => {
      return angka <= 75;
});
// console.log(nilaiLulus)

const arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const angkaGenapBaru = arrayAngka.filter((jumlah) => {
//       return jumlah %2 === 0
// });
// console.log(angkaGenapBaru)

// const angkaGanjil = arrayAngka.filter((jumlah) => {
//       return jumlah % 2 !== 0;
// });

// const warTicket = [
//       {nama : "konser", jumlah : 300, dipesan : 200},
//       {nama : "seminar", jumlah : 100, dipesan : 70}, 
//       {nama : "workshop", jumlah : 80, dipesan : 80} 
// ];
// const sisaTicket = warTicket.filter((ticket) => {
//       return ticket.jumlah - ticket.dipesan >= 30;
// });
// console.log(sisaTicket)

// const warTicket2= [
//      {nama : "konser", jumlah : 300, dipesan : 200},
//      {nama : "seminar", jumlah : 100, dipesan : 90}, 
//      {nama : "workshop", jumlah : 80, dipesan : 80} 
//  ];
// const sisaTicket2= warTicket2 .find((ticket) => {
//       return ticket.jumlah - ticket.dipesan !== 0 && ticket.nama !== "konser";
//  });
//  console.log(sisaTicket2)

// const siswa2 = [
//       { nama:"andi", nilai: 80 },
//       { nama:"budi", nilai: 65 },
//       { nama:"citra", nilai: 90 },
//       { nama:"dina", nilai: 75 },
//       { nama:"eko", nilai: 85 }
// ];
//  siswa2.forEach((siswa) => {
//       if (siswa.nilai >= 75) {
//             console.log(siswa.nama + " - " + siswa.nilai + " - lulus");
//       } else {
//             console.log(siswa.nama + " - " + siswa.nilai + " - remedial");
//       }
// });

// const produk = [
//       { nama: "mouse", harga: 100000 },
//       { nama: "keyboard", harga: 150000 },
//       { nama: "headset", harga: 200000 },
//       { nama: "flashdisk", harga: 50000 },
//       {nama: "webcam", harga: 250000 }
// ];
// const hargaPromo = produk.map((produk) => {
//       produk.harga= produk.harga * 0.9;
//       return produk;
// });
// console.log(hargaPromo);

// const calonAnggota = [
//       { nama: "andi", nilai: 85, kehadiran: 90 },
//       { nama: "budi", nilai: 75, kehadiran: 95 },
//       { nama: "citra", nilai: 90, kehadiran: 85 },
//       { nama: "dina", nilai: 80, kehadiran: 70 },
//       { nama: "eko", nilai: 88, kehadiran: 100 },
//       { nama: "fajar", nilai: 70, kehadiran: 75 }
// ];
// const terpercaya = calonAnggota.filter((anggota) => {
//    return anggota.nilai >= 80 && anggota.kehadiran >= 80
// });

// anggotaLolos.forEach((anggota) => {
//       console.log(anggota.nama)
// });

// console.log("");
// console.log("jumlah anggota yang lolos: " + terpercaya.length);


const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "Baik"},
    { kode: "PC002", nama: "Komputer 2", kondisi: "Rusak"},
    { kode: "PC003", nama: "Komputer 3", kondisi: "Baik"},
    { kode: "PC004", nama: "Komputer 4", kondisi: "Perbaikan"},
    { kode: "PC005", nama: "Komputer 5", kondisi: "Baik"},
];

const hasilcari = inventaris.find((item) => {
    return item.kode === "PC003"
});

    if (hasilcari) {
        console.log ("nama perangkat: " + hasilcari.nama );
        console.log ("kondisi: " + hasilcari.kondisi);

    } else {
        console.log ("perangkat tidak ditemukan")
}

