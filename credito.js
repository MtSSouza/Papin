	var credito1 = function()
	{
		this.draw = function()
		{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(creditos, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(seta, super_seta.x, super_seta.y, super_seta.w, super_seta.h);
		}
		
		this.update = function()
		{
			if (mouse_x >= 80 && mouse_x <= 156 && mouse_y >= 517 && mouse_y <= 559)
			{
                super_seta.x = 90;
                super_seta.y = 525;
                super_seta.w = 58;
                super_seta.h = 45;
			
             
				if (click) 
				{
					main = true;
					trilha_2.play();
					credit = false;
				}
			}
			else
			{
				super_seta.x = 80;
				super_seta.y = 517;
				super_seta.w = 48;
				super_seta.h = 35;
			}	
		}
	}
	
	var cred = new credito1();