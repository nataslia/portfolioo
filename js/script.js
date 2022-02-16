function consultarCepAjax(){
    // pegando o valor do campo cep
    var cep = $('#cep').val();
    // chamando a api passando o cep
    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function(data, status){
      var dadosCep = data
  
      $('#localidade').val(dadosCep.localidade)
      $('#bairro').val(dadosCep.bairro)
      $('#uf').val(dadosCep.uf)
      $('#logradouro').val(dadosCep.logradouro)
      $('#ddd').val(dadosCep.ddd)
    });
  }