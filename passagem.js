	var passagem = function()
	{
		this.draw = function()
		{
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(pontuacao1, 0, 0, canvas.width, canvas.height);
                ctx.drawImage(continuar, continuacao.x, continuacao.y, continuacao.w, continuacao.h);
                ctx.font = "100px Chille";
                ctx.fillStyle = "#000000";
                ctx.fillText(pontos, 500, 420);
				
				localStorage.setItem("pontos1",pontos)

		}

		this.update = function()
		{
			if (mouse_x >= 480 && mouse_x <= 762 && mouse_y >= 490 && mouse_y <= 548) 
			{
                continuacao.x = 495;
                continuacao.y = 505;
                continuacao.w = 297;
                continuacao.h = 73;
                if (click) 
				{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    play2 = true;
					
                }
            } 
			
			else 
			{
                continuacao.x = 480;
                continuacao.y = 490;
                continuacao.w = 282;
                continuacao.h = 58;
            }
		}
		
	}	
			
		var mudanca = new passagem();
	
	var passagem2 = function()
	{
		this.draw = function()
		{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(pontuacao2, 0, 0, canvas.width, canvas.height);
                    ctx.drawImage(continuar, continuacao.x, continuacao.y, continuacao.w, continuacao.h);
                    ctx.font = "100px Chille";
                    ctx.fillStyle = "#000000";
                    ctx.fillText(pontos2, 500, 420);
					localStorage.setItem("pontos2",pontos2)

		}
		
		this.update = function()
		{
			if (mouse_x >= 480 && mouse_x <= 762 && mouse_y >= 490 && mouse_y <= 548)
			{
                    continuacao.x = 495;
                    continuacao.y = 505;
                    continuacao.w = 297;
                    continuacao.h = 73;
                    if (click) 
					{
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        play3 = true;
						
                    }
            } 
				
			else 
			{
                continuacao.x = 480;
                continuacao.y = 490;
                continuacao.w = 282;
                continuacao.h = 58;
			}
		}
	}	
			
		var mudanca2 = new passagem2();