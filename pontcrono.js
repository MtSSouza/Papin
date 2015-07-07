		var t = new Date(0);
		
		t.setMinutes(1);
		t.setSeconds(25);

	var timer = function()
	{
		this.update = function()
		{
			
			if(play){t = new Date(t - 1000);}
				
            if (play2) {t = new Date(t - 1000);}
            if (play3) {t = new Date(t - 1000);}
            setTimeout(watch.update, 1000);
		}
	}
	
	var score = function()
	{
		this.update = function()
		{
			if (play) {
                tocha_pontos -= 2;
                pele_pontos -= 2;
                madeira_pontos -= 2;
                machado_pontos -= 2;
                pedra_pontos -= 4;
                chifre_pontos -= 4;
            }

            if (play2) {
                lanca_pontos -= 2;
                fruta_pontos -= 2;
                mamute_pontos -= 2;
                anzol_pontos -= 2;
                fosforo_pontos -= 4;
                propulsor_pontos -= 4;
            }

            setTimeout(scor.update, 1000);
		}
	}
	
	var watch = new timer();
	var scor = new score();
	
	scor.update();
	watch.update();