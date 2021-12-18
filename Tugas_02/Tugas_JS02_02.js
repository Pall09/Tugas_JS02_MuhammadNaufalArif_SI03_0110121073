function konversiMataUang() {
    const dolarUS = 9915;
    const dolarSingapore = 13472;
    const ringgitMalaysia = 874;
    const yenJapan = 120;
    const euro = 15888;
    const riyalSaudiArabia = 3592;

    let masukanBilangan = document.getElementById('inputNumber');
    let mataUang = document.getElementById('pilihMataUang');
    let konversiHasil = document.getElementById('hasil');

    if (mataUang.value === 'dolarAmrik'){
        hasilDolarUS = masukanBilangan.value * dolarUS;
        konversiHasil.innerHTML = hasilDolarUS;
    } else if (mataUang.value === 'dolarSG') {
        hasilDolarSingapure = masukanBilangan.value * dolarSingapore;
        konversiHasil.innerHTML = hasilDolarSingapure;
    } else if (mataUang.value === 'ringgit') {
        hasilRinggit = masukanBilangan.value * ringgitMalaysia;
        konversiHasil.innerHTML = hasilRinggit;
    } else if (mataUang.value === 'yenJepang') {
        hasilYenJepang = masukanBilangan.value * yenJapan;
        konversiHasil.innerHTML = hasilYenJepang;
    } else if (mataUang.value === 'valasEuro') {
        hasilEuro = masukanBilangan.value * euro;
        konversiHasil.innerHTML = hasilEuro;
    } else if (mataUang.value === 'rialArab') {
        hasilRiyal = masukanBilangan.value * riyalSaudiArabia;
        konversiHasil.innerHTML = hasilRiyal;
    }
}