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
let EXJava = document.getElementById('noteexJava');
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
let coeffBD = 1.5;
let coeffreseau = 1;
let coeffJava = 2;
let coeffSI = 1.5;
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
let coeffTotal = coeffMod1 + coeffMod2 + coeffMod3 + coeffMod4 + coeffMod5 + coeffMod6
    //Coefficients des notes
let coeffDS = 0.3;
let coeffEX = 0.7;
let coeffOr = 0.2;
let coeffDs1 = 0.4;
let coeffDs2 = 0.4;

//credit
    //credit matiere
let creditProba = 4
let creditGo = 2
let creditTLA = 2
let creditBD = 3
let creditReseau = 2
let creditJava = 4
let creditSI = 3
let creditMath = 3
let creditPhy = 3
let creditEng = 2
let creditGE = 2

let creditMod1 = creditProba
let creditMod2 = creditGo + creditTLA
let creditMod3 = creditBD + creditReseau
let creditMod4 = creditJava + creditSI
let creditMod5 = creditMath + creditPhy
let creditMod6 = creditEng + creditGE
    //credit total

let CreditTotal = 0

//fonctions
function VerifValeur(x, y){
    if(x>20 || x<0){
        alert("Note de " + y + " entre 0 et 20")
        Clear();
    }
}

function calculerM(matiere1, matiere2, coef1, coef2){
    return  ((matiere1*coef1) + (matiere2*coef2 ))/ (coef1+coef2);
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

function verifCredit(mo, cmo, m1, m2, cm1, cm2){
    if(mo>=10){
        CreditTotal += cmo 
    }
    else{
        if(m1>=10){
            CreditTotal += cm1
        }
        else if(m2>=10){
            CreditTotal += cm2
        }
    }
}

function CalculeMoyenne(ds , ex){
    return (ds * coeffDS + ex * coeffEX)
}

function CalculeMoyenneCC(orale, ds1, ds2){
    return (orale * coeffOr + ds1 * coeffDs1 + ds2 * coeffDs2)
}


//main
function calculer(){
    Clear();
    CreditTotal = 0
    //verification des notes saisi
    VerifValeur(DSProba.value, "Proba")
    VerifValeur(EXProba.value, "Proba")
    VerifValeur(DSGO.value, "GO")
    VerifValeur(EXGO.value, "GO")
    VerifValeur(DSTLA.value, "TLA")
    VerifValeur(EXTLA.value, "TLA")
    VerifValeur(DSBD.value, "BD")
    VerifValeur(EXBD.value, "BD")
    VerifValeur(DSreseau.value, "Reseau")
    VerifValeur(EXreseau.value, "Reseau")
    VerifValeur(DSJava.value, "Java")
    VerifValeur(EXJava.value, "Java")
    VerifValeur(DSSI.value, "SI")
    VerifValeur(EXSI.value, "SI")
    VerifValeur(DSMath.value, "Math")
    VerifValeur(EXMath.value, "Math")
    VerifValeur(DSPhy.value, "Phy")
    VerifValeur(EXPhy.value, "Phy")
    VerifValeur(OrEng.value, "Anglais")
    VerifValeur(DSEng1.value, "Anglais")
    VerifValeur(DSEng2.value, "Anglais")
    VerifValeur(OrGE.value, "GE")
    VerifValeur(DSGE1.value, "GE")
    VerifValeur(DSGE2.value, "GE")

    //Calcul des moyennes
    let proba = CalculeMoyenne(DSProba.value, EXProba.value)
    let go = CalculeMoyenne(DSGO.value, EXGO.value)
    let tla = CalculeMoyenne(DSTLA.value, EXTLA.value)
    let bd = CalculeMoyenne(DSBD.value, EXBD.value)
    let reseau = CalculeMoyenne(DSreseau.value, EXreseau.value)
    let java = CalculeMoyenne(DSJava.value, EXJava.value)
    let si = CalculeMoyenne(DSSI.value, EXSI.value)
    let math = CalculeMoyenne(DSMath.value, EXMath.value)
    let phy = CalculeMoyenne(DSPhy.value, EXPhy.value)
    let eng = CalculeMoyenneCC(OrEng.value, DSEng1.value, DSEng2.value)
    let ge = CalculeMoyenneCC(OrGE.value, DSGE1.value, DSGE2.value)

    //calcul des modules
    let m1 = calculerM(proba, 0, coeffProba, 0);
    let m2 = calculerM(go, tla, coeffGO, coeffTLA);
    let m3 = calculerM(bd, reseau, coeffBD, coeffreseau);
    let m4 = calculerM(java, si, coeffJava, coeffSI);
    let m5 = calculerM(math, phy, coeffMath, coeffPhy);
    let m6 = calculerM(eng, ge, coeffEng, coeffGE);

    //credit
    verifCredit(m1, creditMod1, proba, 0, creditProba, 0)
    verifCredit(m2, creditMod2, go, tla, creditGo, creditTLA)
    verifCredit(m3, creditMod3, bd, reseau, creditBD, creditReseau)
    verifCredit(m4, creditMod4, java, si, creditJava, creditSI)
    verifCredit(m5, creditMod5, math, phy, creditMath, creditPhy)
    verifCredit(m6, creditMod6, eng, ge, creditEng, creditGE)
    
    //affichage
    module1.innerHTML += m1.toFixed(2)
    module2.innerHTML += m2.toFixed(2)
    module3.innerHTML += m3.toFixed(2)
    module4.innerHTML += m4.toFixed(2)
    module5.innerHTML += m5.toFixed(2)
    module6.innerHTML += m6.toFixed(2)
    moyenne.innerHTML += (((m1*coeffMod1) + (m2*coeffMod2) + (m3*coeffMod3) + (m4*coeffMod4) + (m5*coeffMod5) + (m6*coeffMod6))/ coeffTotal).toFixed(2)
    credit.innerHTML += CreditTotal

}
