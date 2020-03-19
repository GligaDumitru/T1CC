module.exports.returnError = (res, errorMessage = '[Error] Something went wrong.Please try again later.', errorCode = 404) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = errorCode;
    responseObj = { status: 'Failed', message: errorMessage }
    res.end(JSON.stringify(responseObj, null, 3))
}

module.exports.returnSuccess = (res, data = null, successCode = 200) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = successCode;
    responseObj = { status: 'Success', data }
    res.end(JSON.stringify(responseObj, null, 3))
}

module.exports.returnStringFromReadableStream = req => {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            req.on('data', buff => {
                body += buff.toString();
            });

            req.on('end', () => {
                resolve(body)
            })

        } catch (error) {
            reject(error)
        }
    })
}