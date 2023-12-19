$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            mensagem: 'Escreva uma mensagem'
        },
        submitHandler: function (form) {
            console.log(form)
        },
    })

});