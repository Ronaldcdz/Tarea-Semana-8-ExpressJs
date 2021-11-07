
const express = require("express");
const path = require("path");

const app = express();
const expressHbs = require("express-handlebars");

const homeRouter = require("./routes/home");


const table = require("./helpers/hbs/home/table");

app.engine("hbs", expressHbs({
    helpers: {
        compare: table.Compare,
        espaciosGeneratorH: table.EspaciosGeneratorH,
        espaciosGeneratorBeandMg: table.EspaciosGeneratorBeandMg,
        espaciosGeneratorOg: table.EspaciosGeneratorOg,
        espaciosGeneratorLu: table.EspaciosGeneratorLu,
        verifyArrayLength: table.VerifyArrayLength,
        agregarElementosFaltantes: table.AgregarElementosFaltantes,
        buscarElementosFaltantes: table.BuscarElementosFaltantes,
        reset: table.Reset
    }
})
);



app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);

app.use("/", (req, res, next) => {

    res.status(404).render("404", { layout: false });

});

app.listen(8080);