"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const handleError = (error) => {
    if (error instanceof mongoose_1.Error) {
        return {
            statusCode: 404,
            value: null,
            errorMessage: error.message,
        };
    }
    else {
        return {
            statusCode: 500,
            value: null,
            errorMessage: 'An unexpected error occurred.',
        };
    }
};
exports.default = handleError;
