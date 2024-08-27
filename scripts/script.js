const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".boton-copiar");

copia.style.display = "none";

function validarTexto() {
    let textoEscrito = document.querySelector(".area-texto").value;
    let validador = textoEscrito.match(/^[a-z\s!?¿¡]*$/);

    if (!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
    }
    return true;
}

function botonEncriptar() {
    if (validarTexto()) { 
        const textoEncriptado = encriptar(textArea.value);
        mensaje.style.backgroundImage = "none";  
        mensaje.value = textoEncriptado;         
        textArea.value = "";                     
        copia.style.display = "block";           
    }
}

function encriptar(stringDesencriptado) {
    let guia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < guia.length; i++) {
        stringDesencriptado = stringDesencriptado.replaceAll(guia[i][0], guia[i][1]);
    }
    return stringDesencriptado;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.style.backgroundImage = "none"; 
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringEncriptado) {
    let guia = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < guia.length; i++) {
        stringEncriptado = stringEncriptado.replaceAll(guia[i][1], guia[i][0]);
    }
    return stringEncriptado;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
}
