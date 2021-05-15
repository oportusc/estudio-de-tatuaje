$(document).ready(function () {
    $("#contact-formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            comment: {
                required: true,
            }
        }, messages: {
            nombre: {
                minlength: "El nombre debe contener al menos 3 caracteres"
            },
            apellido: {
                minlength: "El nombre debe contener al menos 3 caracteres"
            },
            email: {
                email: "Debe tener sintaxis de email"

            },
            comment: {
                required: "Debes llenar este campo",
            }
        }
    });
});

// $(document).ready(function () {

//     // GESTIONAMOS EL EVENTO DEL BOTON
//     $("#submit").click(function (event) {

//         event.preventDefault();

//         var nombre = $("#nombre").val();
//         var apellido = $("#apellido").val();
//         var email = $("#email").val();
//         var comment = $("#comment").val();


//         alert("Ingreso: " + nombre + apellido + email + comment);

//         // $("ol").append("<li>  " + producto + "   </li>");

//     });
//     //   cierre del click de submit
// });
  //   cierre del ready






// const form = document.getElementById("submit");

// form.addEventListener("click", function (event) {
//     // ---> Esto es para que no se caiga la pagina al dar en "Enviar"
//     event.preventDefault();




    // var nombre = $('#nombre').val();
    // var apellido = $('#apellido').val();
    // var email = $('#email').val();
    // var comment = $('#comment').val();

    //   Si los campos son diferentes de "Vacío"
    // if (nombre == True && apellido == True && email == True && comment == True) {
    //     alert("Formulario enviado con éxito");
    // } else {
    //     alert("Por favor rellene todos los campos.");
    // }
// })