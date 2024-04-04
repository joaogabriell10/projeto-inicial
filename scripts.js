var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar (event){
    if(true){
        //alert("Você clicou no botão!!!" + " " + nome.value);

        // validação
      if(cep.value.lenght < 8){
       alert("Digite um CEP válido!");
      }



       const url = `https://viacep.com.br/ws/${cep.value}/json/`;

       fetch(url)
       .then(function (resposta){
              return resposta.json();
       })

       .then(function (dados){
              logradouro.value = dados.logradouro;
              bairro.value = dados.bairro;
              cidade.value = dados.localidade;
              complemento.value = dados.complemento;
              estado.value = dados.uf;
       })

       

       .catch(function(error){
              alert("Ação não realizada, verifique url: " + error.message);
       });


        saida.innerText = "Nome: " + nome.value +
            "\nEmail: " + email.value +
            "\nTelefone: " + telefone.value + 
            "\nCEP: " + cep.value + 
            "\nLogradouro: " + logradouro.value +
            "\nNúmero: " + numero.value +  
            "\nComplemento: " + complemento.value +
            "\nBairro: " + bairro.value +
            "\nCidade: " + cidade.value +
            "\nEstado: " + estado.value;    
    }
}