document.addEventListener("DOMContentLoaded", () => {

    let total_compra = 0; 
    let lista_articulos = "";
    let articulo = "";
    const user_adimn = "admin";
    const user_pass = "ADM1234";
    let usuario = prompt("Ingrese su rol para validar que sea empleado");
    let pass = prompt("Ingrese su contraseña para entrar al sitio.");

    if ((usuario === user_adimn) && (pass === user_pass)) {
        console.log("El usuario " + user_adimn + " inició sesión correctamente");
    } else {
        let mensaje = "Has ingresado mal el/los siguientes datos: ";
        if (user_adimn != usuario) {
            mensaje += "\nUsuario"
        }
        if (user_pass != pass) {
            mensaje += "\nContraseña"
        }
        alert(mensaje); 
        let user_name = prompt ("Ingrese correctamente su usuario");
        let user_password = prompt ("Ingrese correctamente su contraseña");
        if ((user_password !== user_pass) && (user_name !== user_adimn)){
            alert("Contraseña erronea! Refresque el buscador para iniciar sesión nuevamente! Por favor, verifique sus datos.");
            return false;
        }
    } 



    do {
        articulo = solicitarCodigo();
        if (articulo != -1) {
            let descripcion = getDescripcionArticulo(articulo);
            if (descripcion == "") {
                alert("Artículo no encontrado");
            } else {
                let importe = getImporte(articulo);
                lista_articulos += descripcion;
                total_compra += importe;
            }
        }
    } while (articulo != "comprar" && articulo != -1);
    if (total_compra > 0) {
        document.write("Lista de articulos comprados : <br>" + lista_articulos + "<br>");
        document.write("El total de la compra es: $" + total_compra);
    } else {
        console.log("No se pudo hacer la compra!");
    }
});


function solicitarCodigo() {
    let articulo = prompt("Ingrese el codigo de la zapatilla. Escriba 'Comprar' para finalizar \n Código: 1 - Nike Dunk - $50000 \n Código 2 - Nike Dunk SB - $57000 \n Código 3 - Adidas Forum - $80000 \n Código 4 - Adidas BB - $69650 \n Código 5 - Adidas yzy - $80000 \n Código 6 - Jordan 4 - $69650 ");
    if (validarInput(articulo)) {
        return articulo;
    }
    return -1;
}


function validarInput(input) {
    if (input == "") {
        alert("Debe ingresar el dígito identificador!");
        return false;
    }
    if (!input || input.toLowerCase() == "comprar") {
        return false;
    }
    if (isNaN(parseInt(input))) {
        alert("Debe ingresar un número! No se permiten letras ni símbolos.");
        return false;
    }
    return true;
}


function getDescripcionArticulo(articulo) {
    let descripcion = "";
    switch (articulo) {
        case "1":
            descripcion = "Nike Dunk - $50000" + "<br>";
            break;
        case "2":
            descripcion = "Nike Dunk SB - $57000" + "<br>";
            break;
        case "3":
            descripcion = "Adidas Forum - $80000" + "<br>";
            break;
        case "4":
            descripcion = "Adidas BB - $69650" + "<br>";
            break;
        case "5":
            descripcion = "Adidas yzy - $80000" + "<br>";
            break;
        case "6":
            descripcion = "Jordan 4 - $69650" + "<br>";
            break;
    }
    return descripcion;
}


function getImporte(articulo) {
    let importe = -1;
    switch (articulo) {
        case "1":
            importe = 50000;
            break;
        case "2":
            importe = 57000;
            break;
        case "3":
            importe = 80000;
            break;
        case "4":
            importe = 69650;
            break;
        case "5":
            importe = 80000;
            break;
        case "6":
            importe = 69650;
            break;
    }
    return importe;
}




