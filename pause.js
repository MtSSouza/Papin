	var pause1 = function()
	{
		this.draw = function()
		{
			ctx.drawImage(pause, pauseM.x, pauseM.y, pauseM.w, pauseM.h);
		}
		this.update = function()
		{

			if (pausar) {
              
                if (mouse_x >= 253 && mouse_x <= 568 && mouse_y >= 284 && mouse_y <= 308 && click && pausar) {
                    pausar = false;
                    play = true;
                }
                if (mouse_x >= 243 && mouse_x <= 588 && mouse_y >= 351 && mouse_y <= 378 && click && pausar) {
					trilha_1.currentTime = 0;
				    pausar = false;
                    play = false;
                    main = true;
                    cronometro = 90;
                    certo1_x = 1500;
                    certo2_x = 1500;
                    certo3_x = 1500;
                    certo4_x = 1500;
                    certo5_x = 1500;
                    certo6_x = 1500;
                }
            }
		}
	}
	
	var pausegame = new pause1();

	
	var pause2 = function()
	{
		this.draw = function()
		{
			ctx.drawImage(pause, pauseM.x, pauseM.y, pauseM.w, pauseM.h);
		}
		this.update = function()
		{

			if (pausar2) {
              
                if (mouse_x >= 253 && mouse_x <= 568 && mouse_y >= 284 && mouse_y <= 308 && click && pausar2) {
                    pausar2 = false;
                    play2 = true;
                }
                if (mouse_x >= 243 && mouse_x <= 588 && mouse_y >= 351 && mouse_y <= 378 && click && pausar2) {
                    trilha_1.currentTime = 0;
					pausar2 = false;
                    play2 = false;
                    main = true;
                    cronometro = 90;
                    certo1_x = 1500;
                    certo2_x = 1500;
                    certo3_x = 1500;
                    certo4_x = 1500;
                    certo5_x = 1500;
                    certo6_x = 1500;
                }
            }
		}
	}
	
	var pausegame2 = new pause2();
	
	var pause3 = function()
	{
		this.draw = function()
		{
			ctx.drawImage(pause, pauseM.x, pauseM.y, pauseM.w, pauseM.h);
		}
		this.update = function()
		{

			if (pausar3) {
              
                if (mouse_x >= 253 && mouse_x <= 568 && mouse_y >= 284 && mouse_y <= 308 && click && pausar3) {
                    pausar3 = false;
                    play3 = true;
                }
                if (mouse_x >= 243 && mouse_x <= 588 && mouse_y >= 351 && mouse_y <= 378 && click && pausar3) {
					trilha_1.currentTime = 0;
                    pausar3 = false;
                    play3 = false;
                    main = true;
                    cronometro = 90;
                    certo1_x = 1500;
                    certo2_x = 1500;
                    certo3_x = 1500;
                    certo4_x = 1500;
                    certo5_x = 1500;
                    certo6_x = 1500;
                }
            }
		}
	}
	
	var pausegame3 = new pause3();
