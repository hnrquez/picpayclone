
function formatarCPF() {
    const cpfInput = document.getElementById('CPF');
    let cpf = cpfInput.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Limita a 11 dígitos (9 + 2 para o traço)
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11); // Limita a 11 dígitos
    }

    // Formata o CPF
    if (cpf.length <= 3) {
        cpf = cpf.replace(/(\d{0,3})/, '$1');
    } else if (cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    } else if (cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    }

    cpfInput.value = cpf; // Atualiza o campo de entrada
}

function validarCPF() {
    const cpfInput = document.getElementById('CPF').value.replace(/\D/g, ''); // Remove formatação
    const errorMessage = document.getElementById('error-message');

    // Valida o CPF
    if (cpfInput.length !== 11 || !validarDigitosCPF(cpfInput)) {
        errorMessage.textContent = "CPF inválido. Tente novamente."; // Mensagem de erro
        errorMessage.style.display = "block"; // Exibe a mensagem de erro
    } else {
        errorMessage.style.display = "none"; // Esconde a mensagem de erro
        // Redireciona para outra página após a validação bem-sucedida
        window.location.href = "home.html"; // Substitua "outra-pagina.html" pelo URL da sua página de destino
    }
}

function validarDigitosCPF(cpf) {
    // Aqui você pode adicionar lógica para validar os dígitos do CPF
    // Esta é uma validação básica e você pode implementar a validação real conforme necessário

    // Exemplo de validação: O CPF não pode ser uma sequência de números iguais
    const sequenciasInvalidas = [
        '14531634411', '82009295404', '43423124411', '33333333333',
        '44444444444', '55555555555', '66666666666', '77777777777',
        '88888888888', '99999999999'
    ];

    if (sequenciasInvalidas.includes(cpf)) {
        return false;
    }

    // Se você precisar de uma validação mais robusta, implemente aqui

    return true; // Retorna verdadeiro se o CPF passar nas validações
}