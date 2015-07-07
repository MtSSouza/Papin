  var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        var mousepressed = false;

        var cb = canvas.getBoundingClientRect();

        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("mousedown", mouseDown);
        canvas.addEventListener("mouseup", mouseUp);

        function mouseMove(e) {
            mouse_x = e.x - cb.left - 0.5;
            mouse_y = e.y - cb.top;
           // console.log(mouse_x, mouse_y);
        }

        function mouseDown(e) {
            mousepressed = true;
            click = true;
            mouseDown = true;
        }

        function mouseUp(e) {
            mousepressed = false;
            click = false;
            mouseDown = false;
        }
		
		function drawText(x, y, text) {
            ctx.fillStyle = "#000000";
            ctx.font = "20px Arial";
            ctx.fillText(text, x, y);
        }