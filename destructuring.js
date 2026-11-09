// const siswa = {
//         nama: "reihan",
//         umur: 17,
//         kelas: 7,
//         hobby: "catur"
// };


// console.log(siswa);
// delete siswa.hobby;

// const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa, jurusan} = siswa;

// console.log(namaSiswa);
// console.log(umurSiswa);
// console.log(kelasSiswa);
// console.log(jurusan);

// const warna = ["kuning", "biru", "merah"];

// const [warna1, warna2, warna3] = warna;
// console.log(warna1);

// const merkLaptop = ["asus", "lenovo", "acer", "hp", "apple"];

// const [merk1, merk2, merk3, merk4, merk5] = merkLaptop;
//         console.log(merkLaptop);

// const siswaBaru = [
//         { nama:"andi", nilai: 80, umur: 17, kelas: 10 },
//         { nama:"budi", nilai: 65, umur: 16, kelas: 9 },
//         { nama:"citra", nilai: 90, umur: 18, kelas: 11 },
//         { nama:"dina", nilai: 70, umur: 17, kelas: 10 },
//         { nama:"eko", nilai: 85, umur: 19, kelas: 12 }
// ];
// const nilaiSaja = siswaBaru.map(({nilai}) => nilai);
// console.log(nilaiSaja);

// const daftarNama = siswaBaru.map(({nama}) => nama);
// console.log(daftarNama);

const daftarHarga = [
        { nama: "asus", harga: 14000000, kondisi: "baru" },
        { nama: "lenovo", harga: 16000000, kondisi: "bekas" },
        { nama: "msi", harga: 22000000, kondisi: "baru" },
];

const dartarNamaLaptop = daftarHarga.map(({nama, harga}) => {
        return { nama, harga };
});     
console.log(dartarNamaLaptop);

