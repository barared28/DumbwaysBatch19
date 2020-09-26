let jumlah = prompt("berapa ukuran panjang dan lebar yang di inginkan :  ");
bintang(jumlah);

function bintang(jumlah) {
    /// variable
    let bintang = '';
    let tengah = jumlah / 2;
    tengah = tengah.toFixed();
    let melebarKanan = null;
    let melebarKiri = tengah;
    let kembali = false;
    ///////

    for (let i = 1; i <= jumlah; i++) {

        if ((jumlah % 2) == 0) { // buat angka yang genap
            if (melebarKanan == null) {
                melebarKanan = Number(melebarKiri) + 1;
            }

            //// menambahkan bintang
            for (let k = 1; k <= jumlah; k++) {
                if (k == melebarKiri) {
                    bintang += "*";
                }
                if (k == melebarKanan) {
                    bintang += "*";
                }
                if (k != melebarKiri && k != melebarKanan) {
                    bintang += " ";
                }
            }

            // mengecek dan membentuk pola 
            if (kembali == true) {
                melebarKiri += 1;
                melebarKanan -= 1;
            }
            else if (i < tengah) {
                melebarKanan = Number(tengah) + i + 1;
                melebarKiri = tengah - i;
            }
            else if (i >= tengah) {
                kembali = true

            }

        }
        else { // buat yang angka ganjil

            //// menambahkan bintang
            for (let k = 1; k <= jumlah; k++) {
                if (k == melebarKiri) {
                    bintang += "*";
                }
                if (k == melebarKanan) {
                    bintang += "*";
                }
                if (k != melebarKiri && k != melebarKanan) {
                    bintang += " ";
                }
            }

            // mengecek dan membentuk pola 
            if (i >= tengah) {
                melebarKanan -= 1;
                melebarKiri += 1;
                if (melebarKiri >= tengah) {
                    melebarKiri = null;
                }
            }
            else {
                melebarKanan = Number(tengah) + i;
                melebarKiri = tengah - i;
            }
        }

        /// menampilkan bintang
        console.log(bintang);
        /// mereset bintang
        bintang = '';
    }
}

