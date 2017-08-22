//Console
var ConTxtArray = [

"hoftank",
"inputhoftank",
"byvolhoftank",
"loftank",
"inputloftank",
"byvolloftank",
"woftank",
"inputwoftank",
"byvolwoftank",
"vol",
"inputvol",
"smallh",
"d",
"reqdepth",
"D",
"dofBaseSlab",
//script variables
"wi",
"li",
//Design variables

"sigmacbc",
"sigmast",
// Grade of concrete
"gc",
//Modular Ratio
"m",
//Neutral axis constant
"k",
//Lever arm constant
"j",
//Moment of resistance factor
"Q",
//Moment of resistance
"MR",
//Earth Pressure and it's various variables
"pa",
"p",
"ka",
"gamadash",
"gamaw",

//Fixed End Moments
"mfAB",
"mfAD",

//Variables for Disribution Factor
"dfofAB",
"kofAB",
"totalk",
"dfofAD",
"kofAD",
"FMAD",
"FMAB",
"balAB",
"balAD",

//Bending Moments and Direct Tension
"bmatcenofAB",
"bmatcenofAD",
"tenatloftank",
"tenatwoftank",

//Area of steel
"Aatat",
"AstLW",
"AstSW",
"AstcenLW",
"AstcenSW",
"x",
"ModM",
"Ast1",
"Ast2",
"TotalAst",
"M",
"RequiredAst",
"ProvidedAst",
"AstDia",
"NumOfbars",
"NumOfBarsAstLW",
"DiaOfLW",
"NumOfBarsAstSW",
"DiaOfSW",
"NumOfBarsAstcenLW",
"DiaOfCenLW",
"NumOfBarsAstcenSW",
"DiaOfCenSW",
"NumOfBarsInVertLW",
"DiaOfInVertLW",
"NumOfBarsInHoriLW",
"DiaOfInHoriLW",
"NumOfBarsOutVertLW",
"DiaOfOutVertLW",
"NumOfBarsOutHoriLW",
"DiaOfOutHoriLW",
"NumOfBarsInVertSW",
"DiaOfInVertSW",
"NumOfBarsInHoriSW",
"DiaOfInHoriSW",
"NumOfBarsOutVertSW",
"DiaOfOutVertSW",
"NumOfBarsOutHoriSW",
"DiaOfOutHoriSW",
"NumOfBarsUpBaseSlabWithL",
"DiaOfUpBaseSlabWithL",
"NumOfBarsDownBaseSlabWithL",
"DiaOfDownBaseSlabWithL",
"NumOfBarsUpBaseSlabWithW",
"DiaOfUpBaseSlabWithW",
"NumOfBarsDownBaseSlabWithW",
"DiaOfDownBaseSlabWithW",
"DistAst",
"BMatBase",
"AstBot",
"AstBaseSteel",
"DistAstInWalls" ]
var status = "false";
var calculate = "false";
var ConsoleText = "";
var ConAddeTxtArray = [];
var ConI = 0;
var ConLog = 0;

function ConsoleIN()
{
	var ConInText = document.getElementById("ConsoleInput");
		var ConText = document.getElementById("consolediv");
	
		for(i=0;i<ConInText.value.length;i++){
			var cHkForOp = ConInText.value.substring(i,i+1);
				if((cHkForOp === "*") || (cHkForOp === "/") || (cHkForOp === "-") || (cHkForOp === "+"))
					{
						calculate = "true";
					}
		}
		
	for(i=0;i<ConTxtArray.length;i++){
		for(j=0;j<=ConInText.value.length;j++)
		{
		if(ConInText.value.substring(0,j) === ConTxtArray[i])
			{
				if(ConInText.value.length === ConTxtArray[i].length)
				{
				{status = "true";}
				}
			}
		}
	}


	if((status === "true")){print(ConInText.value);}
	
	else if(ConInText.	value === "help" || ConInText.value === "Help" || ConInText.value === "HELP")
	{
		ConsoleText = ConsoleText + "<p> >>  > List of commands</p><p style='text-align: justify;'> > ";
		for(i=0;i<ConTxtArray.length;i++)
		{
		ConsoleText = ConsoleText + ConTxtArray[i] + "    ||    ";
		}
		ConsoleText = ConsoleText + "</p>";
		ConText.innerHTML = ConText.innerHTML + ConsoleText;
		ConText.scrollTop = ConText.scrollHeight;
	}
	
	else if(ConInText.value === "values /all")
	{

		ConsoleText = ConsoleText + "<p> >>  > List of commands</p><p style='text-align: justify;'> > ";
		for(i=0;i<ConTxtArray.length;i++)
		{

		ConsoleText = ConsoleText + ConTxtArray[i] + " = " + eval(ConTxtArray[i]) + "    ||    ";
		
		}
		ConsoleText = ConsoleText + "</p>";
		
		ConText.innerHTML = ConText.innerHTML + ConsoleText;
		ConText.scrollTop = ConText.scrollHeight;
	}
	
	else if((calculate ==="true")&&(isNaN(eval(ConInText.value)) === false))
	{
		document.getElementById("consolediv").innerHTML = document.getElementById("consolediv").innerHTML + "<p> >>  > Answer of (" + ConInText.value + ") is "+ eval(ConInText.value) + ".</p>";
		var elem = document.getElementById("consolediv");
		elem.scrollTop = elem.scrollHeight;
	}
	
	
	else{
		document.getElementById("consolediv").innerHTML = document.getElementById("consolediv").innerHTML + "<p> >>  > " + ConInText.value + " is invalid Input.</p>";
		var elem = document.getElementById("consolediv");
		elem.scrollTop = elem.scrollHeight;
		
		}
	AddConTxt(ConInText.value);
	ConInText.value = "";
	status = "false";
	calculate = "false";
	ConLog = 0;
}
function AddConTxt(text)
{
	ConAddeTxtArray[ConI] = text;
	ConI++;
}

function ShowConSoleLog(acTion)
{
	if((acTion==="Up")&&(ConI>0)){
		if(ConI>ConLog){ConLog++;}
		document.getElementById("ConsoleInput").value = ConAddeTxtArray[ConI-ConLog];
		
	}
	if((acTion==="Down")&&(ConI>0)){
		if((ConLog <= ConI)&&(ConLog > 1)){ConLog--;}
		document.getElementById("ConsoleInput").value = ConAddeTxtArray[ConI-ConLog];
	}
}