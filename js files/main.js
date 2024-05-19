$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate( {
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            senha: {
                required: true,
                minlength: 8,
            },
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: "Por favor, insira seu e-mail",
            telefone: "Por favor, insira telefone",
            cpf: "Por favor, insira seu CPF",
            endereco: "Por favor, insira seu endereço",
            cep: "Por favor, insira seu CEP",
            senha: "Por favor, escolha uma senha",
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})