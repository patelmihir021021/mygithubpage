// Height of tank = hoftank || Lenght of tank = loftank || Weight of tank = woftank
// Volume of tank = vol
var hoftank = null ;
var inputhoftank;
var byvolhoftank;
var loftank = null ;
var inputloftank;
var byvolloftank;
var woftank = null ;
var inputwoftank;
var byvolwoftank;
var vol;
var inputvol;
var smallh;
var d;
var reqdepth;
var D;
var dofBaseSlab;
//script variables
var wi;
var li;
//Design variables
var sigmacbc;
var sigmast;
// Grade of concrete
var gc;
//Modular Ratio
var m;
//Neutral axis constant
var k;
//Lever arm constant
var j;
//Moment of resistance factor
var Q;
//Moment of resistance
var MR;
//Earth Pressure and it's various variables
var pa;
var p;
var ka;
var gamadash;
var gamaw = 10;
//Fixed End Moments
var mfAB;
var mfAD;
//Variables for Disribution Factor
var dfofAB;
var kofAB;
var totalk;
var dfofAD;
var kofAD;
var FMAD;
var FMAB;
var balAB;
var balAD;
//Bending Moments and Direct Tension
var bmatcenofAB;
var bmatcenofAD;
var tenatloftank;
var tenatwoftank;
//Area of steel
var Aatat;
var AstLW;
var AstSW;
var AstcenLW;
var AstcenSW;
var x;
var ModM;
var Ast1;
var Ast2;
var TotalAst;
var M;
var RequiredAst;
var ProvidedAst;
var AstDia;
var NumOfbars;
var NumOfBarsAstLW;
var DiaOfLW;
var NumOfBarsAstSW;
var DiaOfSW;
var NumOfBarsAstcenLW;
var DiaOfCenLW;
var NumOfBarsAstcenSW;
var DiaOfCenSW;
var NumOfBarsInVertLW;
var DiaOfInVertLW;
var NumOfBarsInHoriLW;
var DiaOfInHoriLW;
var NumOfBarsOutVertLW;
var DiaOfOutVertLW;
var NumOfBarsOutHoriLW;
var DiaOfOutHoriLW;
var NumOfBarsInVertSW;
var DiaOfInVertSW;
var NumOfBarsInHoriSW;
var DiaOfInHoriSW;
var NumOfBarsOutVertSW;
var DiaOfOutVertSW;
var NumOfBarsOutHoriSW;
var DiaOfOutHoriSW;
var NumOfBarsUpBaseSlabWithL;
var DiaOfUpBaseSlabWithL;
var NumOfBarsDownBaseSlabWithL;
var DiaOfDownBaseSlabWithL;
var NumOfBarsUpBaseSlabWithW;
var DiaOfUpBaseSlabWithW;
var NumOfBarsDownBaseSlabWithW;
var DiaOfDownBaseSlabWithW;
var DistAst;
var BMatBase;
var AstBot;
var AstBaseSteel;
var DistAstInWalls;
//Html console input and output variables
var ConInText = document.getElementById("ConsoleInput");
var ConText = document.getElementById("consolediv");
var printText = "";
function cal() {
    $('body').loadie(0.1);
    inputvol = document.getElementById("voloftank").value;
    inputhoftank = document.getElementById("height").value;
    inputloftank = document.getElementById("lenght").value;
    inputwoftank = document.getElementById("width").value;
    gc = document.getElementById("gc").value;
    if (document.getElementById("rbtn1").checked === true) {
        loftank = document.getElementById("byvolloftank").value;
        woftank = document.getElementById("byvolwoftank").value;
        hoftank = document.getElementById("byvolhoftank").value;
        vol = inputvol * Math.pow(10, 9);
        if (byvolloftank = "") {
            loftank = 1000;
        }
        if (byvolwoftank = "") {
            woftank = 1000;
        }
        if (byvolhoftank = "") {
            hoftank = 4000;
        }
        widthoftank();
        pTxAdd("loftank", loftank);
        pTxAdd("woftank", woftank);
        pTxAdd("hoftank", hoftank);
        pTxAdd("vol", vol);
    }
    if (document.getElementById("rbtn2").checked === true) {
        loftank = inputloftank;
        woftank = inputwoftank;
        hoftank = inputhoftank;
        vol = loftank * woftank * hoftank;
        pTxAdd("loftank");
        pTxAdd("woftank");
        pTxAdd("hoftank");
        pTxAdd("vol");
    }
    if ((hoftank / 4) > 1000) {
        smallh = hoftank * 0.25;
    } else {
        smallh = 1000;
    }
    pTxAdd("smallh");
    designconstants();
    contframe();
}
function designbychange(value) {
    if (value === "dim") {
        dimshow();
    }
    if (value === "volume") {
        volshow();
    }
}
var dimobj = ["lrow", "wrow", "hrow"];
var byvoldimobj = ["byvollrow", "byvolwrow", "byvolhrow"];
var volrow = ["volrow"];
//Display:none;
function dimshow() {
    document.getElementById("volrow").style.display = "none";
    for (var i = 0; i < 3; i++) {
        var dimobj = ["lrow", "wrow", "hrow"];
        document.getElementById(dimobj[i]).style.display = "table-row";
    }
    for (var i = 0; i < 3; i++) {
        var byvoldimobj = ["byvollrow", "byvolwrow", "byvolhrow"];
        document.getElementById(byvoldimobj[i]).style.display = "none";
    }
}
//Display:table-row;
function volshow() {
    document.getElementById(volrow).style.display = "table-row";
    for (var i = 0; i < 3; i++) {
        var dimobj = ["lrow", "wrow", "hrow"];
        document.getElementById(dimobj[i]).style.display = "none";
    }
    for (var i = 0; i < 3; i++) {
        var byvoldimobj = ["byvollrow", "byvolwrow", "byvolhrow"];
        document.getElementById(byvoldimobj[i]).style.display = "table-row";
    }
}
function widthoftank() {
    for (wi = parseFloat(woftank); parseFloat(vol) > (hoftank * parseFloat(loftank) * parseFloat(woftank)); wi = wi + 50) {
        if (loftank / 2.2 < woftank) {
            lengthoftank(parseFloat(loftank));
        }
        if ((parseFloat(loftank)) > ((parseFloat(woftank) + 50) * 2)) {
            woftank = (parseFloat(woftank) + 50);
        }
    }
}
function lengthoftank(ltoftank) {
    if (parseFloat(vol) > (hoftank * parseFloat(ltoftank) * parseFloat(woftank))) {
        loftank = (parseFloat(loftank) + 50);
    }
}
function designconstants() {
    if (gc = "m30") {
        sigmacbc = 10;
        sigmast = 130;
    }
    m = (280 / (3 * sigmacbc));
    k = ((m * sigmacbc) / (m * sigmacbc + sigmast));
    j = (1 - (k / 3));
    Q = (0.5 * sigmacbc * k * j);
    pTxAdd("m");
    pTxAdd("k");
    pTxAdd("j");
    pTxAdd("Q");
}
function contframe() {
    document.getElementsByClassName("loadie").style = "";
    p = gamaw * (hoftank - smallh) * Math.pow(10, -3);
    pTxAdd("p");
    pa = gamaw * hoftank * Math.pow(10, -3);
    pTxAdd("pa");
    prtTxAdd("Pressure at bottom is calculated sucsessfully");
    FEM();
    prtTxAdd("FEM is calculated sucsessfully");
    DF();
    prtTxAdd("Distribution Factor is calculated sucsessfully");
    MD();
    prtTxAdd("Moment Distibution is calculated sucsessfully");
    $('body').loadie(0.25);
    BMandDT();
    prtTxAdd("Bending Moment and Direct Tention is calculated sucsessfully");
    findDepth();
    prtTxAdd("Required Depth is calculated sucsessfully");
    accuratedepth();
    prtTxAdd("Provided Depth is calculated sucsessfully");
    $('body').loadie(0.5);
    astcal();
    prtTxAdd("Requred Ast and Provided Ast is calculated sucsessfully");
    CantAtBase();
    prtTxAdd("Cantilever action of bottom is calculated sucsessfully");
    AstBaseSlab();
    prtTxAdd("Cantilever action of bottom is calculated sucsessfully");
    pTxAdd("AstLW");
    pTxAdd("AstcenLW");
    pTxAdd("AstSW");
    pTxAdd("AstcenSW");
    pTxAdd("AstBot");
    pTxAdd("DistAstInWalls");
    mmTometer();
    var DisDivBody = document.getElementById("page");
    document.getElementById("DrawingDiv").style.display = "block";
    setTimeout(function() {
        fig1();
        $('body').loadie(0.6);
    }, 200);
    prtTxAdd("Figure 1 is Genereted");
    $("canvas1").fadeIn(2000);
    setTimeout(function() {
        fig2();
        $('body').loadie(0.7);
    }, 400);
    prtTxAdd("Figure 2 is Genereted");
    setTimeout(function() {
        fig3();
        $('body').loadie(0.8);
    }, 600);
    prtTxAdd("Figure 3 is Genereted");
    setTimeout(function() {
        fig4();
        $('body').loadie(0.9);
        $('body').loadie(1);
    }, 800);
    prtTxAdd("Figure 4 is Genereted");
    printAllText();
}
function FEM() {
    mfAB = ((-1) * p * loftank * loftank * Math.pow(10, (-6))) / 12;
    pTxAdd("mfAB");
    mfAD = (p * woftank * woftank * Math.pow(10, (-6))) / 12;
    pTxAdd("mfAD");
}
function DF() {
    kofAB = 4 / (loftank * Math.pow(10, -3));
    kofAD = 4 / (woftank * Math.pow(10, -3));
    pTxAdd("kofAB");
    pTxAdd("kofAD");
    totalk = kofAB + kofAD;
    pTxAdd("totalk");
    dfofAB = kofAB / totalk;
    dfofAD = kofAD / totalk;
    pTxAdd("dfofAB");
    pTxAdd("dfofAD");
}
function MD() {
    balAD = dfofAD * (mfAB + mfAD);
    if (balAD < 0) {
        balAD = balAD * (-1);
    }
    balAB = dfofAB * (mfAB + mfAD);
    if (balAB < 0) {
        balAB = balAB * (-1);
    }
    pTxAdd("balAD");
    pTxAdd("balAB");
    FMAD = mfAD + balAD;
    FMAB = mfAB + balAB;
    pTxAdd("FMAD");
    pTxAdd("FMAB");
}
function BMandDT() {
    if (FMAB < 0) {
        FMAB = FMAB * (-1);
    }
    if (FMAD < 0) {
        FMAD = FMAD * (-1);
    }
    bmatcenofAB = ((p * loftank * loftank * Math.pow(10, -6)) / 8) - FMAB;
    bmatcenofAD = ((p * woftank * woftank * Math.pow(10, -6)) / 8) - FMAD;
    tenatloftank = p * woftank * 0.5 * Math.pow(10, -3);
    tenatwoftank = p * loftank * 0.5 * Math.pow(10, -3);
    pTxAdd("bmatcenofAB");
    pTxAdd("bmatcenofAD");
    pTxAdd("tenatloftank");
    pTxAdd("tenatwoftank");
}
function findDepth() {
    if (FMAD < 0) {
        FMAD = FMAD * (-1);
    }
    MR = FMAD;
    pTxAdd("MR");
    d = Math.sqrt(MR / (Q * 1000));
    d = d * 1000;
    pTxAdd("Q");
    pTxAdd("d");
}
function accuratedepth() {
    var i = 0;
    d = d.toFixed(7);
    pTxAdd("d");
    d = (parseFloat(d) + 50);
    pTxAdd("d");
    for (i = 0; i < d; ) {
        if (i > (d - 50)) {
            d = i + 50;
            pTxAdd("d");
            reqdepth = d;
            D = reqdepth + 50;
            pTxAdd("D");
        }
        i = i + 50;
    }
}
function ast(Astat, M0, T) {
    M = M0;
    x = (((D / 2) - 50) / 1000);
    ModM = M - T * x;
    ModM = (ModM * 1000000);
    pTxAdd("M");
    pTxAdd("ModM");
    pTxAdd("sigmast");
    pTxAdd("j");
    pTxAdd("d");
    Ast1 = (ModM / (sigmast * j * d));
    if (Ast1 < 0) {
        Ast1 = (Ast1 * (-1));
    }
    if (T !== "") {
        Ast2 = T * 1000 / sigmast;
        if (Ast2 < 0) {
            Ast2 = (Ast2 * (-1));
        }
    }
    TotalAst = parseFloat(parseFloat(Ast1) + parseFloat(Ast2));
    window.Astat = TotalAst;
    pTxAdd("x");
    pTxAdd("ModM");
    pTxAdd("Ast1");
    if (T !== "") {
        pTxAdd("Ast2");
    }
    pTxAdd("TotalAst");
    prtTxAdd(Astat);
    prtTxAdd(window.Astat);
}
function astcal() {
    AstMini(D * 0.5);
    DistAstInWalls = DistAst;
    ast("AstLW", FMAB, tenatloftank);
    AstLW = Astat;
    ast("AstSW", FMAD, tenatwoftank);
    AstSW = Astat;
    ast("AstcenLW", bmatcenofAB, tenatloftank);
    AstcenLW = Astat;
    ast("AstcenSW", bmatcenofAD, tenatwoftank);
    AstcenSW = Astat;
    provideAst("AstLW");
    NumOfBarsAstLW = NumOfbars;
    DiaOfLW = AstDia;
    pTxAdd("NumOfbars");
    pTxAdd("AstDia");
    NumOfBarsInHoriLW = NumOfBarsAstLW;
    DiaOfInHoriLW = DiaOfLW;
    provideAst("AstSW");
    NumOfBarsAstSW = NumOfbars;
    DiaOfSW = AstDia;
    NumOfBarsInHoriSW = NumOfBarsAstSW;
    DiaOfInHoriSW = DiaOfSW;
    provideAst("AstcenLW");
    NumOfBarsAstcenLW = NumOfbars;
    DiaOfCenLW = AstDia;
    NumOfBarsOutHoriLW = NumOfBarsAstcenLW;
    DiaOfOutHoriLW = DiaOfCenLW;
    provideAst("AstcenSW");
    NumOfBarsAstcenSW = NumOfbars;
    DiaOfCenSW = AstDia;
    NumOfBarsOutHoriSW = NumOfBarsAstcenSW;
    DiaOfOutHoriSW = DiaOfCenSW;
    ProvideAstFromAstMin(DistAstInWalls, (loftank - 2 * d));
    NumOfBarsInVertLW = NumOfbars;
    DiaOfInVertLW = AstDia;
    ProvideAstFromAstMin(DistAstInWalls, loftank);
    NumOfBarsOutVertLW = NumOfbars;
    DiaOfOutVertLW = AstDia;
    ProvideAstFromAstMin(DistAstInWalls, (woftank - 2 * d));
    NumOfBarsInVertSW = NumOfbars;
    DiaOfInVertSW = AstDia;
    ProvideAstFromAstMin(DistAstInWalls, woftank);
    NumOfBarsOutVertSW = NumOfbars;
    DiaOfOutVertSW = AstDia;
    var DetailedAst = ["NumOfBarsInVertLW", "DiaOfInVertLW", "NumOfBarsInHoriLW", "DiaOfInHoriLW", "NumOfBarsOutVertLW", "DiaOfOutVertLW", "NumOfBarsOutHoriLW", "DiaOfOutHoriLW", "NumOfBarsInVertSW", "DiaOfInVertSW", "NumOfBarsInHoriSW", "DiaOfInHoriSW", "NumOfBarsOutVertSW", "DiaOfOutVertSW", "NumOfBarsOutHoriSW", "DiaOfOutHoriSW"];
    for (var i = 0; i < 16; i++) {
        pTxAdd(DetailedAst[i]);
    }
}
function CantAtBase() {
    BMatBase = 0.5 * pa * smallh * smallh * (1 / 3);
    Ast1 = (BMatBase / (sigmast * j * d));
    if (Ast1 < 0) {
        Ast1 = (Ast1 * (-1));
    }
    pTxAdd("Ast1");
    AstMini((D * 0.5));
    pTxAdd("DistAst");
    AstBot = Ast1;
    if (AstBot < DistAst) {
        AstBot = DistAst;
    }
    pTxAdd("AstBot");
}
function AstMini(depth) {
    DistAst = (depth * 10 * 0.24);
}
function ProvideAstFromAstMin(RequiredAst, length) {
    RequiredAst = RequiredAst * length * Math.pow(10, -3);
    var minspacing = 100;
    var astbars = ["8", "10", "12", "16", "20"];
    pt(parseFloat(RequiredAst).toFixed(4));
    ProvidedAst = 0;
    for (var i = 0; RequiredAst > ProvidedAst; i++) {
        for (var j = 0; (RequiredAst > ProvidedAst) && (j < 24); j++) {
            ProvidedAst = Math.PI * 0.25 * astbars[i] * astbars[i] * j;
            window.AstDia = astbars[i];
            if (RequiredAst < ProvidedAst) {
                ProvidedAst = Math.PI * 0.25 * astbars[i] * astbars[i] * (j + 1);
                window.NumOfbars = j;
            }
        }
    }
    var text = ["Required Ast = " + parseFloat(RequiredAst).toFixed(4) + "mm and Provided Ast = " + parseFloat(ProvidedAst).toFixed(4) + " mm  with " + NumOfbars + " bars of " + AstDia + "mm Diameter"];
    pt(text);
}
function AstBaseSlab() {
    dofBaseSlab = 200;
    AstMini(dofBaseSlab * 0.5);
    AstBaseSteel = DistAst;
    pTxAdd("AstBaseSteel");
    ProvideAstFromAstMin(DistAst, loftank);
    NumOfBarsUpBaseSlabWithL = NumOfbars;
    DiaOfUpBaseSlabWithL = AstDia;
    ProvideAstFromAstMin(DistAst, loftank);
    NumOfBarsDownBaseSlabWithL = NumOfbars;
    DiaOfDownBaseSlabWithL = AstDia;
    ProvideAstFromAstMin(DistAst, woftank);
    NumOfBarsUpBaseSlabWithW = NumOfbars;
    DiaOfUpBaseSlabWithW = AstDia;
    ProvideAstFromAstMin(DistAst, woftank);
    NumOfBarsDownBaseSlabWithW = NumOfbars;
    DiaOfDownBaseSlabWithW = AstDia;
}
function provideAst(RequiredAst) {
    var minspacing = 100;
    var astbars = ["8", "10", "12", "16", "20"];
    RequiredAst = eval(RequiredAst);
    ProvidedAst = 0;
    for (var i = 0; RequiredAst > ProvidedAst; i++) {
        for (var j = 0; (RequiredAst > ProvidedAst) && (j < 30); j++) {
            ProvidedAst = Math.PI * 0.25 * astbars[i] * astbars[i] * j;
            AstDia = astbars[i];
            if (RequiredAst < ProvidedAst) {
                ProvidedAst = Math.PI * 0.25 * astbars[i] * astbars[i] * (j + 1);
                NumOfbars = j;
            }
        }
    }
    var text = ["Required Ast = " + parseFloat(RequiredAst).toFixed(4) + "mm and Provided Ast = " + parseFloat(ProvidedAst).toFixed(4) + " mm  with " + NumOfbars + " bars of " + AstDia + "mm Diameter"];
    pt(text);
}
function print(name) {
    document.getElementById("consolediv").innerHTML = document.getElementById("consolediv").innerHTML + "<p> " + ">>  >" + name + " = " + parseFloat(eval(name)).toFixed(4) + ". </p>";
    //document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + "<tr><td class='consoltext'> " + ">> " + process + " > </td><td class='consoltext'>"+ name + "</td><td class='consoltext'> = </td><td class='consoltext'>" + parseFloat(eval(name)).toFixed(4) + ". </td></tr>";
    var elem = document.getElementById("consolediv");
    elem.scrollTop = elem.scrollHeight;
}
function pTxAdd(name) {
    printText = printText + "<p> " + ">>  >" + name + " = " + parseFloat(eval(name)).toFixed(4) + ". </p>";
}
function prt(functioncompleted) {
    ConText.innerHTML = ConText.innerHTML + "<p style='text-align:center;'> ";
    for (var i = 0; i < 121 && (i < ((120 - functioncompleted.length) * 0.5)); i++) {
        ConText.innerHTML = ConText.innerHTML + "-";
    }
    ConText.innerHTML = ConText.innerHTML + "|| " + functioncompleted + " ||";
    for (var i = 0; i < 121 && (i < ((116 - functioncompleted.length) * 0.5)); i++) {
        ConText.innerHTML = ConText.innerHTML + "-";
    }
    ConText.innerHTML = ConText.innerHTML + "</p>";
    ConText.scrollTop = elem.scrollHeight;
}
function prtTxAdd(functioncompleted) {
    printText = printText + "<p style='text-align:center;'> ";
    for (var i = 0; i < 121 && (i < ((120 - functioncompleted.length) * 0.5)); i++) {
        printText = printText + "-";
    }
    printText = printText + "|| " + functioncompleted + " ||";
    for (var i = 0; i < 121 && (i < ((116 - functioncompleted.length) * 0.5)); i++) {
        printText = printText + "-";
    }
    printText = printText + "</p>";
}
function pt(functioncompleted) {
    document.getElementById("consolediv").innerHTML = document.getElementById("consolediv").innerHTML + "<p> >>  > " + functioncompleted + ".</p>";
    //document.getElementById("console").innerHTML = document.getElementById("console").innerHTML + "<tr><td colspan='4' class='consoltext'> " + ">> ------|| " + functioncompleted + " ||------ << </td></tr>";
    var elem = document.getElementById("consolediv");
    elem.scrollTop = elem.scrollHeight;
}
function printAllText() {
    var ConText = document.getElementById("consolediv");
    ConText.innerHTML = ConText.innerHTML + printText;
    ConText.scrollTop = ConText.scrollHeight;
}
