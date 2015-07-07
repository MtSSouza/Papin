	var jogar_fase1 = function()
	{
		this.draw = function()
		{
			trilha_1.pause()
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(fundo_fase1, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(barra_ferramentas1, 0, 0, 800, 600);
			
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
			
			if (pele) 
			{
                ctx.drawImage(texto, textoM.x, textoM.y, textoM.w, textoM.h);
                achado1_x = 199;
                achado1_y = 480;
            }
            if (machado) 
			{
                ctx.drawImage(texto2, textoM.x, textoM.y, textoM.w, textoM.h);
                achado2_x = 620;
                achado2_y = 480;
            }
            if (chifre) 
			{
                ctx.drawImage(texto3, textoM.x, textoM.y, textoM.w, textoM.h);
                achado3_x = 717;
                achado3_y = 480;
            }
            if (madeira)
			{
                ctx.drawImage(texto4, textoM.x, textoM.y, textoM.w, textoM.h);
                achado4_x = 326;
                achado4_y = 480;
            }
            if (pedra)
			{
                ctx.drawImage(texto5, textoM.x, textoM.y, textoM.w, textoM.h);
                achado5_x = 487;
                achado5_y = 480;
            }
            if (tocha) 
			{
                ctx.drawImage(texto6, textoM.x, textoM.y, textoM.w, textoM.h);
                achado6_x = 400;
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
			if (mouse_x >= 57 && mouse_x <= 123 && mouse_y >= 464 && mouse_y <= 522 && click && play) 
			{
                pausar = true;
                play = false;
            }
			
			if (mouse_x >= 312 && mouse_x <= 369 && mouse_y >= 318 && mouse_y <= 417 && click && play) 
			{
                certo1_x = 287;
                certo1_y = 285;
                tocha = true;
                machado = false;
                madeira = false;
                chifre = false;
                pedra = false;
                pele = false;

                if (click && click_ && tocha)
				{
                    pontos += tocha_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 380 && mouse_x <= 425 && mouse_y >= 181 && mouse_y <= 233 && click && play) 
			{
                certo2_x = 375;
                certo2_y = 115;
                tocha = false;
                machado = true;
                madeira = false;
                chifre = false;
                pedra = false;
                pele = false;


                if (click && click_ && machado) 
				{
                    pontos += machado_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 509 && mouse_x <= 570 && mouse_y >= 352 && mouse_y <= 408 && click && play)
			{
                certo3_x = 495;
                certo3_y = 290;
                tocha = false;
                machado = false;
                madeira = true;
                chifre = false;
                pedra = false;
                pele = false;


                if (click && click_ && madeira)
				{
                    pontos += madeira_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 552 && mouse_x <= 583 && mouse_y >= 296 && mouse_y <= 334 && click && play) 
			{
                certo4_x = 535;
                certo4_y = 250;
                tocha = false;
                machado = false;
                madeira = false;
                chifre = false;
                pedra = true;
                pele = false;


                if (click && click_ && pedra) 
				{
                    pontos += pedra_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 701 && mouse_x <= 741 && mouse_y >= 315 && mouse_y <= 330 && click && play) 
			{
                certo5_x = 693;
                certo5_y = 245;
                tocha = false;
                machado = false;
                madeira = false;
                chifre = true;
                pedra = false;
                pele = false;


                if (click && click_ && chifre) 
				{
                    pontos += chifre_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 3 && mouse_x <= 52 && mouse_y >= 327 && mouse_y <= 419 && click && play) 
			{
                certo6_x = 0;
                certo6_y = 320;
                tocha = false;
                machado = false;
                madeira = false;
                chifre = false;
                pedra = false;
                pele = true;


                if (click && click_ && pele) 
				{
                    pontos += pele_pontos;
                    click = false;
                } 
				else
                    click_ = true;

            }
			
			if (mouse_x >= 81 && mouse_x <= 133 && mouse_y >= 306 && mouse_y <= 400 && click && play)
			{
                certo6_x = 0;
                certo6_y = 320;
                tocha = false;
                machado = false;
                madeira = false;
                chifre = false;
                pedra = false;
                pele = true;


                if (click && click_ && pele)
				{
                    pontos += pele_pontos;
                    click = false;
                } 
				else
                    click_ = true;
            }
			
			if (mouse_x >= 312 && mouse_x <= 369 && mouse_y >= 318 && mouse_y <= 417 || 
			mouse_x >= 380 && mouse_x <= 425 && mouse_y >= 181 && mouse_y <= 233 ||
			mouse_x >= 509 && mouse_x <= 570 && mouse_y >= 352 && mouse_y <= 408 ||
			mouse_x >= 552 && mouse_x <= 583 && mouse_y >= 296 && mouse_y <= 334 ||
			mouse_x >= 701 && mouse_x <= 741 && mouse_y >= 315 && mouse_y <= 330 ||
			mouse_x >= 3 && mouse_x <= 52 && mouse_y >= 327 && mouse_y <= 419 ||
            mouse_x >= 81 && mouse_x <= 133 && mouse_y >= 306 && mouse_y <= 400) console.log("certo");
          
			else 
			{
                if (click && click_) 
				{
                    t.setTime(t - 5000)
                    click = false;
                } 
				else
                    click_ = true;
            }
		}
		
		this.ganhou = function()
		{
			if (certo6_x == 0 && certo5_x == 693 && certo4_x == 535 &&
                certo3_x == 495 && certo2_x == 375 && certo1_x == 287) achoutudo = true

                if (achoutudo) 
				{
					t.setMinutes(1);
					t.setSeconds(25);
                    play = false;
                    intersecao1 = true;
					
					
					
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

                    achado1_x = 1500;
                    achado1_y = 100;
                    achado2_x = 1500;
                    achado2_y = 100;
                    achado3_x = 1500;
                    achado3_y = 100;
                    achado6_x = 1500;
                    achado6_y = 100;
                    achado5_x = 1500;
                    achado5_y = 100;
                    achado4_x = 1500;
                    achado4_y = 100;

                    pele = false;
                    machado = false;
                    chifre = false;
                    madeira = false;
                    pedra = false;
                    tocha = false;

                }
		}
	}
	
	var primeira_fase = new jogar_fase1();
