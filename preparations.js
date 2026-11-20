const barang = [
    {
        kode: "kb-001",
        nama: "keyboard mechanical",
        harga: 450000

    },
    {
        kode: "ms-002",
        nama: "mouse gaming",
        harga: 250000

    },
    {
        kode: "hs-003",
        nama: "headset",
        harga: 350000

    },
]; 

const jumlah = 7;
const harga = barang[1].harga;
const totalHarga = jumlah * harga;
let diskon = 0;
if (jumlah >= 5) {
    diskon = (totalHarga * 10) / 100;
} 
let totalBayar = totalHarga - diskon;

console.log("harga satuan  :", harga);
console.log("jumlah         :", jumlah);
console.log("total harga  :", totalHarga);
console.log("diskon        :", diskon);
console.log("total bayar  :", totalBayar);

const daftarSiswa = [
    {
        nama: "andi",
        kelas: "xi sija",
        nilai: 85,
        kehadiran: 90
    },
    {
        nama: "budi",
        kelas : "xi sija",
        nilai: 65,
        kehadiran : 85
    },
    {
        nama: "caca",
        kelas: "xi sija",
        nilai: 92,
        kehadiran: 95
    },
    {
        nama: "didi", 
        kelas: "xi sija",
        nilai: 70,
        kehadiran: 90
    }
];
const siswaLulus = daftarSiswa.filter((siswa) => {
    if (siswa.nilai >= 75 && siswa.kehadiran >= 80) {
        return lulus = true;
    }
    else {
        return tidakLulus = false;
    }   
});
console.log(siswaLulus);

const barangToko = [
    {
        nama: "keyboard",
        stock: 10
    },
    {
        nama: "mouse",
        stock: 3
    },
    {
        nama: "headset",
        stock: 0
    },
    {
        nama: "webcam",
        stock: 7
    },
    {
        nama: "USB hub",
        stock: 2
    }
];

for (let i = 0; i < barangToko.length; i++) {
    if (barangToko[i].stock === 0) {
        console.log(` ${barangToko[i].nama} - stok habis`);
    }
    else if (barangToko[i].stock <= 5) {
        console.log(` ${barangToko[i].nama} - stok sedikit`);
    }
    else {
        console.log(` ${barangToko[i].nama} - stok tersedia`);
    }

}

for (let i = 2; i < 7; i++) 
    console.log(i);