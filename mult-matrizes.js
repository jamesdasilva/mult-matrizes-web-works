(function(){


	var m1 = [ 
	[ 1,  2,  3,  6,  9, 10], 
	[ 4,  5,  6,  1, 34,  0], 
	[ 7,  8,  9,  3, 16, 86],
	[10,  2,  4,  7, 16, 86],
	[17, 18,  9, 78, 16, 86],
	[ 0, 83, 29, 70, 52,  6] ];

	var m2 = [ 
	[ 1, 20,  0], 
	[10, 14, 70], 
	[30, 19, 43],
	[34, 58,  1],
	[91, 20, 13],
	[23,  3, 11] ];

	var m3 = [ 
	[2, 3, 4], 
	[3, 4, 5], 
	[4, 5, 6] ];

	var m4 = [ 
	[ 0,  1, 2], 
	[-1,  0, 1], 
	[-2, -1, 0] ];

	var A = m1, B = m2;

	//console.log('m1[0].length (coluna)', m1[0].length);
	//console.log('m2.length (linha)', m2.length);

	// verificar se todas as linhas são do mesmo tamanho

	/* m2.length = m1[0].length */

	var qtdlinhasA = A.length;

	var qtdlinhasB = B.length;
	var qtdColunasB = B[0].length;
	var resultado = [];

	var start = Date.now();

	for (var i = 0; i < qtdlinhasA; i++) {

	  resultado[i] = [];
	  for (var j = 0; j < qtdColunasB; j++) {

	    resultado[i][j] = 0;

	    for (var k = 0; k < qtdlinhasB; k++) {
	      resultado[i][j] += A[i][k] * B[k][j];
	    }
	  }
	}

	console.log("resultado: ", resultado);
	console.log("tempo de execução:", Date.now() - start, "ms");
})();
