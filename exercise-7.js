// 1. Menyusun Barisan Bintang
var rows1 = 5;
for (var i = 0; i < rows1; i++) {
    console.log('*');
}



// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5;

for (var i = 0; i < rows2; i++) {
    var bintang = '';
    for (var j = 0; j < rows2; j++) {
        bintang = bintang + '*';
    }
    console.log(bintang);
}



// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5;
for (var i = 1; i <= rows3; i++) {
    var bintang = '';
    for (var j = 0; j < i; j++) {
        bintang = bintang + '*';
    }
    console.log(bintang);
}