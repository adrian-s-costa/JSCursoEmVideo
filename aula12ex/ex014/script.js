function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12 ){
       foto.src = 'manha.png'
        grats.innerHTML = 'Bom dia!'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18 ){
        foto.src = 'tarde.png'
        grats.innerHTML = 'Boa tarde!'
        document.body.style.background = '#b9846f'
    }else{
        foto.src = 'noite.png'
        grats.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }
}
