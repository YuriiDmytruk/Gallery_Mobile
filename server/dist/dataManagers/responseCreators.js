"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create500Response = exports.create404Response = exports.create403Response = exports.create200Response = void 0;
const create200Response = (value) => {
    return {
        statusCode: 200,
        value: value,
        errorMessage: '',
    };
};
exports.create200Response = create200Response;
const create403Response = () => {
    return {
        statusCode: 403,
        value: null,
        errorMessage: 'Wrong password',
    };
};
exports.create403Response = create403Response;
const create404Response = (errorMessage) => {
    return {
        statusCode: 404,
        value: null,
        errorMessage: errorMessage,
    };
};
exports.create404Response = create404Response;
const create500Response = () => {
    return {
        statusCode: 500,
        value: null,
        errorMessage: 'An unexpected error occurred.',
    };
};
exports.create500Response = create500Response;
