import { NextFunction, Request, Response } from 'express';
import httpResponse from '../util/httpResponse';
import responseMessage from '../constant/responseMessage';
import httpError from '../util/httpError';
import quicker from '../util/quicker';

export default {
    self: (req: Request, res: Response, next: NextFunction) => {
        try {
            // throw new Error('This is error');
            httpResponse(req, res, 200, responseMessage.SUCCESS)
        } catch (error) {
            httpError(next, error, req, 500)
        }    
    },

    health: (req: Request, res: Response, next: NextFunction) => {
        try {
            // throw new Error('This is error');  // If i want to throw error from catch then i can use throw

            const healthData = {
                application: quicker.getApplicationHealth(),
                system: quicker.getSystemHealth(),
                timestamp: Date.now()
            }

            httpResponse(req, res, 200, responseMessage.SUCCESS, healthData)
        } catch (error) {
            httpError(next, error, req, 500)
        }    
    }
}