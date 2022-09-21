let btnCotiza = document.getElementById("btnCotiza");
let btnImprime = document.getElementById("btnImprime");
let btnEnviar = document.getElementById("btnEnviar");


btnCotiza.addEventListener("click", function (e){ //"hacer ... cuando ..."
    e.preventDefault();
    let hours = 250; // Horas a laborar
    let rate = 50; // Valor de costo por hora 
    let iva;
    let extras = document.getElementById("inputExtras");
    let fixedCost = 2500;
    let changes = 10;
    let correo = document.getElementById("inputEmail").value;
    let name = document.getElementById("inputName").value;

    let cardText = document.getElementById("cardText");
    let cardCost = document.getElementById("cardCost");
    

    cardText.innerHTML = `<strong>Name:</strong> ${name}</br> <strong>Email:</strong> ${correo}</br>
    </br> </br> La presente cotización esta dirijida a ${name}, asociado a la dirección de correo 
    electrónico ${correo}. </br> La cotización cubre los servicios seleccionados, ésta incluiye 
    I.V.A. así como un porcentaje del 10% como taza para posibles cambios durante el proceso.
    </br></br><strong>Los servicios requeridos son:</strong></br></br> ${getRequirements(extras)} </br></br>`;
    cardCost.innerHTML = "<strong>*Total: $ " +quote(hours, rate, iva, extras, changes, fixedCost).toFixed(2); // toFixed(#) Número de decimales
    
    cardCostFooter.innerHTML +=`</br></br></br>*El total de la cotización es un aproximado del costo total, por lo que, para conocer el presupuesto exacto
    será necesario contactar por algún medio de los establecidos en el sitio web </br></br></br></br>`;

    cardBase.innerHTML += `Fecha y hora de la cotización: ${Date()}`;




// Validación campo Nombre ____________________________________________________________________________________
inputName.classList.remove("is-invalid");
inputName.classList.add("is-valid");

if ((inputName.value.length >= 3) && (inputName.value.length <= 20)) {
    cont++;

    for (let i = 0; i < inputName.value.length; i++) {
        if (
            ((inputName.value.toUpperCase().charCodeAt(i) < 65)
                || (inputName.value.toUpperCase().charCodeAt(i) > 90))

            && (inputName.value.toUpperCase().charCodeAt(i) != 32)
            && (inputName.value.toUpperCase().charCodeAt(i) != 193)
            && (inputName.value.toUpperCase().charCodeAt(i) != 201)
            && (inputName.value.toUpperCase().charCodeAt(i) != 205)
            && (inputName.value.toUpperCase().charCodeAt(i) != 211)
            && (inputName.value.toUpperCase().charCodeAt(i) != 218)
            && (inputName.value.toUpperCase().charCodeAt(i) != 209)
        ) {
            inputName.classList.remove("is-valid");
            inputName.classList.add("is-invalid");
            break;
        };

    }
} else {
    campoName.classList.remove("is-valid");
    campoName.classList.add("is-invalid");
}

// Cierre Validación campo Nombre ____________________________________________________________________________________


// Validación campo Email ____________________________________________________________________________________________

function isEmailValid(email) {
    let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!regex.exec(email);
}

if (isEmailValid(inputEmail.value)) {

    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
} else {
    inputEmail.classList.remove("is-valid");
    inputEmail.classList.add("is-invalid");
}

// Cierre Validación campo Email ____________________________________________________________________________________________

});





// Do while
function quote(h,r,vat,ex,p,fc){
    p /= 100; //p = p/100 Change management
    let result = (h*r) * (1+p);   
    let i= 0;
    do  { //Hacer...
            console.log(ex.options[i].selected); 
            if (ex.options[i].selected){        
            result += parseFloat(ex.options[i].value);
            }// Cierra la acción a cumplir para if
            i++; // Incremento / Decremento
        }// Cierra do
    while ( i < ex.options.length); //Mientras que se cumpla esta condición

        result +=fc; //Fixed costs
    if (vat){ //if vat (Aplicado para booleano)
        result *= 1.16;
    }
    return result;
};  //función cotiza


btnImprime.addEventListener("click", function (e){ 
    e.preventDefault();
    window.print(); 
});

const getRequirements = (ex) => 
{
    let str = `<ul class="list-group col-4">`;
    for (let i = 0; i < ex.options.length; i++) { 
        console.log(ex.options[i].selected); 
        if (ex.options[i].selected){ 
            str += `<li class="list-group-item list-group-item-action"> ${ex.options[i].text}</li>`;
                                                /* list-group-item-action sombrea al pasar puntero */
        }   
    }
    str += `</ul>`
    return str;
};

btnEnviar.addEventListener("click", function (e){ //"hacer ... cuando ..."
    e.preventDefault();

    let nom = document.getElementById("userEmail").value;
    let mail = document.getElementById("userName").value;

// Validación campo Nombre ____________________________________________________________________________________
nom.classList.remove("is-invalid");
nom.classList.add("is-valid");

if ((nom.value.length >= 3) && (nom.value.length <= 20)) {
    cont++;

    for (let i = 0; i < nom.value.length; i++) {
        if (
            ((nom.value.toUpperCase().charCodeAt(i) < 65)
                || (nom.value.toUpperCase().charCodeAt(i) > 90))

            && (nom.value.toUpperCase().charCodeAt(i) != 32)
            && (nom.value.toUpperCase().charCodeAt(i) != 193)
            && (nom.value.toUpperCase().charCodeAt(i) != 201)
            && (nom.value.toUpperCase().charCodeAt(i) != 205)
            && (nom.value.toUpperCase().charCodeAt(i) != 211)
            && (nom.value.toUpperCase().charCodeAt(i) != 218)
            && (nom.value.toUpperCase().charCodeAt(i) != 209)
        ) {
            nom.classList.remove("is-valid");
            nom.classList.add("is-invalid");
            break;
        };

    }
} else {
    nom.classList.remove("is-valid");
    nom.classList.add("is-invalid");
}

// Cierre Validación campo Nombre ____________________________________________________________________________________


// Validación campo Email ____________________________________________________________________________________________

function isEmailValid(email) {
    let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!regex.exec(email);
}

if (isEmailValid(mail.value)) {

    mail.classList.remove("is-invalid");
    mail.classList.add("is-valid");
} else {
    mail.classList.remove("is-valid");
    mail.classList.add("is-invalid");
}

// Cierre Validación campo Email ____________________________________________________________________________________________
});