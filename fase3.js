	var jogar_fase3 = function()
	{
		this.draw = function()
		{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(fundo_fase3, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(barra_ferramentas3, 0, 0, 800, 600);
			ctx.drawImage(certo1, certo1_x, certo1_y, certo1_w, certo1_h);
			ctx.drawImage(certo2, certo2_x, certo2_y, certo2_w, certo2_h);
			ctx.drawImage(certo3, certo3_x, certo3_y, certo3_w, certo3_h);
			ctx.drawImage(certo4, certo4_x, certo4_y, certo4_w, certo4_h);
			ctx.drawImage(certo5, certo5_x, certo5_y, certo5_w, certo5_h);
			ctx.drawImage(certo6, certo6_x, certo6_y, certo6_w, certo6_h);
			ctx.drawImage(achado1, achado1_x, achado1_y, achado1_w, achado1_h);
            ctx.drawImage(achado2, achado2_x, achado2_y, achado2_w, achado2_h);
            ctx.drawImage(achado3, achado3_x, achado3_y, achado3_w, achado3_h);
            ctx.drawImage(achado4, achado4_x, achado4_y, achado4_w, achado4_h);
            ctx.drawImage(achado5, achado5_x, achado5_y, achado5_w, achado5_h);
            ctx.drawImage(achado6, achado6_x, achado6_y, achado6_w, achado6_h);
			
			if (venus_laussel) {
                ctx.drawImage(texto3_1, textoM.x, textoM.y, textoM.w, textoM.h);
                achado1_x = 520;
                achado1_y = 480;
            }
            if (sangue) {
                ctx.drawImage(texto3_2, textoM.x, textoM.y, textoM.w, textoM.h);
                achado2_x = 719;
                achado2_y = 480;
            }
            if (venus_brassem) {
                ctx.drawImage(texto3_3, textoM.x, textoM.y, textoM.w, textoM.h);
                achado3_x = 388;
                achado3_y = 480;
            }
            if (pintura) {
                ctx.drawImage(texto3_4, textoM.x, textoM.y, textoM.w, textoM.h);
                achado4_x = 278;
                achado4_y = 480;
            }
            if (arco) {
                ctx.drawImage(texto3_5, textoM.x, textoM.y, textoM.w, textoM.h);
                achado5_x = 179;
                achado5_y = 480;
            }
            if (venus_willend) {
                ctx.drawImage(texto3_6, textoM.x, textoM.y, textoM.w, textoM.h);
                achado6_x = 627;
                achado6_y = 480;
            }
			
			ctx.font = "30px Chille";
            ctx.fillStyle = "#b2abab";
			var tt = t.getSeconds();
			if(tt < 10)
				tt = "0" + t.getSeconds().toString();
            ctx.fillText(t.getMinutes() + ":" + tt, 372, 32);
		}
		
		this.update = function()
		{
			if (mouse_x >= 57 && mouse_x <= 123 && mouse_y >= 464 && mouse_y <= 522 && click && play3) 
			{
                pausar3 = true;
                play3 = false;
            }
			if (mouse_x >= 65 && mouse_x <= 82 && mouse_y >= 94 && mouse_y <= 129 && click && play3) 
			{
                certo1_x = 55;
                certo1_y = 79;
                arco = false;
                pintura = false;
                sangue = false;
                venus_brassem = false;
                venus_laussel = true;
                venus_willend = false;

            }
			if (mouse_x >= 142 && mouse_x <= 165 && mouse_y >= 200 && mouse_y <= 253 && click && play3) 
			{
                certo2_x = 132;
                certo2_y = 185;
                arco = false;
                pintura = false;
                sangue = true;
                venus_brassem = false;
                venus_laussel = false;
                venus_willend = false;

            }
			if (mouse_x >= 111 && mouse_x <= 143 && mouse_y >= 345 && mouse_y <= 400 && click && play3) {
                certo3_x = 101;
                certo3_y = 330;
                arco = false;
                pintura = false;
                sangue = false;
                venus_brassem = true;
                venus_laussel = false;
                venus_willend = false;
            }
			if (mouse_x >= 631 && mouse_x <= 704 && mouse_y >= 350 && mouse_y <= 398 && click && play3) {
                certo4_x = 621;
                certo4_y = 335;
                arco = false;
                pintura = true;
                sangue = false;
                venus_brassem = false;
                venus_laussel = false;
                venus_willend = false;
            }
			if (mouse_x >= 455 && mouse_x <= 489 && mouse_y >= 330 && mouse_y <= 365 && click && play3) {
                certo5_x = 445;
                certo5_y = 315;
                arco = true;
                pintura = false;
                sangue = false;
                venus_brassem = false;
                venus_laussel = false;
                venus_willend = false;

            }
			if (mouse_x >= 431 && mouse_x <= 456 && mouse_y >= 250 && mouse_y <= 298 && click && play3) {
                certo6_x = 421;
                certo6_y = 235;
                arco = false;
                pintura = false;
                sangue = false;
                venus_brassem = false;
                venus_laussel = false;
                venus_willend = true;

            }
			if (mouse_x >= 65 && mouse_x <= 82 && mouse_y >= 94 && mouse_y <= 129 || 
			mouse_x >= 142 && mouse_x <= 165 && mouse_y >= 200 && mouse_y <= 253 || 
			mouse_x >= 111 && mouse_x <= 143 && mouse_y >= 345 && mouse_y <= 400 || 
			mouse_x >= 631 && mouse_x <= 704 && mouse_y >= 350 && mouse_y <= 398 || 
			mouse_x >= 455 && mouse_x <= 489 && mouse_y >= 330 && mouse_y <= 365 || 
			mouse_x >= 431 && mouse_x <= 456 && mouse_y >= 250 && mouse_y <= 298 ||
            mouse_x >= 37 && mouse_x <= 76 && mouse_y >= 498 && mouse_y <= 542)
                console.log("certo");
            else {
                if (click && click_) {
                    t.setTime(t - 5000) 
                    click = false;
                } else
                    click_ = true;
            }
		}
		
		this.ganhou = function()
		{
			if (certo6_x == 421 && certo5_x == 445 && certo4_x == 621 &&
                    certo3_x == 101 && certo2_x == 132 && certo1_x == 55) achoutudo3 = true

                if (achoutudo3) {
                    ctx.drawImage(manutencao, 0, 0, canvas.width, canvas.height);
					t.setMinutes(1);
					t.setSeconds(25);
                    play3 = false;

                    certo1_x = 1500;
                    certo1_y = 100;
                    certo2_x = 1500;
                    certo2_y = 100;
                    certo3_x = 1500;
                    certo3_y = 100;
                    certo4_x = 1500;
                    certo4_y = 100;
                    certo5_x = 1500;
                    certo5_y = 100;
                    certo6_x = 1500;
                    certo6_y = 100;

                    arco = false;
                    pintura = false;
                    sangue = false;
                    venus_brassem = false;
                    venus_laussel = false;
                    venus_willend = false;

                }
		}
	}
	
	var terceira_fase = new jogar_fase3();