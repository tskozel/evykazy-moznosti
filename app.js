const express = require("express");
const moment = require('moment-timezone');

const hostname = "localhost";
const port = 8080;


const app = express();

app.listen(port, () => {
    const d = new Date();
    const d_format = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    const zone = moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('Z')
    console.log(`GMT${zone} is timezone`);
    console.log(`${d_format} Server running on http://${hostname}:${port}/`);
});

app.get("/", (req, resp) => {
  resp.sendFile(__dirname + "/index.html");
});

app.get("/js", (req, resp) => {
  resp.sendFile(__dirname + "/js_test.html");
});

app.get("/test", (req, resp) => {
  resp.sendFile(__dirname + "/test.html");
});
