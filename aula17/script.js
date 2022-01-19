function carregar(){
    let inii = window.document.getElementById('inic')
    let fimm = window.document.getElementById('fimm')
    let pass = window.document.getElementById('pass')
    let lugar = window.document.getElementById('livre')
    let ini = Number(inii.value)
    let fim = Number(fimm.value)
    let pas = Number(pass.value) 

    for (let c = ini; c <= fim; c+=pas){
        lugar.innerHTML += ` ${c} `
    }
    

    

}