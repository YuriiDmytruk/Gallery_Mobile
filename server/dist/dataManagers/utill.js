"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const responseCreators_1 = require("./responseCreators");
const handleError = (error) => {
    if (error instanceof mongoose_1.Error) {
        return (0, responseCreators_1.create404Response)(error.message);
    }
    else {
        return (0, responseCreators_1.create500Response)();
    }
};
exports.default = handleError;
