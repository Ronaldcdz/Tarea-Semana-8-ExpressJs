
let tablaPeriodica = ["H", "He",
    "Li", "Be", "B", "C", "N", "O", "F", "Ne",
    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
    "Cs", "Ba", "La-Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
    "Fr", "Ra", "Ac-Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og",
    "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
    "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"];

let arrayElementosFaltantes = [];
let arrayElementosFaltantesEncontrados = [];
let arrayElementosFaltantesGrupoNum = [];



const Compare = (symbol) => {

    for (let i = 0; i < tablaPeriodica.length; i++) {

        if (tablaPeriodica[i] == symbol) {

            return true;
        }
    }
};

const EspaciosGeneratorH = (elemento) => {

    if (tablaPeriodica[tablaPeriodica.indexOf("H")] == elemento) {

        return true;
    }

};

const EspaciosGeneratorBeandMg = (elemento) => {

    if (tablaPeriodica[tablaPeriodica.indexOf("Be")] == elemento || tablaPeriodica[tablaPeriodica.indexOf("Mg")] == elemento) {

        return true;
    }

};

const EspaciosGeneratorOg = (elemento) => {

    if (tablaPeriodica[tablaPeriodica.indexOf("Og")] == elemento) {

        return true;
    }

};

const EspaciosGeneratorLu = (elemento) => {

    if (tablaPeriodica[tablaPeriodica.indexOf("Lu")] == elemento) {


        return true;
    }

};

const VerifyArrayLength = (array) => {


    if (tablaPeriodica.length == array.length) {

        return true;
    }

    else {
        return false;
    }
};




const AgregarElementosFaltantes = (array) => {



    arrayElementosFaltantes.push(array);


};





const BuscarElementosFaltantes = (array) => {



    arrayElementosFaltantesEncontrados = tablaPeriodica.filter(elemento => arrayElementosFaltantes.indexOf(elemento) == -1);


    for (let i = 0; i < arrayElementosFaltantesEncontrados.length; i++) {

        tablePeriodicNull.push({ symbol: arrayElementosFaltantesEncontrados[i], group: "elemento-nulo", num: EncontrarNumeroElemento(arrayElementosFaltantesEncontrados[i]) });
    }

    OrdenarArray(array);

    console.log(tablePeriodicNull);

}



const OrdenarArray = (array) => {



    for (let i = 0; i < arrayElementosFaltantes.length; i++) {

        arrayElementosFaltantesGrupoNum.push({ symbol: arrayElementosFaltantes[i], group: EncontrarGrupoElemento(array, arrayElementosFaltantes[i]), num: EncontrarNumeroElemento(arrayElementosFaltantes[i]) });
    }

    tablePeriodicNull = tablePeriodicNull.concat(arrayElementosFaltantesGrupoNum);


    ttablePeriodicNull = tablePeriodicNull.sort((a, b) => {
        return a.num - b.num;
    });


};

function EncontrarNumeroElemento(elemento) {

    return tablaPeriodica.indexOf(elemento) + 1
}

function EncontrarGrupoElemento(array, elemento) {

    for (let i = 0; i < array.length; i++) {

        if (array[i].symbol == elemento) {

            return array[i].group;
        }
    }
}

const Reset = () => {

    tablePeriodicNull = [];
    arrayElementosFaltantes = [];
    arrayElementosFaltantesEncontrados = [];
    arrayElementosFaltantesGrupoNum = [];
};


exports.Compare = Compare;
exports.EspaciosGeneratorH = EspaciosGeneratorH;
exports.EspaciosGeneratorBeandMg = EspaciosGeneratorBeandMg;
exports.EspaciosGeneratorOg = EspaciosGeneratorOg;
exports.EspaciosGeneratorLu = EspaciosGeneratorLu;
exports.VerifyArrayLength = VerifyArrayLength;
exports.AgregarElementosFaltantes = AgregarElementosFaltantes;
exports.BuscarElementosFaltantes = BuscarElementosFaltantes;
exports.Reset = Reset;