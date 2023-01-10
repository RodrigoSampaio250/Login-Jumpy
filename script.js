function finalizar(){
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value
    const cpf = document.getElementById('cpf').value
    const senha = document.getElementById('senha').value

    var cont = 0;

    let item1 = document.getElementById('item1')
    let item2 = document.getElementById('item2')
    let item3 = document.getElementById('item3')
    let item4 = document.getElementById('item4')
    let item5 = document.getElementById('item5')
    let item6 = document.getElementById('item6')

    if (nome === null){
        item1.innerHTML = "*Campo Obrigatório*";
        cont++;
    }
    if (email === null){
        item2.innerHTML = "*Campo Obrigatório*";
        cont++;
    }
    if (telefone === null){
        item3.innerHTML = "*Campo Obrigatório*";
        cont++;
    }
    if (cpf === null){
        item4.innerHTML = "*Campo Obrigatório*";
        cont++;
    }
    if (senha === null){
        item5.innerHTML = "*Campo Obrigatório*";
        cont++;
    }

    if (cont > 0){
        item6.innerHTML = "Campos obrigatórios não registrados.";
    }
    else{
        item6.style="color: green;"
        item6.innerHTML = "Sucesso!";
        console.log(nome)
        console.log(email)
        console.log(telefone)
        console.log(cpf)
        console.log(senha)
    }
}