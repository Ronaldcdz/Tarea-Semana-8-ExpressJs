const express = require("express");
const router = express.Router();

const array16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];       //Arrays con elementos para simular un for 
// que se ejecute n veces porque no encontre
const array10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];                         // una forma de usar un for con handlebars

const array3 = [0, 0, 0];

tablePeriodicNull = [];



let tablePeriodic = [{ symbol: "H", group: "otros-no-metales", num: 1 }, { symbol: "He", group: "gases-nobles", num: 2 },
{ symbol: "Li", group: "alcalinos", num: 3 }, { symbol: "Be", group: "alcalinoterreos", num: 4 }, { symbol: "B", group: "metaloides", num: 5 }, { symbol: "C", group: "otros-no-metales", num: 6 },
{ symbol: "N", group: "otros-no-metales", num: 7 }, { symbol: "O", group: "otros-no-metales", num: 8 }, { symbol: "F", group: "halogenos", num: 9 }, { symbol: "Ne", group: "gases-nobles", num: 10 },
{ symbol: "Na", group: "alcalinos", num: 11 }, { symbol: "Mg", group: "alcalinoterreos", num: 12 }, { symbol: "Al", group: "otros-metales", num: 13 }, { symbol: "Si", group: "metaloides", num: 14 },
{ symbol: "P", group: "otros-no-metales", num: 15 }, { symbol: "S", group: "otros-no-metales", num: 16 }, { symbol: "Cl", group: "halogenos", num: 17 }, { symbol: "Ar", group: "gases-nobles", num: 18 },
{ symbol: "K", group: "alcalinos", num: 19 }, { symbol: "Ca", group: "alcalinoterreos", num: 20 }, { symbol: "Sc", group: "metales-transicion", num: 21 }, { symbol: "Ti", group: "metales-transicion", num: 22 },
{ symbol: "V", group: "metales-transicion", num: 23 }, { symbol: "Cr", group: "metales-transicion", num: 24 }, { symbol: "Mn", group: "metales-transicion", num: 25 }, { symbol: "Fe", group: "metales-transicion", num: 26 },
{ symbol: "Co", group: "metales-transicion", num: 27 }, { symbol: "Ni", group: "metales-transicion", num: 28 }, { symbol: "Cu", group: "metales-transicion", num: 29 }, { symbol: "Zn", group: "metales-transicion", num: 30 },
{ symbol: "Ga", group: "otros-metales", num: 31 }, { symbol: "Ge", group: "metaloides", num: 32 }, { symbol: "As", group: "metaloides", num: 33 }, { symbol: "Se", group: "otros-no-metales", num: 34 },
{ symbol: "Br", group: "halogenos", num: 35 }, { symbol: "Kr", group: "gases-nobles", num: 36 }, { symbol: "Rb", group: "alcalinos", num: 37 }, { symbol: "Sr", group: "alcalinoterreos", num: 38 },
{ symbol: "Y", group: "metales-transicion", num: 39 }, { symbol: "Zr", group: "metales-transicion", num: 40 }, { symbol: "Nb", group: "metales-transicion", num: 41 }, { symbol: "Mo", group: "metales-transicion", num: 42 },
{ symbol: "Tc", group: "metales-transicion", num: 43 }, { symbol: "Ru", group: "metales-transicion", num: 44 }, { symbol: "Rh", group: "metales-transicion", num: 45 }, { symbol: "Pd", group: "metales-transicion", num: 46 },
{ symbol: "Ag", group: "metales-transicion", num: 47 }, { symbol: "Cd", group: "metales-transicion", num: 48 }, { symbol: "In", group: "otros-metales", num: 49 }, { symbol: "Sn", group: "otros-metales", num: 50 },
{ symbol: "Sb", group: "metaloides", num: 51 }, { symbol: "Te", group: "metaloides", num: 52 }, { symbol: "I", group: "halogenos", num: 53 }, { symbol: "Xe", group: "gases-nobles", num: 54 },
{ symbol: "Cs", group: "alcalinos", num: 55 }, { symbol: "Ba", group: "alcalinoterreos", num: 56 }, { symbol: "La-Lu", group: "lantanidos", num: 57 }, { symbol: "Hf", group: "metales-transicion", num: 58 },
{ symbol: "Ta", group: "metales-transicion", num: 59 }, { symbol: "W", group: "metales-transicion", num: 60 }, { symbol: "Re", group: "metales-transicion", num: 61 }, { symbol: "Os", group: "metales-transicion", num: 62 },
{ symbol: "Ir", group: "metales-transicion", num: 63 }, { symbol: "Pt", group: "metales-transicion", num: 64 }, { symbol: "Au", group: "metales-transicion", num: 65 }, { symbol: "Hg", group: "metales-transicion", num: 66 },
{ symbol: "Tl", group: "otros-metales", num: 67 }, { symbol: "Pb", group: "otros-metales", num: 68 }, { symbol: "Bi", group: "otros-metales", num: 69 }, { symbol: "Po", group: "metaloides", num: 70 }, { symbol: "At", group: "halogenos", num: 71 },
{ symbol: "Rn", group: "gases-nobles", num: 72 }, { symbol: "Fr", group: "alcalinos", num: 73 }, { symbol: "Ra", group: "alcalinoterreos", num: 74 }, { symbol: "Ac-Lr", group: "actinidos", num: 75 },
{ symbol: "Rf", group: "metales-transicion", num: 76 }, { symbol: "Db", group: "metales-transicion", num: 77 }, { symbol: "Sg", group: "metales-transicion", num: 78 }, { symbol: "Bh", group: "metales-transicion", num: 79 },
{ symbol: "Hs", group: "metales-transicion", num: 80 }, { symbol: "Mt", group: "metales-transicion", num: 81 }, { symbol: "Ds", group: "metales-transicion", num: 82 }, { symbol: "Rg", group: "metales-transicion", num: 83 },
{ symbol: "Cn", group: "metales-transicion", num: 84 }, { symbol: "Nh", group: "otros-metales", num: 85 }, { symbol: "Fl", group: "otros-metales", num: 86 }, { symbol: "Mc", group: "otros-metales", num: 87 },
{ symbol: "Lv", group: "otros-metales", num: 88 }, { symbol: "Ts", group: "halogenos", num: 89 }, { symbol: "Og", group: "gases-nobles", num: 90 }, { symbol: "La", group: "lantanidos", num: 91 }, { symbol: "Ce", group: "lantanidos", num: 92 },
{ symbol: "Pr", group: "lantanidos", num: 93 }, { symbol: "Nd", group: "lantanidos", num: 94 }, { symbol: "Pm", group: "lantanidos", num: 95 }, { symbol: "Sm", group: "lantanidos", num: 96 }, { symbol: "Eu", group: "lantanidos", num: 97 },
{ symbol: "Gd", group: "lantanidos", num: 98 }, { symbol: "Tb", group: "lantanidos", num: 99 }, { symbol: "Dy", group: "lantanidos", num: 100 }, { symbol: "Ho", group: "lantanidos", num: 101 }, { symbol: "Er", group: "lantanidos", num: 102 },
{ symbol: "Tm", group: "lantanidos", num: 103 }, { symbol: "Yb", group: "lantanidos", num: 104 }, { symbol: "Lu", group: "lantanidos", num: 105 }, { symbol: "Ac", group: "actinidos", num: 106 }, { symbol: "Th", group: "actinidos", num: 107 },
{ symbol: "Pa", group: "actinidos", num: 108 }, { symbol: "U", group: "actinidos", num: 109 }, { symbol: "Np", group: "actinidos", num: 110 }, { symbol: "Pu", group: "actinidos", num: 111 }, { symbol: "Am", group: "actinidos", num: 112 }, { symbol: "Cm", group: "actinidos", num: 113 },
{ symbol: "Bk", group: "actinidos", num: 114 }, { symbol: "Cf", group: "actinidos", num: 115 }, { symbol: "Es", group: "actinidos", num: 116 }, { symbol: "Fm", group: "actinidos", num: 117 }, { symbol: "Md", group: "actinidos", num: 118 },
{ symbol: "No", group: "actinidos", num: 119 }, { symbol: "Lr", group: "actinidos", num: 120 }];


router.get("/", (req, res, next) => {

    res.status(200);
    res.render("home", {
        layout: false,
        tablePeriodic: tablePeriodic,
        array16: array16,
        array10: array10,
        array3: array3,
        tablePeriodicNull: tablePeriodicNull
    });
})


module.exports = router;