import express from 'express';
import AuthException from '../exception/auth_exception';

export const interceptor = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (request.headers['password'] == 'got it') {
        next();
    } else {
        next(new AuthException());
    }
};