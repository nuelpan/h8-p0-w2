// 1. Melakukan Looping Menggunakan While

var counter = 2;
console.log('LOOPING PERTAMA');
while (counter <= 20) {
    console.log(counter + ' - I love coding');
    counter += 2;
}

var counter = 20;
console.log('LOOPING KEDUA');
while (counter >= 2) {
    console.log(counter + ' - I will become fullstack developer');
    counter -= 2;
}



// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for (var counter = 1; counter <= 20; counter++) {
    console.log(counter + ' - I love coding');
}
console.log('LOOPING KEDUA')
for (var counter = 20; counter >= 1; counter--) {
    console.log(counter + ' - I will become fullstack developer');
}



// 3. Angka Ganjil dan Genap

for (var counter = 1; counter <= 100; counter++) {
    if (counter % 2 === 0) {
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

for (var counter = 1; counter <= 100; counter = counter + 2) {
    if (counter % 3 === 0) {
        console.log(counter + ' KELIPATAN 3')
    } else {
        console.log("");
    }
}
for (var counter = 1; counter <= 100; counter = counter + 5) {
    if (counter % 6 === 0) {
        console.log(counter + ' KELIPATAN 6')
    } else {
        console.log("");
    }
}
for (var counter = 1; counter <= 100; counter = counter + 9) {
    if (counter % 10 === 0) {
        console.log(counter + ' KELIPATAN 10')
    } else {
        console.log("");
    }
}