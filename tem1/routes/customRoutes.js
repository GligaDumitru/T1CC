const express = require('express');
const router = express.Router();
const path = require('path');
const endpoints = require('../endpoints');
const async = require('express-async-await');
const fetch = require('node-fetch');
const Utils = require('../utils');
let logger = require('perfect-logger');
const lineReader = require('line-reader');
// const fs = require('fs')
const getData = async (url, options = null) => {
    logger.info(`Try to fetch:${url}`);
    try {
        let d1 = new Date();

        const response = options !== null ? await fetch(url, options) : await fetch(url);
        let d2 = new Date() - d1;
        logger.info(`Fetch successfully with status :${response.status}, statusText:${response.statusText} wit time:${d2}`);
        const json = await response.json();
        return json;
    } catch (error) {
        logger.info(`[ERROR] with status :${error}`);
        return error;
    }
}
router.get('/matrix', (req, res) => {
    let resList = [];
    require('fs').readFileSync(path.join(__dirname, '../logs/FrontEndDriver.log'), 'utf-8').split(/\r?\n/).forEach(function (line) {
        resList.push(line);
    });
    res.send({ resList });

})
router.get('/ex1', async (req, res) => {

    const optionsForApi1 = {
        headers: {
            'x-rapidapi-host': endpoints.hostForAPI1,
            'x-rapidapi-key': endpoints.keyForAPI1
        }
    }
    const API1 = await getData(endpoints.API1, optionsForApi1);
    const API2 = await getData(endpoints.API2);

    const sizeOfObj = API1.data.length;

    // get random number
    const randomNumber = Utils.randomNumber(sizeOfObj);

    let user = API1.data[randomNumber];
    let valueAnswer = API2.value;
    let loginNameSize = user.name.length;
    let arrOfWords = valueAnswer.split(" ");
    let sizeArrOfWord2s = arrOfWords.length;
    while (loginNameSize > sizeArrOfWord2s) {
        loginNameSize /= 2;
    }
    let wordFromArrOfWords;
    let str = arrOfWords[loginNameSize];
    if (str.length > 3)
        str = str.substr(0, 2);
    wordFromArrOfWords = str;

    const API3 = await getData(`${endpoints.API3}/${wordFromArrOfWords}`);
    const sizeOfObj2 = Object.keys(API3).length;
    const randomNumberForAPI3 = Utils.randomNumber(sizeOfObj2);
    let country = API3[randomNumberForAPI3];
    console.log('Processing data: For word:', wordFromArrOfWords, ' the 3th API with random number:', randomNumberForAPI3, ' is showing the country:', country.name)
    res.render('ex1', { title: country.name, capital: country.capital, flag: country.flag });

})

module.exports = router;