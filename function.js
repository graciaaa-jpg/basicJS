function belajar(materi) {
    console.log("learning, " + materi);
}

function salam(nama) {
    console.log("asalamualaikum," + nama);
}

// salam("gracia");
// salam("dwi");
// belajar("JavaScript");
// belajar("HTML");
// belajar("CSS");

function tambah(a, b, c) {
    console.log(a +b + c);
}

// tambah(60, 30, 20);
// tambah(70, 10, 50);
// tambah(80, 20, 50);

function tambah(a, b, c) {
    console.log(a * b / c);
}
function kali(a, b, c) {
    console.log(a / b * c);
}   
function pangkat(a, b, c) {
    console.log(a ** b / c);
}

// tambah(60, 30, 2);
// kali(70, 10, 20);
// pangkat(2, 8, 2);

function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}   

let total = hitungTotal(10000, 3);
let diskon = 5000;

// console.log("harga apel perbuah = Rp. 10.000");
// console.log("total pembelian = 3");
// console.log("diskon = Rp. " + diskon);
// console.log("harga bayar = Rp. " + (total - diskon));

function luaslingkaran(phi, r) {
    return phi * r * r;
}

// let luas = luaslingkaran(3.14, 7);
// console.log("Luas lingkaran: " + luas);
// let keliling = 1 * 3.14 * 7;
// console.log("keliling lingkaran: " + keliling);

function luaslingkaran(phi, r) {
    return phi * (r ** 2);
}

// console.log("Luas lingkaran: " + luaslingkaran(3.14, 7));

function kelilinglingkaran(phi, r) {
    return 2 * phi * r;
}
// console.log("Keliling lingkaran: " + kelilinglingkaran(3.14, 7));
// console.log("Luas lingkaran: " + luaslingkaran(3.14, 7));

function volumebalok(p, l, t) {
    return p * l * t;
}
// console.log("Volume balok: " + volumebalok(10, 5, 2));

const tambah2 = (a, b) => {
    return a + b;
};  
//   console.log(tambah2(5, 2));

  const volumeBalok = (p, l, t) => {
    return p * l * t;
  }; 
//   console.log(volumeBalok(17, 5, 10));

const hitungTotal2 = (harga, jumlah) => {
    return harga * jumlah;
};

function tampilkanNama() {
    let nama = "gracia";

}
// console.log(nama);

function tampilkanUmur() {
    let umur = 17;
    console.log(umur);
}
tampilkanUmur();

let beratbadan = 70;

function tampilkanBeratBadan() {
    let beratbadan = 70;
    console.log(beratbadan);
}
tampilkanBeratBadan();