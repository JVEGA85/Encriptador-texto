const btnEncriptar = document.querySelector(".btnencriptar");
const txtencriptar = document.querySelector(".text-area");
const aviso = document.querySelector(".Alerta");
const respuesta = document.querySelector(".mensaje");
const contenido = document.querySelector(".Contenedor");
const copiar = document.querySelector(".copiar");
const btnDesencriptar = document.querySelector(".btndesencriptar");


btnEncriptar.addEventListener( "click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "El campo no debe estar vacío";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "No debe incluir acentos nI caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "El texto debe ser en minúsculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/gi, "enter")
        texto = texto.replace(/i/gi, "imes")
        texto = texto.replace(/a/gi, "ai")
        texto = texto.replace(/o/gi, "ober")
        texto = texto.replace(/u/gi, "ufat")

        respuesta.innerHTML = texto;
        copiar.style.visibility = "inherit";
        contenido.remove();
    }
});

btnDesencriptar.addEventListener( "click", e=>{
    e.preventDefault();
    let texto = txtencriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == ""){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "El campo no debe estar vacío";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "No debe incluir acentos nI caracteres especiales";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.color =  "#fa0606";
        aviso.textContent = "El texto debe ser en minúsculas";
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/ufat/g, "u");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/ai/g, "a");

        respuesta.innerHTML = texto;
        copiar.style.visibility = "inherit";
        contenido.remove();
    }
});

copiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand( "copy" );
})    

