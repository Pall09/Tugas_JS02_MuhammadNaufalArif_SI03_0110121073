function imagePicker() {
    let dropDown = document.getElementById('dropDown');
    let gambar = document.getElementById('gambar');

    if (dropDown.value === 'panda') {
        gambar.innerHTML = '<img src="img/panda.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Panda');
    } else if (dropDown.value === 'kelinci') {
        gambar.innerHTML = '<img src="img/kelinci.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Kelinci');
    } else if (dropDown.value === 'kucing') {
        gambar.innerHTML = '<img src="img/kucing.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Kucing');
    } else if (dropDown.value === 'gajah') {
        gambar.innerHTML = '<img src="img/gajah.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Gajah');
    } else if (dropDown.value === 'burung') {
        gambar.innerHTML = '<img src="img/burung.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Burung');
    } else if (dropDown.value === 'jerapah') {
        gambar.innerHTML = '<img src="img/jerapah.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Jerapah');
    } else if (dropDown.value === 'monyet') {
        gambar.innerHTML = '<img src="img/monyet.jpg" alt="gambar" id="poto">';
        alert('Ini gambar Monyet');
    } 
}