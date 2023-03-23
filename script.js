window.onload = function(){
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	//variaveis

	snake = [];
	positionX = 10;
	positionY = 10;
	foodX = 15;
	foodY = 15;
	velocityX = 0;
	velocityY = 0;
	grid = 20;
	tamanho = 3;

	//chamada da função jogo a cada 100 milisegundos
	setInterval(jogo, 100)

	//Controles
	document.addEventListener("keydown", function(e){
		switch(e.keyCode){
			//seta direita =  39
			case 39:
				velocityX = 1;
				velocityY = 0;
				break;
			//seta esquerda = 37
			case 37:
				velocityX = -1;
				velocityY = 0;
				break;
			//seta cima = 38
			case 38:
				velocityX = 0;
				velocityY = -1;
				break;
			//seta baixo = 40
			case 40:
				velocityX = 0;
				velocityY = 1;
				break;
		}
	});
};

function jogo(){
	//configuração da tela
	ctx.fillStyle = "#2980B9";

	// distancia da borda horizonta, distancia borda vertical, largura, altura
	ctx.fillRect(0,0, canvas.width, canvas.height);

	//deslocamento da cobra
	positionX += velocityX;
	positionY += velocityY;

	// espelhamento
	if(positionX < 0){
		positionX = grid;
	}
	if(positionX > grid){
		positionX = 0;
	}
	if(positionY < 0){
		positionY = grid;
	}
	if(positionY > grid){
		positionY = 0;
	}

		//configuração da cobra
	ctx.fillStyle = "#00F102";
	for(let i = 0; i < snake.length; i++){
		ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
		if(snake[i].x == positionX && snake[i].y == positionY){
			tam = 3;
		}
	};

	//posicionanamento da cobra
	snake.push({x: positionX, y: positionY});
	console.log(snake[0]);

	//apagando
	while(snake.length > tamanho){
		snake.shift();
	};
	
	//configurando a comida
	ctx.fillStyle = "#F1C40F";
	ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

	//comendo a comida
	if(positionX == foodX && positionY == foodY){
		tamanho++;
		foodX = Math.floor(Math.random() * grid);
		foodY = Math.floor(Math.random() * grid);
	};
};