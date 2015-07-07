	var jogar_fase2 = function()
	{
		this.draw = function()
		{
			ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(fundo_fase2, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(barra_ferramentas2, 0, 0, 800, 600);
			
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
			
			if (mamute) {
                ctx.drawImage(texto2_1, textoM.x, textoM.y, textoM.w, textoM.h);
                achado1_x = 350;
                achado1_y = 480;
            }
            if (fruta) {
                ctx.drawImage(texto2_2, textoM.x, textoM.y, textoM.w, textoM.h);
                achado2_x = 162;
                achado2_y = 480;
            }
            if (lanca) {
                ctx.drawImage(texto2_3, textoM.x, textoM.y, textoM.w, textoM.h);
                achado3_x = 286;
                achado3_y = 480;
            }
            if (anzol) {
                ctx.drawImage(texto2_4, textoM.x, textoM.y, textoM.w, textoM.h);
                achado4_x = 225;
                achado4_y = 480;
            }
            if (propulsor) {
                ctx.drawImage(texto2_5, textoM.x, textoM.y, textoM.w, textoM.h);
                achado5_x = 474;
                achado5_y = 480;
            }
            if (fosforo) {
                ctx.drawImage(texto2_6, textoM.x, textoM.y, textoM.w, textoM.h);
                achado6_x = 656;
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
			if (mouse_x >= 57 && mouse_x <= 123 && mouse_y >= 464 && mouse_y <= 522 && click && play2) 
			{
                pausar2 = true;
                play2 = false;
            }
			
			if (mouse_x >= 20 && mouse_x <= 67 && mouse_y >= 156 && mouse_y <= 193 && click && play2) {
                certo1_x = 20;
                certo1_y = 193;
                mamute = true;
                fruta = false;
                lanca = false;
                anzol = false;
                propulsor = false;
                fosforo = false;


                if (click && click_ && mamute) {
                    pontos2 += mamute_pontos;
                    click = false;
                } else
                    click_ = true;

            }

			 if (mouse_x >= 700 && mouse_x <= 733 && mouse_y >= 162 && mouse_y <= 210 && click && play2) {
                certo2_x = 700;
                certo2_y = 162;
                mamute = false;
                fruta = true;
                lanca = false;
                anzol = false;
                propulsor = false;
                fosforo = false;


                if (click && click_ && fruta) {
                    pontos2 += fruta_pontos;
                    click = false;
                } else
                    click_ = true;

            }
			
			if (mouse_x >= 583 && mouse_x <= 668 && mouse_y >= 131 && mouse_y <= 146 && click && play2) {
                certo3_x = 583;
                certo3_y = 131;
                mamute = false;
                fruta = false;
                lanca = true;
                anzol = false;
                propulsor = false;
                fosforo = false;


                if (click && click_ && lanca) {
                    pontos2 += lanca_pontos;
                    click = false;
                } else
                    click_ = true;
					
					
            }
			
			if (mouse_x >= 208 && mouse_x <= 220 && mouse_y >= 185 && mouse_y <= 219 && click && play2) {
                certo4_x = 208;
                certo4_y = 192;
                mamute = false;
                fruta = false;
                lanca = false;
                anzol = true;
				cc = true;
                propulsor = false;
                fosforo = false;
				
			
                if (click && click_ && anzol) {
                    pontos2 += anzol_pontos;
                    click = false;
                } else
                    click_ = true;
            }
			
			    if (mouse_x >= 92 && mouse_x <= 201 && mouse_y >= 278 && mouse_y <= 309 && click && play2) {
                certo5_x = 92;
                certo5_y = 278;
                mamute = false;
                fruta = false;
                lanca = false;
                anzol = false;
                propulsor = true;
                fosforo = false;


                if (click && click_ && propulsor) {
                    pontos2 += propulsor_pontos;
                    click = false;
                } else
                    click_ = true;

            }
			
			 if (mouse_x >= 312 && mouse_x <= 332 && mouse_y >= 242 && mouse_y <= 253 && click && play2) {
                certo6_x = 312;
                certo6_y = 242;
                mamute = false;
                fruta = false;
                lanca = false;
                anzol = false;
                propulsor = false;
                fosforo = true;


                if (click && click_ && fosforo) {
                    pontos += fosforo_pontos;
                    click = false;
                } else
                    click_ = true;

            }
			
			if (mouse_x >= 20 && mouse_x <= 67 && mouse_y >= 156 && mouse_y <= 193 || 
			mouse_x >= 700 && mouse_x <= 733 && mouse_y >= 162 && mouse_y <= 210 || 
			mouse_x >= 583 && mouse_x <= 668 && mouse_y >= 131 && mouse_y <= 146 ||
			mouse_x >= 208 && mouse_x <= 220 && mouse_y >= 192 && mouse_y <= 217 ||
			mouse_x >= 92 && mouse_x <= 201 && mouse_y >= 278 && mouse_y <= 309 || 
			mouse_x >= 312 && mouse_x <= 332 && mouse_y >= 242 && mouse_y <= 253 ||
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
			if (certo6_x == 312 && certo5_x == 92 && certo4_x == 208 &&
                certo3_x == 583 && certo2_x == 700 && certo1_x == 20) achoutudo2 = true

                if (achoutudo2)
				{
					t.setMinutes(1);
					t.setSeconds(25);
                    play2 = false;
                    intersecao2 = true;

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


                    tocha = false;
                    mamute = false;
                    fruta = false;
                    lanca = false;
                    anzol = false;
                    propulsor = false;
                    fosforo = false;
				}
		
		}
	}

	
	var segunda_fase = new jogar_fase2();
