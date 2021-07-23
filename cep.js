function getCep(cep)
{
    let url = 'https://viacep.com.br/ws/'+ cep +'/json/unicode/';
    
    let request = new XMLHttpRequest();

    request.open('GET', url);
    
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200)
        {
            let objJsonCep = JSON.parse(request.responseText);
            console.log(objJsonCep);

            document.getElementById('endereco').value = objJsonCep.logradouro;
            document.getElementById('bairro').value = objJsonCep.bairro;
            document.getElementById('cidade').value = objJsonCep.localidade;
            document.getElementById('uf').value = objJsonCep.uf;

        }
    }
    

    request.send();
}