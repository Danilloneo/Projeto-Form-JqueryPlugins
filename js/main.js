$(document).ready(function(){

    $('#nome');
    $('email');
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            endCompleto: {
                required: true,
            },
            cep: {
                required: true,
            },
            cpf: {
                required: true,
            }
        },
        messages: {
            nome: '<span>Este campo é obrigatório</span><br>',
            email: '<span>Este campo é obrigatório</span><br>',
            cpf: '<span>Este campo é obrigatório</span><br>',
            telefone:'<span>Este campo é obrigatório</span><br>',
            endCompleto:'<span>Este campo é obrigatório</span><br>',
            cep: '<span>Este campo é obrigatório</span><br>',
        },
    
        submitHandler: function(form) {
            console.log(form);
            alert('Bem vindo a Matrix!');
            submitHandler('submit');
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
                                }
        }

    })















})