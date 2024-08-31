import { validationResult } from "express-validator";

/**
 * Middleware for 
 * @param req Request body
 * @param res Response object
 * @param next next() function for succeeding middleware
 * @module validate
 */
export default (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty())
        res.status(400).json({
            message: "Invalid request body",
            errors: errors
        });
    else
        next();
};