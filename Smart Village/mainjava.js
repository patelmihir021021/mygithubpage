function changepagetoresult() 
{
	{	
		var population = document.getElementById("population").value;
		var electriciy = document.getElementById("electriciy").value;
		var water = document.getElementById("water").value;
		var income = document.getElementsByName("income").value;
			
	document.getElementById("smarthead").className = "";
	document.getElementById("smarthead").className = "resultsmarthead" ;
	var road = "<div style='height: 58px;top: 0px;'></div><center><h3 id='topictitle'>Road Development</h3><div id='roadcontent' >jdfvjdjvjfdvdkjvkdjvkjdvvjj</div></center>"
	document.getElementById("data").innerHTML = road;

	}
}


function menumouseOver() {
	document.getElementById("menubox").style.opacity = "1";
var menutimefadein = setTimeout(menufadein,400);
	
	document.getElementById("linear1").style.background = "#75E975";
	document.getElementById("linear2").style.background = "#75E975";
	document.getElementById("linear3").style.background = "#75E975";
	document.getElementById("linearmenubox").style.background = "#197B17";
}


function menufadein() {
	 document.getElementById("menubox").style.display = "list-item";

}

function menumouseOut() {
		document.getElementById("menubox").style.opacity = "0";
	var menutimefadeout = setTimeout(menufadeout,400);

	document.getElementById("linear1").style.background = "#197B17";
	document.getElementById("linear2").style.background = "#197B17";
	document.getElementById("linear3").style.background = "#197B17";
	document.getElementById("linearmenubox").style.background = "";
}

function menufadeout() {
    document.getElementById("menubox").style.display = "none";

}

function infomouseOver() {
    document.getElementById("info").style.background = "#197B17";
    document.getElementById("info1").style.stroke = "#75E975";
    document.getElementById("info2").style.stroke = "#75E975";
    document.getElementById("info3").style.stroke = "#75E975";	
	document.getElementById("info2").style.fill = "#75E975";
    document.getElementById("info3").style.fill = "#75E975";	
	}

function infomouseOut() {
    document.getElementById("info").style.background = "";
    document.getElementById("info1").style.stroke = "#197B17";
    document.getElementById("info2").style.stroke = "#197B17";
    document.getElementById("info3").style.stroke = "#197B17";	
	document.getElementById("info2").style.fill = "#197B17";
    document.getElementById("info3").style.fill = "#197B17";	
}

function visibleconaitner(){
	document.getElementById("infobackground").style.display ="initial";
}

function invisiblecontainer()
{
	document.getElementById("infobackground").style.display ="none";
}