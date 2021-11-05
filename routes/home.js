const express = require("express");
const router = express.Router();

const array16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];       //Arrays con elementos para simular un for 
// que se ejecute n veces porque no encontre
const array10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];                         // una forma de usar un for con handlebars

const array3 = [0, 0, 0];



let tablePeriodic = [{ symbol: "H", group: "otros-no-metales" }, { symbol: "He", group: "gases-nobles" },
{ symbol: "Li", group: "alcalinos" }, { symbol: "Be", group: "alcalinoterreos" }, { symbol: "B", group: "metaloides" }, { symbol: "C", group: "otros-no-metales" },
{ symbol: "N", group: "otros-no-metales" }, { symbol: "O", group: "otros-no-metales" }, { symbol: "F", group: "halogenos" }, { symbol: "Ne", group: "gases-nobles" },
{ symbol: "Na", group: "alcalinos" }, { symbol: "Mg", group: "alcalinoterreos" }, { symbol: "Al", group: "otros-metales" }, { symbol: "Si", group: "metaloides" },
{ symbol: "P", group: "otros-no-metales" }, { symbol: "S", group: "otros-no-metales" }, { symbol: "Cl", group: "halogenos" }, { symbol: "Ar", group: "gases-nobles" },
{ symbol: "K", group: "alcalinos" }, { symbol: "Ca", group: "alcalinoterreos" }, { symbol: "Sc", group: "metales-transicion" }, { symbol: "Ti", group: "metales-transicion" },
{ symbol: "V", group: "metales-transicion" }, { symbol: "Cr", group: "metales-transicion" }, { symbol: "Mn", group: "metales-transicion" }, { symbol: "Fe", group: "metales-transicion" },
{ symbol: "Co", group: "metales-transicion" }, { symbol: "Ni", group: "metales-transicion" }, { symbol: "Cu", group: "metales-transicion" }, { symbol: "Zn", group: "metales-transicion" },
{ symbol: "Ga", group: "otros-metales" }, { symbol: "Ge", group: "metaloides" }, { symbol: "As", group: "metaloides" }, { symbol: "Se", group: "otros-no-metales" },
{ symbol: "Br", group: "halogenos" }, { symbol: "Kr", group: "gases-nobles" }, { symbol: "Rb", group: "alcalinos" }, { symbol: "Sr", group: "alcalinoterreos" },
{ symbol: "Y", group: "metales-transicion" }, { symbol: "Zr", group: "metales-transicion" }, { symbol: "Nb", group: "metales-transicion" }, { symbol: "Mo", group: "metales-transicion" },
{ symbol: "Tc", group: "metales-transicion" }, { symbol: "Ru", group: "metales-transicion" }, { symbol: "Rh", group: "metales-transicion" }, { symbol: "Pd", group: "metales-transicion" },
{ symbol: "Ag", group: "metales-transicion" }, { symbol: "Cd", group: "metales-transicion" }, { symbol: "In", group: "otros-metales" }, { symbol: "Sn", group: "otros-metales" },
{ symbol: "Sb", group: "metaloides" }, { symbol: "Te", group: "metaloides" }, { symbol: "I", group: "halogenos" }, { symbol: "Xe", group: "gases-nobles" },
{ symbol: "Cs", group: "alcalinos" }, { symbol: "Ba", group: "alcalinoterreos" }, { symbol: "La-Lu", group: "lantanidos" }, { symbol: "Hf", group: "metales-transicion" },
{ symbol: "Ta", group: "metales-transicion" }, { symbol: "W", group: "metales-transicion" }, { symbol: "Re", group: "metales-transicion" }, { symbol: "Os", group: "metales-transicion" },
{ symbol: "Ir", group: "metales-transicion" }, { symbol: "Pt", group: "metales-transicion" }, { symbol: "Au", group: "metales-transicion" }, { symbol: "Hg", group: "metales-transicion" },
{ symbol: "Tl", group: "otros-metales" }, { symbol: "Pb", group: "otros-metales" }, { symbol: "Bi", group: "otros-metales" }, { symbol: "Po", group: "metaloides" }, { symbol: "At", group: "halogenos" },
{ symbol: "Rn", group: "gases-nobles" }, { symbol: "Fr", group: "alcalinos" }, { symbol: "Ra", group: "alcalinoterreos" }, { symbol: "Ac-Lr", group: "actinidos" },
{ symbol: "Rf", group: "metales-transicion" }, { symbol: "Db", group: "metales-transicion" }, { symbol: "Sg", group: "metales-transicion" }, { symbol: "Bh", group: "metales-transicion" },
{ symbol: "Hs", group: "metales-transicion" }, { symbol: "Mt", group: "metales-transicion" }, { symbol: "Ds", group: "metales-transicion" }, { symbol: "Rg", group: "metales-transicion" },
{ symbol: "Cn", group: "metales-transicion" }, { symbol: "Nh", group: "otros-metales" }, { symbol: "Fl", group: "otros-metales" }, { symbol: "Mc", group: "otros-metales" },
{ symbol: "Lv", group: "otros-metales" }, { symbol: "Ts", group: "halogenos" }, { symbol: "Og", group: "gases-nobles" }, { symbol: "La", group: "lantanidos" }, { symbol: "Ce", group: "lantanidos" },
{ symbol: "Pr", group: "lantanidos" }, { symbol: "Nd", group: "lantanidos" }, { symbol: "Pm", group: "lantanidos" }, { symbol: "Sm", group: "lantanidos" }, { symbol: "Eu", group: "lantanidos" },
{ symbol: "Gd", group: "lantanidos" }, { symbol: "Tb", group: "lantanidos" }, { symbol: "Dy", group: "lantanidos" }, { symbol: "Ho", group: "lantanidos" }, { symbol: "Er", group: "lantanidos" },
{ symbol: "Tm", group: "lantanidos" }, { symbol: "Yb", group: "lantanidos" }, { symbol: "Lu", group: "lantanidos" }, { symbol: "Ac", group: "actinidos" }, { symbol: "Th", group: "actinidos" },
{ symbol: "Pa", group: "actinidos" }, { symbol: "U", group: "actinidos" }, { symbol: "Np", group: "actinidos" },{ symbol: "Pu", group: "actinidos" }, { symbol: "Am", group: "actinidos" }, { symbol: "Cm", group: "actinidos" },
{ symbol: "Bk", group: "actinidos" }, { symbol: "Cf", group: "actinidos" }, { symbol: "Es", group: "actinidos" }, { symbol: "Fm", group: "actinidos" }, { symbol: "Md", group: "actinidos" },
{ symbol: "No", group: "actinidos" }, { symbol: "Lr", group: "actinidos" }];

router.get("/", (req, res, next) => {

    res.status(200);
    res.render("home", {
        layout: false,
        tablePeriodic: tablePeriodic,
        array16: array16,
        array10: array10,
        array3: array3
    });
})

module.exports = router;