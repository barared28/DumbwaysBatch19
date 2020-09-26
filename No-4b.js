/// dikarenakan tidak boleh menggunakan framework , jadi saya beramsumsi kalo 
/// menggunakan node.js juga tidak boleh (lagian saya juga belum bisa kalo di suruh pakek express js , hehehe) ,, 
// lalu saya mencoba menggunakan pure javascript
// saya akan menggunakan object arrays sebagai database (semoga dapat memberikan refrensi tentang pemahaman OOP saya)



// database default
let db = {
    products: [
        {
            id: 1,
            name: 'Bromton',
            importir_id: 1,
            photo: "https://cf.shopee.co.id/file/54ed134b9955f74b37586c1bad0eb568",
            qty: 5,
            price: 1200000

        },
        {
            id: 2,
            name: 'Wimcycle',
            importir_id: 1,
            photo: "https://foto.kontan.co.id/PCMHWyLfAKW9H9ZuR95K-IF94-U=/smart/2020/08/12/993224498p.jpg",
            qty: 2,
            price: 1800000

        },
        {
            id: 3,
            name: 'Polygon',
            importir_id: 2,
            photo: "https://imgx.gridoto.com/crop/0x0:0x0/700x500/photo/2020/06/22/3433389698.jpg",
            qty: 10,
            price: 2500000

        },
        {
            id: 4,
            name: 'Phonix',
            importir_id: 2,
            photo: "https://img-id.valueq.com/image/202001/10/5e1843c0b4816820900.png_q80w.jpg",
            qty: 1,
            price: 900000

        }
    ],
    importir: [
        {
            id: 1,
            name: "Sinar Jaya",
            address: "Jln. Pahlawan no.45",
            phone: 085536728912

        },
        {
            id: 2,
            name: "Merdeka Speed",
            address: "Jln. Merdeka no.19",
            phone: 089536728988

        }
    ]
}
/// data database yang di tambahkan manual lewat web akan hilang jika website di refresh

let coba = document.querySelector('#produk-list');
const buttonAddImpor = document.getElementById('sumbit-impor');
const buttonAddProduct = document.getElementById('sumbit-product');

// add product
buttonAddProduct.addEventListener('click', () => {
    let nama = document.getElementById("nama-product").value;
    let link = document.getElementById("link-product").value;
    let harga = document.getElementById("harga-product").value;
    let qty = document.getElementById("qty-product").value;
    let imporId = document.getElementById("imporId-product").value;

    db.products.push({
        id: (db.products.length + 1),
        name: nama,
        importir_id: imporId,
        photo: link,
        qty: qty,
        price: harga
    })
    refresh();
})
// add importir
buttonAddImpor.addEventListener('click', () => {
    let nama = document.getElementById("nama-impor").value;
    let alamat = document.getElementById("alamat-impor").value;
    let noHp = document.getElementById("noHp-impor").value;

    db.importir.push({
        id: db.importir.length + 1,
        name: nama,
        address: alamat,
        phone: noHp
    })
    refresh();
})


function template(product) {
    return '<div class="card" style="width: 18rem;"><img src="' + product.photo +
        '" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">' + product.name +
        '</p><p class="card-text">' + db.importir[product.importir_id - 1].name +
        '</p><p class="card-text">Rp.' + product.price +
        '</p> <p class="card-text">Stock : 2</p><a id="detail" class="card-link" data-toggle="modal"data-target="#Detail-Modal">Detail</a></div></div>'
}


let listImportir = document.getElementById("list-importir")
function refresh() {
    coba.innerHTML = '';
    listImportir.innerHTML = '';
    db.products.forEach(product => {
        coba.innerHTML += template(product)
    })
    db.importir.forEach(importir => {
        list(importir);
    })
}


function list(importir) {
    listImportir.innerHTML += '<p>' + importir.name + ' Id = ' + importir.id + '</p>'
}
refresh();

// detail

let detailButton = document.querySelectorAll("#detail");
detailButton.forEach(button => {
    button.addEventListener('click', event => {
        let data = event.target.offsetParent;
        data = data.childNodes[1].childNodes[0].textContent;
        db.products.forEach(product => {
            if (product.name == data) {
                data = product;
                console.log(data);
            }
        })

        let nama = document.getElementById("nama-detail");
        let link = document.getElementById("link-detail");
        let harga = document.getElementById("harga-detail");
        let qty = document.getElementById("qty-detail");
        let imporId = document.getElementById("imporId-detail");
        let namaImportir = document.getElementById("namaImportir-detail");
        let alamat = document.getElementById("alamat-detail");
        let noHp = document.getElementById("noHp-detail");

        nama.setAttribute('placeholder', data.name);
        link.setAttribute('placeholder', data.photo);
        harga.setAttribute('placeholder', data.price);
        qty.setAttribute('placeholder', data.qty);
        imporId.setAttribute('placeholder', data.importir_id);
        db.importir.forEach(importir => {
            if (importir.id == data.importir_id) {
                data = importir;
            }
        })
        namaImportir.setAttribute('placeholder', data.name);
        alamat.setAttribute('placeholder', data.address);
        noHp.setAttribute('placeholder', data.phone);

    })
})

// update

let updateButton = document.getElementById('sumbit-update');
updateButton.addEventListener(() => {
    let nama = document.getElementById("nama-detail").value;
    let link = document.getElementById("link-detail").value;
    let harga = document.getElementById("harga-detail").value;
    let qty = document.getElementById("qty-detail").value;
    let imporId = document.getElementById("imporId-detail").value;

    // maaf waktu tidak mencukupi
})