import sqlError from "../helpers/sql-error.js";

/**
 * Controller for the `/list` endpoint.
 * @param req Request object
 * @param res Response object
 * @module create
 */
export default (req, res) => {
    req.app.get("dbcon").query(
        `
        SELECT * FROM Questions
    `,
        sqlError(res, (rows) => {
            res.status(200).json({
                message: "Questions fetched successfully",
                data: rows,
            });
        })
    );
};
