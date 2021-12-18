function chatBox() {
    let tulisPesan = document.getElementById('pesanChat').value;
    let isiChat = document.getElementById('isiChat');

    isiChat.innerHTML += `${tulisPesan}</br>`;

}