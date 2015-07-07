	function fadeIn(id, time) {
		fade(id, time, 1, 0);
		return true;
	}
 
	function fade(target, time, ini, fin) {
		console.log("FADE");
		var alpha = ini;
		var inc = 0;
		if (fin >= ini) { 
			inc = 0.01; 
		} else {
			inc = -0.01;
		}
		timer = (time * 1000) / 50;
		var i = setInterval(
			function programacao() {
				if ((inc >= 0 && alpha >= fin) || (inc <= 0 && alpha <= fin)) {
					alpha = 0
					
					return;
				}
				setAlpha(target, alpha);
				alpha += inc;
		}
	, timer);
}

 
	function setAlpha(target, alpha) {
	target.myAlpha = alpha;	
	}

	function drawFade(_canvas, _preto){
	ctx.globalAlpha = _preto.myAlpha;
	ctx.fillStyle="BLACK";
	ctx.fillRect(0,0,_canvas.width, _canvas.height);
	ctx.globalAlpha = 1;
}
