//function for success
function OK(response, statusCode, data, message) {
    response.status(statusCode).json({ isError: false, data, message })
}

//function for error
function ERR(response, statusCode, message) {
    response.status(statusCode).json({ isError: true, message })
}

module.exports = { OK, ERR }