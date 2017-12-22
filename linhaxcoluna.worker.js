// Diz o que fazer quando outro thread enviar uma mensagem
addEventListener('message', function(e) {
    var dados = e.data;

	resultado = 0;

    for (var k = 0; k < dados.qtdlinhasB; k++) {
      resultado += dados.A[dados.i][k] * dados.B[k][dados.j];
    }

    postMessage({ resultado:resultado, i:dados.i, j:dados.j });
});
