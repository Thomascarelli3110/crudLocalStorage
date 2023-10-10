export function ValidateForm() { //  ValidateForm VALIDA EL TIPO DE DATO QUE SE INGRESE
    let email = document.getElementById("imputEmail").value // LO QUE HACEMOS ACA ES TRAER EL VALOR DEL IMPUTEMAIL
    let name = document.getElementById("imputName").value // LO QUE HACEMOS ACA ES TRAER EL VALOR DEL IMPUTNAME
    let phone = document.getElementById("imputPhone").value // LO QUE HACEMOS ACA ES TRAER EL VALOR DEL IMPUTEPHONE

    // ESTE CONDICIONAL LO QUE HACE QUE SI EN LA VARIBLE EMAIL NO HAY NADA QUE TIRE UNA ALERTA DICIENDO QUE EL CAMPO CORREO ES REQUERIDO Y RETORNA UN FALSE Y SI NO ESTA INCLUIDO EL @ EN EL CORREO QUE TIRE UNA ALERTA DICIENDO QUE EL CORREO NO ES VALIDO
    if (email == "") {
        alert("El campo Correo es requerido")
        return false;
    } else if (!email.includes("@")) {
        alert("El correo no es valido");
        return false
    }

    // ESTE CONDICIONAL LO QUE HACE QUE SI EN LA VARIBLE NAME NO HAY NADA QUE TIRE UNA ALERTA DICIENDO QUE EL CAMPO NOMBRE ES REQUERIDO Y RETORNA UN FALSE Y SI EN EL NOMBRE HAY ALGUN NUMERO QUE TIRE UNA ALERTA DICIENDO QUE NO SE ADMITEN NUMEROS EN ESTE CAMPO
    if (name == "") {
        alert("El campo Nombre es requerido")
        return false;
    } else if (name.include(Number)) {
        alert("No se admiten numeros dentros de este campo")
    }

    // ESTE CONDICIONAL LO QUE HACE QUE SI EN LA VARIBLE PHONE NO HAY NADA QUE TIRE UNA ALERTA DICIENDO QUE EL CAMPO TELEFONO ES REQUERIDO 
    if (phone == "") {
        alert("El campo Telefono es requerida")
        return false;
    }

    return true;
}

