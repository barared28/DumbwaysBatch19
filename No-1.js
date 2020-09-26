function convertBinary(text) {
    let binary = [];
    for (let i = 0; i < text.length; i++) {
        let bin = "0" + text[i].charCodeAt().toString(2) + " ";
        binary += bin;
    }
    console.log(binary);
}

let text = prompt("Masukkan Tetx yang mau di Convert menjadi binary : ");
convertBinary(text);

// cara kerja 
// 1 . mengambil text yang akan di convert lewat prompt dan menyimpannya ke variable , lalu langsung di eksekusi oleh function 
// 2 . proses convert nya yaitu mengambil setiap char di text dan mencari charCode nya dan lalu convert ke string(2) / binary
// 3 . untuk membuatnya menjadi binary harus ditambahkan nilai 0 di depannya 