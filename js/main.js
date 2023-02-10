function loading() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('photo')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora < 12) {
    img.src = 'img/morning.png'
    document.body.style.background = '#FCD34D'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'img/evening.png'
    document.body.style.background = '#FB923C'
} else {
   img.src = 'img/night.png'
   document.body.style.background = '#0F172A'
}
}