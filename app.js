const fetch = require('cross-fetch');
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { static } = require("express");
const locutus = require('locutus/php/strings/number_format');



app.use(bodyParser.urlencoded({ extended: true }));

app.use(static("public"));

app.set('view engine', 'ejs');


app.get("/", function(request, response) {

    (async() => {
        try {
            const res = await fetch('https://api.wazirx.com/api/v2/tickers');
            data = await res.json();

            function formatMoney(amount, decimalCount = 0, thousands = ",") {
                try {
                    const negativeSign = amount < 0 ? "-" : "";

                    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                    let j = (i.length > 3) ? i.length % 3 : 0;

                    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
                } catch (e) {
                    console.log(e)
                }
            };
            response.render("index", {

                // btcinr
                ni: data.btcinr.name,
                li: formatMoney(data.btcinr.last),
                bp: formatMoney(data.btcinr.buy),
                sp: formatMoney(data.btcinr.sell),
                vi: data.btcinr.volume,
                bi: data.btcinr.base_unit,

                // xrpinr
                ni1: data.xrpinr.name,
                li1: formatMoney(data.xrpinr.last),
                bp1: formatMoney(data.xrpinr.buy),
                sp1: formatMoney(data.xrpinr.sell),
                vi1: data.xrpinr.volume,
                bi1: data.xrpinr.base_unit,

                // ethinr
                ni2: data.ethinr.name,
                li2: formatMoney(data.ethinr.last),
                bp2: formatMoney(data.ethinr.buy),
                sp2: formatMoney(data.ethinr.sell),
                vi2: data.ethinr.volume,
                bi2: data.ethinr.base_unit,

                // trxinr

                ni3: data.trxinr.name,
                li3: formatMoney(data.trxinr.last),
                bp3: formatMoney(data.trxinr.buy),
                sp3: formatMoney(data.trxinr.sell),
                vi3: data.trxinr.volume,
                bi3: data.trxinr.base_unit,

                // eosinr

                ni4: data.eosinr.name,
                li4: formatMoney(data.eosinr.last),
                bp4: formatMoney(data.eosinr.buy),
                sp4: formatMoney(data.eosinr.sell),
                vi4: data.eosinr.volume,
                bi4: data.eosinr.base_unit,

                // zilinr

                ni5: data.zilinr.name,
                li5: formatMoney(data.zilinr.last),
                bp5: formatMoney(data.zilinr.buy),
                sp5: formatMoney(data.zilinr.sell),
                vi5: data.zilinr.volume,
                bi5: data.zilinr.base_unit,

                // batinr

                ni6: data.batinr.name,
                li6: formatMoney(data.batinr.last),
                bp6: formatMoney(data.batinr.buy),
                sp6: formatMoney(data.batinr.sell),
                vi6: data.batinr.volume,
                bi6: data.batinr.base_unit,

                // usdtinr

                ni7: data.usdtinr.name,
                li7: formatMoney(data.usdtinr.last),
                bp7: formatMoney(data.usdtinr.buy),
                sp7: formatMoney(data.usdtinr.sell),
                vi7: data.usdtinr.volume,
                bi7: data.usdtinr.base_unit,

                // wrxinr

                ni8: data.wrxinr.name,
                li8: formatMoney(data.wrxinr.last),
                bp8: formatMoney(data.wrxinr.buy),
                sp8: formatMoney(data.wrxinr.sell),
                vi8: data.usdtinr.volume,
                bi8: data.wrxinr.base_unit,

                // maticinr
                ni9: data.maticinr.name,
                li9: formatMoney(data.maticinr.last),
                bp9: formatMoney(data.maticinr.buy),
                sp9: formatMoney(data.maticinr.sell),
                vi9: data.maticinr.volume,
                bi9: data.maticinr.base_unit,
            })
        } catch (error) {
            console.log(error);
        }
    })()
})



app.listen("3001", function(request, response) {
    console.log("The server has been started at port 3001");
})