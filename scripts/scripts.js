function accion(){
    console.log('El Boton esta Funcionando')
    var ancla = document.getElementsByClassName('link-aces')

    for ( var i=0; i < ancla.length;i++){
        ancla[i].classList.toggle('desaparece')
    }
}