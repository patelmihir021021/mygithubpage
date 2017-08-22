function mmTometer() {
    loftank = loftank / 1000;
    woftank = woftank / 1000;
    hoftank = hoftank / 1000;
    smallh = smallh / 1000;
    d = d / 1000;
    D = D / 1000;
}
function fig1() {
    var c = document.getElementById("canvas1");
    c.style.display = "block";
    var ctx = c.getContext("2d");
    c.width = loftank * 100 + 40;
    c.height = hoftank * 100 + 40;
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, hoftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20, hoftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20, 20);
    ctx.lineTo(20, 20);
    ctx.lineTo(pa + 20, hoftank * 100 + 20);
    ctx.moveTo(20, hoftank * 100 - smallh * 100 + 20);
    ctx.lineTo(p + 20, hoftank * 100 - smallh * 100 + 20);
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText(parseFloat(loftank).toFixed(2) + " m", ((loftank * 100) / 2) + 20, 30);
    ctx.textAlign = "center";
    ctx.fillText(parseFloat(hoftank).toFixed(2) + " m", loftank * 100, hoftank * 100 / 2 + 20);
    ctx.textAlign = "center";
    ctx.fillText("Elevation", loftank * 100 / 2 + 20, hoftank * 100 + 30);
    ctx.textAlign = "center";
    ctx.fillText(pa.toFixed(2) + " KN/m2", pa + 5, hoftank * 100 + 30);
    ctx.textAlign = "center";
    ctx.fillText(p.toFixed(2) + " KN/m2", p + 5, hoftank * 100 - smallh * 100 + 30);
    canvas_arrow(ctx, pa / 2 + 20 + 50, (hoftank * 100) + 20 - 50, pa / 2 + 20, hoftank * 100 + 20);
    ctx.moveTo(pa / 2 + 20 + 50, (hoftank * 100) + 20 - 50);
    ctx.lineTo(pa / 2 + 20 + 50 + 50, (hoftank * 100) + 20 - 50);
    ctx.textAlign = "left";
    ctx.fillText("Loading for frame action", pa / 2 + 20 + 50 + 50 + 5, (hoftank * 100) + 20 - 50 + 5);
    canvas_arrow(ctx, p / 2 + 20 + 50, hoftank * 100 - smallh * 100 + 20 - 50, p / 2 + 20, hoftank * 100 - smallh * 100 + 20);
    ctx.moveTo(p / 2 + 20 + 50, hoftank * 100 - smallh * 100 + 20 - 50);
    ctx.lineTo(p / 2 + 20 + 50 + 50, hoftank * 100 - smallh * 100 + 20 - 50);
    ctx.textAlign = "left";
    ctx.fillText("Loading for cantilever action", p / 2 + 20 + 50 + 50 + 5, hoftank * 100 - smallh * 100 + 20 - 50 + 5);
    ctx.lineWidth = "2";
    ctx.stroke();
}
function fig2() {
    var c = document.getElementById("canvas2");
    c.style.display = "block";
    var ctx = c.getContext("2d");
    c.width = loftank * 100 + 40;
    c.height = woftank * 100 + 40;
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, woftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20, woftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20, 20);
    ctx.lineTo(20, 20);
    for (var i = 2; i < 5; i++) {
        canvas_arrow(ctx, loftank * 100 * i / 6 + 20, woftank * 100 * 1 / 6 + 20, loftank * 100 * i / 6 + 20, 20 + 2);
        canvas_arrow(ctx, loftank * 100 * i / 6 + 20, woftank * 100 * 5 / 6 + 20, loftank * 100 * i / 6 + 20, woftank * 100 + 20 - 2);
        canvas_arrow(ctx, loftank * 100 * 1 / 6 + 20, woftank * 100 * i / 6 + 20, 20 + 2, woftank * 100 * i / 6 + 20);
        canvas_arrow(ctx, loftank * 100 * 5 / 6 + 20, woftank * 100 * i / 6 + 20, loftank * 100 + 20 - 2, woftank * 100 * i / 6 + 20);
    }
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText(parseFloat(loftank).toFixed(2) + " m", ((loftank * 100) / 2) + 20, 40);
    ctx.textAlign = "center";
    ctx.fillText(parseFloat(woftank).toFixed(2) + " m", loftank * 100, woftank * 100 / 2 + 30);
    ctx.textAlign = "center";
    ctx.fillText("Plan", loftank * 100 / 2 + 20, woftank * 100 + 30);
    ctx.lineWidth = "2";
    ctx.stroke();
}
function fig3() {
    var c = document.getElementById("canvas3");
    c.style.display = "block";
    var ctx = c.getContext("2d");
    c.width = woftank * 100 + 40 + D * 200;
    c.height = hoftank * 100 + 40 + D * 100;
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, hoftank * 100 + 20 + D * 100);
    ctx.lineTo(woftank * 100 + 20 + D * 200, hoftank * 100 + 20 + D * 100);
    ctx.lineTo(woftank * 100 + 20 + D * 200, 20);
    ctx.lineTo(woftank * 100 + 20 + D * 100, 20);
    ctx.lineTo(woftank * 100 + 20 + D * 100, hoftank * 100 + 20);
    ctx.lineTo(20 + D * 100, hoftank * 100 + 20);
    ctx.lineTo(20 + D * 100, 20);
    ctx.lineTo(20, 20);
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Elevation", woftank * 100 * 0.5 + D * 100 + 20, hoftank * 100 + 30 + D * 100);
    ctx.lineWidth = "2";
    ctx.moveTo(20, 20);
    ctx.stroke();
    //Reinforcement Detail Long Wall Inside
    var Num = NumOfBarsInHoriLW;
    var Dia = DiaOfInHoriLW * 0.5 * 0.1;
    var X = (D * 100 + 20 - 5);
    var Y = 20 + 5;
    var h = (hoftank * 100 / (NumOfBarsInHoriLW - 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (NumOfBarsInHoriLW + 1)) && (i < 50); i++) {
        ctx.beginPath();
		ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
		ctx.textAlign = "left";
		ctx.fillText(i ,X + 10 ,Y + 3 );
		ctx.lineWidth = "2";
        ctx.stroke();
        Y = Y + h;
        ctx.closePath();
    }
    ctx.restore();
    var X = (20 + 5 + woftank * 100 + D * 100);
    var Y = 20 + 5;
    var h = (hoftank * 100 / (NumOfBarsInHoriLW - 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (NumOfBarsInHoriLW + 1)) && (i < 50); i++) {
        ctx.beginPath();
		ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        Y = Y + h;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    //Reinforcement Detail Long Wall Outside
    var Num = NumOfBarsOutVertLW;
    var Dia = DiaOfOutVertLW * 0.5 * 0.1;
    var X = (20 + 5);
    var Y = 20 + 5;
    var h = (((hoftank * 100) + (D * 100) - 10) / (Num - 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
		ctx.textAlign = "left";
		ctx.fillText(i ,X + 10 ,Y + 3 );
		ctx.lineWidth = "2";
        ctx.stroke();
		Y = Y + h;
        ctx.closePath();
    }
    ctx.restore();
    var X = (20 - 5 + woftank * 100 + D * 200);
    var Y = 20 + 5;
    var h = (((hoftank * 100) + (D * 100) - 10) / (Num - 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
		Y = Y + h;
        ctx.closePath();
    }
    //Reinforcement Detail Base Slab
    var Num = NumOfBarsUpBaseSlabWithL;
    var Dia = DiaOfUpBaseSlabWithL * 0.5 * 0.1;
    var X = (D * 100 + 20 + -5);
    var Y = (hoftank * 100) + 20 + 5;
    var hy = (((woftank * 100) + 10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 100); i++) {
        ctx.beginPath();
        X = hy + X;
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
    var Num = NumOfBarsDownBaseSlabWithL;
    var Dia = DiaOfDownBaseSlabWithL * 0.5 * 0.1;
    var X = (20 + 5);
    var Y = (hoftank * 100 + D * 100 + 20 - 5);
    var hy = (((woftank * 100) + (D * 100 * 2) -10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 100); i++) {
        ctx.beginPath();
        X = X + hy;
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
	ctx.strokeStyle = 'Black';
	ctx.beginPath();
    ctx.moveTo(24, 24);
    ctx.lineTo(24, 20 + hoftank*100 - 4 + D * 100);
    ctx.lineTo(20 + D * 200 + woftank * 100 - 4, 20 + hoftank*100 - 4 + D * 100);
    ctx.lineTo(20 + D * 200 + woftank * 100 - 4, 24);
    ctx.lineTo(20 + D * 100 + woftank * 100 + 4, 24);
    ctx.lineTo(20 + D * 100 + woftank * 100 + 4, 20 + hoftank * 100 + 4);
    ctx.lineTo(20 + D * 100 - 4, 20 + hoftank * 100 + 4);
    ctx.lineTo(20 + D * 100 - 4, 24);
    ctx.lineTo(24, 24);
    ctx.lineWidth = "1";
    ctx.moveTo(20, 20);
	ctx.stroke();
	ctx.closePath();
}
function fig4() {
    var c = document.getElementById("canvas4");
    c.style.display = "block";
    var ctx = c.getContext("2d");
    c.width = loftank * 100 + 40 + D * 200;
    c.height = hoftank * 100 + 40;
    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(20, hoftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20 + D * 200, hoftank * 100 + 20);
    ctx.lineTo(loftank * 100 + 20 + D * 200, 20);
    ctx.lineTo(loftank * 100 + 20 + D * 100, 20);
    ctx.lineTo(loftank * 100 + 20 + D * 100, hoftank * 100 + 20 - D * 100);
    ctx.lineTo(20 + D * 100, hoftank * 100 + 20 - D * 100);
    ctx.lineTo(20 + D * 100, 20);
    ctx.lineTo(20, 20);
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Elevation", loftank * 100 * 0.5 + D * 100 + 20, hoftank * 100 + 30);
    ctx.lineWidth = "2";
    ctx.moveTo(20, 20);
    ctx.stroke();
    //Reinforcement Detail Long Wall Inside
    var Num = NumOfBarsInHoriSW;
    var Dia = DiaOfInHoriSW * 0.5 * 0.1;
    var X = (D * 100 + 20 - 5);
    var Y = 20 + 5;
    var h = (((hoftank * 100)) / (NumOfBarsInHoriSW + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (NumOfBarsInHoriSW + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
		ctx.textAlign = "left";
		ctx.fillText(i ,X + 10 ,Y + 3 );
		ctx.lineWidth = "2";
        ctx.stroke();
        Y = Y + h;
        ctx.closePath();
    }
    ctx.restore();
    var X = (20 + 5 + loftank * 100 + D * 100);
    var Y = 20 + 5;
    var h = (hoftank * 100 / (NumOfBarsInHoriSW + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (NumOfBarsInHoriSW + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        Y = Y + h;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    //Reinforcement Detail Long Wall Outside
    var Num = NumOfBarsOutHoriSW;
    var Dia = DiaOfOutHoriSW * 0.5 * 0.1;
    var X = (20 + 5);
    var Y = 20 + 5;
    var h = (((hoftank * 100) + (D * 100) - 10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
		ctx.textAlign = "left";
		ctx.fillText(i ,X + 10 ,Y + 3 );
		ctx.lineWidth = "2";
        ctx.stroke();
        Y = Y + h;
        ctx.closePath();
    }ctx.beginPath();
        ctx.arc(X, 25 + ((Num - 1) * 0.5) * h, 5, 0, 2 * Math.PI, false);
		ctx.lineWidth = "1";
        ctx.stroke();
        ctx.closePath();
	if(Num%2 === 0) {
		ctx.textAlign = "left";
		ctx.fillText( Dia*20 + " mm diameter at c/c of " + h * 10, 60 + D * 100, 28 + (Num * 0.5)*h);
		ctx.lineWidth = "2";
		ctx.stroke();
	}else {
		var r = 5;
		if(Dia * 2 > r){r = Dia * 2;}
		ctx.beginPath();
        ctx.arc(X, 25 + ((Num - 1) * 0.5) * h, 5, 0, 2 * Math.PI, false);
		ctx.lineWidth = "1";
        ctx.stroke();
        ctx.closePath();
		ctx.textAlign = "left";
		ctx.fillText( Dia*20 + " mm diameter at c/c of " + h * 10, 80, 28 + ((Num - 1) * 0.5)*h);
		ctx.lineWidth = "2";
		ctx.stroke();
		
	}
	ctx.restore();
    var X = (20 - 5 + loftank * 100 + D * 200);
    var Y = 20 + 5;
    var h = (((hoftank * 100) + (D * 100) - 10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 50); i++) {
        ctx.beginPath();
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
		ctx.stroke();
        Y = Y + h;
        ctx.closePath();
    }
    //Reinforcement Detail Base Slab
    var Num = NumOfBarsUpBaseSlabWithL;
    var Dia = DiaOfUpBaseSlabWithL * 0.5 * 0.1;
    var X = (D * 100 + 20 - 5);
    var Y = (hoftank * 100) + 20 - (D * 100) + 5;
    var hy = (((loftank * 100) + 10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 100); i++) {
        ctx.beginPath();
        X = hy + X;
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    ctx.restore();
    var Num = NumOfBarsDownBaseSlabWithL;
    var Dia = DiaOfDownBaseSlabWithL * 0.5 * 0.1;
    var X = (20 + 5);
    var Y = (hoftank * 100 + 20 - 5);
    var hy = (((loftank * 100) + (D * 100 * 2) - 10) / (Num + 1));
    ctx.save();
    ctx.strokeStyle = 'Black';
    for (var i = 1; (i < (Num + 1)) && (i < 100); i++) {
        ctx.beginPath();
        X = X + hy;
        ctx.arc(X, Y, Dia, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    ctx.strokeStyle = 'Black';
    ctx.beginPath();
    ctx.moveTo(24, 24);
    ctx.lineTo(24, 20 + hoftank * 100 - 4);
    ctx.lineTo(20 + D * 200 + loftank * 100 - 4, 20 + hoftank * 100 - 4);
    ctx.lineTo(20 + D * 200 + loftank * 100 - 4, 24);
    ctx.lineTo(20 + D * 100 + loftank * 100 + 4, 24);
    ctx.lineTo(20 + D * 100 + loftank * 100 + 4, 20 + hoftank * 100 - D * 100 + 4);
    ctx.lineTo(20 + D * 100 - 4, 20 + hoftank * 100 - D * 100 + 4);
    ctx.lineTo(20 + D * 100 - 4, 24);
    ctx.lineTo(24, 24);
    ctx.lineWidth = "1";
    ctx.moveTo(20, 20);
    ctx.stroke();
    ctx.closePath();
}
function canvas_arrow(context, fromx, fromy, tox, toy) {
    var headlen = 8;
    // length of head in pixels
    var angle = Math.atan2(toy - fromy, tox - fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineWidth = "1";
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.lineWidth = "1";
    context.moveTo(tox, toy);
    context.lineWidth = "1";
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.lineWidth = "1";
}
