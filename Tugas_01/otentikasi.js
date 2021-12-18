function loginOtentikasi() {
    const userName = "ahmad2017";
    const passwordnya = "integrity";
    let usernameId = document.getElementById('username');
    let passWord = document.getElementById('password');

    if ( usernameId.value === userName && passWord.value === passwordnya) {
        window.location.assign('loginSukses.html');
        alert('Login Sukses!');
    }else {
        alert('Login Gagal!');
    }
}