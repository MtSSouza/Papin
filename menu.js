	var menu1 = function()
	{
		this.draw = function()
		{
			trilha_1.play()
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(menu, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(botao_jogar, jogar.x, jogar.y, jogar.w, jogar.h);
			ctx.drawImage(botao_instrucoes, instrucoesM.x, instrucoesM.y, instrucoesM.w, instrucoesM.h);
			ctx.drawImage(botao_creditos, creditosM.x, creditosM.y, creditosM.w, creditosM.h);
		}
		
		this.update = function()
		{
			if (mouse_x >= 540 && mouse_x <= 696 && mouse_y >= 200 && mouse_y <= 287) {
					jogar.x = 550;
					jogar.y = 210;
					jogar.w = 173;
					jogar.h = 103;
					if (click) {
						play = true;
						
						trilha_2.play();
					}
				} else {
					jogar.x = 540;
					jogar.y = 200;
					jogar.w = 163;
					jogar.h = 93;
				}
		
			if (mouse_x >= 503 && mouse_x <= 760 && mouse_y >= 314 && mouse_y <= 357) {
                instrucoesM.x = 490;
                instrucoesM.y = 325;
                instrucoesM.w = 302;
                instrucoesM.h = 63;
                if (click) {
                    how = true;
                    trilha_2.play();
					fadeIn(preto,1);
                }
            } else {
                instrucoesM.x = 480;
                instrucoesM.y = 305;
                instrucoesM.w = 292;
                instrucoesM.h = 53;
            }
		
			if (mouse_x >= 550 && mouse_x <= 733 && mouse_y >= 383 && mouse_y <= 431) {
                creditosM.x = 535;
                creditosM.y = 400;
                creditosM.w = 216;
                creditosM.h = 77;

                if (click) {
					fadeIn(preto,1);
                    credit = true;
                    trilha_2.play();
                }

            } else {
                creditosM.x = 525;
                creditosM.y = 390;
                creditosM.w = 206;
                creditosM.h = 67;
            }

		
		}
}

	var menuinicial = new menu1();