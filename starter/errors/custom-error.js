class CustomAPIERROR extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIERROR(msg, statusCode);
}

module.exports = { createCustomError, CustomAPIERROR };