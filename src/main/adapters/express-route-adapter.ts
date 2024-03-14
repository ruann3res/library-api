import { Controller } from '@/application/controllers/http';

const statusCodesMap = {
    'ok': 200,
    'unknown': 500,
    'invalid-argument': 400,
    'not-found': 404,
    'already-exists': 409,
    'aborted': 400,
    'out-of-range': 400,
    'internal': 500,
    'unavailable': 503
};

export const adaptRoute = (controller: Controller) => {
    return async (req, res) => {
        const httpRequestBody = req.body;
        const httpRequestQuery = req.query;
        const httpResponse = await controller.handle(httpRequestBody,httpRequestQuery);
        const statusCode = statusCodesMap[httpResponse.statusCode];
        res.status(statusCode).json(httpResponse.statusCode === 'ok' ? httpResponse.result : { error: httpResponse.result.message, code: httpResponse.statusCode });
    };
};