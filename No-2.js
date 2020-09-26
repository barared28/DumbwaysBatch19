let a = new Date();
let b = new Date();
a.setHours(10,25,21,0);
b.setHours(12,0,0,0);

let c = (b - a) / 1000;
// mencari detik
let boost1 = 11 * 60;
// mencari detik 11 menit 
let boost2 = (11 + 10) * 60 ;
// mencari 10 menit kemudian


let jarakTempuh = 0;
let kecepatan = 6 ;
let pertama = false;
for (let i = 0 ; i < c; i++) {
  if (i >= boost2){
    jarakTempuh += kecepatan;
    kecepatan += 1;
    boost2 = boost2 + (10 * 60);
    // mencari 10 menit kemudian lagi
  }
  else if (i >= boost1) {
    jarakTempuh += kecepatan;
    if ( kecepatan < 7) {
      kecepatan += 1;
    }
  }
  else {
    jarakTempuh += kecepatan
  }
}

console.log('jadi jarak tempuh nya adalah ' + jarakTempuh + 'm atau '+ (jarakTempuh / 1000) + 'km');