const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const terminalLink = require('terminal-link');
const PORT = process.env.PORT || 5000;
const customRouting = require('./routes/customRoutes');
const linkToOpen = terminalLink(`http://localhost:${PORT}/`, '');
const app = express();
const logger = require('perfect-logger');
// (async () => {
//     await open(`http://localhost:${PORT}/`)
// })();
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const logRequestStart = (req, res, next) => {
    logger.info(`[${req.method}] ON :${req.originalUrl}`);
    next()
}

logger.initialize('FrontEndDriver', {
    logLevelFile: 0,                    // Log level for file
    logLevelConsole: 0,                 // Log level for STDOUT/STDERR
    logDirectory: 'logs/',              // Log directory
    customBannerHeaders: 'Logging Stuff'  // Custom Log Banner
});

app.get('/', function (req, res) {
    res.render('index', { title: 'The Best of the best' });
});


app.use(logRequestStart)
app.use(customRouting);

app.listen(PORT, () => console.log(`Server is running on :${linkToOpen}`));