// console.log ("nama saya gracia");
// console.log ("nama saya gracia");
// console.log ("nama saya gracia");
// console.log ("nama saya gracia");
// console.log ("nama saya gracia");

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }


// for (let i =11; i <= 20; i+= 2) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i + " x " + 1 + " = " + (i*i));
// }

// let total = 0;
// for (let i = 10; i <= 20; i++) {
//     total = total + i;
//     console.log(`i=${i} -> total =${total}`);
// }

// let total = 0;
// for (let i = 10; i <= 20; i+= 2) {
//     total = total + i;
//     console.log(`i=${i} -> total =${total}`);
// }

// let nama = ["andi", "cinta", "doni", "syifa", "rayaa",
//      "cece", "gracia", "dwi", "putri", "sari"];
// for (let i = 0; i < nama.length; i++) {
//     console.log('${i+1}.  ${nama[i]}');]);
// }

// let nilai = 70;
// for (let i = 0; i < 1; i++) {
//     if (nilai[i] >= 90) {
//         console.log("nilai nya" +  " = " + nilai[i] + " ,sangat bagus");
//     } else if (nilai[i] >= 80) {
//         console.log("nilai nya" +  " = " + nilai[i] + " ,bagus");
//     } else {
//         console.log("nilai nya" +  " = " + nilai[i] + " ,cukup");
    
// }


// let nama = ["andi", "cinta", "doni", "syifa", "rayaa",];
// let nilai = [90, 80, 70, 92, 85];
// for (let i = 0; i < nama.length; i++) {
//     if (nilai[i] >= 85) {
//         console.log(nama[i] + " - " + nilai[i] + " - lulus");
//     } else {
//         console.log(nama[i] + " - " + nilai[i] + " - tidak lulus");
//     }
// }

let angka = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0 && angka[i] >= 10)
    {
        console.log(angka[i] + " - genap - >= 10");
    } else {
        console.log(angka[i] + " - ganjil - <= 10");
    }

}
