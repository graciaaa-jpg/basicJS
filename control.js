// let nilai = 80;
// if (nilai >= 75) {
//     //console.log("Lulus");
// } else {
//     //console.log("Remidi");
// }

// let umur = 14;
// if (umur >= 17) {
//    // console.log("Boleh membuat KTP");
// } else {
//    // console.log("Belum boleh membuat KTP");
// }

// let berat_kayu = 501;
// if (berat_kayu >= 500) {
//     console.log("overweight ", berat_kayu, "kg");
// } 
// else if (berat_kayu <= 400) {
//     console.log("berat kayunya", berat_kayu, "kg");
// }
//  else {
//     console.log("ringan kayunya ", berat_kayu, "kg");
//  }

// let menu = "telur asin";
// if (menu == "chiken katsu") {
//     console.log("kalian makan");
// } 
// else if (menu == "telur asin") {
//     console.log("kalian cicipi");
// }
// else {
//     console.log("tidak makan");
// }


// let alatTulis = "spidol";
// if (alatTulis == "bolpoint") {
//     console.log("alat tulisnya", alatTulis + " , ciaa menulis");
// }
// else if (alatTulis == "pensil") {
//     console.log("alat tulisnya", alatTulis + " , ciaa menulis");
// }
// else if (alatTulis == "crayon") {
//     console.log("alat tulisnya", alatTulis + " , ciaa menggambar");
// }
// else {
//     console.log("alat tulisnya", alatTulis + " , ciaa tidak menulis dan menggambar");
// }

// let nilai =81;
// console.log("nilai kamu", nilai);
// if (nilai >= 90){
//     console.log("A");
// } else if (nilai >= 80) {
//     console.log("B");
// } else {
//     console.log("C");
// }

let punyaTiket = true;
let punyaUndangan = true;
if (punyaTiket && punyaUndangan) {
    console.log("tamu vip");
} else if (punyaTiket || punyaUndangan) {
    console.log("tamu biasa");
    
} else {
    console.log("tidak boleh masuk");
}