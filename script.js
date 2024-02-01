//notes
let DSProba = document.getElementById('notedsproba');
let EXProba = document.getElementById('noteexproba');
let DSGO = document.getElementById('notedsGO');
let EXGO = document.getElementById('notexGO');
let DSTLA = document.getElementById('notedsTLA');
let EXTLA = document.getElementById('noteexTLA');
let DSBD = document.getElementById('notedsBD');
let EXBD = document.getElementById('noteexBD');
let DSreseau = document.getElementById('notedsreseau');
let EXreseau = document.getElementById('noteexreseau');
let DSJava = document.getElementById('notedsJava');
let ExJava = document.getElementById('noteexJava');
let DSSI = document.getElementById('notedsSI');
let EXSI = document.getElementById('noteexSI');
let DSMath = document.getElementById('notedsMath');
let EXMath = document.getElementById('noteexMath');
let DSPhy = document.getElementById('notedsPhy');
let EXPhy = document.getElementById('noteexPhy');
let OrEng = document.getElementById('noteorEng');
let DSEng1 = document.getElementById('notedsEng1');
let DSEng2 = document.getElementById('notedsEng2');
let OrGE = document.getElementById('noteorGE');
let DSGE1 = document.getElementById('notedsGE1');
let DSGE2 = document.getElementById('notedsGE2');

//Resultat
let module1 = document.getElementById('MMP');
let module2 = document.getElementById('MMGT');
let module3 = document.getElementById('MMBR');
let module4 = document.getElementById('MMJS');
let module5 = document.getElementById('MMOption');
let module6 = document.getElementById('MMCC');

let moyenne = document.getElementById('moyenne');
let credit = document.getElementById('credit');

//Coefficients
    //Coefficients des matieres
let coeffProba = 2;
let coeffGO = 1;
let coeffTLA = 1;
let coeffBD = 1;
let coeffreseau = 1;
let coeffJava = 2;
let coeffSI = 1;
let coeffMath = 1.5;
let coeffPhy = 1.5;
let coeffEng = 1;
let coeffGE = 1;
    //Coefficients des modules
let coeffMod1 = coeffProba;
let coeffMod2 = coeffGO + coeffTLA;
let coeffMod3 = coeffBD + coeffreseau;
let coeffMod4 = coeffJava + coeffSI;
let coeffMod5 = coeffMath + coeffPhy;
let coeffMod6 = coeffEng + coeffGE;
    //Coefficients des notes
let coeffDS = 0.3;
let coeffEX = 0.7;
let coeffOr = 0.2;
let coeffDs1 = 0.4;
let coeffDs2 = 0.4;

//Calcul des moyennes
    //Calcul des moyennes des modules RM
function calculerM(ds1, ex1, ds2, ex2){
    return MM = ( (ds1 * coeffDS + ex1 * coeffEX) + (ds2 * coeffDS + ex2 * coeffEX) )/ 2;
}
    //Calcul des moyennes des modules CC
function calculerMCC(or1, ds1, ds2, or2, ds3, ds4){
    return MMCC = ((or1 * coeffOr)+(ds1 * coeffDs1)+(ds2 * coeffDs2) + (or2 * coeffOr)+(ds3 * coeffDs1)+(ds4 * coeffDs2))/2
}

function calculer(){
    Clear();

    module1.innerHTML += calculerM(DSProba.value, EXProba.value, 0, 0)*2;
    module2.innerHTML += calculerM(DSGO.value, EXGO.value, DSTLA.value, EXTLA.value);
    module3.innerHTML += calculerM(DSBD.value, EXBD.value, DSreseau.value, EXreseau.value);
    module4.innerHTML += calculerM(DSJava.value, ExJava.value, DSSI.value, EXSI.value);
    module5.innerHTML += calculerM(DSMath.value, EXMath.value, DSPhy.value, EXPhy.value);
    module6.innerHTML += calculerMCC(OrEng.value, DSEng1.value, DSEng2.value, OrGE.value, DSGE1.value, DSGE2.value);

}

function Clear(){
    module1.innerHTML = "Moyenne Module: "
    module2.innerHTML = "Moyenne Module: "
    module3.innerHTML = "Moyenne Module: "
    module4.innerHTML = "Moyenne Module: "
    module5.innerHTML = "Moyenne Module: "
    module6.innerHTML = "Moyenne Module: "

    moyenne.innerHTML = "Moyenne: ";
    credit.innerHTML = "Credit: ";
}