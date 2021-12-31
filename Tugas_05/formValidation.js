function validationForm() {
    let namaPelanggan = document.getElementById('namaPelanggan');
    let mail = document.getElementById('email');
    let jamBerangkat = document.getElementById('jamKeberangkatan');
    let tujuan = document.getElementById('tujuanKeberangkatan');
    let jumlahTiket = document.getElementById('jumlahTiket');

    let re = /^[a-z0-9]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+[.com]*$/;


    
    if (re.test(mail.value)) {

        document.getElementById('hasilNama').innerHTML = "Nama Pelanggan : " + namaPelanggan.value ;
        document.getElementById('hasilEmail').innerHTML = "Email : " + mail.value ;
        document.getElementById('hasilJamBerangkat').innerHTML = "Jam Berangkat : " + jamBerangkat.value ;
        document.getElementById('hasilTujuan').innerHTML = "Kota Tujuan : " + tujuan.value ;
        document.getElementById('hasilTiket').innerHTML = "Jumlah Tiket : " + jumlahTiket.value ;
        
        return true
    } else {
        alert('salah');
        return false
    }
}